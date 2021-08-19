import { LitElement, html } from 'lit-element';
import { loadTrustArc } from '../../global/mixins/trustarc.js';

import markup from './wrapper.html.js';
import css from './wrapper.css.js';

import { settings } from '../../global/settings';

/**
 * Branded page wrapper with Kyndryl header and footer.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class Wrapper extends LitElement {
    static get styles() {
        return [ css ];
    }
    render() {
        loadTrustArc();
        return html`
            ${markup}
        `;
    }
}

customElements.define(`${settings.prefix}-wrapper`, Wrapper);
