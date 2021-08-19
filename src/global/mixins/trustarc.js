/**
 * TrustArc loader script.
 */
export const loadTrustArc = (country, language) => {
    const params = {
        domain: 'kyndryl.com',
        c: 'teconsent',
        text: 'true',
        gtm: 1,
    }
    try {
        const ta = document.createElement('script');
        ta.setAttribute('src', '//consent.trustarc.com/notice?' + Object.keys(params).map(key => key + '=' + params[key]).join('&'));
        ta.setAttribute('defer', 'defer');
        ta.setAttribute('crossorigin', 'anonymous');
        document.head.appendChild(ta);
        eval(ta);
    } catch(error) {
        consolr.error('Unable to load TrustArc');
    }
}
