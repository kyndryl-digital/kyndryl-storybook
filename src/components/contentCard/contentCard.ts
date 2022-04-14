import { html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { settings } from '../../global/settings';
import '../button/button';
import stylesheet from './contentCard.scss';

@customElement(`${settings.tag_prefix}-content-card`)
export class kdContentCard extends LitElement {
  static styles = [stylesheet];

  @property({ type: String }) youtubeId;
  @property({ type: String }) image;
  @property({ type: String }) imageAltText = '';
  @property({ type: String }) title;
  @property({ type: String }) titleSize;
  @property({ type: String }) ctaLink;
  @property({ type: String }) ctaTarget;
  @property({ type: String }) ctaLabel;
  @property({ type: String }) ctaIcon;

  protected _renderCta(): TemplateResult | string | void {
    if (this.ctaLink) {
      return html`
        <div class="${settings.class_prefix}-content-card__action-container">
          <kd-button
            icon=${this.ctaIcon}
            href=${this.ctaLink}
            target=${this.ctaTarget}
          >${this.ctaLabel}</kd-button>
        </div>
      `;
    }

    return null;
  }

  protected _renderMedia(): TemplateResult | string | void {
    if (this.youtubeId) {
      return html`
        <div class="${settings.class_prefix}-content-card__youtube">
          <iframe 
            src="https://www.youtube.com/embed/${this.youtubeId}?enablejsapi=1" 
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>
      `;
    }

    if (this.image) {
      return html`
        <div class="${settings.class_prefix}-content-card__image">
          <img src=${this.image} alt=${this.imageAltText} />
        </div>
      `;
    }

    return null;
  }

  render() {
    return html`
      <div class="${settings.class_prefix}-content-card">
        <div class="${settings.class_prefix}-content-card__content">
          <div class="${settings.class_prefix}-content-card__content-inner">
            ${this._renderMedia()}
            <h2 class="${settings.class_prefix}-content-card__title ${settings.class_prefix}-h2 ${this.titleSize}">
               <span>${this.title}</span>
            </h2>
            <span class="${settings.class_prefix}-content-card__hr"></span>
            <div class="${settings.class_prefix}-content-card__description">
              <slot></slot>
            </div>
            ${this._renderCta()}
          </div>
        </div>
      </div>
    `;
  }
}
