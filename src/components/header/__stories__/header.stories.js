import { html } from 'lit-element';
import '../header';

export default {
    title: 'Example/Header',
    argTypes: {
        backgroundColor: { control: 'color' },
        onClick: { action: 'onClick' },
    },
};

export const Default = () => {
  return html`
    <kyndryl-header></kyndryl-header>
  `;
};
