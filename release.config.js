module.exports = {
  branches: [
    'master',
    { name: 'release/+([0-9])?(.{+([0-9]),x}).x', prerelease: true },
    { name: 'release/+([0-9])?(.{+([0-9]),x}).x-beta', prerelease: true },
    { name: 'release/+([0-9])?(.{+([0-9]),x}).x-alpha', prerelease: true }
  ],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
  ],
};
