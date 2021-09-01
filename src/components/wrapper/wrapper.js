import { LitElement, html } from "lit-element";
import { loadTrustArc } from "../../global/mixins/trustarc.js";

import markup from "./wrapper.html.js";
import stylesheet from "./_wrapper.scss";

import { settings } from "../../global/settings";

/**
 * Branded page wrapper with Kyndryl header and footer.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class Wrapper extends LitElement {

  constructor(){
    super();
  }

  firstUpdated(){
    const wrapperRoot = this.shadowRoot;
    const trustRadiusSlot = document.querySelector('kyndryl-wrapper [slot="trustarc"]');

    const slotChangeCallback = function(mutationList, observer) {
      if(trustRadiusSlot.querySelector("a") != null){
        wrapperRoot.querySelector("kyndryl-footer span[slot='trustarc']").innerHTML='';
        wrapperRoot.querySelector("kyndryl-footer span[slot='trustarc']").append(trustRadiusSlot.querySelector("a") );
      }
    }

    const observer = new MutationObserver(slotChangeCallback);
    observer.observe(trustRadiusSlot, { childList: true});


  }


  static get styles() {
    return [stylesheet];
  }

  render() {
    loadTrustArc();
    return html` ${markup} `;
  }
}

customElements.define(`${settings.prefix}-wrapper`, Wrapper);
