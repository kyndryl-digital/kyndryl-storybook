import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import { PREFIX_CLASS } from '../../global/settings/settings';
import { ICON_IDS } from '../../global/defs/iconIds';
import { createOptionsArray } from '../../global/mixins/global';

const optionsIcon = createOptionsArray(ICON_IDS);

export default {
  title: 'Styles/Buttons',
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
      options: [
        'none',
        ...optionsIcon
      ],
      control: {
        type: 'select',
        labels: {
          none: 'none',
        },
      },
    },
  },
};

export const Link = args => {
  const classes = classMap({
    [`${PREFIX_CLASS}-btn-primary`]: args.type === 'primary',
    [`${PREFIX_CLASS}-btn-secondary`]: args.type === 'secondary',
    [`${PREFIX_CLASS}-btn-text`]: args.type === 'text',
    [`${PREFIX_CLASS}-btn-lg`]: args.size === 'large',
    [`${PREFIX_CLASS}-btn-sm`]: args.size === 'small',
  });
  const icon_classes = classMap({
    [`${PREFIX_CLASS}-icon`]: args.icon,
    [`${PREFIX_CLASS}-icon-` + args.icon]: args.icon,
  });
  if (!args.icon || args.icon === 'none') {
    return html`<a href=${args.href} target=${args.target} class=${classes}>
      ${args.label}
    </a>`;
  } else {
    return html`<a href=${args.href} target=${args.target} class=${classes}>
      ${args.label}
      <span class=${icon_classes}></span>
    </a>`;
  }
};

Link.args = {
  type: 'primary',
  href: 'http://kyndryl.com',
  target: '_self',
  label: 'Click here',
  size: 'default',
  icon: 'none',
};

export const Button = args => {
  const classes = classMap({
    [`${PREFIX_CLASS}-btn-primary`]: args.type === 'primary',
    [`${PREFIX_CLASS}-btn-secondary`]: args.type === 'secondary',
    [`${PREFIX_CLASS}-btn-text`]: args.type === 'text',
    [`${PREFIX_CLASS}-btn-lg`]: args.size === 'large',
    [`${PREFIX_CLASS}-btn-sm`]: args.size === 'small',
  });
  const icon_classes = classMap({
    [`${PREFIX_CLASS}-icon`]: args.icon,
    [`${PREFIX_CLASS}-icon-` + args.icon]: args.icon,
  });
  if (!args.icon || args.icon === 'none') {
    return html`<button class=${classes}>${args.label}</button>`;
  } else {
    return html`<button class=${classes}>
      ${args.label}
      <span class=${icon_classes}></span>
    </button>`;
  }
};

Button.args = {
  type: 'primary',
  label: 'Click here',
  size: 'default',
  icon: 'none',
};
