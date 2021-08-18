import { LitElement } from 'lit-element';

import markup from './footer.html.js';
import css from './footer.css.js';

import { settings } from '../../global/settings';

export const loadTrustArc = () => {
    const trustarc = document.createElement('script');
    trustarc.src = '//consent.trustarc.com/notice?domain=kyndryl.com&c=teconsent&js=nj&noticeType=bb&gtm=1&country=us&language=en';
    trustarc.async = 'async';
    trustarc.crossOrigin = true;
    document.head.appendChild(trustarc);
    eval(trustarc);
}

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
