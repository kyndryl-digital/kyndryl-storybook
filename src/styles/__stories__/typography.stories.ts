import { html } from 'lit-element';
import { settings } from "../../global/settings";

export default {
  title: 'Styles/Typography',
};

export const H1 = (args) => {
  return html`<h1 class="${settings.class_prefix}-h1">Lorem ipsum dolor sit amet</h1>`;
};

export const H2 = (args) => {
  return html`<h2 class="${settings.class_prefix}-h2">Lorem ipsum dolor sit amet</h2>`;
};

export const H3 = (args) => {
  return html`<h3 class="${settings.class_prefix}-h3">Lorem ipsum dolor sit amet</h3>`;
};

export const H4 = (args) => {
  return html`<h5 class="${settings.class_prefix}-h4">Lorem ipsum dolor sit amet</h5>`;
};

export const H5 = (args) => {
  return html`<h5 class="${settings.class_prefix}-h5">Lorem ipsum dolor sit amet</h5>`;
};

export const H6 = (args) => {
  return html`<h6 class="${settings.class_prefix}-h6">Lorem ipsum dolor sit amet</h6>`;
};

export const Paragraph = (args) => {
  return html`<p class="${settings.class_prefix}-text">Lorem ipsum dolor sit amet</p>`;
};

export const Link = (args) => {
  return html`<a href="http://kyndryl.com" class="${settings.class_prefix}-link">Click here</a>`;
};

export const OrderedList = (args) => {
  return html`<ol class="${settings.class_prefix}-list">
      <li class="${settings.class_prefix}-list-item">Lorem</li>
      <li class="${settings.class_prefix}-list-item">Ipsum</li>
      <li class="${settings.class_prefix}-list-item">Dolor</li>
  </ol>`;
};

export const UnorderedList = (args) => {
  return html`<ul class="${settings.class_prefix}-list">
      <li class="${settings.class_prefix}-list-item">Lorem</li>
      <li class="${settings.class_prefix}-list-item">Ipsum</li>
      <li class="${settings.class_prefix}-list-item">Dolor</li>
  </ul>`;
};

export const Blockquote = (args) => {
  return html`<blockquote>Lorem ipsum dolor sit amet.</blockquote>`;
};
