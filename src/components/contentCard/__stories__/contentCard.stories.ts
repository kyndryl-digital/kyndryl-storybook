import { html } from 'lit';
import { settings } from '../../../global/settings';
import '../contentCard';

export default {
  title: 'Web Components/Content Card',
  component: `${settings.tag_prefix}-content-card`,
  argTypes: {
    youtubeId: {
      control: { type: 'text' },
    },
    image: {
      control: { type: 'text' },
    },
    imageAltText: {
      control: { type: 'text' },
    },
    title: {
      control: { type: 'text' },
    },
    titleSize: {
      options: ['default', 'small'],
      control: { type: 'select' },
    },
    ctaLink: {
      control: { type: 'text' },
    },
    ctaTarget: {
      options: ['_blank', '_self', '_parent', '_top'],
      control: { type: 'select' },
    },
    ctaLabel: {
      control: { type: 'text' },
    },
    ctaIcon: {
      options: [
        'none',
        'arrow-right',
        'download',
        'pop-out',
      ],
      control: {
        type: 'select',
        labels: {
          none: 'None',
        },
      },
    },
  },
};

const Template = args => {
  return html`
    <kd-content-card
      youtubeId=${args.youtubeId}
      image=${args.image}
      imageAltText=${args.imageAltText}
      title=${args.title}
      titleSize=${args.titleSize}
      ctaLink="${args.ctaLink}"
      ctaTarget="${args.ctaTarget}"
      ctaLabel="${args.ctaLabel}"
      ctaIcon="${args.ctaIcon}"
    >
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </kd-content-card>
  `;
};

export const contentCard = Template.bind({});
contentCard.args = {
  youtubeId: 'Um8XEj-1_fY',
  title: 'Content Card Title',
  titleSize: 'default',
  ctaLink: '#',
  ctaLabel: 'CTA Label',
  ctaIcon: 'arrow-right',
};
