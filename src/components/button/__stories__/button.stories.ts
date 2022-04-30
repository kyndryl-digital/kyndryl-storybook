import { html } from 'lit';
import { createOptionsArray } from '../../../global/mixins/global';
import { PREFIX_TAG } from '../../../global/settings/settings';
import { ICON_IDS } from '../../../global/defs/iconIds';
import { THEMES } from '../../../global/defs/themes';
import { BUTTON_SIZES, BUTTON_TYPES } from '../defs';
import '../button';

const optionsType = createOptionsArray(BUTTON_TYPES);
const optionsSize = createOptionsArray(BUTTON_SIZES);
const optionsIcon = createOptionsArray(ICON_IDS);
const optionsTheme = createOptionsArray(THEMES);

export default {
  title: 'Web Components/Button',
  component: `${PREFIX_TAG}-button`,
  parameters: {},
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    href: {
      control: { type: 'text' },
    },
    target: {
      options: ['_blank', '_self', '_parent', '_top'],
      control: { type: 'select' },
    },
    type: {
      options: [...optionsType],
      control: { type: 'select' },
    },
    size: {
      options: [
        null,
        ...optionsSize,
      ],
      control: {
        type: 'select',
        labels: {
          null: 'default',
        },
      },
    },
    icon: {
      options: [
        null,
        ...optionsIcon,
      ],
      control: {
        type: 'select',
        labels: {
          null: 'none',
        },
      },
    },
    theme: {
      options: [
        null,
        ...optionsTheme,
      ],
      control: {
        type: 'select',
        labels: {
          null: 'none',
        },
      },
    },
  },
};

const Template = args => {
  return html`
    <kd-button
      type=${args.type}
      size=${args.size}
      icon=${args.icon}
      href=${args.href}
      target=${args.target}
      theme=${args.theme}
    >${args.label}</kd-button>
  `;
};

export const Button = Template.bind({});
Button.args = {
  label: 'Click here',
  href: 'http://kyndryl.com',
  target: '_self',
  type: 'primary',
  size: null,
  icon: null,
  theme: null,
};
