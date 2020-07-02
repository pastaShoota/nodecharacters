const { merge } = require('lodash');
const environment = require('../../../environment/environment');
const prod = require('../../../environment/environment.prod');

const config = merge({}, environment, process.env.ENVIRONMENT === 'prod' && prod);

module.exports = {
  getConfig: () => config
}
