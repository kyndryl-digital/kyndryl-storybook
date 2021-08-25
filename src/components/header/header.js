import { LitElement, html } from "lit-element";

import markup from "./header.html.js";
import stylesheet from "./_header.scss";

import { settings } from "../../global/settings";

/**
 * Kyndryl branded L0
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class Header extends LitElement {
  static get styles() {
    return [stylesheet];
  }
  render() {
    return markup;
  }
}

customElements.define(`${settings.prefix}-header`, Header);
