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

export const HeadlineXXS = args => {
  return html`<p class="k-font-size-headline-10">
    Lorem ipsum dolor sit amet
  </p>`;
};
 

export const HeadlineXS = args => {
  return html`<p class="k-font-size-headline-20">
    Lorem ipsum dolor sit amet
  </p>`;
};
 

export const HeadlineSM = args => {
  return html`<p class="k-font-size-headline-30">
    Lorem ipsum dolor sit amet
  </p>`;
};
 
 
export const HeadlineMD = args => {
  return html`<p class="k-font-size-headline-40">
    Lorem ipsum dolor sit amet
  </p>`;
};
 
export const HeadlineLG = args => {
  return html`<p class="k-font-size-headline-50">
    Lorem ipsum dolor sit amet
  </p>`;
};
 
export const HeadlineXL= args => {
  return html`<p class="k-font-size-headline-60">
    Lorem ipsum dolor sit amet
  </p>`;
};
 
export const HeadlineXXL = args => {
  return html`<p class="k-font-size-headline-70">
    Lorem ipsum dolor sit amet
  </p>`;
};
 
export const HeadlineXXXL = args => {
  return html`<p class="k-font-size-headline-80">
    Lorem ipsum dolor sit amet
  </p>`;
};
 
export const HeadlineXXXXL = args => {
  return html`<p class="k-font-size-headline-90">
    Lorem ipsum dolor sit amet
  </p>`;
};
 

//display 
export const DisplayXXS = args => {
  return html`<p class="k-font-size-display-10">
    Lorem ipsum dolor sit amet
  </p>`;
};
 
export const DisplayXS = args => {
  return html`<p class="k-font-size-display-20">
    Lorem ipsum dolor sit amet
  </p>`;
};
 

export const DisplaySM = args => {
  return html`<p class="k-font-size-display-30">
    Lorem ipsum dolor sit amet
  </p>`;
};
 

export const DisplayMD = args => {
  return html`<p class="k-font-size-display-40">
    Lorem ipsum dolor sit amet
  </p>`;
};
 
export const DisplayLG = args => {
  return html`<p class="k-font-size-display-50">
    Lorem ipsum dolor sit amet
  </p>`;
};
 
export const DisplayXL= args => {
  return html`<p class="k-font-size-display-60">
    Lorem ipsum dolor sit amet
  </p>`;
};
 
 
export const DisplayXXL = args => {
  return html`<p class="k-font-size-display-70">
    Lorem ipsum dolor sit amet
  </p>`;
};
 

export const DisplayXXXL = args => {
  return html`<p class="k-font-size-display-80">
    Lorem ipsum dolor sit amet
  </p>`;
};
 
export const DisplayXXXXL = args => {
  return html`<p class="k-font-size-display-90">
    Lorem ipsum dolor sit amet
  </p>`;
};
 
 
export const BodyXXS = args => {
  return html`<p class="k-font-size-body-10">
    Lorem ipsum dolor sit amet
  </p>`;
};
 
export const BodyXS = args => {
  return html`<p class="k-font-size-body-20">
    Lorem ipsum dolor sit amet
  </p>`;
};
 
export const UtilityXXS = args => {
  return html`<p class="k-font-size-utility-10">
    Lorem ipsum dolor sit amet
  </p>`;
};
 
export const UtilityXS = args => {
  return html`<p class="k-font-size-utility-20">
    Lorem ipsum dolor sit amet
  </p>`;
};
