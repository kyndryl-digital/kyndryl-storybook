/**
 * Copyright Kyndryl, Inc. 2022
 */
 
import { html } from 'lit';
import { PREFIX_TAG } from '../../../global/settings/settings';

import '../eyebrow';
import '../../image/image';



export default {
  title: 'Web Components/Eyebrow',
  component: `${PREFIX_TAG}-eyebrow`,
};

const Template = args => {

  return html`
    <kd-eyebrow>   
      Eyebrow Text
    </kd-eyebrow>
  `;
};

export const eyebrow = Template.bind({});
