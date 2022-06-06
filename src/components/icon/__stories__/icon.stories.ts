/**
 * Copyright Kyndryl, Inc. 2022
 */
 
import { html } from 'lit';
import { PREFIX_TAG } from '../../../global/settings/settings';
import { ICON_IDS } from '../../../global/defs/iconIds';
import { createOptionsArray } from '../../../global/mixins/global';
import '../icon';

const optionsIcon = createOptionsArray(ICON_IDS);

export default {
  title: 'Web Components/Icon',
  component: `${PREFIX_TAG}-icon`,
  argTypes: {
    icon: {
      description: 'Icon ID',
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
  },
};

const Template = args => {
  return html`
    <kd-icon icon=${args.icon}></kd-icon>
  `;
};

export const Icons = () => {
  return html`
    <style>
      .demo-icon {
        align-items: center;
        display: inline-flex;
        flex-direction: column;
        font-size: 1.5rem;
        justify-content: center;
        margin: 1rem;
        text-align: center;
        width: 8rem;
      }
      .demo-icon--name {
        font-size: 0.75rem;
        margin-top: 1rem;
      }
    </style>
    ${optionsIcon.map((id) =>
      html`
       <div class="demo-icon">
         <kd-icon icon=${id}></kd-icon>
         <span class="demo-icon--name">${id}</span>
       </div>
      `
    )}
  `;
};

export const SingleIcon = Template.bind({});
SingleIcon.args = {
  icon: ICON_IDS.ARROW_RIGHT,
};
