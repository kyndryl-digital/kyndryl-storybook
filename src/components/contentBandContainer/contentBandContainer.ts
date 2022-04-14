import { html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { settings } from '../../global/settings';
import stylesheet from './contentBandContainer.scss';

@customElement(`${settings.tag_prefix}-content-band-container`)
export class kdContentBandContainer extends LitElement {
  static styles = [stylesheet];

  @property({ type: String }) title;
  @property({ type: String }) titleSize;
  @property({ type: String }) titleCtaLink;
  @property({ type: String }) titleCtaTarget;
  @property({ type: String }) titleCtaLabel;
  @property({ type: String }) titleCtaIcon;
  @property({ type: String }) columnLayout = '2';

  protected _renderTitle(): TemplateResult | string | void {
    switch (this.titleSize) {
    case 'h2':
      return html`<h2 class="${settings.class_prefix}-content-band-container__title ${settings.class_prefix}-h2">${this.title}</h2>`;
    case 'h3':
      return html`<h3 class="${settings.class_prefix}-content-band-container__title ${settings.class_prefix}-h3">${this.title}</h3>`;
    case 'h4':
      return html`<h4 class="${settings.class_prefix}-content-band-container__title ${settings.class_prefix}-h4">${this.title}</h4>`;
    case 'h5':
      return html`<h5 class="${settings.class_prefix}-content-band-container__title ${settings.class_prefix}-h5">${this.title}</h5>`;
    case 'h6':
      return html`<h6 class="${settings.class_prefix}-content-band-container__title ${settings.class_prefix}-h6">${this.title}</h6>`;
    case 'h1':
    default:
      return html`<h1 class="${settings.class_prefix}-content-band-container__title ${settings.class_prefix}-h1">${this.title}</h1>`;
    }
  }

  protected _renderCta(): TemplateResult | string | void {
    if (this.titleCtaLink) {
      return html`
        <div class="${settings.class_prefix}-content-band-container__action-container">
          <kd-button
            icon=${this.titleCtaIcon}
            href=${this.titleCtaLink}
            target=${this.titleCtaTarget}
          >${this.titleCtaLabel}</kd-button>
        </div>
      `;
    }

    return null;
  }

  render() {
    return html`
      <div class="${settings.class_prefix}-content-band-container">
        <div class="${settings.class_prefix}-content-band-container__header">
          <div class="${settings.class_prefix}-content-band-container__desc-container">
            ${this._renderTitle()}
            <div class="${settings.class_prefix}-content-band-container__description">
              <slot name="description"></slot>
            </div>
          </div>
          ${this._renderCta()}
        </div>
        <div class="${settings.class_prefix}-content-band-container__bottom ${settings.class_prefix}-content-band-container__bottom--${this.columnLayout}-col">
          <slot></slot>
        </div>
      </div>
    `;
  }
}
