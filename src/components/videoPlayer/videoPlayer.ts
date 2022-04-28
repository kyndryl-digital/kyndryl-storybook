import { html, LitElement, TemplateResult } from 'lit';
import { customElement, eventOptions, property, state, query } from 'lit/decorators.js';
import { PREFIX_TAG, PREFIX_CLASS } from '../../global/settings/settings';
import { classMap } from 'lit-html/directives/class-map.js';
import { ICON_IDS } from '../../global/defs/iconIds';
import '../button/button';
import stylesheet from './videoPlayer.scss';

@customElement(`${PREFIX_TAG}-video-player`)
export class VideoPlayer extends LitElement {
  static styles = [stylesheet];

  @property({ type: String }) video;
  @property({ type: String }) youtubeId;
  @property({ type: String }) title;
  @property({ type: String }) poster;
  @property({ type: String }) buttonLabel;
  @property({ type: String }) duration;

  @query('video') videoPlayer;

  @state()
  private _showPlayButton = true;

  private _classesVideoPlayer = classMap({
    [`${PREFIX_CLASS}-object-fit-cover`]: true,
    [`${PREFIX_CLASS}-position-absolute`]: true,
  });

  firstUpdated() {
    this.videoPlayer.addEventListener('ended', this._onVideoEnded.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.videoPlayer.removeEventListener('ended', this._onVideoEnded);
  }

  @eventOptions({ capture: true })
  private _onTriggerClick(e) {
    e?.preventDefault();
    this._playVideo();
  }

  @eventOptions({ passive: true })
  private _onVideoEnded() {
    this._resetVideo();
  }

  private _playVideo() {
    this._showPlayButton = false;
    this.videoPlayer?.setAttribute('controls','true');
    this.videoPlayer?.play();
  }

  private _resetVideo() {
    this._showPlayButton = true;
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

  protected _renderVideoPlayer(): TemplateResult | string | void {
    const videoUrl = `${this.video}${this.poster ? '' : '#t=0.01'}`;

    return html`
      ${this._showPlayButton ? html`
        <div class="${PREFIX_CLASS}-video-player--cta-container">
          <div class="${PREFIX_CLASS}-video-player--cta-button">
            <kd-button icon=${ICON_IDS.PLAY} @click="${e => this._onTriggerClick(e)}">
              <span class="${PREFIX_CLASS}-video-player--cta-label">${this.buttonLabel}</span>
              ${this.duration ? html`<span class="${PREFIX_CLASS}-video-player--cta-duration">(${this.duration})</span>` : null}
            </kd-button>
          </div>
        </div>
      ` : null}
      <video class="${this._classesVideoPlayer}" poster=${this.poster}>
        <source src=${videoUrl} type="video/mp4">
      </video>
    `;
  }

  protected _renderMedia(): TemplateResult | string | void {
    if (this.youtubeId) return this._renderYoutubePlayer();
    if (this.video) return this._renderVideoPlayer();
    return null;
  }

  render() {
    return html`
      <div class="${PREFIX_CLASS}-video-player ${PREFIX_CLASS}-aspect-ratio-16x9">
        ${this._renderMedia()}
      </div>
    `;
  }
}
