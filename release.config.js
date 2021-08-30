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
    "@semantic-release/github",
    [
      "@semantic-release/git",
      {
        assets: [
          { path: "build/*.js", label: "Web-component script" },
          { path: "build/*.css", label: "Web-component styles" },
          {
            path: "build/*.{woff,woff2,eot,svg,ttf}",
            label: "Web-component fonts",
          },
        ],
        message:
          "chore(release): set `package.json` to ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
  ],
};
