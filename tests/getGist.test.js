const { createGist, getGist, listGists, deleteGist } = require('./helpers/api');
const chai = require('chai');
const expect = chai.expect;

describe('Get Gist Tests', () => {
  let publicGistId, secretGistId;

  before(async () => {
    const publicResponse = await createGist("Public Test Gist", { "public.txt": { content: "Hello World" } }, true);
    publicGistId = publicResponse.body.id;

    const secretResponse = await createGist("Secret Test Gist", { "secret.txt": { content: "This is a secret gist" } }, false);
    secretGistId = secretResponse.body.id;
  });

  after(async () => {
    await deleteGist(publicGistId);
    await deleteGist(secretGistId);
  });

  it('should retrieve a public gist by ID', async () => {
    const response = await getGist(publicGistId);
    expect(response.status).to.equal(200);
    expect(response.body).to.have.property('id', publicGistId);
  });

  it('should retrieve a secret gist by ID', async () => {
    const response = await getGist(secretGistId);
    expect(response.status).to.equal(200);
    expect(response.body).to.have.property('id', secretGistId);
  });

  it('should list all gists for the authenticated user', async () => {
    const response = await listGists();
    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('array');
  });
});
