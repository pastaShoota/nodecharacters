const { default: axios } = require('axios');
const { AppError, AppErrorType } = require('../common/error/app-error');
const { url, errorCodes } = require('../common/repository.util');
const { getConfig } = require('../common/config/config.service');

const resourceBaseUrl = url + '/characters';

const find = () => axios.get(`${resourceBaseUrl}?size=${getConfig().repository.defaultSize || 100}`)
  .then(response => response.data);

const get = id => axios.get(resourceBaseUrl + '/' + id)
  .then(response => response.data)
  .catch(error => Promise.reject(new AppError(AppErrorType.RESOURCE_NOT_FOUND, error)));

const create = entity => {
  return axios.post(resourceBaseUrl, entity)
    .then(response => {
      return response.data;
    })
    .catch(() => Promise.reject(new AppError(AppErrorType.REMOTE_SERVER_ERROR)));
}

const update = entity => axios.put(resourceBaseUrl + '/' + entity.id, entity)
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

const remove = id => axios.delete(resourceBaseUrl + '/' + id)
  .catch(error => Promise.reject(new AppError(AppErrorType.RESOURCE_NOT_FOUND, error)));

module.exports = {
  find,
  get,
  create,
  update,
  remove
};
