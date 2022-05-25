import { html, LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PREFIX_CLASS, PREFIX_TAG } from '../../global/settings/settings';
import '../icon/icon';
import stylesheet from './header.scss';
import logo from '../../styles/lib/images/kyndryl-logo.svg';
import '../image/image';

/**
 * Kyndryl Header
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
      
        <a class="hover-underline-animation" href="" target="_blank">Investors &#x2197;</a>
        <slot name="primary-navigation"></slot>
      </div>
    `;
  }

  protected _primaryNavTemplate(): TemplateResult {
    return html`
      <div class="${PREFIX_CLASS}-header__primary-nav">
        <img class="${PREFIX_CLASS}-header__logo" .src=${logo} .alt=${'Logo'} />
        <slot name="main-navigation"></slot>
      </div>
    `;
  }
}