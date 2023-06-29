/**
 * Copyright Kyndryl, Inc. 2022
 */
 
import { html } from 'lit-element';
import { PREFIX_CLASS } from '../../global/settings/settings';

export default {
  title: 'Styles/Typography',
};

export const H1 = args => {
  return html`<h1 class="${PREFIX_CLASS}-h1">
    Lorem ipsum dolor sit amet
  </h1>`;
};

export const H2 = args => {
  return html`<h2 class="${PREFIX_CLASS}-h2">
    Lorem ipsum dolor sit amet
  </h2>`;
};

export const H3 = args => {
  return html`<h3 class="${PREFIX_CLASS}-h3">
    Lorem ipsum dolor sit amet
  </h3>`;
};

export const H4 = args => {
  return html`<h5 class="${PREFIX_CLASS}-h4">
    Lorem ipsum dolor sit amet
  </h5>`;
};

export const H5 = args => {
  return html`<h5 class="${PREFIX_CLASS}-h5">
    Lorem ipsum dolor sit amet
  </h5>`;
};

export const H6 = args => {
  return html`<h6 class="${PREFIX_CLASS}-h6">
    Lorem ipsum dolor sit amet
  </h6>`;
};

export const Paragraph = args => {
  return html`<p class="${PREFIX_CLASS}-text">
    Lorem ipsum dolor sit amet
  </p>`;
};

export const Link = args => {
  return html`<a href="http://kyndryl.com" class="${PREFIX_CLASS}-link"
    >Click here</a
  >`;
};

export const OrderedList = args => {
  return html`<ol class="${PREFIX_CLASS}-list">
    <li class="${PREFIX_CLASS}-list-item">Lorem</li>
    <li class="${PREFIX_CLASS}-list-item">Ipsum</li>
    <li class="${PREFIX_CLASS}-list-item">Dolor</li>
  </ol>`;
};

export const UnorderedList = args => {
  return html`<ul class="${PREFIX_CLASS}-list">
    <li class="${PREFIX_CLASS}-list-item">Lorem</li>
    <li class="${PREFIX_CLASS}-list-item">Ipsum</li>
    <li class="${PREFIX_CLASS}-list-item">Dolor</li>
  </ul>`;
};

export const Blockquote = args => {
  return html`<blockquote>Lorem ipsum dolor sit amet.</blockquote>`;
};

export const Headline01 = args => {
  return html`<div>
    <p class="headline-01-ultralight">Headline 01</p>
    <p class="headline-01-light">Headline 01</p>
    <p class="headline-01-regular">Headline 01</p>
  </div>`;
};
 
 
export const Headline02 = args => {
  return html`<div>
    <p class="headline-02-ultralight">Headline 02</p>
    <p class="headline-02-light">Headline 02</p>
    <p class="headline-02-regular">Headline 02</p>
  </div>`;
};
 
 
export const Headline03 = args => {
  return html`<div>
    <p class="headline-03-ultralight">Headline 03</p>
    <p class="headline-03-light">Headline 03</p>
    <p class="headline-03-regular">Headline 03</p>
  </div>`;
};
 
 
export const Headline04 = args => {
  return html`<div>
    <p class="headline-04-light">Headline 04</p>
    <p class="headline-04-regular">Headline 04</p>
  </div>`;
};
 
export const Headline05 = args => {
  return html`<div>
    <p class="headline-05-light">Headline 05</p>
    <p class="headline-05-regular">Headline 05</p>
  </div>`;
};
 
 
export const Headline06 = args => {
  return html`<div>
    <p class="headline-06-light">Headline 06</p>
    <p class="headline-06-regular">Headline 06</p>
  </div>`;
};
 
 
export const Headline07 = args => {
  return html`<div>
    <p class="headline-07-light">Headline 07</p>
    <p class="headline-07-regular">Headline 07</p>
  </div>`;
};
 
 
export const Headline08 = args => {
  return html`<div>
    <p class="headline-08-regular">Headline 08</p>
  </div>`;
};
 
 
export const Display01 = args => {
  return html`<div>
  <p class="display-01-ultralight">Display 01</p>
  <p class="display-01-light">Display 01</p>
  </div>`;
};
 
 
export const Display02 = args => {
  return html`<div>
  <p class="display-02-ultralight">Display 02</p>
  <p class="display-02-light">Display 02</p>
  </div>`;
};
 
export const Display03 = args => {
  return html`<div>
  <p class="display-03-ultralight">Display 03</p>
  <p class="display-03-light">Display 03</p>
  </div>`;
};
 
 
export const Display04 = args => {
  return html`<div>
  <p class="display-04-ultralight">Display 04</p>
  <p class="display-04-light">Display 04</p>
  </div>`;
};
  
export const Hero01 = args => {
  return html`<div>
  <p class="hero-01-ultralight">Hero 01</p>
  <p class="hero-01-light">Hero 01</p>
  <p class="hero-01-bold">Hero 01</p>
  </div>`;
};
 
export const Hero02 = args => {
  return html`<div>
  <p class="hero-02-ultralight">Hero 02</p>
  <p class="hero-02-light">Hero 02</p>
  <p class="hero-02-bold">Hero 03</p>
  </div>`;
};
 
export const Hero03 = args => {
  return html`<div>
  <p class="hero-03-ultralight">Hero 03</p>
  <p class="hero-03-light">Hero 03</p>
  <p class="hero-03-bold">Hero 03</p>
  </div>`;
};
 
 
export const Body01 = args => {
  return html`<div>
  <p class="body-01-light">Body 01</p>
  <p class="body-01-regular">Body 01</p>
  <p class="body-01-medium">Body 01</p>
  </div>`;
};
 
export const Body02 = args => {
  return html`<div>
  <p class="body-01-regular">Body 02</p>
  <p class="body-01-medium">Body 02</p>
  </div>`;
};
 
 
export const Utility01 = args => {
  return html`<div>
  <p class="ui-01-light">Utility 01</p>
  <p class="ui-01-medium">Utility 01</p>
  </div>`;
};
 
 
export const Utility02 = args => {
  return html`<div>
  <p class="ui-01-regular">Utility 02</p>
  <p class="ui-01-medium">Utility 02</p>
  </div>`;
};
 
export const Utility03 = args => {
  return html`<div>
  <p class="ui-01-regular">Utility 03</p>
  <p class="ui-01-medium">Utility 03</p>
  </div>`;
};
 
export const Utility04 = args => {
  return html`<div>
  <p class="ui-01-light">Utility 04</p>
  <p class="ui-01-medium">Utility 04</p>
  </div>`;
};
