/**
 * Copyright Kyndryl, Inc. 2022
 */

import { html } from 'lit';
import '../header-platform';
export default {
  title: 'HeaderPlatorm/Header',
};
 
const Template = param => {
  return html`
     <kyndryl-header-platform>
       <a href="#" slot="account-navigation">My account</a>
     </kyndryl-header-platform>
   `;
};
 
export const header = Template.bind({});
 