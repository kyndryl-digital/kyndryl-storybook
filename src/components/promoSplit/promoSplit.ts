/**
 * Copyright Kyndryl, Inc. 2022
 */

import { html, LitElement } from 'lit';
import { state, property, customElement } from 'lit/decorators.js';
import stylesheet from './promoSplit.scss';

import { PREFIX_CLASS, PREFIX_CLASS_THEME, PREFIX_TAG } from '../../global/settings/settings';
/**
 * Example web component
 */
@customElement(`${PREFIX_TAG}-promo-split`)
export class kdPromoSplit extends LitElement {
  static styles = [stylesheet];

  @property({ type: String }) bleedSlotOne;
  @property({ type: String }) bleedSlotTwo;
  @property({ type: String }) topSlotWhenStacked;
  @property() theme: THEMES;

  get slot1Template() {
    if(this.bleedSlotOne == 'no') {
      return html`
          <div class="full-bleed-internal-container container-one">
            <div class="kd-grid-container">
              <div class="kd-max-col-6 kd-xlg-col-6 kd-lg-col-6 kd-md-col-12 kd-sm-col-8 kd-xs-col-4">
                <slot name="1"></slot>	
              </div>
            </div>

        </div>`;
    } else {
      return html`
        <div class="container-one">
          <slot name="1"></slot>
        </div>
            `;
    }
  }

  get slot2Template() {
    if(this.bleedSlotTwo == 'no') {
      return html`
          <div class="full-bleed-internal-container container-two">
            <div class="kd-grid-container">
            <div class="kd-max-col-6 kd-xlg-col-6 kd-lg-col-6 kd-md-col-0 kd-sm-col-0 kd-xs-col-0"></div>
              <div class="kd-max-col-6 kd-xlg-col-6 kd-lg-col-6 kd-md-col-12 kd-sm-col-8 kd-xs-col-4">
                <slot name="2"></slot>	
              </div>
            </div>

        </div>`;
    } else {
      return html`
        <div class="container-two">
          <slot name="2"></slot>	
        </div>
            `;
    }
  }


  render() {
    
    let bleedClass = 'bleed-none';
    this.bleedSlotOne = this.bleedSlotOne.toLowerCase();
    this.bleedSlotTwo = this.bleedSlotTwo.toLowerCase();
    this.topSlotWhenStacked = this.topSlotWhenStacked.toLowerCase();
    
    if(this.bleedSlotOne == 'yes' && this.bleedSlotTwo == 'no') {
      bleedClass = 'bleed-one';
    } else if (this.bleedSlotOne == 'no' && this.bleedSlotTwo == 'yes') {
      bleedClass = 'bleed-two';
    } else if (this.bleedSlotOne == 'yes' && this.bleedSlotTwo == 'nes') {
      bleedClass = 'bleed-both';
    } 

    let stackingClass = 'stack-one';
    if(this.topSlotWhenStacked == 'two') {
      stackingClass = 'stack-two';
    }


    return html`
      <div class="${PREFIX_CLASS}-promo-split ${bleedClass} ${stackingClass}">
        <div class="full-bleed-grid">
          
            ${this.slot1Template}
          
            ${this.slot2Template}

        </div>
        </div>
      </div>
    `;
  }
}
