const appError = require('../common/error/app-error');
const repositoryUtil = require('../common/repository.util');
const resourceBaseUrl = repositoryUtil.url + '/characters';

const axios = require('axios').default;

const find = () => axios.get(resourceBaseUrl + '?size=100')
  .then(response => response.data);

const get = id => axios.get(resourceBaseUrl + '/' + id)
  .then(response => response.data)
  .catch(error => Promise.reject(new appError.AppError(appError.AppErrorType.RESOURCE_NOT_FOUND, error)));

const create = entity => {
  return axios.post(resourceBaseUrl, entity)
    .then(response => {
      return response.data;
    })
    .catch(() => Promise.reject(new appError.AppError(appError.AppErrorType.REMOTE_SERVER_ERROR)));
}

const update = entity => axios.put(resourceBaseUrl + '/' + entity.id, entity)
  .then(response => response.data)
  .catch(error => {
    const errorCode = error && error.response && error.response.data && error.response.data.code;
    switch (errorCode) {
      case repositoryUtil.errorCodes.RESOURCE_NOT_FOUND:
        return Promise.reject(new appError.AppError(appError.AppErrorType.RESOURCE_NOT_FOUND));
      default:
        return Promise.reject(new appError.AppError(appError.AppErrorType.REMOTE_SERVER_ERROR));
    }
  });

const remove = id => axios.delete(resourceBaseUrl + '/' + id)
  .catch(error => Promise.reject(new appError.AppError(appError.AppErrorType.RESOURCE_NOT_FOUND, error)));

module.exports = {
  find: find,
  get: get,
  create: create,
  update: update,
  remove: remove
};
