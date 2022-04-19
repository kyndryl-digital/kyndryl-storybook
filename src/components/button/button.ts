import { html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { classMap } from 'lit-html/directives/class-map.js';

import stylesheet from './button.scss';

import { settings } from '../../global/settings';

/**
 * Kyndryl branded L0
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement(`${settings.tag_prefix}-button`)
export class Button extends LitElement {
  static styles = [stylesheet];

  @property({ type: String }) type;
  @property({ type: String }) href;
  @property({ type: String }) target;
  @property({ type: String }) size;
  @property({ type: String }) icon;
  @property({ type: String }) theme;

  render() {
    const classes = classMap({
      [`${settings.class_prefix}-btn-primary`]:
        this.type === 'primary' || !this.type,
      [`${settings.class_prefix}-btn-secondary`]: this.type === 'secondary',
      [`${settings.class_prefix}-btn-text`]: this.type === 'text',
      [`${settings.class_prefix}-btn-lg`]: this.size === 'large',
      [`${settings.class_prefix}-btn-sm`]: this.size === 'small',
      [this.theme]: this.theme?.length,
    });
    const icon_classes = classMap({
      [`${settings.class_prefix}-icon`]: this.icon,
      [`${settings.class_prefix}-icon-` + this.icon]: this.icon,
    });
    if (!this.icon) {
      return html`<a id="button" href=${this.href} target=${this.target} class=${classes}>
        <slot></slot>
      </a>`;
    } else {
      return html`<a id="button" href=${this.href} target=${this.target} class=${classes}>
        <slot></slot>
        <span id="icon" class=${icon_classes}></span>
      </a>`;
    }
  }
}
