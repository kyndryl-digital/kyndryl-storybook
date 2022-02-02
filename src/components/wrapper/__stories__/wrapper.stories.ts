import { html } from 'lit';
import readme from './README.stories.mdx';
import '../wrapper';

export default {
  title: 'Web Components/Wrapper',
  parameters: {
    ...readme.parameters
  },
};

export const Wrapper = () => {
  return html`
    <kyndryl-wrapper>
      <p>YOUR CONTENT HERE</p>
      <span slot="trustarc" id="teconsent"></span>
    </kyndryl-wrapper>
  `;
};
