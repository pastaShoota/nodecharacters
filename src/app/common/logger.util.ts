import { createLogger, format, transports } from 'winston';
import { logger as winstonLogger } from 'express-winston';

import { getConfig } from './config/config.service';

export const logger = createLogger({
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

export const expressLogger = winstonLogger({
  winstonInstance: logger,
  msg: 'HTTP {{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}'
});
