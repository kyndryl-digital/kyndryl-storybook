import { html, LitElement } from "lit-element";
import {classMap} from "lit-html/directives/class-map.js";

import stylesheet from "./_button.scss";

import { settings } from "../../global/settings";

/**
 * Kyndryl branded L0
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class Button extends LitElement {
  static get properties() {
    return {
      type: {type: String},
      href: {type: String},
      target: {type: String},
      size: {type: String},
      icon: {type: String},
    };
  }

  constructor() {
    super();
    this.type = null;
    this.href = null;
    this.target = null;
    this.size = 'default';
    this.icon = null;
  }

  static get styles() {
    return [stylesheet];
  }

  render() {
    const classes = classMap({
      [`${settings.class_prefix}-btn-primary`]: this.type === 'primary' || !this.type,
      [`${settings.class_prefix}-btn-secondary`]: this.type === 'secondary',
      [`${settings.class_prefix}-btn-text`]: this.type === 'text',
      [`${settings.class_prefix}-btn-lg`]: this.size === 'large',
      [`${settings.class_prefix}-btn-sm`]: this.size === 'small'
    });
    const icon_classes = classMap({
      [`${settings.class_prefix}-icon`]: this.icon,
      [`${settings.class_prefix}-icon-`+this.icon]: this.icon,
    });
    if (!this.icon) {
      return html`<a href=${this.href} target=${this.target} class=${classes}>
          <slot></slot>
      </a>`;
    }
    else {
      return html`<a href=${this.href} target=${this.target} class=${classes}>
          <slot></slot>
          <span class=${icon_classes}></span>
      </a>`;
    }
  }
}

customElements.define(`${settings.tag_prefix}-button`, Button);
