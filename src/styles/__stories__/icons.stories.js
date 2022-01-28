import { html } from 'lit-element';
import { settings } from "../../global/settings";

export default {
  title: 'Styles/Icons',
};


export const Default = (args) => {
  return html`
      <span class="${settings.class_prefix}-icon ${settings.class_prefix}-icon-arrow-left"></span>
      <span class="${settings.class_prefix}-icon ${settings.class_prefix}-icon-arrow-right"></span>
      <span class="${settings.class_prefix}-icon ${settings.class_prefix}-icon-arrow-up"></span>
      <span class="${settings.class_prefix}-icon ${settings.class_prefix}-icon-chevron-down"></span>
      <span class="${settings.class_prefix}-icon ${settings.class_prefix}-icon-chevron-left"></span>
      <span class="${settings.class_prefix}-icon ${settings.class_prefix}-icon-chevron-right"></span>
      <span class="${settings.class_prefix}-icon ${settings.class_prefix}-icon-chevron-up"></span>
      <span class="${settings.class_prefix}-icon ${settings.class_prefix}-icon-chevron-wide-down"></span>
      <span class="${settings.class_prefix}-icon ${settings.class_prefix}-icon-chevron-wide-left"></span>
      <span class="${settings.class_prefix}-icon ${settings.class_prefix}-icon-chevron-wide-right"></span>
      <span class="${settings.class_prefix}-icon ${settings.class_prefix}-icon-chevron-wide-up"></span>
      <span class="${settings.class_prefix}-icon ${settings.class_prefix}-icon-close"></span>
      <span class="${settings.class_prefix}-icon ${settings.class_prefix}-icon-download"></span>
      <span class="${settings.class_prefix}-icon ${settings.class_prefix}-icon-hamburger"></span>
      <span class="${settings.class_prefix}-icon ${settings.class_prefix}-icon-linkedin"></span>
      <span class="${settings.class_prefix}-icon ${settings.class_prefix}-icon-pdf"></span>
      <span class="${settings.class_prefix}-icon ${settings.class_prefix}-icon-play"></span>
      <span class="${settings.class_prefix}-icon ${settings.class_prefix}-icon-pop-out"></span>
      <span class="${settings.class_prefix}-icon ${settings.class_prefix}-icon-twitter"></span>
  `;
};
