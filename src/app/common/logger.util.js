const { createLogger, format, transports } = require('winston');
const { logger: winstonLogger } = require('express-winston');

const { getConfig } = require('./config/config.service');

const logger = createLogger({
  level: getConfig().logger.level,
  format: format.combine(
    format.colorize(),
    format.timestamp(),
    format.simple()
  ),
  transports: [
    new transports.Console()
  ]
});

const expressLogger = winstonLogger({
  winstonInstance: logger,
  msg: 'HTTP {{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}'
});

module.exports = {
  logger,
  expressLogger
};
