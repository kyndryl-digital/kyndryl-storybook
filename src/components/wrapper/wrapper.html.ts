import { html } from 'lit';
import '../header/header.ts';
import '../footer/footer.ts';

export default html`
    <kyndryl-header></kyndryl-header>
    <main>
        <slot></slot>
    </main>
    <kyndryl-footer><span slot="trustarc"><slot name="trustarc"></slot></span></kyndryl-footer>
`;
