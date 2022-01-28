import { html } from 'lit-element';
import {classMap} from "lit-html/directives/class-map.js";

export default {
  title: 'Styles/Buttons/Button',
  parameters: {
    // ...readme.parameters
  },
  argTypes: {
    type: {
      options: ['primary', 'secondary', 'text'],
      control: { type: 'select' },
    },
    label: {
      control: { type: 'text' },
    },
    size: {
      options: ['default', 'large', 'small'],
      control: { type: 'radio' },
    },
    icon: {
      options: ['none',
        'arrow-down',
        'arrow-left',
        'arrow-right',
        'arrow-up',
        'chevron-down',
        'chevron-left',
        'chevron-right',
        'chevron-up',
        'chevron-wide-down',
        'chevron-wide-left',
        'chevron-wide-right',
        'chevron-wide-up',
        'close',
        'download',
        'hamburger',
        'linkedin',
        'pdf',
        'play',
        'pop-out',
        'twitter'],
      control: {
        type: 'select',
        labels: {
          'none': 'None',
        }
      },
    }
  },
};

const Template = (args) => {
  const classes = classMap({
    [`orb-btn-primary`]: args.type === 'primary',
    [`orb-btn-secondary`]: args.type === 'secondary',
    [`orb-btn-text`]: args.type === 'text',
    [`orb-btn-lg`]: args.size === 'large',
    [`orb-btn-sm`]: args.size === 'small'
  });
  const icon_classes = classMap({
    [`orb-icon`]: args.icon,
    [`orb-icon-`+args.icon]: args.icon,
  });
  if (!args.icon || args.icon === 'none') {
    return html`<button class=${classes}>
        ${args.label}
      </button>`;
  }
  else {
    return html`<button class=${classes}>
          ${args.label}
          <span class=${icon_classes}></span>
      </button>`;
  }
};

export const Button = Template.bind({});
Button.args = {
  'type': 'primary',
  'label': 'Click here',
  'size': 'default',
  'icon': 'none',
};