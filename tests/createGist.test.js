const { createGist, deleteGist } = require('./helpers/api');
const chai = require('chai');
const expect = chai.expect;

describe('Create Gist Tests', () => {
  let gistIds = [];

  afterEach(async () => {
    for (const id of gistIds) {
      await deleteGist(id);
    }
    gistIds = [];
  });

  it('should create a public gist', async () => {
    const response = await createGist("Public Test Gist", { "public.txt": { content: "Hello World" } }, true);
    gistIds.push(response.body.id);
    expect(response.status).to.equal(201);
    expect(response.body).to.have.property('id');
    expect(response.body.public).to.be.true;
  });

  it('should create a secret gist', async () => {
    const response = await createGist("Secret Test Gist", { "secret.txt": { content: "This is a secret gist" } }, false);
    gistIds.push(response.body.id);
    expect(response.status).to.equal(201);
    expect(response.body).to.have.property('id');
    expect(response.body.public).to.be.false;
  });
});
