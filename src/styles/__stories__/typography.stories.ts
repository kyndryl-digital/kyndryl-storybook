import { html } from 'lit-element';
import { PREFIX_CLASS } from '../../global/settings';

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
