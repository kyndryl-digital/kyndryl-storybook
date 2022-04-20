import { html } from 'lit';
import { settings } from '../../../global/settings';
import '../button';

export default {
  title: 'Web Components/Button',
  component: `${settings.tag_prefix}-button`,
  parameters: {},
  argTypes: {
    type: {
      options: ['primary', 'secondary', 'text'],
      control: { type: 'select' },
    },
    theme: {
      options: ['', `${settings.tag_prefix}-theme-dark-stone`, `${settings.tag_prefix}-theme-cloud`],
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
      options: [
        'none',
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
        'twitter',
      ],
      control: {
        type: 'select',
        labels: {
          none: 'None',
        },
      },
    },
  },
};

const Template = args => {
  return html`
    <kd-button
        type=${args.type}
        size=${args.size != 'default' ? args.size : null}
        icon=${args.icon != 'none' ? args.icon : null}
        href=${args.href}
        target=${args.target}
        theme=${args.theme}
    >${args.label}</-button>
  `;
};

export const Button = Template.bind({});
Button.args = {
  type: 'primary',
  href: 'http://kyndryl.com',
  target: '_self',
  label: 'Click here',
  size: 'default',
  icon: 'none',
};
