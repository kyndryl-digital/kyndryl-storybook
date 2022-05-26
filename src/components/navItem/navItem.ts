import { html, LitElement, TemplateResult } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { PREFIX_TAG } from '../../global/settings/settings';
import '../icon/icon';
import stylesheet from './navItem.scss';

/**
 * Kyndryl branded L0
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement(`${PREFIX_TAG}-nav-item`)
export class NavItem extends LitElement {
  static styles = [stylesheet];

  @property({ type: Boolean , reflect: true }) selected = false;
  @property({ type: Boolean , reflect: true }) hasIcon = false;

  constructor(){
    super();
    this.selected = false;
  }

  render() {
    return html`
      <slot></slot>

      ${this._getTrailingIconTemplate()}
    `;
  }

  protected _getTrailingIconTemplate(): TemplateResult{
    if(!this.hasIcon){
      return;
    }

    return html`
      <kd-icon class="down-arrow" icon="${this.selected ? 'chevron-up' : 'chevron-down'}"></kd-icon>
    `;
  }

}