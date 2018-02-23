process.env.NODE_ENV = 'test';

const CONFIG = require('../Config');
const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');

let server = require('../app');

chai.use(chaiHttp);

describe('Test Unauthorized User Access', () => {
  after((done) => {
    done();
  });

  it('should not allow unauthorized user to see user list', (done) => {
    chai.request(server)
    .get('/users/list')
    .end((err, res) => {
      should.exist(err);
      res.status.should.equal(401);
      res.body.message.should.include('Unauthorized');
      done();
    });
  });

  it('should not allow unauthorized user to see user data', (done) => {
    chai.request(server)
    .get('/users/testid1234')
    .end((err, res) => {
      should.exist(err);
      res.status.should.equal(401);
      res.body.message.should.include('Unauthorized');
      done();
    });
  });

  it('should not allow unauthorized user to delete user data', (done) => {
    chai.request(server)
    .post('/users/delete/testid1234')
    .end((err, res) => {
      should.exist(err);
      res.status.should.equal(401);
      res.body.message.should.include('Unauthorized');
      done();
    });
  });

  it('should not allow unauthorized user to update user data', (done) => {
    chai.request(server)
    .post('/users/update/testid1234')
    .end((err, res) => {
      should.exist(err);
      res.status.should.equal(401);
      res.body.message.should.include('Unauthorized');
      done();
    });
  });
});
