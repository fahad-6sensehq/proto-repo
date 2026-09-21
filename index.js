const { join } = require('path');

const APP_PACKAGE = 'app.v1';
const APP_SERVICE_NAME = 'AppService';
const APP_PROTO_PATH = join(__dirname, 'proto/app/v1/app.proto');

module.exports = {
  APP_PACKAGE,
  APP_PROTO_PATH,
  APP_SERVICE_NAME,
};
