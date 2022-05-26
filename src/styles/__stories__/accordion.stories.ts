/**
 * Copyright Kyndryl, Inc. 2022
 */
 
import { html } from 'lit-element';
import { PREFIX_CLASS } from '../../global/settings/settings';

export default {
  title: 'Styles/Accordion',
};

export const Accordion = args => {
  return html`
    <div class="${PREFIX_CLASS}-accordion">
      <div class="${PREFIX_CLASS}-accordion-item">
        <button id="${PREFIX_CLASS}-accordion-item-header-0" tabindex="0" class="${PREFIX_CLASS}-accordion-item-header" aria-expanded="false" aria-controls="${PREFIX_CLASS}-accordion-item-detail-0">
          Test1
        </button>
        <div class="${PREFIX_CLASS}-accordion-item-detail-wrapper">
          <div class="${PREFIX_CLASS}-accordion-item-detail">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
      <div class="${PREFIX_CLASS}-accordion-item">
        <button id="${PREFIX_CLASS}-accordion-item-header-1" tabindex="1" class="${PREFIX_CLASS}-accordion-item-header opened" aria-expanded="true" aria-controls="${PREFIX_CLASS}-accordion-item-detail-1">
          Test2
        </button>
        <div class="${PREFIX_CLASS}-accordion-item-detail-wrapper">
          <div class="${PREFIX_CLASS}-accordion-item-detail">
            <p>
              This item starts opened to demonstrate the opened attribute usage
            </p>
            <p><a href="#">Link Test</a></p>
          </div>
        </div>
      </div>
      <div class="${PREFIX_CLASS}-accordion-item">
        <button id="${PREFIX_CLASS}-accordion-item-header-2" tabindex="2" class="${PREFIX_CLASS}-accordion-item-header" aria-expanded="false" aria-controls="${PREFIX_CLASS}-accordion-item-detail-2">
          Test3
        </button>
        <div class="${PREFIX_CLASS}-accordion-item-detail-wrapper">
          <div class="${PREFIX_CLASS}-accordion-item-detail">
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
