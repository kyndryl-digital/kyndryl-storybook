import { html } from 'lit';

import { settings } from '../../../global/settings';
import '../modal';
import '../../button/button';

export default {
  title: 'Web Components/Modal',
  component: `${settings.tag_prefix}-modal`,
  argTypes: {
    size: {
      options: ['default', 'large', 'small'],
      control: { type: 'radio' },
    },
    label: {
      control: { type: 'text' },
    },
    content: {
      control: { type: 'text' },
    },
  },
};

export const Text = args => {
  return html` <kd-modal size="${args.size}">
    <a slot="trigger" href="javascript://">${args.label}</a>
    <div class="kd-pt4 kd-pr4 kd-pl4 kd-pb6">${args.content}</div>
  </kd-modal>`;
};

Text.args = {
  size: 'default',
  label: 'Click here',
  content:
    'Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum.',
};

export const Button = args => {
  return html` <kd-modal size="${args.size}">
    <kd-button slot="trigger" type="primary" icon="pop-out" href="javascript://"
      >${args.label}</kd-button
    >
    <div class="kd-pt4 kd-pr4 kd-pl4 kd-pb6">${args.content}</div>
  </kd-modal>`;
};

Button.args = {
  size: 'default',
  label: 'Click here',
  content:
    'Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum.',
};

export const Image = args => {
  return html` <kd-modal size="${args.size}">
    <img
      slot="trigger"
      src="https://placehold.co/400x300?text=${args.label}"
      alt=${args.label}
      title=${args.label}
    />
    <div class="kd-pt4 kd-pr4 kd-pl4 kd-pb6">${args.content}</div>
  </kd-modal>`;
};

Image.args = {
  size: 'default',
  label: 'Click here',
  content:
    'Maecenas faucibus mollis interdum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum.',
};
