const { createGist, updateGist, getGist, deleteGist } = require('./helpers/api');
const chai = require('chai');
const expect = chai.expect;

describe('Update Gist Tests', () => {
  let gistId;

  before(async () => {
    const response = await createGist("Initial Gist", { "initial.txt": { content: "Initial content" } }, true);
    gistId = response.body.id;
  });

  after(async () => {
    await deleteGist(gistId);
  });

  it('should update the description of a gist', async () => {
    const response = await updateGist(gistId, "Updated Description", null);
    expect(response.status).to.equal(200);
    expect(response.body).to.have.property('description', 'Updated Description');
  });

  it('should update the files of a gist', async () => {
    const response = await updateGist(gistId, null, { "initial.txt": null, "updated.txt": { content: "Updated content" } });
    expect(response.status).to.equal(200);
    const updatedGist = await getGist(gistId);
    expect(updatedGist.body.files).to.have.property('updated.txt');
    expect(updatedGist.body.files).to.not.have.property('initial.txt');
  });
});
