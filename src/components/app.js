import { LitElement, html } from 'lit-element';

class App extends LitElement {
    render() {
        return html`<h1>Foobar</h1>`;
    }
}

customElements.define('kyndryl-app', App);