import { html, LitElement } from 'lit';
import { customElement, eventOptions, property, state } from 'lit/decorators.js';
import { classMap } from 'lit-html/directives/class-map.js';
import { PREFIX_CLASS, PREFIX_TAG } from '../../global/settings/settings';
import { KEYCODES } from '../../global/defs/keyCodes';
import { ICON_IDS } from '../../global/defs/iconIds';
import '../icon/icon';
import { MODAL_SIZES } from './defs';
import stylesheet from './modal.scss';

@customElement(`${PREFIX_TAG}-modal`)
export class kdModal extends LitElement {
  static styles = [ stylesheet ];

  @property() size: MODAL_SIZES = MODAL_SIZES.DEFAULT;
  @property({ type: String }) closeLabel = 'Close modal';

  @state()
  private _isOpen = false;

  private _elBtnTrigger;
  private _elBtnClose;
  private _delay = 400; // ms delay before setting focus/binding events (anim speed of modal open)
  private _evtOnClickFocusIn = this._onClickFocusIn.bind(this);
  private _evtOnKeyup = this._onKeyup.bind(this);

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._isOpen) {
      this._unbindOpenEvents();
    }
  }

  public toggleModal() {
    if (this._isOpen) {
      this.closeModal();
    } else {
      this.openModal();
    }
  }

  @eventOptions({ capture: true, passive: true })
  public openModal() {
    this._isOpen = true;
    this._elBtnTrigger = document.activeElement;
    this._elBtnClose = this.renderRoot.querySelector(`.${PREFIX_CLASS}-modal-control`);
    setTimeout(() => {
      this._elBtnClose?.focus();
      this._bindOpenEvents();
    }, this._delay);
    document.body.style.overflow = 'hidden';
  }

  @eventOptions({ capture: true, passive: true })
  public closeModal() {
    this._isOpen = false;
    document.body.style.overflow = null;
    this._unbindOpenEvents();

    // return focus to trigger
    if (this._elBtnTrigger) {
      this._elBtnTrigger.setAttribute('tabindex', '-1');
      this._elBtnTrigger.focus();
      setTimeout(() => {
        this._elBtnTrigger.removeAttribute('tabindex');
      }, this._delay);
    }
  }

  @eventOptions({ capture: true })
  private _onTriggerClick(e) {
    e.preventDefault();
    this.openModal();
  }

  @eventOptions({ capture: true })
  private _onCloseClick(e) {
    e.preventDefault();
    this.closeModal();
  }

  @eventOptions({ passive: true })
  private _bindOpenEvents() {
    document.addEventListener('click', this._evtOnClickFocusIn);
    document.addEventListener('focusin', this._evtOnClickFocusIn);
    document.addEventListener('keyup', this._evtOnKeyup);
  }

  @eventOptions({ passive: true })
  private _unbindOpenEvents() {
    document.removeEventListener('click', this._evtOnClickFocusIn);
    document.removeEventListener('focusin', this._evtOnClickFocusIn);
    document.removeEventListener('keyup', this._evtOnKeyup);
  }

  @eventOptions({ capture: true, passive: true })
  private _onClickFocusIn(e) {
    // trap focus in the modal
    if (!this.contains(e.target) || e.target === this._elBtnTrigger) {
      this._elBtnClose?.focus();
    }
  }

  @eventOptions({ capture: true, passive: true })
  private _onKeyup(e) {
    // close modal on escape key
    if (e.keyCode === KEYCODES.ESCAPE) {
      this.closeModal();
    }
  }

  render() {
    const classes = classMap({
      [`${PREFIX_CLASS}-modal`]: this.size === MODAL_SIZES.DEFAULT || !this.size,
      [`${PREFIX_CLASS}-modal-lg`]: this.size === MODAL_SIZES.LARGE,
      [`${PREFIX_CLASS}-modal-sm`]: this.size === MODAL_SIZES.SMALL,
      [`visible`]: this._isOpen === true,
      [`hidden`]: this._isOpen === false
    });
    return html`
      <span>
        <slot name="trigger" @click="${e => this._onTriggerClick(e)}"></slot>
      </span>
      <div @click="${e => this._onCloseClick(e)}" class="${PREFIX_CLASS}-modal-backdrop ${this._isOpen ? 'visible' : 'hidden'}">
        <div @click="${e => e.stopPropagation()}" class=${classes} role="dialog">
          <div class="${PREFIX_CLASS}-modal-controls">
            <button @click="${e => this._onCloseClick(e)}" class="${PREFIX_CLASS}-modal-control" title=${this.closeLabel}>
              <kd-icon icon="${ICON_IDS.CLOSE}"></kd-icon>
            </button>
          </div>
          <div class="${PREFIX_CLASS}-modal-content">
            ${this._isOpen ? html`<slot></slot>` : null }
          </div>
        </div>
      </div>
    `;
  }
}
