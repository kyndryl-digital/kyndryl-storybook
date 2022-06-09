/**
 * Copyright Kyndryl, Inc. 2022
 */

import { html } from 'lit';
import '../kyndrylHeader';
export default {
  title: 'Legacy/Header',
};
 
const Template = args => {
  return html`
     <kyndryl-header>
     </kyndryl-header>
   `;
};
 
export const header = Template.bind({});
