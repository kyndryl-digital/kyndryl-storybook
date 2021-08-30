module.exports = {
  branches: ["master"],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "eslint",
        releaseRules: [
          { tag: "Breaking", release: "major" },
          { tag: "Build", release: "minor" },
          { tag: "Chore", release: "minor" },
          { tag: "Fix", release: "patch" },
          { tag: "New", release: "minor" },
          { tag: "Update", release: "minor" },
          { tag: "Upgrade", release: "minor" },
        ],
      },
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "eslint",
        releaseRules: [
          { tag: "Breaking", release: "major" },
          { tag: "Build", release: "minor" },
          { tag: "Chore", release: "minor" },
          { tag: "Fix", release: "patch" },
          { tag: "New", release: "minor" },
          { tag: "Update", release: "minor" },
          { tag: "Upgrade", release: "minor" },
        ],
      },
    ],
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
          "package.json",
          "CHANGELOG.md",
          { path: "build/*.js", label: "Script" },
          { path: "build/*.css", label: "Styles" },
          {
            path: "build/*.{woff,woff2,eot,svg,ttf}",
            label: "Fonts",
          },
        ],
        message:
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
  ],
};