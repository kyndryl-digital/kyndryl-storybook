import { html, LitElement } from "lit";
import { state, property, customElement, eventOptions } from "lit/decorators.js";
import { classMap } from "lit-html/directives/class-map.js";

import stylesheet from "./modal.scss";

import { settings } from '../../global/settings';

/**
 * Example web component
 */
@customElement(`${settings.tag_prefix}-modal`)
export class kdModal extends LitElement {
  static styles = [ stylesheet ];

  @property({ type: String }) size;

  /**
   * Defines the active tab index.
   */
  @state()
  private _active: boolean = false;

  /**
   * Allows users to toggle the modal open and close.
   */
  public toggleModal() {
    if (this._active) {
      this._handleClose();
    }
    else {
      this._handleOpen();
    }
  }

  /**
   * Allows users to center the modal vertically based on window and modal height.
   */
  public centerModal() {
    const modalBackdrop = this.renderRoot?.querySelector("." + settings.class_prefix + "-modal-backdrop");
    const modal = this.renderRoot?.querySelector("." + settings.class_prefix + "-modal");
    const modalHeight = modal.scrollHeight;
    const windowHeight = window?.innerHeight;
    const modalMargin = 50-(((100/windowHeight) * modalHeight)/2);

    modalBackdrop.scrollTop = 0;
    if (windowHeight >= modalHeight && modalMargin > 0) {
      modal.style.marginTop = 50-(((100/windowHeight) * modalHeight)/2) + 'vh';
      modal.style.marginBottom = 50-(((100/windowHeight) * modalHeight)/2) + 'vh';
    }
    else {
      modal.style.marginTop = null;
      modal.style.marginBottom = null;
    }
  }

  @eventOptions({ capture: true, passive: true })
  private _handleOpen(e) {
    e?.preventDefault();
    e?.target.blur();
    this.centerModal();
    this.dispatchEvent(new CustomEvent('modal-open'));
    document.body.style.overflow = 'hidden';
    document?.dispatchEvent(new CustomEvent('modal-open'));
    this._active = true;
  }

  @eventOptions({ capture: true, passive: true })
  private _handleClose(e) {
    e?.preventDefault();
    this._active = false;
    document.body.style.overflow = null;
    document?.dispatchEvent(new CustomEvent('modal-close'));
    this.dispatchEvent(new CustomEvent('modal-close'));
  }

  private _handleSlotChange() {
    this.centerModal();
  }

  connectedCallback() {
    super.connectedCallback();
    document?.addEventListener('modal-open', (e) => this._handleClose(e));
    if(window?.attachEvent) {
      window?.attachEvent('onresize', window?.addEventListener('resize', (e) => this.centerModal(e), true));
    }
    else if(window?.addEventListener) {
      window?.addEventListener('resize', (e) => this.centerModal(e), true);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document?.removeEventListener('modal-open');
    if(window?.attachEvent) {
      window?.detachEvent('onresize');
    }
    else if(window?.addEventListener) {
      window?.removeEventListener('resize');
    }
  }

  render() {
    const classes = classMap({
      [`${settings.class_prefix}-modal`]: this.size === 'default' || !this.size,
      [`${settings.class_prefix}-modal-lg`]: this.size === 'large',
      [`${settings.class_prefix}-modal-sm`]: this.size === 'small',
      [`visible`]: this._active === true,
      [`hidden`]: this._active === false
    });
    return html`
      <div @click="${e => this._handleClose(e)}" class="${settings.class_prefix}-modal-backdrop ${this._active ? 'visible' : 'hidden'}">
        <div @click="${(e) => e.stopPropagation()}" role="dialog" aria-describedby=".${settings.class_prefix}-modal-content" class=${classes}>
          <div class="${settings.class_prefix}-modal-controls">
            <button @click="${e => this._handleClose(e)}" class="${settings.class_prefix}-modal-control" title="Close window">
                <span class="${settings.class_prefix}-icon-close"></span>
            </button>
          </div>
          <div class="${settings.class_prefix}-modal-content">
            <slot @slotchange=${this._handleSlotChange}></slot>
          </div>
        </div>
      </div>
      <span @click="${e => this._handleOpen(e)}">
        <slot name="trigger"></slot>
      </span>
    `;
  }
}
