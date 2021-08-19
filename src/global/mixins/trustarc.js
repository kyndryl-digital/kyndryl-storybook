/**
 * TrustArc loader script.
 */
export const loadTrustArc = (country, language) => {
    let params = {
        domain: 'kyndryl.com',
        c: 'teconsent',
        js: 'nj',
        noticeType: 'bb',
        gtm: 1,
        country: country || 'us',
        language: language || 'en',
    }
    const ta = document.createElement('script');
    ta.setAttribute('src', '//consent.trustarc.com/notice?' + Object.keys(params).map(key => key + '=' + params[key]).join('&'));
    ta.setAttribute('async', 'async');
    ta.setAttribute('crossorigin', 'anonymous');
    document.head.appendChild(ta);
    eval(ta);
}
