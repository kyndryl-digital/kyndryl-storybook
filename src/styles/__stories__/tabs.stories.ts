import { html } from 'lit-element';
import { settings } from "../../global/settings";

export default {
  title: 'Styles/Tabs',
};

export const Tabs = (args) => {
  return html`
    <div class="${settings.class_prefix}-tab-list">
      <button class="${settings.class_prefix}-tab ${settings.class_prefix}-selected">Lorem</button>
      <button class="${settings.class_prefix}-tab">Ipsum</button>
      <button class="${settings.class_prefix}-tab">Dolor</button>
    </div>
  `;
};
