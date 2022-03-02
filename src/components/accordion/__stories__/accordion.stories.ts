import { html } from 'lit';
import { settings } from '../../../global/settings';
import '../accordion';

export default {
  title: 'Web Components/Accordion',
  component: `${settings.tag_prefix}-accordion`,
};

const Template = args => {
  return html`
    <kd-accordion>
      <kd-accordion-item heading="Test1">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </kd-accordion-item>
      <kd-accordion-item heading="Test2" opened="true">
        <p>This item starts opened to demonstrate the opened attribute usage</p>
        <p><a href="#">Link Test</a></p>
      </kd-accordion-item>
      <kd-accordion-item heading="Test3">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </kd-accordion-item>
    </kd-accordion>
  `;
};

export const accordion = Template.bind({});
