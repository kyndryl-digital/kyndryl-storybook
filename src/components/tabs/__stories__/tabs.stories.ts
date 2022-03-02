import { html } from 'lit';
import { settings } from '../../../global/settings';
import '../tabs';
import '../tab';

export default {
  title: 'Web Components/Tabs',
  component: `${settings.tag_prefix}-tabs`,
};

const Template = args => {
  return html`
    <kd-tabs>
      <kd-tab label="Lorem">
        <p>Etiam porta sem malesuada magna mollis euismod.</p>
      </kd-tab>
      <kd-tab label="Ipsum" selected="true">
        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
      </kd-tab>
      <kd-tab label="Dolor">
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        </p>
      </kd-tab>
    </kd-tabs>
  `;
};

export const Tabs = Template.bind({});
