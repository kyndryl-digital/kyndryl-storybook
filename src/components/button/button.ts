import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit-html/directives/class-map.js';
import { PREFIX_CLASS, PREFIX_CLASS_THEME, PREFIX_TAG } from '../../global/settings/settings';
import { ICON_IDS } from '../../global/defs/iconIds';
import { LINK_TARGETS } from '../../global/defs/linkTargets';
import { THEMES } from '../../global/defs/themes';
import { BUTTON_SIZES, BUTTON_TYPES, BUTTON_ICON_POSITION } from './defs';
import '../icon/icon';
import stylesheet from './button.scss';

/**
 * Kyndryl branded L0
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement(`${PREFIX_TAG}-button`)
export class Button extends LitElement {
  static styles = [stylesheet];

  @property({ type: String }) description;
  @property({ type: String }) href;
  @property() target: LINK_TARGETS;
  @property() type: BUTTON_TYPES;
  @property() size: BUTTON_SIZES;
  @property() icon: ICON_IDS;
  @property() iconPosition: BUTTON_ICON_POSITION;
  @property() theme: THEMES;

  render() {
    const classes = classMap({
      [`${PREFIX_CLASS}-btn-primary`]: this.type === BUTTON_TYPES.PRIMARY || !this.type,
      [`${PREFIX_CLASS}-btn-secondary`]: this.type === BUTTON_TYPES.SECONDARY,
      [`${PREFIX_CLASS}-btn-text`]: this.type === BUTTON_TYPES.TEXT,
      [`${PREFIX_CLASS}-btn-lg`]: this.size === BUTTON_SIZES.LARGE,
      [`${PREFIX_CLASS}-btn-sm`]: this.size === BUTTON_SIZES.SMALL,
      [`${PREFIX_CLASS}-btn-icon-${this.iconPosition}`]: this.iconPosition,
      [`${PREFIX_CLASS_THEME}-${this.theme}`]: this.theme,
    });
    if (!this.icon) {
      return html`<a id="button" href=${this.href} target=${this.target} class=${classes} aria-label=${ifDefined(this.description ? this.description : undefined)}>
        <slot></slot>
      </a>`;
    } else {
      return html`<a id="button" href=${this.href} target=${this.target} class=${classes} aria-label=${ifDefined(this.description ? this.description : undefined)}>
        <slot></slot>
        <span class="${PREFIX_CLASS}-btn--icon">
          <kd-icon icon=${this.icon}></kd-icon>
        </span>
      </a>`;
    }
  }
}
