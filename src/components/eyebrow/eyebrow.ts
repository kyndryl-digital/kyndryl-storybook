/**
 * Copyright Kyndryl, Inc. 2022
 */

import { html, LitElement } from 'lit';
import { state, property, customElement } from 'lit/decorators.js';
import stylesheet from './eyebrow.scss';

import { classMap } from 'lit-html/directives/class-map.js';
import { THEMES } from '../../global/defs/themes';

import { PREFIX_CLASS, PREFIX_CLASS_THEME, PREFIX_TAG } from '../../global/settings/settings';


@customElement(`${PREFIX_TAG}-eyebrow`)
export class kdEyebrow extends LitElement {
  static styles = [stylesheet];

  @property({ type: String }) bleed;
  @property() theme: THEMES;


  render() {

    const classesContainer = classMap({
      [`${PREFIX_CLASS}-eyebrow`]: true,
      [`${PREFIX_CLASS_THEME}-${this.theme}`]: this.theme,
    });
    return html`

      <div class="${classesContainer}">
        <p class="ui-03-regular">
          <slot></slot>
        </p>
      </div>


      
    `;
  }
}
