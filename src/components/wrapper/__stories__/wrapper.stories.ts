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
        <kd-header>
          <a href="#" slot="primary-navigation">Lorem ipsum</a>
          <a href="#" slot="account-navigation">My account</a>
          <a href="#" slot="masthead">Dolor sit amet</a>
        </kd-header>
        <p>Your content here.</p>
      </kd-wrapper>
    `;
};

export const wrapper = Template.bind({});
