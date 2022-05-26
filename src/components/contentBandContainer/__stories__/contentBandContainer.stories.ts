/**
 * Copyright Kyndryl, Inc. 2022
 */
 
import { html } from 'lit';
import { PREFIX_TAG } from '../../../global/settings/settings';
import { ICON_IDS } from '../../../global/defs/iconIds';
import { LINK_TARGETS } from '../../../global/defs/linkTargets';
import { THEMES } from '../../../global/defs/themes';
import { createOptionsArray } from '../../../global/mixins/global';
import '../contentBandContainer';
import '../../contentCard/contentCard';

const optionsLinkTargets = createOptionsArray(LINK_TARGETS);
const optionsTheme = createOptionsArray(THEMES);

export default {
  title: 'Web Components/Content Band Container',
  component: `${PREFIX_TAG}-content-band-container`,
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    titleSize: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'select' },
    },
    titleCtaLink: {
      control: { type: 'text' },
    },
    titleCtaTarget: {
      options: [...optionsLinkTargets],
      control: { type: 'select' },
    },
    titleCtaLabel: {
      control: { type: 'text' },
    },
    titleCtaIcon: {
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
    columnLayout: {
      options: ['1', '2', '2-1', '3', '4'],
      control: { type: 'select' },
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

export const ContentCards = args => {
  return html`
    <kd-content-band-container 
      title=${args.title} 
      titleSize=${args.titleSize}
      titleCtaLink="${args.titleCtaLink}"
      titleCtaTarget="${args.titleCtaTarget}"
      titleCtaLabel="${args.titleCtaLabel}"
      titleCtaIcon="${args.titleCtaIcon}"
      columnLayout=${args.columnLayout}
      theme=${args.theme}
    >
      <div slot="description">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      
      <kd-content-card
        youtubeId="Um8XEj-1_fY"
        title="Content Card 1"
        titleSize="default"
        ctaLink="#"
        ctaLabel="CTA Label"
        ctaIcon="${ICON_IDS.ARROW_RIGHT}"
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </kd-content-card>
      <kd-content-card
        youtubeId="Um8XEj-1_fY"
        title="Content Card 2"
        titleSize="default"
        ctaLink="#"
        ctaLabel="CTA Label"
        ctaIcon="${ICON_IDS.ARROW_RIGHT}"
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </kd-content-card>
      <kd-content-card
        image="http://s7d1.scene7.com/is/image/kyndryldev/Cloud-Services-1?ts=1646678856118&fmt=png8-alpha&dpr=off"
        title="Content Card 3"
        titleSize="default"
        ctaLink="#"
        ctaLabel="CTA Label"
        ctaIcon="${ICON_IDS.ARROW_RIGHT}"
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </kd-content-card>
      <kd-content-card
        image="http://s7d1.scene7.com/is/image/kyndryldev/Cloud-Services-1?ts=1646678856118&fmt=png8-alpha&dpr=off"
        title="Content Card 4"
        titleSize="default"
        ctaLink="#"
        ctaLabel="CTA Label"
        ctaIcon="${ICON_IDS.ARROW_RIGHT}"
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </kd-content-card>
    </kd-content-band-container>
  `;
};

ContentCards.args = {
  title: 'Content Band Container with Content Cards',
  titleSize: 'h1',
  titleCtaLink: '#',
  titleCtaTarget: LINK_TARGETS.SELF,
  titleCtaLabel: 'CTA Label',
  titleCtaIcon: ICON_IDS.ARROW_RIGHT,
  columnLayout: '2',
  theme: null,
};
