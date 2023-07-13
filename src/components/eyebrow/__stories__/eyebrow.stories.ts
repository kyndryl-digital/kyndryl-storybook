/**
 * Copyright Kyndryl, Inc. 2022
 */
 
import { html } from 'lit';
import { PREFIX_TAG } from '../../../global/settings/settings';
import { createOptionsArray } from '../../../global/mixins/global';
import '../eyebrow';
import '../../image/image';
import { THEMES } from '../../../global/defs/themes';

const optionsTheme = createOptionsArray(THEMES);

export default {
  title: 'Web Components/Eyebrow',
  component: `${PREFIX_TAG}-eyebrow`,
  argTypes: {
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
    <kd-eyebrow
    theme="${args.theme}"
    >   
      Eyebrow Text
    </kd-eyebrow>
  `;
};

export const eyebrow = Template.bind({});
