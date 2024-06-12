const request = require('supertest');
const config = require('../config/config');

const createGist = (description, files, isPublic = true) => {
  return request(config.baseUrl)
    .post('/gists')
    .set('Authorization', `token ${config.token}`)
    .set('User-Agent', config.userAgent)
    .send({
      description,
      public: isPublic,
      files
    });
};

const getGist = (gistId) => {
  return request(config.baseUrl)
    .get(`/gists/${gistId}`)
    .set('Authorization', `token ${config.token}`)
    .set('User-Agent', config.userAgent);
};

const listGists = () => {
  return request(config.baseUrl)
    .get('/gists')
    .set('Authorization', `token ${config.token}`)
    .set('User-Agent', config.userAgent);
};

const deleteGist = (gistId) => {
  return request(config.baseUrl)
    .delete(`/gists/${gistId}`)
    .set('Authorization', `token ${config.token}`)
    .set('User-Agent', config.userAgent);
};

module.exports = {
  createGist,
  getGist,
  listGists,
  deleteGist
};
