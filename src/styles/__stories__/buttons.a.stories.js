import { html } from 'lit-element';
import {classMap} from "lit-html/directives/class-map.js";

export default {
  title: 'Styles/Buttons/Link',
  parameters: {
    // ...readme.parameters
  },
  argTypes: {
    type: {
      options: ['primary', 'secondary', 'text'],
      control: { type: 'select' },
    },
    href: {
      control: { type: 'text' },
    },
    target: {
      options: ['_blank', '_self', '_parent', '_top'],
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
    return html`<a href=${args.href} target=${args.target} class=${classes}>
        ${args.label}
      </a>`;
  }
  else {
    return html`<a href=${args.href} target=${args.target} class=${classes}>
          ${args.label}
          <span class=${icon_classes}></span>
      </a>`;
  }
};

export const Link = Template.bind({});
Link.args = {
  'type': 'primary',
  'href': 'http://kyndryl.com',
  'target': '_self',
  'label': 'Click here',
  'size': 'default',
  'icon': 'none',
};