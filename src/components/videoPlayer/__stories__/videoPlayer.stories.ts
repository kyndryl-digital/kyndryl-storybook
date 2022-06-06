/**
 * Copyright Kyndryl, Inc. 2022
 */
 
import { html } from 'lit';
import { createOptionsArray } from '../../../global/mixins/global';
import { PREFIX_TAG } from '../../../global/settings/settings';
import { ICON_IDS } from '../../../global/defs/iconIds';
import { THEMES } from '../../../global/defs/themes';
import { BUTTON_SIZES, BUTTON_ICON_POSITION } from '../../button/defs';
import { VIDEO_TYPES } from '../defs';
import '../videoPlayer';

const optionsButtonSize = createOptionsArray(BUTTON_SIZES);
const optionsButtonIconPosition = createOptionsArray(BUTTON_ICON_POSITION);
const optionsTheme = createOptionsArray(THEMES);
const optionsVideoTypes = createOptionsArray(VIDEO_TYPES);

export default {
  title: 'Web Components/Video Player',
  component: `${PREFIX_TAG}-video-player`,
  argTypes: {
    video: {
      description: 'URL of MP4 video',
      control: { type: 'text' },
    },
    youtubeId: {
      description: 'YouTube Video ID (setting this overrides all other video options)',
      control: { type: 'text' },
    },
    title: {
      description: 'Video title displayed in tooltip on hover',
      control: { type: 'text' },
    },
    poster: {
      description: 'URL of poster image',
      control: { type: 'text' },
    },
    buttonLabelPlay: {
      description: 'Text to display in the play button',
      control: { type: 'text' },
    },
    buttonLabelPause: {
      description: 'Text to display in the pause button',
      control: { type: 'text' },
    },
    showButtonLabel: {
      description: 'Show play/pause label or use them for accessible aria label on the icon',
      control: { type: 'boolean' },
    },
    buttonSize: {
      description: 'Size of the play/pause button',
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
    buttonIconPlay: {
      description: 'Icon to display in the play button',
      options: [
        null,
        ICON_IDS.PLAY,
        ICON_IDS.PLAY_SOLID,
      ],
      control: {
        type: 'select',
        labels: {
          null: 'none',
        },
      },
    },
    buttonIconPause: {
      description: 'Icon to display in the pause button (background video type only)',
      options: [
        null,
        ICON_IDS.PAUSE,
      ],
      control: {
        type: 'select',
        labels: {
          null: 'none',
        },
      },
    },
    buttonIconPosition: {
      description: 'Icon position relative to button label (center for icon only button)',
      options: [
        ...optionsButtonIconPosition,
      ],
      control: {
        type: 'select',
      },
    },
    videoType: {
      description: 'Type of MP4 video player',
      options: [
        ...optionsVideoTypes,
      ],
      control: {
        type: 'select',
      }
    },
    theme: {
      description: 'Color theme for play/pause button',
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
      buttonLabelPlay=${args.buttonLabelPlay}
      buttonLabelPause=${args.buttonLabelPause}
      showButtonLabel=${args.showButtonLabel}
      buttonSize=${args.buttonSize}
      buttonIconPlay=${args.buttonIconPlay}
      buttonIconPause=${args.buttonIconPause}
      buttonIconPosition=${args.buttonIconPosition}
      videoType=${args.videoType}
      theme=${args.theme}
    ></kd-video-player>
  `;
};

export const Default = Template.bind({});
Default.args = {
  video: 'https://s7d1.scene7.com/is/content/kyndryl/5.%20MS-Launch-Social-1080.captions',
  title: 'Video Title',
  buttonLabelPlay: 'Play',
  showButtonLabel: true,
  buttonSize: BUTTON_SIZES.LARGE,
  buttonIconPlay: ICON_IDS.PLAY_SOLID,
  buttonIconPause: ICON_IDS.PAUSE,
  buttonIconPosition: BUTTON_ICON_POSITION.RIGHT,
  theme: THEMES.DARK_STONE,
  videoType: VIDEO_TYPES.DEFAULT,
};

export const DefaultPoster = Template.bind({});
DefaultPoster.args = {
  video: 'https://s7d1.scene7.com/is/content/kyndryl/5.%20MS-Launch-Social-1080.captions',
  title: 'Video Title',
  poster: 'https://s7d1.scene7.com/is/image/kyndryl/NicolasSekkaki_AppsDataAI_16x9?qlt=85&wid=600&ts=1649881438992&dpr=off',
  buttonLabelPlay: 'Play',
  showButtonLabel: true,
  buttonSize: BUTTON_SIZES.LARGE,
  buttonIconPlay: ICON_IDS.PLAY_SOLID,
  buttonIconPause: ICON_IDS.PAUSE,
  buttonIconPosition: BUTTON_ICON_POSITION.RIGHT,
  theme: THEMES.DARK_STONE,
  videoType: VIDEO_TYPES.DEFAULT,
};

export const VideoAutoplay = Template.bind({});
VideoAutoplay.args = {
  video: 'https://s7d1.scene7.com/is/content/kyndryl/5.%20MS-Launch-Social-1080.captions',
  title: 'Video Title',
  theme: THEMES.DARK_STONE,
  videoType: VIDEO_TYPES.AUTOPLAY,
};

export const VideoBackground = Template.bind({});
VideoBackground.args = {
  video: 'https://s7d1.scene7.com/is/content/kyndryl/5.%20MS-Launch-Social-1080.captions',
  title: 'Video Title',
  buttonLabelPlay: 'Play video',
  buttonLabelPause: 'Pause video',
  showButtonLabel: false,
  buttonSize: BUTTON_SIZES.SMALL,
  buttonIconPlay: ICON_IDS.PLAY_SOLID,
  buttonIconPause: ICON_IDS.PAUSE,
  buttonIconPosition: BUTTON_ICON_POSITION.CENTER,
  theme: THEMES.DARK_STONE,
  videoType: VIDEO_TYPES.BACKGROUND,
};

export const YoutubeVideo = Template.bind({});
YoutubeVideo.args = {
  youtubeId: 'Um8XEj-1_fY',
};
