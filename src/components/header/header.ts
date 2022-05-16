import { html, LitElement, TemplateResult } from 'lit';
import { property, customElement, state } from 'lit/decorators.js';
import { PREFIX_CLASS, PREFIX_TAG } from '../../global/settings/settings';
import '../icon/icon';
import stylesheet from './header.scss';
import logo from '../../styles/lib/images/kyndryl-logo.svg';
import '../image/image';
import tippy from 'tippy.js';

/**
 * Kyndryl branded L0
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement(`${PREFIX_TAG}-header`)
export class Header extends LitElement {
  static styles = [stylesheet];

  @property({ type: Object }) navItems;

  render() {
    return html`
      ${this._mainNavTemplate()}
      ${this._primaryNavTemplate()}
    `;
  }

  protected _mainNavTemplate(): TemplateResult {
    return html`
      <div class="${PREFIX_CLASS}-header__main-nav">
      
        ${this.navItems.mainNavItems.map((item) => html`
          <a class="hover-underline-animation" href="${item.href || ''}" target="_blank">${item.label} &#x2197;</a>
        `)}
      
        <slot></slot>
      </div>
    `;
  }

  protected _primaryNavTemplate(): TemplateResult {
    return html`
      <div class="${PREFIX_CLASS}-header__primary-nav">
        <img class="${PREFIX_CLASS}-header__logo" .src=${logo} .alt=${'Logo'} />
      
        ${this.navItems.primaryNavItems.map((item) => html`
        <a class="${PREFIX_CLASS}-header__nav-item hover-underline-animation" id="${item.label.replace(' ', '-')}" @click="${this._onMenuItemClick}">
          ${item.label}
          ${item.subMenuItems ? html`
            <kd-icon class="down-arrow" icon='chevron-wide-down'></kd-icon>
            <kd-icon class="up-arrow" icon='chevron-wide-up'></kd-icon>
          ` : ''}
        </a>
      
        ${item.subMenuItems ? html`
          <div id="${item.label.replace(' ', '-')}-sub-menu" hidden>
            ${this._getSubMenuTemplate(item)}
          </div>
        ` : ''}
        `)}
      </div>
    `;
  }

  /**
   * It opens the details menu of the selected menu.
   */
  protected _onMenuItemClick(e): void {

    let triggerElement = e.target;

    if(triggerElement.tagName === 'KD-ICON'){
      triggerElement = triggerElement.parentElement;
    }

    const templateElement = this.shadowRoot.querySelector(`#${triggerElement.id}-sub-menu`);
    
    
    if (!templateElement) {
      return;
    }

    if(triggerElement.hasAttribute('selected')){
      this._tippyInstance.hide();
      return;
    }
    
    const template = templateElement.innerHTML;

    if (!template) {
      console.warn('_onMenuItemClick: sub-menu template is not found');
    }

    let left = triggerElement.getClientRects().x;
    left = `-${left}`;

    this._tippyInstance = tippy(triggerElement, {
      content: template,
      arrow: false,
      allowHTML: true,
      hideOnClick: true,
      interactive: true,
      placement: 'bottom-start',
      showOnCreate: true,
      trigger: 'manual',
      offset: [left, 26],
      onHidden: () => { triggerElement.removeAttribute('selected'); }
    });

    triggerElement.setAttribute('selected', true);
  }

  protected _getSubMenuTemplate(subMenu): TemplateResult {
    return html`
      <div class="${PREFIX_CLASS}-header__submenu-container">
        ${this._getMenuItemDetails(subMenu)}
        ${this._getMenuItemsList(subMenu.subMenuItems)}
        ${this._getMenuItemExtraDetail(subMenu.subMenuItems?.extraDetails)}
      </div>
    `;
  }

  protected _getMenuItemDetails(subMenu): TemplateResult {
    return html`
      <a href="${subMenu.href}" class="${PREFIX_CLASS}-header__submenu-details">
        <div class="${PREFIX_CLASS}-h5 ${PREFIX_CLASS}-header__label">
          <div>${subMenu.label}</div>
          <kd-icon icon="arrow-right"></kd-icon>
        </div>

        <div class="${PREFIX_CLASS}-header__indicator"></div>
        <div class="${PREFIX_CLASS}-header__description ${PREFIX_CLASS}-text">${subMenu.description}</div>
      </a>
    `;
  }

  protected _getMenuItemsList(subMenu): TemplateResult {
    if (!subMenu) {
      return;
    }

    return html`
      <div class="${PREFIX_CLASS}-header__submenu-items-list">
      
        ${subMenu.group1.map((item) => html`
          <a href="${item.href}"> <span class="hover-underline-animation">${item.label}</span></a>
        `)}
      
      </div>
      
      <div class="${PREFIX_CLASS}-header__submenu-items-list group2">
      
        ${subMenu.group2.map((item) => html`
        <a href="${item.href}"><span class="hover-underline-animation">${item.label}</span></a>
        `)}
      
      </div>
    `;
  }

  protected _getMenuItemExtraDetail(detail): TemplateResult {
    if (!detail) {
      return;
    }

    return html`
      <a href="${detail.href}" class="${PREFIX_CLASS}-header__extra-details">
        <span class="${PREFIX_CLASS}-h5 ${PREFIX_CLASS}-header__label">${detail.label}</span>
        <div class="${PREFIX_CLASS}-header__description ${PREFIX_CLASS}-text">${detail.description}</div>
      </a>
    `;
  }
}