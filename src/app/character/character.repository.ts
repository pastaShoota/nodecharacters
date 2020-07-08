import { default as axios } from 'axios';
import { AppError, AppErrorType } from '../common/error/app-error';
import { url, errorCodes } from '../common/repository.util';
import { getConfig } from '../common/config/config.service';

const resourceBaseUrl = url + '/characters';

export const find = () => axios.get(`${resourceBaseUrl}?size=${getConfig().repository.defaultSize || 100}`)
  .then(response => response.data);

export const get = id => axios.get(resourceBaseUrl + '/' + id)
  .then(response => response.data)
  .catch(error => Promise.reject(new AppError(AppErrorType.RESOURCE_NOT_FOUND, error)));

export const create = entity => axios.post(resourceBaseUrl, entity)
  .then(response => {
    return response.data;
  })
  .catch(() => Promise.reject(new AppError(AppErrorType.REMOTE_SERVER_ERROR)));

export const update = entity => axios.put(resourceBaseUrl + '/' + entity.id, entity)
  .then(response => response.data)
  .catch(error => {
    const errorCode = error && error.response && error.response.data && error.response.data.code;
    switch (errorCode) {
      case errorCodes.RESOURCE_NOT_FOUND:
        return Promise.reject(new AppError(AppErrorType.RESOURCE_NOT_FOUND));
      default:
        return Promise.reject(new AppError(AppErrorType.REMOTE_SERVER_ERROR));
    }
  });

export const remove = id => axios.delete(resourceBaseUrl + '/' + id)
  .catch(error => Promise.reject(new AppError(AppErrorType.RESOURCE_NOT_FOUND, error)));
