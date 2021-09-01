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
          { path: "build/*.js", label: "Web-component bundle" },
          { path: "build/*.css", label: "Global styles" },
          {
            path: "build/*.{woff,woff2,eot,svg,ttf}",
            label: "Fonts",
          },
        ],
      },
    ],
  ],
};
