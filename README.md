# Kyndryl Web Components [![Build Status](https://travis.kyndryl.com/marketing/kyndryl-web-components.svg?token=BC3q7E17sjDsspnSrSRR&branch=master)](https://travis.ibm.com/kyndryl/kyndryl-web-components) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

This is a repository of sharable Kyndryl branded web-components.

[Click here to view the Storybook documentation.](https://pages.github.kyndryl.net/marketing/kyndryl-web-components/)

## Requirements

- npm 6.14
- npx 6.14

## Setup

```
git clone git@github.kyndryl.com:marketing/kyndryl-web-components.git
npm install
```

### Run storybook

```
npm run storybook
```

## Build

```
npm run build
```

This will compile the the web components into a single package located at **build/kyndryl-web-components.bundle.js** that will be hosted in its final location

## Usage

Implementation of the web components is as simple as including the compiled package in the markup of the page and freely utilizing any of the custom web component tags within the body of the page.

```
<html>
  <head>

    <script src="//domain/path/to/file/kyndryl-web-components.bundle.js"></script>

  </head>
  <body>
  
    <kyndryl-wrapper>
      YOUR CONTENT HERE
    </kyndryl-wrapper>
    
  </body>
</html>
```
