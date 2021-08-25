import { LitElement } from 'lit-element';
import { loadTrustArc } from '../../global/mixins/trustarc.js';

import markup from './footer.html.js';
import css from './footer.css.js';

import { settings } from '../../global/settings';

/**
 * Kyndryl branded L0
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class Footer extends LitElement {

    static get styles() {
        return [ css ];
    }

    render() {
        loadTrustArc();
        return markup;
    }

}

customElements.define(`${settings.prefix}-footer`, Footer);
