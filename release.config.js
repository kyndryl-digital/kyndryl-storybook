{
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    ["@semantic-release/github", {
      "assets": [
        {"path": "build/*.js", "label": "Web-component script"},
        {"path": "build/*.css", "label": "Web-component styles"},
        {"path": "build/*.{woff,woff2,eot,svg,ttf}", "label": "Web-component fonts"}
      ]
    }],
  ]
}
