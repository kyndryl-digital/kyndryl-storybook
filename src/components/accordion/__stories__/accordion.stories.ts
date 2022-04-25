import { html } from 'lit';
import { PREFIX_TAG } from '../../../global/settings/settings';
import '../accordion';

export default {
  title: 'Web Components/Accordion',
  component: `${PREFIX_TAG}-accordion`,
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
