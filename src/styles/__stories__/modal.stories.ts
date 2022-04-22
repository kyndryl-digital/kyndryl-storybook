import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';

import { PREFIX_CLASS } from '../../global/settings';

export default {
  title: 'Styles/Modal',
  argTypes: {
    visible: {
      control: { type: 'boolean' },
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

export const Modal = args => {
  const classes = classMap({
    [`${PREFIX_CLASS}-modal`]: args.size === 'default' || !args.size,
    [`${PREFIX_CLASS}-modal-lg`]: args.size === 'large',
    [`${PREFIX_CLASS}-modal-sm`]: args.size === 'small',
    [`visible`]: args.visible === true,
    [`hidden`]: args.visible === false,
  });
  return html`<div
    class="${PREFIX_CLASS}-modal-backdrop ${args.visible
      ? 'visible'
      : 'hidden'}"
  >
    <div class=${classes}>
      <div class="${PREFIX_CLASS}-modal-controls">
        <button
          class="${PREFIX_CLASS}-modal-control"
          title="Close window"
        >
          <span class="${PREFIX_CLASS}-icon-close"></span>
        </button>
      </div>
      <div class="${PREFIX_CLASS}-modal-content">
        <div
          class="${PREFIX_CLASS}-pt4 ${PREFIX_CLASS}-pr4 ${PREFIX_CLASS}-pl4 ${PREFIX_CLASS}-pb6"
        >
          ${args.content}
        </div>
      </div>
    </div>
  </div>`;
};

Modal.args = {
  visible: true,
  size: 'default',
  content:
    'Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum.',
};
