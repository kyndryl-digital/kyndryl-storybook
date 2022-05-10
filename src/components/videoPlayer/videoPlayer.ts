import { html, LitElement, PropertyValues, TemplateResult } from 'lit';
import { customElement, eventOptions, property, state } from 'lit/decorators.js';
import { classMap } from 'lit-html/directives/class-map.js';
import { PREFIX_CLASS, PREFIX_CLASS_THEME, PREFIX_TAG } from '../../global/settings/settings';
import { ICON_IDS } from '../../global/defs/iconIds';
import { THEMES } from '../../global/defs/themes';
import { BUTTON_ICON_POSITION, BUTTON_SIZES } from '../button/defs';
import '../button/button';
import { VIDEO_TYPES } from './defs';
import stylesheet from './videoPlayer.scss';

@customElement(`${PREFIX_TAG}-video-player`)
export class VideoPlayer extends LitElement {
  static styles = [stylesheet];

  @property({ type: String }) video;
  @property({ type: String }) youtubeId;
  @property({ type: String }) title;
  @property({ type: String }) poster;
  @property({ type: String }) buttonLabel;
  @property() buttonSize: BUTTON_SIZES = BUTTON_SIZES.LARGE;
  @property() buttonIconPlay: ICON_IDS = ICON_IDS.PLAY_SOLID;
  @property() buttonIconPause: ICON_IDS = ICON_IDS.PAUSE;
  @property() buttonIconPosition: BUTTON_ICON_POSITION;
  @property() videoType: VIDEO_TYPES = VIDEO_TYPES.DEFAULT;
  @property() theme: THEMES = THEMES.DARK_STONE;

  @state()
  private _isPlaying;

  @state()
  private duration = null;

  private videoPlayer;

  private _classesVideoPlayer = classMap({
    [`${PREFIX_CLASS}-object-fit-cover`]: true,
    [`${PREFIX_CLASS}-position-absolute`]: true,
  });

  protected willUpdate(_changedProperties: PropertyValues) {
    super.willUpdate(_changedProperties);
    this._unbindEvents();
  }

  protected updated(_changedProperties: PropertyValues) {
    super.updated(_changedProperties);
    this.videoPlayer = this.renderRoot.querySelector('video');
    this._bindEvents();
  }

  connectedCallback() {
    super.connectedCallback();
    this._isPlaying = this.videoType !== VIDEO_TYPES.DEFAULT;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._unbindEvents();
  }

  @eventOptions({ passive: true })
  private _bindEvents() {
    this.videoPlayer?.addEventListener('ended', this._onVideoEnded);
    this.videoPlayer?.addEventListener('loadedmetadata', this._onVideoMetaDataLoaded);
  }

  @eventOptions({ passive: true })
  private _unbindEvents() {
    this.videoPlayer?.removeEventListener('ended', this._onVideoEnded);
  }

  @eventOptions({ capture: true })
  private _onTriggerClick(e) {
    e?.preventDefault();
    if (this._isPlaying) {
      this._pauseVideo();
    } else {
      this._playVideo();
    }
  }

  private _onVideoEnded = () => {
    if (this.videoType === VIDEO_TYPES.DEFAULT) {
      this._resetVideo();
    }
  };

  private _onVideoMetaDataLoaded = () => {
    if (this.videoType === VIDEO_TYPES.DEFAULT) {
      const durationSeconds = this.videoPlayer?.duration;
      if (durationSeconds) {
        this._setDuration(durationSeconds);
      }
    }
  };

  private _setDuration(totalSeconds) {
    let duration;

    if (totalSeconds) {
      if (totalSeconds < 3600) {
        // get minutes:seconds
        duration = new Date(totalSeconds * 1000).toISOString().slice(14, 19);
      } else {
        // get hours:minutes:seconds
        duration = new Date(totalSeconds * 1000).toISOString().slice(11, 19);
      }

      // trim leading zero
      if (duration.charAt(0) === '0') {
        duration = duration.slice(1);
      }

      this.duration = duration;
    }
  }

