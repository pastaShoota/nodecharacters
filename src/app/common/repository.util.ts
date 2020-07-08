import { getConfig } from './config/config.service';

export const url = getConfig().repository.url;

export const errorCodes = {
  DTO_INVALID_FORMAT: 'DTO_INVALID_FORMAT',
  RESOURCE_NOT_FOUND: 'RESOURCE_NOT_FOUND'
}
