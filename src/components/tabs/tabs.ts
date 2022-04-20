import { html, LitElement, TemplateResult } from 'lit';
import { state, customElement } from 'lit/decorators.js';
import { kdTab } from './tab';

import stylesheet from './tabs.scss';

import { settings } from '../../global/settings';

/**
 * Example web component
 */
@customElement(`${settings.tag_prefix}-tabs`)
export class kdTabs extends LitElement {
  static styles = [stylesheet];

  /**
   * Child tab components.
   */
  @state()
  private _childTabs: kdTab[] = [];

  /**
   * Defines the active tab index.
   */
  @state()
  private _activeTab = 0;

  /**
   * Handler for @slotChange, creates tabs from kd-tab components.
   *
   * @private
   */
  protected _handleSlotChange(event: Event) {
    const slottedNodes = (event.target as HTMLSlotElement).assignedNodes({
      flatten: true,
    });
    this._childTabs = slottedNodes.filter(
      node => node instanceof kdTab,
    ) as kdTab[];
    this._childTabs.forEach((tab, index) => {
      this._activeTab = (tab as kdTab).selected ? index : this._activeTab;
    });
  }

  private _handleClick(index, e) {
    e.preventDefault();
    this._setActiveItem(index);
  }

  private _setActiveItem(index: number) {
    this._activeTab = index;
  }

  updated() {
    this._childTabs.map((tab, index) => {
      (tab as kdTab).selected = index === this._activeTab;
      (tab as kdTab).setIndex(index);
      return tab;
    });
  }

  protected _renderTabs(): TemplateResult | string | void {
    const { _childTabs: tabs } = this;
    return html`
      <div role="tablist">
        ${tabs.map((tab, index) => {
          const active = index === this._activeTab;
          const label = (tab as kdTab).getAttribute('label');
          return html`
            <button
              role="tab"
              tabindex="${index}"
              aria-controls="panel-${index}"
              aria-selected="${active}"
              @click="${e => this._handleClick(index, e)}"
            >
              ${label}
            </button>
          `;
        })}
      </div>
    `;
  }

  render() {
    return html`
      <div class="${settings.class_prefix}-tabs">
        ${this._renderTabs()}
        <slot @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `;
  }
}
