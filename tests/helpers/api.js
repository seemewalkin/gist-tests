const request = require('supertest');
const config = require('../config/config');

const createGist = async (description, files, isPublic = true) => {
  return await request(config.baseUrl)
    .post('/gists')
    .set('Authorization', `token ${config.token}`)
    .set('User-Agent', config.userAgent)
    .send({
      description,
      public: isPublic,
      files
    });
};

const getGist = async (gistId) => {
  return await request(config.baseUrl)
    .get(`/gists/${gistId}`)
    .set('Authorization', `token ${config.token}`)
    .set('User-Agent', config.userAgent);
};

const listGists = async () => {
  return await request(config.baseUrl)
    .get('/gists')
    .set('Authorization', `token ${config.token}`)
    .set('User-Agent', config.userAgent);
};

const deleteGist = async (gistId) => {
  return await request(config.baseUrl)
    .delete(`/gists/${gistId}`)
    .set('Authorization', `token ${config.token}`)
    .set('User-Agent', config.userAgent);
};

const updateGist = async (gistId, description, files) => {
  const data = {};
  if (description !== null) data.description = description;
  if (files !== null) data.files = files;
  
  return await request(config.baseUrl)
    .patch(`/gists/${gistId}`)
    .set('Authorization', `token ${config.token}`)
    .set('User-Agent', config.userAgent)
    .send(data);
};

module.exports = {
  createGist,
  getGist,
  listGists,
  deleteGist,
  updateGist
};
