import { html, LitElement } from 'lit';
import { state, property, customElement} from 'lit/decorators.js';
import { PREFIX_CLASS, PREFIX_TAG } from '../../global/settings';
import stylesheet from './accordionItem.scss';

/**
 * kd-accordion-item web component
 */
@customElement(`${PREFIX_TAG}-accordion-item`)
export class kdAccordionItem extends LitElement {

  @property({ type: String }) heading;
  @property({ type: Boolean }) opened = false;

  @state() private _index = 0;

  setIndex(index: number) {
    this._index = index;
  }

  static get styles() {
    return [stylesheet];
  }

  private _handleClick(e) {
    e.preventDefault();
    this._toggleOpenState();
  }

  private _toggleOpenState() {
    if(this.renderRoot.querySelector('.' + PREFIX_CLASS + '-accordion-item-detail-wrapper').offsetHeight > 0) {
      this.renderRoot.querySelector('.' + PREFIX_CLASS + '-accordion-item-detail-wrapper').style.height = '0px';
    }
    else {
      this.renderRoot.querySelector('.' + PREFIX_CLASS + '-accordion-item-detail-wrapper').style.height = this.renderRoot.querySelector('.' + PREFIX_CLASS + '-accordion-item-detail-wrapper').scrollHeight + 'px';
    }
    this.renderRoot.querySelector('button').classList.toggle('opened');

  }

  firstUpdated() {
    const openedItem = this.renderRoot.querySelector('.opened+.' + PREFIX_CLASS + '-accordion-item-detail-wrapper');
    if(openedItem) openedItem.style.height = openedItem.scrollHeight + 'px';
  }

  render() {
    let classAdditions = '';
    let ariaExpanded = false;
    classAdditions += `${PREFIX_CLASS}-accordion-item-header`;
    if(this.opened) {
      classAdditions += ' opened';
      ariaExpanded = true;
    }
    return html`
      <button id="${PREFIX_CLASS}-accordion-item-header-${this._index}" tabindex="${this._index}" class="${classAdditions}" @click="${e => this._handleClick(e)}" aria-expanded="${ariaExpanded.toString()}" aria-controls="${PREFIX_CLASS}-accordion-item-detail-${this._index}">
        ${this.heading}
      </button>

      <div class="${PREFIX_CLASS}-accordion-item-detail-wrapper" id="${PREFIX_CLASS}-accordion-item-detail-${this._index}" aria-labelledby="${PREFIX_CLASS}-accordion-item-header-${this._index}">
        <div class="${PREFIX_CLASS}-accordion-item-detail">
          <slot></slot>
        </div>
      </div>
    `;
  }
}
