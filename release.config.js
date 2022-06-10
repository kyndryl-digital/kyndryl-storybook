/**
 * Copyright Kyndryl, Inc. 2022
 */
 
module.exports = {
  branches: [
    'master'
  ],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
  ],
};
