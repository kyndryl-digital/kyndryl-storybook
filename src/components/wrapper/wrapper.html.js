import { html } from 'lit-element';
import header from '../header/header.html';
import footer from '../footer/footer.html';
export default html`
    ${header}
    <main>
        <slot></slot>
    </main>
    ${footer}
`;
