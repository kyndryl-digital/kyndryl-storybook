import { html } from 'lit-element';
import readme from './README.stories.mdx';
import '../wrapper';

export default {
  title: 'Kyndryl/Wrapper',
  parameters: {
    ...readme.parameters
  },
};

export const Default = () => {
  return html`
    <kyndryl-wrapper>
      <p>YOUR CONTENT HERE</p>
      <span slot="trustarc" id="teconsent"></span>
    </kyndryl-wrapper>
  `;
};
