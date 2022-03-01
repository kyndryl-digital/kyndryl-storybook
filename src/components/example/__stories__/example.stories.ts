import { html } from 'lit';
import { settings } from '../../../global/settings';
import '../example';

export default {
  title: 'Web Components/Example',
  component: `${settings.tag_prefix}-example`,
  decorators: [story => html` <div style="margin: 3em">${story()}</div> `],
  argTypes: {
    name: {
      control: { type: 'text' },
    },
  },
};

const Template = args => {
  return html` <kd-example name="${args.name}"></kd-example> `;
};

export const Example = Template.bind({});
Example.args = {
  name: 'world',
};
