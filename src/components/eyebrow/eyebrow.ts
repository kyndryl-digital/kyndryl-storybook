/**
 * Copyright Kyndryl, Inc. 2022
 */

import { html, LitElement } from 'lit';
import { state, property, customElement } from 'lit/decorators.js';
import stylesheet from './eyebrow.scss';

import { PREFIX_CLASS, PREFIX_CLASS_THEME, PREFIX_TAG } from '../../global/settings/settings';
/**
 * Example web component
 */
@customElement(`${PREFIX_TAG}-eyebrow`)
export class kdEyebrow extends LitElement {
  static styles = [stylesheet];

  @property({ type: String }) bleed;
  @property() theme: THEMES;


  render() {


    return html`

      <div class="${PREFIX_CLASS}-eyebrow">
        <slot></slot>
        <div class="mini-border-bottom-red"></div>
      </div>


      
    `;
  }
}
