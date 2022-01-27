import { html } from 'lit-element';
import readme from './README.stories.mdx';
import '../footer';

export default {
  title: 'Web Components/Footer',
  parameters: {
    ...readme.parameters
  },
};

export const Default = () => {
  return html`
    <kyndryl-footer>
      <span slot="trustarc" id="teconsent"></span>
    </kyndryl-footer>
  `;
};
