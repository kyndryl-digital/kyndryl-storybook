import { html } from 'lit-element';
import {classMap} from "lit-html/directives/class-map.js";

import { settings } from "../../global/settings";

export default {
  title: 'Styles/Modal',
  argTypes: {
    visible: {
      control: {type: 'boolean'},
    },
    size: {
      options: ['default', 'large', 'small'],
      control: { type: 'radio' },
    },
    content: {
      control: { type: 'text' },
    },
  },
};

export const Modal = (args) => {
  const classes = classMap({
    [`${settings.class_prefix}-modal`]: args.size === 'default' || !args.size,
    [`${settings.class_prefix}-modal-lg`]: args.size === 'large',
    [`${settings.class_prefix}-modal-sm`]: args.size === 'small',
    [`visible`]: args.visible === true,
    [`hidden`]: args.visible === false
  });
  return html`<div class="${settings.class_prefix}-modal-backdrop ${args.visible ? 'visible' : 'hidden'}">
      <div class=${classes}>
        <div class="${settings.class_prefix}-modal-controls">
          <button class="${settings.class_prefix}-modal-control" title="Close window">
              <span class="${settings.class_prefix}-icon-close"></span>
          </button>
        </div>
        <div class="${settings.class_prefix}-modal-content">
          <div class="${settings.class_prefix}-pt4 ${settings.class_prefix}-pr4 ${settings.class_prefix}-pl4 ${settings.class_prefix}-pb6">
              ${args.content}
          </div>
        </div>
      </div>
    </div>`;
}

Modal.args = {
  'visible': true,
  'size': 'default',
  'content': 'Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum.',
};
