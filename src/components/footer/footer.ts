import { LitElement } from 'lit-element';

import markup from './footer.html';
import stylesheet from './_footer.scss';

/**
 * Kyndryl branded L0
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class kdFooter extends LitElement {
  static get styles() {
    return [stylesheet];
  }

  render() {
    return markup;
  }
}

customElements.define(`kyndryl-footer`, kdFooter);
