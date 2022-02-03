module.exports = {
  branches: [
    'master',
    { name: 'release/1.x.x', range: '1.x', channel: '1.x' },
    { name: 'release/2.x.x', range: '2.x', channel: '2.x' },
    { name: 'release/+([0-9])?(.{+([0-9]),x}).x-beta', prerelease: true },
    { name: 'release/+([0-9])?(.{+([0-9]),x}).x-alpha', prerelease: true }
  ],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
  ],
};