  private _playVideo() {
    this._isPlaying = true;
    if (this.videoType === VIDEO_TYPES.DEFAULT) {
      this.videoPlayer?.setAttribute('controls', 'true');
    }
    this.videoPlayer?.play();
  }

  private _pauseVideo() {
    this._isPlaying = false;
    this.videoPlayer?.pause();
  }

  private _resetVideo() {
    this._isPlaying = false;
    this.videoPlayer?.removeAttribute('controls');
    this.videoPlayer?.load();
  }

  protected _renderYoutubePlayer(): TemplateResult | string | void {
    return html`
      <iframe
        class="${this._classesVideoPlayer}"
        src="https://www.youtube.com/embed/${this.youtubeId}?enablejsapi=1"
        title=${this.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    `;
  }

  protected _renderDefaultVideo(): TemplateResult | string | void {
    const videoUrl = `${this.video}${this.poster ? '' : '#t=0.01'}`;
    return html`
      ${!this._isPlaying ? html`
        <div class="${PREFIX_CLASS}-video-player--cta-container">
          <div class="${PREFIX_CLASS}-video-player--cta-default-button">
            <kd-button
              size=${this.buttonSize}
              icon=${this.buttonIconPlay}
              iconPosition=${this.buttonIconPosition}
              @click="${e => this._onTriggerClick(e)}"
            >
              <span class="${PREFIX_CLASS}-video-player--cta-label">
                ${this.buttonLabel}
                ${this.duration ? html`<span class="${PREFIX_CLASS}-video-player--cta-duration">(${this.duration})</span>` : null}
              </span>
            </kd-button>
          </div>
        </div>
      ` : null}
      <video class="${this._classesVideoPlayer}" poster=${this.poster}>
        <source src=${videoUrl} type="video/mp4">
      </video>
    `;
  }

  protected _renderAutoplayVideo(): TemplateResult | string | void {
    return html`
      <video class="${this._classesVideoPlayer}" autoplay=${true} controls>
        <source src=${this.video} type="video/mp4">
      </video>
    `;
  }

  protected _renderBackgroundVideo(): TemplateResult | string | void {
    return html`
      <div class="${PREFIX_CLASS}-video-player--cta-container">
        <div class="${PREFIX_CLASS}-video-player--cta-bg-button">
          <kd-button
            size=${this.buttonSize}
            icon=${this._isPlaying ? this.buttonIconPause : this.buttonIconPlay}
            iconPosition=${this.buttonIconPosition}
            @click="${e => this._onTriggerClick(e)}"
          >
            <span class="${PREFIX_CLASS}-video-player--cta-label">${this.buttonLabel}</span>
          </kd-button>
        </div>
      </div>
      <video class="${this._classesVideoPlayer}" autoplay loop muted>
        <source src=${this.video} type="video/mp4">
      </video>
    `;
  }

  protected _renderMedia(): TemplateResult | string | void {
    if (this.youtubeId) return this._renderYoutubePlayer();
    if (this.video) {
      switch (this.videoType) {
        case VIDEO_TYPES.AUTOPLAY:
          return this._renderAutoplayVideo();
        case VIDEO_TYPES.BACKGROUND:
          return this._renderBackgroundVideo();
        case VIDEO_TYPES.DEFAULT:
        default:
          return this._renderDefaultVideo();
      }
    }
    return null;
  }

  render() {
    if (!this.theme) {
      this.theme = THEMES.DARK_STONE;
    }
    const classesContainer = classMap({
      [`${PREFIX_CLASS}-video-player`]: true,
      [`${PREFIX_CLASS}-aspect-ratio-16x9`]: true,
      [`${PREFIX_CLASS_THEME}-${this.theme}`]: this.theme,
    });

    return html`
      <div class="${classesContainer}">
        ${this._renderMedia()}
      </div>
    `;
  }
}
