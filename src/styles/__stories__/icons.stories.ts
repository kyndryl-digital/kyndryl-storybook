import { html } from 'lit-element';
import { PREFIX_CLASS } from '../../global/settings';

export default {
  title: 'Styles/Icons',
};

export const Icons = args => {
  return html`
    <span
      class="${PREFIX_CLASS}-icon ${PREFIX_CLASS}-icon-arrow-left"
    ></span>
    <span
      class="${PREFIX_CLASS}-icon ${PREFIX_CLASS}-icon-arrow-right"
    ></span>
    <span
      class="${PREFIX_CLASS}-icon ${PREFIX_CLASS}-icon-arrow-up"
    ></span>
    <span
      class="${PREFIX_CLASS}-icon ${PREFIX_CLASS}-icon-chevron-down"
    ></span>
    <span
      class="${PREFIX_CLASS}-icon ${PREFIX_CLASS}-icon-chevron-left"
    ></span>
    <span
      class="${PREFIX_CLASS}-icon ${PREFIX_CLASS}-icon-chevron-right"
    ></span>
    <span
      class="${PREFIX_CLASS}-icon ${PREFIX_CLASS}-icon-chevron-up"
    ></span>
    <span
      class="${PREFIX_CLASS}-icon ${PREFIX_CLASS}-icon-chevron-wide-down"
    ></span>
    <span
      class="${PREFIX_CLASS}-icon ${PREFIX_CLASS}-icon-chevron-wide-left"
    ></span>
    <span
      class="${PREFIX_CLASS}-icon ${PREFIX_CLASS}-icon-chevron-wide-right"
    ></span>
    <span
      class="${PREFIX_CLASS}-icon ${PREFIX_CLASS}-icon-chevron-wide-up"
    ></span>
    <span
      class="${PREFIX_CLASS}-icon ${PREFIX_CLASS}-icon-close"
    ></span>
    <span
      class="${PREFIX_CLASS}-icon ${PREFIX_CLASS}-icon-download"
    ></span>
    <span
      class="${PREFIX_CLASS}-icon ${PREFIX_CLASS}-icon-hamburger"
    ></span>
    <span
      class="${PREFIX_CLASS}-icon ${PREFIX_CLASS}-icon-linkedin"
    ></span>
    <span
      class="${PREFIX_CLASS}-icon ${PREFIX_CLASS}-icon-pdf"
    ></span>
    <span
      class="${PREFIX_CLASS}-icon ${PREFIX_CLASS}-icon-play"
    ></span>
    <span
      class="${PREFIX_CLASS}-icon ${PREFIX_CLASS}-icon-pop-out"
    ></span>
    <span
      class="${PREFIX_CLASS}-icon ${PREFIX_CLASS}-icon-twitter"
    ></span>
  `;
};
