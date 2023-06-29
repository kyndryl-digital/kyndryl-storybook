/**
 * Copyright Kyndryl, Inc. 2022
 */
 
import { html } from 'lit';
import { PREFIX_TAG } from '../../../global/settings/settings';
import { createOptionsArray } from '../../../global/mixins/global';
import { IMAGE_ASPECT_RATIOS, IMAGE_FIT } from '../defs';
import '../image';

const optionsAspectRatio = createOptionsArray(IMAGE_ASPECT_RATIOS);
const optionsFit = createOptionsArray(IMAGE_FIT);

export default {
  title: 'Web Components/Image',
  component: `${PREFIX_TAG}-image`,
  argTypes: {
    image: {
      control: { type: 'text' },
    },
    imageAltText: {
      control: { type: 'text' },
    },
    aspectRatio: {
      options: [...optionsAspectRatio],
      control: { type: 'select' },
    },
    fit: {
      options: [...optionsFit],
      control: { type: 'select' },
    }
  }
};

const Template = args => {
  return html`
    <style>
      .demo-only {
        display: block;
        height: 400px;
        max-height: 100%;
        max-width: 100%;
        width: 400px;
      }
    </style>
    <div class="demo-only">
      <kd-image 
        image=${args.image}
        imageAltText=${args.imageAltText}
        aspectRatio=${args.aspectRatio}
        fit=${args.fit}
      ></kd-image>
    </div>
  `;
};

export const Image = Template.bind({});
Image.args = {
  image: 'https://s7d1.scene7.com/is/image/kyndryl/ls_ricefieldaerial_16x9',
  imageAltText: 'image alt text',
  aspectRatio: IMAGE_ASPECT_RATIOS.RATIO_16_9,
  fit: IMAGE_FIT.COVER,
};
