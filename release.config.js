module.exports = {
  branches: ["master"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/github",
      {
        assets: [
          {
            path: "kyndryl-web-components.gz",
            label: "Kyndryl web-component bundle",
          },
        ],
      },
    ],
  ],
};
