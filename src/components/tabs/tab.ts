import { html, LitElement } from 'lit';
import { state, property, customElement } from 'lit/decorators.js';

import { PREFIX_TAG } from '../../global/settings/settings';

/**
 * Example web component
 */
@customElement(`${PREFIX_TAG}-tab`)
export class kdTab extends LitElement {
  @property({ type: String }) label;
  @property({ type: Boolean }) selected = false;

  /**
   * Defines the index of the tab relative to other tabs.
   */
  @state()
  private _index = 0;

  /**
   * Sets the index of the tab.
   */
  setIndex(index: number) {
    this._index = index;
  }

  render() {
    return html`
      <div
        id="panel-${this._index}"
        role="tabpanel"
        tabindex="0"
        ?hidden="${!this.selected}"
      >
        <slot></slot>
      </div>
    `;
  }
}
