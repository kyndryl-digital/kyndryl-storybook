module.exports = {
  branches: ["master"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md",
        changelogTitle: "# Release notes",
      },
    ],
    [
      "@semantic-release/github",
      {
        assets: ["CHANGELOG.md"],
        successComment:
          ":tada: This issue has been resolved in version ${nextRelease.version}(<github_release_url>)",
      },
    ],
  ],
};
