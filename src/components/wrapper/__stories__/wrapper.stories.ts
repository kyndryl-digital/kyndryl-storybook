import { html } from 'lit';
import readme from './README.stories.mdx';
import '../wrapper';

export default {
  title: 'Web Components/Wrapper',
  layout: 'fullscreen',
  parameters: {
    ...readme.parameters,
  },
};

const Template = () => {
  return html`
    <kyndryl-wrapper>
      <p>YOUR CONTENT HERE</p>
      <span slot="trustarc" id="teconsent"></span>
    </kyndryl-wrapper>
  `;
};

export const Wrapper = Template.bind({});

Wrapper.parameters = {
  layout: 'fullscreen',
};
