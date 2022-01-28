import { LitElement } from "lit-element";
import { loadTrustArc } from "../../global/mixins/trustarc.js";

import markup from "./footer.html.js";
import stylesheet from "./_footer.scss";

import { settings } from "../../global/settings";

/**
 * Kyndryl branded L0
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class Footer extends LitElement {
  static get styles() {
    return [stylesheet];
  }

  render() {
    loadTrustArc();
    return markup;
  }
}

customElements.define(`kyndryl-footer`, Footer);
