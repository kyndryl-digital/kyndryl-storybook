/**
 * Copyright Kyndryl, Inc. 2022
 */

import { html } from 'lit';
import { PREFIX_TAG } from '../../../global/settings/settings';
import '../header';
import '../megaMenu';
import '../../navItem/navItem';

export default {
  title: 'Web Components/Header',
  component: `${PREFIX_TAG}-header`,
};

const Template = args => {
  return html`
      <kd-header>

        <kd-mega-menu slot="primary-navigation">
          <kd-nav-item hasHoverEffect slot="trigger" hasIcon>Services</kd-nav-item>
          <div slot="content">Services Mega menu</div>
        </kd-mega-menu>

        <kd-mega-menu slot="primary-navigation">
          <kd-nav-item hasHoverEffect slot="trigger" hasIcon>Industries</kd-nav-item>
          <div slot="content">Industries Mega menu</div>
        </kd-mega-menu>

        <kd-mega-menu slot="primary-navigation">
          <kd-nav-item hasHoverEffect slot="trigger" hasIcon>About Us</kd-nav-item>
          <div slot="content">About Us Mega menu</div>
        </kd-mega-menu>

        <kd-nav-item hasHoverEffect slot="primary-navigation">News and Insights</kd-nav-item>
        <kd-nav-item hasHoverEffect slot="primary-navigation">Customer Stories</kd-nav-item>
        <kd-nav-item hasHoverEffect slot="primary-navigation">Careers</kd-nav-item>

      </kd-header>
    `;
};

export const header = Template.bind({});