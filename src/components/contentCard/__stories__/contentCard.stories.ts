/**
 * Copyright Kyndryl, Inc. 2022
 */
 
import { html } from 'lit';
import { PREFIX_TAG } from '../../../global/settings/settings';
import { ICON_IDS } from '../../../global/defs/iconIds';
import { LINK_TARGETS } from '../../../global/defs/linkTargets';
import { THEMES } from '../../../global/defs/themes';
import { createOptionsArray } from '../../../global/mixins/global';
import '../contentCard';

const optionsLinkTargets = createOptionsArray(LINK_TARGETS);
const optionsTheme = createOptionsArray(THEMES);

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
      options: [...optionsLinkTargets],
      control: { type: 'select' },
    },
    ctaLabel: {
      control: { type: 'text' },
    },
    ctaIcon: {
      options: [
        null,
        ICON_IDS.ARROW_RIGHT,
        ICON_IDS.DOWNLOAD,
        ICON_IDS.POP_OUT,
      ],
      control: {
        type: 'select',
        labels: {
          null: 'none',
        },
      },
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
  ctaTarget: LINK_TARGETS.SELF,
  ctaLabel: 'CTA Label',
  ctaIcon: ICON_IDS.ARROW_RIGHT,
  theme: null,
};
