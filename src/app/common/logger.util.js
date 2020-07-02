const { createLogger, format, transports } = require('winston');

const configService = require('./config/config.service');

const logger = createLogger({
  level: configService.getConfig().logger.level,
  format: format.combine(
    format.colorize(),
    format.timestamp(),
    format.simple()
  ),
  transports: [
    new transports.Console()
  ]
});

module.exports = {
  logger
};
