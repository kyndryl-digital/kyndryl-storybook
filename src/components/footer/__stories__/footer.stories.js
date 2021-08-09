import { html } from 'lit-element';
import '../footer';

export default {
    title: 'Example/Footer',
    argTypes: {
        backgroundColor: { control: 'color' },
        onClick: { action: 'onClick' },
    },
};

export const Default = () => {
  return html`
    <kyndryl-footer></kyndryl-footer>
  `;
};
