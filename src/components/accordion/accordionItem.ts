import { html, LitElement } from 'lit';
import { state, property, customElement } from 'lit/decorators.js';

import { settings } from '../../global/settings';

import stylesheet from './accordionItem.scss';

/**
 * kd-accordion-item web component
 */
@customElement(`${settings.tag_prefix}-accordion-item`)
export class kdAccordionItem extends LitElement {
  @property({ type: String }) heading;
  @property({ type: Boolean }) opened = false;

  static get styles() {
    return [stylesheet];
  }

  private _handleClick(e) {
    e.preventDefault();
    this._toggleOpenState(e);
  }

  private _toggleOpenState(e) {
    if (
      this.renderRoot.querySelector(
        '.' + settings.class_prefix + '-accordion-item-detail-wrapper',
      ).offsetHeight > 0
    ) {
      this.renderRoot.querySelector(
        '.' + settings.class_prefix + '-accordion-item-detail-wrapper',
      ).style.height = '0px';
    } else {
      this.renderRoot.querySelector(
        '.' + settings.class_prefix + '-accordion-item-detail-wrapper',
      ).style.height =
        this.renderRoot.querySelector(
          '.' + settings.class_prefix + '-accordion-item-detail-wrapper',
        ).scrollHeight + 'px';
    }
    this.renderRoot.querySelector('h4').classList.toggle('opened');
  }

  firstUpdated() {
    const openedItem = this.renderRoot.querySelector(
      '.opened+.' + settings.class_prefix + '-accordion-item-detail-wrapper',
    );
    if (openedItem) openedItem.style.height = openedItem.scrollHeight + 'px';
  }

  render() {
    let classAdditions: string = '';
    if (this.opened) classAdditions += 'opened';
    return html`
      <h4 class="${classAdditions}" @click="${e => this._handleClick(e)}">
        ${this.heading}
      </h4>
      <div class="${settings.class_prefix}-accordion-item-detail-wrapper">
        <div class="${settings.class_prefix}-accordion-item-detail">
          <slot></slot>
        </div>
      </div>
    `;
  }
}
