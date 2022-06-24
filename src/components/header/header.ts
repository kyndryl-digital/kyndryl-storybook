/**
 * Copyright Kyndryl, Inc. 2022
 */

import { html, LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PREFIX_CLASS, PREFIX_TAG } from '../../global/settings/settings';
import '../icon/icon';
import stylesheet from './header.scss';
import logo from '../../styles/lib/images/kyndryl-logo.svg';
import '../image/image';

/**
 * Kyndryl branded L0
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement(`${PREFIX_TAG}-header`)
export class Header extends LitElement {
  static styles = [stylesheet];

  render() {
    return html`
      ${this._mainNavTemplate()}
      ${this._primaryNavTemplate()}
    `;
  }

  protected _mainNavTemplate(): TemplateResult {
    return html`
      <div class="${PREFIX_CLASS}-header__main-nav">
        <div class="${PREFIX_CLASS}-header__main-nav-container">
            <slot name="masthead"></slot>
        </div>
      </div>
    `;
  }

  protected _primaryNavTemplate(): TemplateResult {
    return html`
    <div class="${PREFIX_CLASS}-header__primary-nav-container">
    <div class="${PREFIX_CLASS}-header__primary-nav ${PREFIX_CLASS}-grid-container ${PREFIX_CLASS}-no-grid-gap">
      <a href="https://kyndryl.com/" class="${PREFIX_CLASS}-header__logo"><img .src=${logo} .alt=${'Logo'} /></a>
      <div class="${PREFIX_CLASS}-header__primary-navigation-container ${PREFIX_CLASS}-grid-container ${PREFIX_CLASS}-no-grid-gap">
        <slot name="primary-navigation"></slot>
      </div>

      <div class="${PREFIX_CLASS}-header__account-navigation-container">
        <slot name="account-navigation"></slot>
      </div>
    </div>
  </div>
    `;
  }
}