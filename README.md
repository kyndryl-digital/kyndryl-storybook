# Kyndryl Web Components [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

This is a repository of sharable Kyndryl branded web-components.

[Click here to view the Storybook documentation.](https://pages.github.kyndryl.net/marketing/kyndryl-web-components/)

## Requirements

- nvm
- node v16
- npm v8

## Setup

Install node v16 using nvm.

```
nvm install 16 --lts
nvm use 16
```

Clone the web component library and install.

```
git clone git@github.kyndryl.com:marketing/kyndryl-web-components.git
cd kyndryl-web-components
npm install --legacy-peer-deps
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

- [x] Passing unit tests
- [x] Design review and approval
- [x] Developer peer review

## Primary maintainer(s)

- Ian Whitcomb(ian.whitcomb@kyndryl.com)
- Dennis Dolliver(dennis.dolliver@kyndryl.com)

## Build Sass Document
```
npm run build:sassdoc
```

## Open Sass Document

```
npm run sassdoc
```