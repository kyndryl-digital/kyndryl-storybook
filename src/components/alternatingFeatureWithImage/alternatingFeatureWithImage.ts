/**
 * Copyright Kyndryl, Inc. 2022
 */

import { html, LitElement } from 'lit';
import { state, property, customElement } from 'lit/decorators.js';
import stylesheet from './alternatingFeatureWithImage.scss';
import { classMap } from 'lit-html/directives/class-map.js';
import { THEMES } from '../../global/defs/themes';

import { PREFIX_CLASS, PREFIX_CLASS_THEME, PREFIX_TAG } from '../../global/settings/settings';
/**
 * Example web component
 */
@customElement(`${PREFIX_TAG}-alternating-feature-with-image`)
export class kdAlternatingFeatureWithImage extends LitElement {
  static styles = [stylesheet];

  @property({ type: String }) reverse;
  @property({ type: String }) bleedMedia;
  @property({ type: String }) buttonLabel;
  @property({ type: String }) buttonLink;
  @property({ type: String }) title;
  @property({ type: String }) eyebrowText;

  @property() theme: THEMES;

  get eyebrowTemplate() {
    if(this.eyebrowText) {
      return html`
        <kd-eyebrow theme="${this.theme}">${this.eyebrowText}</kd-eyebrow>
      `;
    }
    else {
      return null;
    }
  }

  get ctaTemplate() {
    if(this.buttonLabel) {
      return html`
      <kd-button type="text" size="small" icon="chevron-right" iconposition="right" description="" href="${this.buttonLink}" target="_self" theme="${this.theme}">${this.buttonLabel}</kd-button>
      `;
    }
    else {
      return null;
    }
  }

  get slot1Template() {
    if(this.reverse === 'true') {
      if(this.bleedMedia === 'true') {
        return html`
        <div class="container-one container-media">
            <slot name="media"></slot>
          </div>
            `;
      } else {
        return html`
        <div class="full-bleed-internal-container container-one container-media">
              <div class="kd-grid-container">
                <div class="kd-max-col-6 kd-xlg-col-6 kd-lg-col-6 kd-md-col-12 kd-sm-col-8 kd-xs-col-4 internal-media-slot">
                  <slot name="media"></slot>	
                </div>
              </div>

          </div>
          
              `;
      }
    } else {
      return html`
      <div class="full-bleed-internal-container container-one container-text">
              <div class="kd-grid-container">
                <div class="kd-max-col-6 kd-xlg-col-6 kd-lg-col-6 kd-md-col-12 kd-sm-col-8 kd-xs-col-4 internal-text-slot">
                ${this.textCard}
                </div>
              </div>
      `;
    }
  }

  get slot2Template() {
    if(this.reverse === 'true') {
      return html`

      <div class="full-bleed-internal-container container-two container-text">
              <div class="kd-grid-container">
              <div class="kd-max-col-6 kd-xlg-col-6 kd-lg-col-6 kd-md-col-0 kd-sm-col-0 kd-xs-col-0"></div>
                <div class="kd-max-col-6 kd-xlg-col-6 kd-lg-col-6 kd-md-col-12 kd-sm-col-8 kd-xs-col-4 internal-text-slot">
                ${this.textCard}
                </div>
              </div>

          </div>
        `;
    }
    else {
      if(this.bleedMedia === 'true') {
        return html`
          <div class="container-two container-media">
            <slot name="media"></slot>	
          </div>`;
      } else {
        return html`

        <div class="full-bleed-internal-container container-two container-media">
              <div class="kd-grid-container">
              <div class="kd-max-col-6 kd-xlg-col-6 kd-lg-col-6 kd-md-col-0 kd-sm-col-0 kd-xs-col-0"></div>
                <div class="kd-max-col-6 kd-xlg-col-6 kd-lg-col-6 kd-md-col-12 kd-sm-col-8 kd-xs-col-4 internal-media-slot">
                  <slot name="media"></slot>	
                </div>
              </div>

          </div>
          
              `;
      }
    }
  }

  get textCard() {
    return html`
      ${this.eyebrowTemplate}
      <h3 class="headline-06-light">${this.title}</h3>
      <slot name="text"></slot>
      ${this.ctaTemplate}
    `;
  }


  render() {
    const classesContainer = classMap({
      [`${PREFIX_CLASS}-alternating-feature-with-image`]: true,
      [`${PREFIX_CLASS_THEME}-${this.theme}`]: this.theme,
    });

    if(this.reverse === 'true') {
      return html`
        <div class="${classesContainer}">
          <div class="full-bleed-grid">  
            ${this.slot1Template}      
            ${this.slot2Template}      
          </div>
          </div>
        </div>
      `;
    } else {  
      return html`
        <div class="${classesContainer}">
          <div class="full-bleed-grid">  
              ${this.slot2Template}      
              ${this.slot1Template}
          </div>
          </div>
        </div>
      `;
    }
  }
}
