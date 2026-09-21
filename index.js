const { join } = require('path');

const APP_PACKAGE = 'app.v1';
const APP_SERVICE_NAME = 'AppService';
const APP_PROTO_PATH = join(__dirname, 'proto/app/v1/app.proto');

const USER_PACKAGE = 'user.v1';
const USER_SERVICE_NAME = 'UserService';
const USER_PROTO_PATH = join(__dirname, 'proto/user/v1/user.proto');

const AUTH_PACKAGE = 'auth.v1';
const AUTH_SERVICE_NAME = 'AuthService';
const AUTH_PROTO_PATH = join(__dirname, 'proto/auth/v1/auth.proto');

module.exports = {
  APP_PACKAGE,
  APP_PROTO_PATH,
  APP_SERVICE_NAME,
  USER_PACKAGE,
  USER_PROTO_PATH,
  USER_SERVICE_NAME,
  AUTH_PACKAGE,
  AUTH_PROTO_PATH,
  AUTH_SERVICE_NAME,
};
