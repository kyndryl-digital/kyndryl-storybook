/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';

import globalSettings from '../../globalSettings';
const { stablePrefix: prefix } = globalSettings;

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class Header extends LitElement {
    render() {
        return html`
            <header><h1>Kyndryl</h1></header>
        `;
    }
}

window.customElements.define(`${prefix}-header`, Header);