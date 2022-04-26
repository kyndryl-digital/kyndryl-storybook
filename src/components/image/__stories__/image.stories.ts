import { html } from 'lit';
import { PREFIX_TAG } from '../../../global/settings/settings';
import '../image';

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
      options: ['16:9', '2:1', '1:2', '4:3', '3:4', '1:1'],
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
      <kd-image image=${args.image} imageAltText=${args.imageAltText} aspectRatio=${args.aspectRatio}></kd-image>
    </div>
  `;
};

export const Image = Template.bind({});
Image.args = {
  image: 'https://s7d1.scene7.com/is/image/kyndryl/ls_windingriver_16x9?qlt=85&wid=1200&ts=1650983065999&dpr=off',
  imageAltText: 'image alt text',
  aspectRatio: '16:9',
};
