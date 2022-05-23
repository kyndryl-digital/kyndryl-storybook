/**
 * Copyright Kyndryl, Inc. 2022
 */
 
import { html } from 'lit-element';
import { PREFIX_CLASS } from '../../global/settings/settings';

export default {
  title: 'Styles/Tabs',
};

export const Tabs = args => {
  return html`
    <div class="${PREFIX_CLASS}-tab-list">
      <button
        class="${PREFIX_CLASS}-tab ${PREFIX_CLASS}-selected"
      >
        Lorem
      </button>
      <button class="${PREFIX_CLASS}-tab">Ipsum</button>
      <button class="${PREFIX_CLASS}-tab">Dolor</button>
    </div>
  `;
};
