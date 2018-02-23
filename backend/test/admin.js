process.env.NODE_ENV = 'test';

const CONFIG = require('../Config');
const chai = require('chai');
const expect = require('chai').expect;
const should = chai.should();
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');

let server = require('../app');

chai.use(chaiHttp);

describe('Allow Admin User Unlimited Access', () => {
  let user;
  let User = mongoose.model('user');
  let serverAgent = chai.request(server);
  let loggedInUser;

  let superuser;
  let regularuser;
  let doomeduser;

  before((done) => {
    mongoose.connect(CONFIG.db_url)
      .then(() => {
        User.register(new User({username: 'superman2132018', first_name: 'Clark', last_name: 'Kent', gender: 'male', age: 35, isSuper: true}), 'super1234', (error, user) => {
          if(error){
            console.error(error.message);
          } else {
            superuser = user;
            console.log(`User ${user.username} registered successfully`);
            User.register(new User({username: 'test2132018', first_name: 'Test', last_name: 'Man', gender: 'male', age: 36, isSuper: false}), 'test1234', (error, user) => {
              regularuser = user;
              if(error){
                console.error(error.message);
              } else {
                console.log(`User ${user.username} registered successfully`);
                User.register(new User({username: 'drdoomed', first_name: 'Dr', last_name: 'Doomed', gender: 'male', age: 37, isSuper: false}), 'doesntmatter', (error, user) => {
                  doomeduser = user;
                  if(error){
                    console.error(error.message);
                  } else {
                    console.log(`User ${user.username} registered successfully`);
                  }
                  done();
                });
              }
            });
          };
        });
      })
      .catch((err) => console.error(err));
  });



  it('should allow the user to access their profile', (done) => {
    let agent = chai.request.agent(server);
    agent
      .post('/users/login')
      .set('Content-type', 'application/json')
      .send({username: 'superman2132018', password: 'super1234'})
      .then((res) => {
        loggedInUser = {
          _id: res.body._id,
          username: res.body._id,
          isSuper: res.body._id,
        };

        return agent.get(`/users/${loggedInUser._id}`)
          .then((res) => {
            res.status.should.equal(200);
            res.body.first_name.should.equal('Clark');
            res.body.last_name.should.equal('Kent');
            res.body.gender.should.equal('male');
            res.body.age.should.equal(35);
            done();
          });
      });
  });

  it('should allow the user to update their profile', (done) => {
    let agent = chai.request.agent(server);
    agent
      .post('/users/login')
      .set('Content-type', 'application/json')
      .send({username: 'superman2132018', password: 'super1234'})
      .then((res) => {
        let update_data = {
          first_name: 'Kara',
          last_name: 'Danvers',
          gender: 'female',
          age: 25,
        };

        return agent.post(`/users/update/${superuser._id}`)
          .set('Content-type', 'application/json')
          .send(update_data)
          .then((res) => {
            res.status.should.equal(200);

            return agent.get(`/users/${superuser._id}`)
              .then((res) => {
                res.status.should.equal(200);
                res.body.first_name.should.equal('Kara');
                res.body.last_name.should.equal('Danvers');
                res.body.gender.should.equal('female');
                res.body.age.should.equal(25);
                done();
              });
          });
      });
  });

  it('should allow the user to update another user\'s profile', (done) => {
    let agent = chai.request.agent(server);
    agent
      .post('/users/login')
      .set('Content-type', 'application/json')
      .send({username: 'superman2132018', password: 'super1234'})
      .then((res) => {
        res.status.should.equal(200);
        let update_data = {
          first_name: 'Tess',
          last_name: 'Woman',
          gender: 'female',
          age: 25,
        };

        return agent.post(`/users/update/${regularuser._id}`)
          .set('Content-type', 'application/json')
          .send(update_data)
          .then((res) => {
            res.status.should.equal(200);
            done();
          });
      });
  });

  it('should allow the user to delete another user\'s profile', (done) => {
    let agent = chai.request.agent(server);
    agent
      .post('/users/login')
      .set('Content-type', 'application/json')
      .send({username: 'superman2132018', password: 'super1234'})
      .then((res) => {
        return agent.post(`/users/delete/${doomeduser._id}`)
          .then((res) => {
            res.status.should.equal(200);
            res.body.message.should.equal('User removed successfully');
            done();
          });
      });
  });

  it('should allow the user to access user lists', (done) => {
    let agent = chai.request.agent(server);
    agent
      .post('/users/login')
      .set('Content-type', 'application/json')
      .send({username: 'superman2132018', password: 'super1234'})
      .then((res) => {
        return agent.get(`/users/list`)
          .then((res) => {
            res.status.should.equal(200);
            res.body.length.should.be.above(0);
            done();
          });
      });
  });

  it('should allow the user to logout', (done) => {
    chai.request(server)
      .post('/users/logout')
      .end((err, res) => {
        console.log('res')
        should.not.exist(err);
        res.status.should.equal(200);
        done();
      });
  });

  after((done) => {
    User.remove({username: regularuser.username}, () => {
      console.log('user removed successfully');
      User.remove({username: superuser.username}, () => {
        console.log('super user removed successfully');
        mongoose.connection.close(() => {
          console.log('mongoose connection closed')
          done();
        });
      });
    });
  });
});
