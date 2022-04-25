import { html } from 'lit';
import { PREFIX_CLASS, PREFIX_TAG } from '../../../global/settings/settings';
import { ICON_ID_ARROW_RIGHT, ICON_ID_DOWNLOAD, ICON_ID_POP_OUT } from '../../../global/settings/iconIds';
import '../contentBandContainer';
import '../../contentCard/contentCard';

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
      options: ['_blank', '_self', '_parent', '_top'],
      control: { type: 'select' },
    },
    titleCtaLabel: {
      control: { type: 'text' },
    },
    titleCtaIcon: {
      options: [
        'none',
        ICON_ID_ARROW_RIGHT,
        ICON_ID_DOWNLOAD,
        ICON_ID_POP_OUT,
      ],
      control: {
        type: 'select',
        labels: {
          none: 'None',
        },
      },
    },
    columnLayout: {
      options: ['1', '2', '2-1', '3', '4'],
      control: { type: 'select' },
    },
    theme: {
      options: ['', `${PREFIX_CLASS}-theme-dark-stone`, `${PREFIX_CLASS}-theme-cloud`],
      control: { type: 'select' },
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
        ctaIcon="${ICON_ID_ARROW_RIGHT}"
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </kd-content-card>
      <kd-content-card
        youtubeId="Um8XEj-1_fY"
        title="Content Card 2"
        titleSize="default"
        ctaLink="#"
        ctaLabel="CTA Label"
        ctaIcon="${ICON_ID_ARROW_RIGHT}"
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </kd-content-card>
      <kd-content-card
        image="http://s7d1.scene7.com/is/image/kyndryldev/Cloud-Services-1?ts=1646678856118&fmt=png8-alpha&dpr=off"
        title="Content Card 3"
        titleSize="default"
        ctaLink="#"
        ctaLabel="CTA Label"
        ctaIcon="${ICON_ID_ARROW_RIGHT}"
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </kd-content-card>
      <kd-content-card
        image="http://s7d1.scene7.com/is/image/kyndryldev/Cloud-Services-1?ts=1646678856118&fmt=png8-alpha&dpr=off"
        title="Content Card 4"
        titleSize="default"
        ctaLink="#"
        ctaLabel="CTA Label"
        ctaIcon="${ICON_ID_ARROW_RIGHT}"
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
  titleCtaLabel: 'CTA Label',
  titleCtaIcon: ICON_ID_ARROW_RIGHT,
  columnLayout: '2',
};
