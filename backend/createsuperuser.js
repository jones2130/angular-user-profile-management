const CONFIG = require('./config');

let mongoose = require('mongoose');
let User = require('./models/User');
let passport = require('passport');

let isValid = true;

const args = require('minimist')(process.argv.slice(2));

let adminUserData = {
  first_name: args.firstname,
  last_name: args.lastname,
  username: args.username,
  gender: args.gender,
  age: args.age,
  isSuper: true,
};

if(adminUserData.username == null || args.password == null) {
  isValid = false;
}

if(isValid){
  mongoose.connect(CONFIG.db_url)
    .then(() => console.log('connection successful'))
    .catch((err) => console.error(err));

  let user = new User(adminUserData);

  User.register(new User(user), args.password, (error, user) => {
    if(error){
      console.error(error.message);
      process.exit();
    } else {
      console.log(`User ${user.username} registered successfully`);
      mongoose.connection.close();
      process.exit();
    }
  });
} else {
  console.error('To create an administrative user you must pass a value for --username and --password');
  process.exit();
}
