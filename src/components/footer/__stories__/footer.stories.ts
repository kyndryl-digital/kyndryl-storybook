import { html } from 'lit';
import readme from './README.stories.mdx';
import '../footer';

export default {
  title: 'Web Components/Footer',
  parameters: {
    ...readme.parameters,
  },
};

export const Footer = () => {
  return html`
    <kyndryl-footer>
      <span slot="trustarc" id="teconsent"></span>
    </kyndryl-footer>
  `;
};
