/**
 * Copyright Kyndryl, Inc. 2022
 */
 
import { html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { classMap } from 'lit-html/directives/class-map.js';
import { PREFIX_CLASS_ICON, PREFIX_TAG } from '../../global/settings/settings';
import { ICON_IDS } from '../../global/defs/iconIds';
import stylesheet from './icon.scss';

@customElement(`${PREFIX_TAG}-icon`)
export class Icon extends LitElement {
  static styles = [stylesheet];

  @property() icon: ICON_IDS;

  render() {
    const icon_classes = classMap({
      [`${PREFIX_CLASS_ICON}`]: this.icon,
      [`${PREFIX_CLASS_ICON}-${this.icon}`]: this.icon,
    });

    if (this.icon) {
      return html`<span class=${icon_classes}></span>`;
    }

    return null;
  }
}
