/**
 * Copyright Kyndryl, Inc. 2022
 */
import { html } from 'lit';
import { PREFIX_CLASS, PREFIX_TAG } from '../../../global/settings/settings';
import '../kyndryl-header';
export default {
  title: 'Patterns/ Kyndryl Header',
};
 
const Template = args => {
  return html`
     <kyndryl-header>
     </kyndryl-header>
   `;
};
 
export const KyndrylHeader = Template.bind({});
 
 