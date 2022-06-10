/**
 * Copyright Kyndryl, Inc. 2022
 */
 
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { kdAccordionItem } from './accordionItem';

import { PREFIX_CLASS, PREFIX_TAG } from '../../global/settings/settings';

/**
 * kd-accordion web component
 */

@customElement(`${PREFIX_TAG}-accordion`)
export class kdAccordion extends LitElement {
  private _childItems: kdAccordionItem[] = [];


  protected _handleSlotChange(event: Event) {
    const slottedNodes = (event.target as HTMLSlotElement).assignedNodes({
      flatten: true,
    });

    this._childItems = slottedNodes.filter(
      node => node instanceof kdAccordionItem,
    ) as kdAccordionItem[];

    this._childItems.map((tab, index) => {
      (tab as kdAccordionItem).setIndex(index);

      return tab;
    });
  }



  render() {

    return html`
      <div class="${PREFIX_CLASS}-accordion">
        <slot @slotchange="${this._handleSlotChange}"></slot>
      </div>
    `;
  }
}
