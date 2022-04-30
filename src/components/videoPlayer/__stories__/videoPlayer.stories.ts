import { html } from 'lit';
import { createOptionsArray } from '../../../global/mixins/global';
import { PREFIX_TAG } from '../../../global/settings/settings';
import { ICON_IDS } from '../../../global/defs/iconIds';
import { THEMES } from '../../../global/defs/themes';
import { BUTTON_SIZES } from '../../button/defs';
import '../videoPlayer';

const optionsButtonSize = createOptionsArray(BUTTON_SIZES);
const optionsTheme = createOptionsArray(THEMES);

export default {
  title: 'Web Components/Video Player',
  component: `${PREFIX_TAG}-video-player`,
  argTypes: {
    video: {
      control: { type: 'text' },
    },
    youtubeId: {
      control: { type: 'text' },
    },
    title: {
      control: { type: 'text' },
    },
    poster: {
      control: { type: 'text' },
    },
    buttonLabel: {
      control: { type: 'text' },
    },
    buttonSize: {
      options: [
        null,
        ...optionsButtonSize,
      ],
      control: {
        type: 'select',
        labels: {
          null: 'default',
        },
      },
    },
    buttonIcon: {
      options: [
        null,
        ICON_IDS.PLAY,
      ],
      control: {
        type: 'select',
        labels: {
          null: 'none',
        },
      },
    },
    duration: {
      control: { type: 'text' },
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
  }
};

const Template = args => {
  return html`
    <kd-video-player
      video=${args.video}
      youtubeId=${args.youtubeId}
      title=${args.title}
      poster=${args.poster}
      buttonLabel=${args.buttonLabel}
      buttonSize=${args.buttonSize}
      buttonIcon=${args.buttonIcon}
      duration=${args.duration}
      theme=${args.theme}
    ></kd-video-player>
  `;
};

export const YoutubeVideo = Template.bind({});
YoutubeVideo.args = {
  youtubeId: 'Um8XEj-1_fY',
  title: 'Video Title',
  theme: THEMES.DARK_STONE,
};

export const Video = Template.bind({});
Video.args = {
  video: 'https://s7d1.scene7.com/is/content/kyndryl/5.%20MS-Launch-Social-1080.captions',
  title: 'Video Title',
  buttonLabel: 'Play',
  buttonSize: BUTTON_SIZES.LARGE,
  buttonIcon: ICON_IDS.PLAY,
  duration: '1:29',
  theme: THEMES.DARK_STONE,
};

export const VideoPoster = Template.bind({});
VideoPoster.args = {
  video: 'https://s7d1.scene7.com/is/content/kyndryl/5.%20MS-Launch-Social-1080.captions',
  title: 'Video Title',
  poster: 'https://s7d1.scene7.com/is/image/kyndryl/NicolasSekkaki_AppsDataAI_16x9?qlt=85&wid=600&ts=1649881438992&dpr=off',
  buttonLabel: 'Play',
  buttonSize: BUTTON_SIZES.LARGE,
  buttonIcon: ICON_IDS.PLAY,
  duration: '1:29',
  theme: THEMES.DARK_STONE,
};
