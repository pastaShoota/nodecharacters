
const axios = require('axios');
const {AppError, AppErrorType} = require('../common/error/app-error');
const repoUtil = require('../common/repository.util');

const REPO_URL = repoUtil.url+'/characters';

const find = () => Promise.all(range(10)
    .map(index => REPO_URL + '?page=' + index)
    .map(pageUrl => axios.get(pageUrl)))
    .then(responses => responses
        .map(response => response.data)
        .reduce((acc, characters) => acc.concat(characters), [])
    );

const get = id => find()
    .then(characters => {
        return characters.find(character => character.id === id);
    })
    .then(character => {
        return character || Promise.reject(new AppError(AppErrorType.RESOURCE_NOT_FOUND));
    });

const post = characterJson => {
    return axios.post(REPO_URL, characterJson)
        .then(response => response.data);
}

const del = id => get(id).then(
    character => axios.delete(REPO_URL+'/'+id)
);

const put = characterJson => {
    return axios.put(REPO_URL + '/' + characterJson.id, characterJson)
        .then(response => response.data);
}

const range = (length) =>
    Array.from({length}, (_, i) => i);


module.exports = {
    find: find,
    get: get,
    post: post,
    del: del,
    put: put
}