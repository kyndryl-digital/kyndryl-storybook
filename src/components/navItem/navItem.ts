import { html, LitElement, TemplateResult } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { PREFIX_TAG } from '../../global/settings/settings';
import '../icon/icon';
import stylesheet from './navItem.scss';


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
      <kd-icon class="down-arrow" icon="${this.selected ? 'chevron-wide-up' : 'chevron-wide-down'}"></kd-icon>
    `;
  }

}