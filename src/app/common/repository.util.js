const configService = require('./config/config.service') ;

exports.url = configService.getConfig().repository.url;

exports.errorCodes = {
  DTO_INVALID_FORMAT: 'DTO_INVALID_FORMAT',
  RESOURCE_NOT_FOUND: 'RESOURCE_NOT_FOUND'
}
