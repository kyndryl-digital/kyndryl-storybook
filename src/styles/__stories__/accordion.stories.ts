import { html } from 'lit-element';
import { settings } from '../../global/settings';

export default {
  title: 'Styles/Accordion',
};

export const Accordion = args => {
  return html`
    <div class="${settings.class_prefix}-accordion">
      <div class="${settings.class_prefix}-accordion-item">
        <h4>Test1</h4>
        <div class="${settings.class_prefix}-accordion-item-detail-wrapper">
          <div class="${settings.class_prefix}-accordion-item-detail">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
      <div class="${settings.class_prefix}-accordion-item">
        <h4 class="opened">Test2</h4>
        <div class="${settings.class_prefix}-accordion-item-detail-wrapper">
          <div class="${settings.class_prefix}-accordion-item-detail">
            <p>
              This item starts opened to demonstrate the opened attribute usage
            </p>
            <p><a href="#">Link Test</a></p>
          </div>
        </div>
      </div>
      <div class="${settings.class_prefix}-accordion-item">
        <h4>Test3</h4>
        <div class="${settings.class_prefix}-accordion-item-detail-wrapper">
          <div class="${settings.class_prefix}-accordion-item-detail">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  `;
};
