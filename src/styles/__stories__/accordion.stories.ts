import { html } from 'lit-element';
import { settings } from '../../global/settings';

export default {
  title: 'Styles/Accordion',
};

export const Accordion = args => {
  return html`
    <div class="${settings.class_prefix}-accordion">
      <div class="${settings.class_prefix}-accordion-item">
        <button id="${settings.class_prefix}-accordion-item-header-0" tabindex="0" class="${settings.class_prefix}-accordion-item-header" aria-expanded="false" aria-controls="${settings.class_prefix}-accordion-item-detail-0">
          Test1
        </button>
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
        <button id="${settings.class_prefix}-accordion-item-header-1" tabindex="1" class="${settings.class_prefix}-accordion-item-header opened" aria-expanded="true" aria-controls="${settings.class_prefix}-accordion-item-detail-1">
          Test2
        </button>
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
        <button id="${settings.class_prefix}-accordion-item-header-2" tabindex="2" class="${settings.class_prefix}-accordion-item-header" aria-expanded="false" aria-controls="${settings.class_prefix}-accordion-item-detail-2">
          Test3
        </button>
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
