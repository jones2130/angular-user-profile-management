process.env.NODE_ENV = 'test';

const CONFIG = require('../Config');
const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');

let server = require('../app');

chai.use(chaiHttp);

describe('Allow Authorized User Limited Access', () => {
  let user;
  let User = mongoose.model('user');
  let serverAgent = chai.request(server);
  let loggedInUser;

  before((done) => {
    mongoose.connect(CONFIG.db_url)
      .then(() => {
        chai.request(server)
        .post('/users/register')
        .set('Content-type', 'application/json')
        .send({username: 'testman2132018', password: 'test1234', first_name: 'Test', last_name: 'Man', gender: 'male', age: 35})
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.equal(200);
          res.body.message.should.include('testman2132018', 'registered successfully');
          done();
        });
      })
      .catch((err) => console.error(err));
  });

  it('should allow the user to access their profile', (done) => {
    let agent = chai.request.agent(server);
    agent
      .post('/users/login')
      .set('Content-type', 'application/json')
      .send({username: 'testman2132018', password: 'test1234'})
      .then((res) => {
        loggedInUser = {
          _id: res.body._id,
          username: res.body._id,
          isSuper: res.body._id,
        };

        return agent.get(`/users/${loggedInUser._id}`)
          .then((res) => {
            res.status.should.equal(200);
            res.body.first_name.should.equal('Test');
            res.body.last_name.should.equal('Man');
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
      .send({username: 'testman2132018', password: 'test1234'})
      .then((res) => {
        loggedInUser = {
          _id: res.body._id,
          username: res.body._id,
          isSuper: res.body._id,
        };

        let update_data = {
          first_name: 'Tess',
          last_name: 'Woman',
          gender: 'female',
          age: 25,
        };

        return agent.post(`/users/update/${loggedInUser._id}`)
          .set('Content-type', 'application/json')
          .send(update_data)
          .then((res) => {
            res.status.should.equal(200);

            return agent.get(`/users/${loggedInUser._id}`)
              .then((res) => {
                res.status.should.equal(200);
                res.body.first_name.should.equal('Tess');
                res.body.last_name.should.equal('Woman');
                res.body.gender.should.equal('female');
                res.body.age.should.equal(25);
                done();
              });
          });
      });
  });

  it('should not allow the user to update another user\'s profile', (done) => {
    let agent = chai.request.agent(server);
    agent
      .post('/users/login')
      .set('Content-type', 'application/json')
      .send({username: 'testman2132018', password: 'test1234'})
      .then((res) => {
        loggedInUser = {
          _id: res.body._id,
          username: res.body._id,
          isSuper: res.body._id,
        };

        let update_data = {
          first_name: 'Tess',
          last_name: 'Woman',
          gender: 'female',
          age: 25,
        };

        return agent.post(`/users/update/test1243`)
          .set('Content-type', 'application/json')
          .send(update_data)
          .then((res) => {
            done();
          }).catch((err) =>{
            err.status.should.equal(401);
            err.response.body.message.should.include('Unauthorized');
            done();
          });
      });
  });

  it('should not allow the user to delete another user\'s profile', (done) => {
    let agent = chai.request.agent(server);
    agent
      .post('/users/login')
      .set('Content-type', 'application/json')
      .send({username: 'testman2132018', password: 'test1234'})
      .then((res) => {
        return agent.post(`/users/delete/test1243`)
          .then((res) => {
            done();
          }).catch((err) =>{
            err.status.should.equal(401);
            err.response.body.message.should.include('Unauthorized');
            done();
          });
      });
  });

  it('should not allow the user to access user lists', (done) => {
    let agent = chai.request.agent(server);
    agent
      .post('/users/login')
      .set('Content-type', 'application/json')
      .send({username: 'testman2132018', password: 'test1234'})
      .then((res) => {
        return agent.get(`/users/list`)
          .then((res) => {
            done();
          }).catch((err) =>{
            err.status.should.equal(401);
            err.response.body.message.should.include('Unauthorized');
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
    User.remove({username: 'testman2132018'}, () => {
      console.log('user removed successfully');
      mongoose.connection.close(() => {
        console.log('mongoose connection closed')
        done();
      });
    });
  });
});
