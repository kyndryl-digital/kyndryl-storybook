module.exports = {
  branches: ["master"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md",
      },
    ],
    [
      "@semantic-release/github",
      {
        assets: [
          "CHANGELOG.md",
          { path: "kyndryl-web-components.gz", label: "Web-component bundle" },
        ],
      },
    ],
  ],
};
