import { html } from 'lit';
import { PREFIX_CLASS, PREFIX_TAG } from '../../../global/settings/settings';
import { ICON_IDS } from '../../../global/defs/iconIds';
import '../contentCard';

export default {
  title: 'Web Components/Content Card',
  component: `${PREFIX_TAG}-content-card`,
  argTypes: {
    youtubeId: {
      control: { type: 'text' },
    },
    videoTitle: {
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
        ICON_IDS.ARROW_RIGHT,
        ICON_IDS.DOWNLOAD,
        ICON_IDS.POP_OUT,
      ],
      control: {
        type: 'select',
        labels: {
          none: 'None',
        },
      },
    },
    theme: {
      options: ['', `${PREFIX_CLASS}-theme-dark-stone`, `${PREFIX_CLASS}-theme-cloud`],
      control: { type: 'select' },
    },
  },
};

const Template = args => {
  return html`
    <kd-content-card
      youtubeId=${args.youtubeId}
      videoTitle=${args.videoTitle}
      image=${args.image}
      imageAltText=${args.imageAltText}
      title=${args.title}
      titleSize=${args.titleSize}
      ctaLink="${args.ctaLink}"
      ctaTarget="${args.ctaTarget}"
      ctaLabel="${args.ctaLabel}"
      ctaIcon="${args.ctaIcon}"
      theme="${args.theme}"
    >
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </kd-content-card>
  `;
};

export const contentCard = Template.bind({});
contentCard.args = {
  youtubeId: 'Um8XEj-1_fY',
  videoTitle: 'Video Title',
  title: 'Content Card Title',
  titleSize: 'default',
  ctaLink: '#',
  ctaLabel: 'CTA Label',
  ctaIcon: ICON_IDS.ARROW_RIGHT,
};
