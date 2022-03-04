import { html } from 'lit';
import readme from './README.stories.mdx';
import '../footer';

export default {
  title: 'Web Components/Footer',
  layout: 'fullscreen',
  parameters: {
    ...readme.parameters,
  },
};

const Template = () => {
  return html`
    <kyndryl-footer>
      <span slot="trustarc" id="teconsent"></span>
    </kyndryl-footer>
  `;
};


export const Footer = Template.bind({});

Footer.parameters = {
  layout: 'fullscreen',
};
