require('dotenv').config();

module.exports = {
  baseUrl: 'https://api.github.com',
  token: process.env.MY_GITHUB_TOKEN,
  userAgent: 'request'
};
