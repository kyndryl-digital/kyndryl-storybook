/**
 * Copyright Kyndryl, Inc. 2022
 */
 
import { html } from 'lit';
import { PREFIX_TAG } from '../../../global/settings/settings';

import '../promoSplit';
import '../../image/image';



export default {
  title: 'Web Components/Promo Split',
  component: `${PREFIX_TAG}-promo-split`,
  argTypes: {

    bleedSlotOne: {
      options: ['Yes', 'No'],
      control: {type: 'radio'},
      defaultValue: 'No',
      description: 'Bleed slot one to the edge of the browser'

    },
    bleedSlotTwo: {
      options: ['Yes', 'No'],
      control: {type: 'radio'},
      defaultValue: 'No',
      description: 'Bleed slot two to the edge of the browser'
    },
    topSlotWhenStacked: {
      options: ['One', 'Two'],
      control: {type: 'radio'},
      defaultValue: 'One',
      description: 'Which slot on top when stacked?'
    }
    

    
  },
};

const Template = args => {
  

  return html`
    <kd-promo-split 
    bleedSlotOne=${args.bleedSlotOne}
    bleedSlotTwo=${args.bleedSlotTwo}
    topSlotWhenStacked=${args.topSlotWhenStacked}
    >   
      <div slot="1">

        <kd-image image="https://s7d1.scene7.com/is/image/kyndryl/ls_windingriver_16x9?qlt=85&amp;wid=1200&amp;ts=1650983065999&amp;dpr=off" imagealttext="image alt text" aspectratio="16:9" fit="cover"></kd-image>
      </div>
      <div slot="2">
      <kd-eyebrow href="test.html">Lorem ipsum</kd-eyebrow>
      <h3>Lorem ipsum dolor sit amet</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu facilisi pellentesque morbi molestie sed ut at sed ac. Semper tortor feugiat non sem eget libero. Risus semper facilisis convallis vitae.</p>
      <kd-button type="text" size="small" icon="chevron-right" iconposition="right" description="" href="http://kyndryl.com" target="_self" theme="">Button Text</kd-button>
      <a href="">Button label</a>
      </div>
    </kd-promo-split>
  `;
};

export const promoSplit = Template.bind({});
