import { html } from 'lit-element';
import readme from './README.stories.mdx';
import '../header';

export default {
  title: 'Web Components/Header',
  parameters: {
    ...readme.parameters
  },
};

export const Default = () => {
  return html`
    <kyndryl-header></kyndryl-header>
  `;
};
