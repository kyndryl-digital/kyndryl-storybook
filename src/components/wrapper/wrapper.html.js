import { html } from 'lit-element';
import '../header/header.js';
import '../footer/footer.js';
export default html`
    <kyndryl-header></kyndryl-header>
    <main>
        <slot></slot>
    </main>
    <kyndryl-footer><span slot="trustarc"></span></kyndryl-footer>
`;
