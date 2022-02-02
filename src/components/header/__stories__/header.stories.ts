import { html } from 'lit';
import readme from './README.stories.mdx';
import '../header';

export default {
  title: 'Web Components/Header',
  parameters: {
    ...readme.parameters
  },
};

export const Header = () => {
  return html`
    <kyndryl-header></kyndryl-header>
  `;
};
