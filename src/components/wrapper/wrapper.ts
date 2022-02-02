import { html, LitElement } from "lit";

import markup from "./wrapper.html";
import stylesheet from "./wrapper.scss";

/**
 * Branded page wrapper with Kyndryl header and footer.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class kdWrapper extends LitElement {
  static styles = [ stylesheet ];

  render() {
    return html` ${markup} `;
  }
}
customElements.define(`kyndryl-wrapper`, kdWrapper);
