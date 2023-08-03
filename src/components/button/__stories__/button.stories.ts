/** 
* Copyright Kyndryl, Inc. 2023
*/

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
    description: {
      description: 'Accessible aria label that provides discernible text for icon only buttons or additional context',
      control: { type: 'text' },
    },
    href: {
      description: 'Link URL',
      control: { type: 'text' },
    },
    target: {
      description: 'Where to open the link (value of the target attribute)',
      options: [...optionsLinkTargets],
      control: { type: 'select' },
    },
    type: {
      description: 'Button type',
      options: [...optionsType],
      control: { type: 'select' },
    },
    size: {
      description: 'Button size',
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
      description: 'Icon to display in the button',
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
      description: 'Icon position relative to text label (center for icon only button)',
      options: [
        ...optionsIconPosition,
      ],
      control: {
        type: 'select',
      },
    },

    theme: {
      description: 'Color theme',
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
 <div style="background-color:lightgreen;height: 100px;display: flex;justify-content: center;align-items: center;">
   <kd-button
     type=${args.type}
     size=${args.size}
     icon=${args.icon}
     iconPosition=${args.iconPosition}
     description=${args.description}
     href=${args.href}
     target=${args.target}
     theme=${args.theme}
   >Button Text</kd-button>
   </div>
 `;
};

export const Button = Template.bind({});
Button.args = {
  href: 'http://kyndryl.com',
  target: LINK_TARGETS.SELF,
  type: BUTTON_TYPES.PRIMARY,
  size: null,
  icon: null,
  iconPosition: null,
  theme: null,
};