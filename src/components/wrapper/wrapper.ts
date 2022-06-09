/**
 * Copyright Kyndryl, Inc. 2022
 */

import { html, LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PREFIX_CLASS, PREFIX_TAG } from '../../global/settings/settings';
import stylesheet from './wrapper.scss';

/**
 * Kyndryl page wrapper
 *
 * @slot - This element has a slot
 */
 @customElement(`${PREFIX_TAG}-wrapper`)
export class Wrapper extends LitElement {
  static styles = [stylesheet];

  render() {
    return html`
      <kd-header>
        <slot name="primary-navigation" slot="primary-navigation"></slot>
        <slot name="account-navigation" slot="account-navigation"></slot>
        <slot name="masthead" slot="masthead"></slot>
      </kd-header>
      <div class="${PREFIX_CLASS}-wrapper__content">
        <slot></slot>
      </div>
    `;
  }

}
