import { LitElement, html } from 'lit-element';


import markup from './footer.html.js';
import css from './footer.css.js';

import globalSettings from '../../globalSettings';
const { stablePrefix: prefix } = globalSettings;

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
        return markup;
    }

}

customElements.define(`${prefix}-footer`, Footer);
