require('dotenv').config();

module.exports = {
  baseUrl: 'https://api.github.com',
  token: process.env.GITHUB_TOKEN,
  userAgent: 'request'
};
