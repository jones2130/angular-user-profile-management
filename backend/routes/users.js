let express = require('express');
let passport = require('passport');
let router = express.Router();
let User = require('../models/User');

router.get('/list', (req, res) => {
  if(req.user == null || req.user.isSuper === false) {
    res.status(401).json({message: 'Unauthorized access'});
  } else {
    User.find({'isSuper': false}, '_id username first_name last_name gender age', (err, users) => {
      res.status(200).json(users);
    });
  }
});

router.get('/:id', (req, res) => {
  if(req.user == null || (req.user._id != req.params.id && req.user.isSuper === false)) {
    res.status(401).json({message: 'Unauthorized access'});
  } else {
    User.findById(req.params.id, '_id first_name last_name gender age', (err, user) => {
      res.status(200).json(user);
    });
  }
});

router.post('/delete/:id', (req, res) => {
  if(req.user == null || req.user._id == req.params.id || req.user.isSuper === false) {
    res.status(401).json({message: 'Unauthorized access'});
  } else {
    User.findById(req.params.id, (err, user) => {
      user.remove((err, user) => {
        res.status(200).json({message: 'User removed successfully'});
      });
    });
  }
});

router.post('/update/:id', (req, res) => {
  if(req.user == null || (req.user._id != req.params.id && req.user.isSuper === false)) {
    res.status(401).json({message: 'Unauthorized access'});
  } else {
    User.findById(req.params.id, (err, user) => {
      let user_data = {
        first_name: req.body.first_name?req.body.first_name:user.first_name,
        last_name: req.body.last_name?req.body.last_name:user.last_name,
        gender: req.body.gender?req.body.gender:user.gender,
        age: req.body.age?req.body.age:user.age,
      }

      user.update(user_data, (err, user) => {
        res.status(200).json({message: 'User updated successfully!'})
      });
    });
  }
});

router.post('/register', (req, res) => {
  let user = {
    username: req.body.username,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    gender: req.body.gender,
    age: req.body.age,
    isSuper: false,
  };

  User.register(new User(user), req.body.password, (error, user) => {
    if(error){
      res.status(500).json({message: error.message});
    } else {
      res.status(200).json({message: `User ${user.username} registered successfully`});
    }
  });
});

router.post('/login', passport.authenticate('local'), (req, res) => {
  if(req.user) {
    res.json({
      _id: req.user._id,
      username: req.user.username,
      isSuper: req.user.isSuper
    });
  } else {
    res.status(401).json({message: 'Unauthorized'});
  }
});

router.post('/logout', (req, res) => {
  req.logout();
  res.status(200).json({message: 'user is logged out'});
});

module.exports = router;
