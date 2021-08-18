import { html } from 'lit-element';
import readme from './README.stories.mdx';
import '../footer';

export default {
  title: 'Kyndryl/Footer',
  parameters: {
    ...readme.parameters
  },
};

export const Default = () => {
  return html`
    <kyndryl-footer>
      <div slot="trustarc" id="teconsent"></div>
    </kyndryl-footer>
  `;
};
