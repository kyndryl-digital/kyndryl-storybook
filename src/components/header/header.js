import { LitElement, html } from 'lit-element';

// import logo from './header-logo.png';
import markup from './header.html.js';
import css from './header.css.js';

import globalSettings from '../../globalSettings';
const { stablePrefix: prefix } = globalSettings;

/**
 * Kyndryl branded L0
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class Header extends LitElement {

    static get styles() {
        return [ css ];
    }

    render() {
        return markup;
    }

}

customElements.define(`${prefix}-header`, Header);
