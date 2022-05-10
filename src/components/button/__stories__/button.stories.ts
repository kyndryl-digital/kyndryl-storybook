import { html } from 'lit';
import { createOptionsArray } from '../../../global/mixins/global';
import { PREFIX_TAG } from '../../../global/settings/settings';
import { ICON_IDS } from '../../../global/defs/iconIds';
import { LINK_TARGETS } from '../../../global/defs/linkTargets';
import { THEMES } from '../../../global/defs/themes';
import { BUTTON_SIZES, BUTTON_TYPES, BUTTON_ICON_POSITION } from '../defs';
import '../button';

const optionsType = createOptionsArray(BUTTON_TYPES);
const optionsSize = createOptionsArray(BUTTON_SIZES);
const optionsIcon = createOptionsArray(ICON_IDS);
const optionsIconPosition = createOptionsArray(BUTTON_ICON_POSITION);
const optionsLinkTargets = createOptionsArray(LINK_TARGETS);
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
      options: [...optionsLinkTargets],
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
    iconPosition: {
      options: [
        ...optionsIconPosition,
      ],
      control: {
        type: 'select',
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
      iconPosition=${args.iconPosition}
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
  target: LINK_TARGETS.SELF,
  type: BUTTON_TYPES.PRIMARY,
  size: null,
  icon: null,
  iconPosition: null,
  theme: null,
};
