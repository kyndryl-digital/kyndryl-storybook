/**
 * Copyright Kyndryl, Inc. 2022
 */

import { html } from 'lit';
import { PREFIX_TAG } from '../../../global/settings/settings';
import '../wrapper';

export default {
  title: 'Web Components/Wrapper',
  component: `${PREFIX_TAG}-wrapper`,
};

const Template = args => {
  return html`
      <kd-wrapper>
        <p>Your content here.</p>
      </kd-wrapper>
    `;
};

export const wrapper = Template.bind({});
