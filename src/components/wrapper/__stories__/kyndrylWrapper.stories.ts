/**
 * Copyright Kyndryl, Inc. 2022
 */

import { html } from 'lit';
import { PREFIX_TAG } from '../../../global/settings/settings';
import '../kyndrylWrapper';

export default {
  title: 'Legacy/Wrapper',
  component: `kyndryl-wrapper`,
};

const Template = args => {
  return html`
      <kyndryl-wrapper>
        <p>Your content here.</p>
      </kyndryl-wrapper>
    `;
};

export const wrapper = Template.bind({});
