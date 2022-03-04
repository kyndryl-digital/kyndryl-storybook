import { html } from 'lit';
import readme from './README.stories.mdx';
import '../header';
import { Grid } from '../../../styles/__stories__/grid.stories';

export default {
  title: 'Web Components/Header',
  parameters: {
    ...readme.parameters,
  },
};

const Template = () => {
  return html` <kyndryl-header></kyndryl-header> `;
};

export const Header = Template.bind({});

Header.parameters = {
  layout: 'fullscreen',
};