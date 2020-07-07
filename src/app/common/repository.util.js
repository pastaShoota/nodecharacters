const { getConfig } = require('./config/config.service') ;

exports.url = getConfig().repository.url;

exports.errorCodes = {
  DTO_INVALID_FORMAT: 'DTO_INVALID_FORMAT',
  RESOURCE_NOT_FOUND: 'RESOURCE_NOT_FOUND'
}
