import { html, LitElement, TemplateResult } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { PREFIX_CLASS, PREFIX_TAG } from '../../global/settings/settings';
import stylesheet from './megaMenu.scss';


@customElement(`${PREFIX_TAG}-mega-menu`)
export class MegaMenu extends LitElement {
  static styles = [stylesheet];

  @property({ type: Boolean }) opened = false;

  connectedCallback() {
    super.connectedCallback && super.connectedCallback();
    window.addEventListener('click', this._onClick.bind(this));
  }

  render() {
    return html`
      ${this._getTriggerTemplate()}
      ${this._getContentTemplate()}
    `;
  }

  private _getTriggerTemplate(): TemplateResult {
    return html`
      <slot name="trigger" @click="${this._open}"></slot>
    `;
  }

  private _getContentTemplate(): TemplateResult {
    if (!this.opened) {
      return;
    }

    return html`
      <div class="${PREFIX_CLASS}-mega-menu__content-wrapper">
        <slot name="content"></slot>
      </div>
    `;
  }

  _open(e): void {
    this.opened = !this.opened;
    this._triggerElement = e.target;
    this._triggerElement.selected = this.opened;
  }

  _close() {
    this.opened = false;
    this._triggerElement.selected = false;
  }

  _onClick(e): void {
    if (!this.opened) {
      return;
    }

    const path = e.composedPath();
    const isOutsideClicked = path.find((el) => {
      return el === this;
    });

    if (!isOutsideClicked) {
      this._close();
    }
  }

}