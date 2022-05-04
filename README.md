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
npm install
```

### Run storybook

```
npm run storybook
```

## Usage

### Method 1: Hosted package

Implementation of the web components is as simple as including the compiled package in the markup of the page and freely utilizing any of the custom web component tags within the body of the page.

```
<html>
  <head>

    <script src="//kyndryl-web-components.s3.us.cloud-object-storage.appdomain.cloud/v2/kyndryl-web-components.js"></script>
    <link href="//kyndryl-web-components.s3.us.cloud-object-storage.appdomain.cloud/v2/kyndryl-web-components.css" rel="stylesheet">

  </head>
  <body>
  
    <kyndryl-button type="primary">EXAMPLE</kyndryl-button>
    
  </body>
</html>
```

### Method 2: Self-hosted build

The design system repository can also be installed directly onto NodeJS applications as an npm package. This method allows for full access to the design system source Typescript and SASS files within the consumer application.

```
npm install git@github.com:iwhitcomb/kyndryl-design-system.git#v2.0.0
```

Once you install kyndryl-design-system you can start importing the built web component package into your NodeJS application.

```
import 'kyndryl-design-system';
```

Alternatively, you may also import the web components directly. (Note: This will likely require you to replicate some of the webpack build steps inside your own application in order to work.)

```
import 'kyndryl-design-system/src/button/button'
```


## Contributing

New components may be contributed via pull request to the main component repository.

### Approval requirements

- [x] Passing unit tests
- [x] Design review and approval
- [x] Developer peer review

## Primary maintainer(s)

- Ian Whitcomb(ian.whitcomb@kyndryl.com)
