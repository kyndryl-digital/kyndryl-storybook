# Kyndryl Web Components [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

This is a repository of sharable Kyndryl branded web-components.

[Click here to view the Storybook documentation.](https://pages.github.kyndryl.net/marketing/kyndryl-web-components/)

## Requirements

- node 12.21.0
- npm 6.14
- npx 6.14

## Setup

```
git clone git@github.kyndryl.com:marketing/kyndryl-web-components.git
npm install
```

(optional) Specify which version of `node` to use.

```
nvm use 12.21.0
```

### Run storybook

```
npm run storybook
```

## Usage

Implementation of the web components is as simple as including the compiled package in the markup of the page and freely utilizing any of the custom web component tags within the body of the page.

```
<html>
  <head>

    <script src="//kyndryl-web-components.s3.us.cloud-object-storage.appdomain.cloud/kyndryl-web-components.bundle.js"></script>
    <link href="//kyndryl-web-components.s3.us.cloud-object-storage.appdomain.cloud/kyndryl-web-components.css" rel="stylesheet">

  </head>
  <body>
  
    <kyndryl-wrapper>
      YOUR CONTENT HERE
      <span slot="trustarc" id="teconsent"></span>
    </kyndryl-wrapper>
    
  </body>
</html>
```

## Contributing

New components may be contributed via pull request to the main component repository.

### Approval requirements
- [] Passing unit tests
- [] Design review and approval
- [] Developer peer review
