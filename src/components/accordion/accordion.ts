import { html, LitElement } from 'lit';
import { state, property, customElement } from 'lit/decorators.js';
import { kdAccordionItem } from './accordionItem';

import { settings } from '../../global/settings';

/**
 * kd-accordion web component
 */

@customElement(`${settings.tag_prefix}-accordion`)
export class kdAccordion extends LitElement {
  private _childItems: kdAccordionItem[] = [];

  protected _handleSlotChange(event: Event) {
    const slottedNodes = (event.target as HTMLSlotElement).assignedNodes({
      flatten: true,
    });
    this._childItems = slottedNodes.filter(
      node => node instanceof kdAccordionItem,
    ) as kdAccordionItem[];
  }

  render() {
    return html`
      <div class="${settings.class_prefix}-accordion">
        <slot></slot>
      </div>
    `;
  }
}
