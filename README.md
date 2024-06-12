
# GitHub Gist Testing Project
![GitHub Actions](https://github.com/seemewalkin/distribusion-gist-tests/actions/workflows/ci.yml/badge.svg)
[Results of CI runs](https://github.com/seemewalkin/distribusion-gist-tests/actions)

This project is designed to test the GitHub Gists API using Mocha, Chai, and Supertest. It includes automated tests for creating, retrieving, updating, and deleting gists.

## Table of Contents

- [Project Overview](#project-overview)
- [Setup](#setup)
- [Running Tests](#running-tests)

## Project Overview

This project tests the core functionalities of the GitHub Gists API, including:
- Creating public and secret gists
- Retrieving gists by ID
- Listing all gists for an authenticated user
- Updating gists
- Deleting gists

## Setup

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- A GitHub personal access token with the `gist` scope

### Installation

1. Clone the repository:
    \`\`\`sh
    git clone https://github.com/yourusername/github-gist-testing.git
    cd github-gist-testing
    \`\`\`

2. Install the dependencies:
    \`\`\`sh
    npm install
    \`\`\`

3. Create a `.env` file in the root directory and add your GitHub token:
    \`\`\`sh
    touch .env
    echo "MY_GITHUB_TOKEN=your_actual_github_token_here" >> .env
    \`\`\`

## Running Tests

To run the tests, use the following command:
\`\`\`sh
npm test
\`\`\`

This will execute all test cases defined in the `tests` directory.
