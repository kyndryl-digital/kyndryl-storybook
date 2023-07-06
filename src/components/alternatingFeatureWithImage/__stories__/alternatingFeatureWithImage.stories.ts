/**
 * Copyright Kyndryl, Inc. 2022
 */
 
import { html } from 'lit';
import { classMap } from 'lit-html/directives/class-map.js';
import { PREFIX_TAG } from '../../../global/settings/settings';
import { createOptionsArray } from '../../../global/mixins/global';
import { THEMES } from '../../../global/defs/themes';

import '../alternatingFeatureWithImage';
import '../../image/image';

const optionsTheme = createOptionsArray(THEMES);

export default {
  title: 'Web Components/Alternating Feature with Image',
  component: `${PREFIX_TAG}-alternating-feature-with-image`,
  argTypes: {
    reverse: {    
      control: {type: 'radio'},
      options: ['true', 'false'],
      description: 'Image followed by text'
    },

    bleedMedia: {
      control: {type: 'radio'},
      options: ['true', 'false'],
      description: 'Bleed the media slot to the edge of the browser'
    },
    title: {
      control: {type: 'text'},
      description: 'Title'
    },
    eyebrowText: {
      control: {type: 'text'},
      description: 'Eyebrow Text'
    },
    buttonLabel: {
      control: {type: 'text'},
      description: 'Button Label'
    },
    buttonLink: {
      control: {type: 'text'},
      description: 'Button Link'
    },
    theme: {
      options: [
        null,
        ...optionsTheme,
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
    <kd-alternating-feature-with-image 
      reverse="${args.reverse}"
      bleedmedia="${args.bleedMedia}"
      title="${args.title}"
      eyebrowtext="${args.eyebrowText}"
      buttonlabel="${args.buttonLabel}"
      buttonlink="${args.buttonLink}"
      theme="${args.theme}"
    >   
      <div slot="media">
        <kd-image image="https://s7d1.scene7.com/is/image/kyndryl/ls_windingriver_16x9?qlt=85&amp;wid=1200&amp;ts=1650983065999&amp;dpr=off" imagealttext="image alt text" aspectratio="4:3" fit="cover"></kd-image>
      </div>
      <div slot="text">
        
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu facilisi pellentesque morbi molestie sed ut at sed ac. Semper tortor feugiat non sem eget libero. Risus semper facilisis convallis vitae.</p>
      </div>
    </kd-alternating-feature-with-image>
  `;
};

export const alternatingFeatureWithImage = Template.bind({});
alternatingFeatureWithImage.args = {
  reverse: 'false',
  bleedMedia: 'false',
  eyebrowText: 'Lorem Ipsum',
  title: 'Lorem ipsum dolor sit amet',
  buttonLabel: 'Button text',
  buttonLink: 'https://www.kyndryl.com'
};
