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
export class Footer extends LitElement {
    render() {
        return html`
            <footer><h1>Footer</h1></footer>
        `;
    }
}

window.customElements.define(`${prefix}-footer`, Footer);
