import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import { PREFIX_CLASS } from '../../global/settings';

export default {
  title: 'Styles/Grid',

  argTypes: {
    fluidity: {
      options: ['Standard', 'Fully fluid'],
      control: {type: 'radio'},
      defaultValue: 'Standard',
      description: 'Controls whether the grid has a max width determined by breakpoints or is always fluid'
    },
    gap: {
      options: ['Standard', 'No grid gap'],
      control: {type: 'radio'},
      defaultValue: 'Standard',
      description: 'Controls the gap between grid items'
    },
    padding: {
      options: ['Standard', 'No grid container padding'],
      control: {type: 'radio'},
      defaultValue: 'Standard',
      description: 'Controls the padding that appears at the left / right of grid container'
    }
  }

};

export const Grid = (args) => {

  const classes = classMap({
    [`${PREFIX_CLASS}-grid-container`]: true,
    [`${PREFIX_CLASS}-pb3`]: true,
    [`${PREFIX_CLASS}-fully-fluid`]: args.fluidity === 'Fully fluid',
    [`${PREFIX_CLASS}-no-grid-gap`]: args.gap === 'No grid gap',
    [`${PREFIX_CLASS}-no-grid-padding`]: args.padding === 'No grid container padding'
  });

  return html`
  <style>
  .demo-div {
    background: var(--kd-color-background);
    border: 1px solid var(--kd-color-text);
    color: var(--kd-color-text);
    padding: 8px;
    text-align: center;
  }
  </style>
  <div class="${classes}">
    <div class="${PREFIX_CLASS}-theme-cloud ${PREFIX_CLASS}-max-col-12 ${PREFIX_CLASS}-xlg-col-12 ${PREFIX_CLASS}-lg-col-12 ${PREFIX_CLASS}-md-col-12 ${PREFIX_CLASS}-sm-col-8 ${PREFIX_CLASS}-xs-col-4">
      <div class="demo-div"><p>12 columns @ max, xlg, lg and md, 8 columns @ sm and 4 columns @ xs</p></div>
    </div>
  </div>

  <div class="${classes}">
    <div class="${PREFIX_CLASS}-theme-cloud ${PREFIX_CLASS}-max-col-6 ${PREFIX_CLASS}-xlg-col-6 ${PREFIX_CLASS}-lg-col-6 ${PREFIX_CLASS}-md-col-6 ${PREFIX_CLASS}-sm-col-8 ${PREFIX_CLASS}-xs-col-4">
      <div class="demo-div"><p>6 columns @ max, xlg, lg and md, 8 columns @ sm and 4 columns @ xs</p></div>
    </div>
    <div class="${PREFIX_CLASS}-max-col-6 ${PREFIX_CLASS}-xlg-col-6 ${PREFIX_CLASS}-lg-col-6 ${PREFIX_CLASS}-md-col-6 ${PREFIX_CLASS}-sm-col-8 ${PREFIX_CLASS}-xs-col-4">
      <div class="demo-div"><p>6 columns @ max, xlg, lg and md, 8 columns @ sm and 4 columns @ xs</p></div>
    </div>
  </div>

  <div class="${classes}">
    <div class="${PREFIX_CLASS}-theme-cloud ${PREFIX_CLASS}-max-col-4 ${PREFIX_CLASS}-xlg-col-4 ${PREFIX_CLASS}-lg-col-4 ${PREFIX_CLASS}-md-col-4 ${PREFIX_CLASS}-sm-col-4 ${PREFIX_CLASS}-xs-col-4">
      <div class="demo-div"><p>4 columns @ max, xlg, lg and md, 4 columns @ sm and 4 columns @ xs</p></div>
    </div>
    <div class="${PREFIX_CLASS}-max-col-4 ${PREFIX_CLASS}-xlg-col-4 ${PREFIX_CLASS}-lg-col-4 ${PREFIX_CLASS}-md-col-4 ${PREFIX_CLASS}-sm-col-4 ${PREFIX_CLASS}-xs-col-4">
      <div class="demo-div"><p>4 columns @ max, xlg, lg and md, 4 columns @ sm and 4 columns @ xs</p></div>
    </div>
    <div class="${PREFIX_CLASS}-theme-cloud ${PREFIX_CLASS}-max-col-4 ${PREFIX_CLASS}-xlg-col-4 ${PREFIX_CLASS}-lg-col-4 ${PREFIX_CLASS}-md-col-4 ${PREFIX_CLASS}-sm-col-4 ${PREFIX_CLASS}-xs-col-4">
      <div class="demo-div"><p>4 columns @ max, xlg, lg and md, 4 columns @ sm and 4 columns @ xs</p></div>
    </div>
  </div>

  <div class="${classes}">
    <div class="${PREFIX_CLASS}-theme-cloud ${PREFIX_CLASS}-max-col-3 ${PREFIX_CLASS}-xlg-col-3 ${PREFIX_CLASS}-lg-col-3 ${PREFIX_CLASS}-md-col-3 ${PREFIX_CLASS}-sm-col-4 ${PREFIX_CLASS}-xs-col-4">
      <div class="demo-div"><p>3 columns @ max, xlg, lg and md, 4 columns @ sm and 4 columns @ xs</p></div>
    </div>
    <div class="${PREFIX_CLASS}-max-col-3 ${PREFIX_CLASS}-xlg-col-3 ${PREFIX_CLASS}-lg-col-3 ${PREFIX_CLASS}-md-col-3 ${PREFIX_CLASS}-sm-col-4 ${PREFIX_CLASS}-xs-col-4">
      <div class="demo-div"><p>3 columns @ max, xlg, lg and md, 4 columns @ sm and 4 columns @ xs</p></div>
    </div>
    <div class="${PREFIX_CLASS}-theme-cloud ${PREFIX_CLASS}-max-col-3 ${PREFIX_CLASS}-xlg-col-3 ${PREFIX_CLASS}-lg-col-3 ${PREFIX_CLASS}-md-col-3 ${PREFIX_CLASS}-sm-col-4 ${PREFIX_CLASS}-xs-col-4">
      <div class="demo-div"><p>3 columns @ max, xlg, lg and md, 4 columns @ sm and 4 columns @ xs</p></div>
    </div>
    <div class="${PREFIX_CLASS}-max-col-3 ${PREFIX_CLASS}-xlg-col-3 ${PREFIX_CLASS}-lg-col-3 ${PREFIX_CLASS}-md-col-3 ${PREFIX_CLASS}-sm-col-4 ${PREFIX_CLASS}-xs-col-4">
      <div class="demo-div"><p>3 columns @ max, xlg, lg and md, 4 columns @ sm and 4 columns @ xs</p></div>
    </div>
  </div>

  <div class="${classes}">
    <div class="${PREFIX_CLASS}-theme-cloud ${PREFIX_CLASS}-max-col-2 ${PREFIX_CLASS}-xlg-col-2 ${PREFIX_CLASS}-lg-col-2 ${PREFIX_CLASS}-md-col-2 ${PREFIX_CLASS}-sm-col-4 ${PREFIX_CLASS}-xs-col-4">
      <div class="demo-div"><p>2 columns @ max, xlg, lg and md, 4 columns @ sm and 4 columns @ xs</p></div>
    </div>
    <div class="${PREFIX_CLASS}-max-col-2 ${PREFIX_CLASS}-xlg-col-2 ${PREFIX_CLASS}-lg-col-2 ${PREFIX_CLASS}-md-col-2 ${PREFIX_CLASS}-sm-col-4 ${PREFIX_CLASS}-xs-col-4">
      <div class="demo-div"><p>2 columns @ max, xlg, lg and md, 4 columns @ sm and 4 columns @ xs</p></div>
    </div>
    <div class="${PREFIX_CLASS}-theme-cloud ${PREFIX_CLASS}-max-col-2 ${PREFIX_CLASS}-xlg-col-2 ${PREFIX_CLASS}-lg-col-2 ${PREFIX_CLASS}-md-col-2 ${PREFIX_CLASS}-sm-col-4 ${PREFIX_CLASS}-xs-col-4">
      <div class="demo-div"><p>2 columns @ max, xlg, lg and md, 4 columns @ sm and 4 columns @ xs</p></div>
    </div>
    <div class="${PREFIX_CLASS}-max-col-2 ${PREFIX_CLASS}-xlg-col-2 ${PREFIX_CLASS}-lg-col-2 ${PREFIX_CLASS}-md-col-2 ${PREFIX_CLASS}-sm-col-4 ${PREFIX_CLASS}-xs-col-4">
      <div class="demo-div"><p>2 columns @ max, xlg, lg and md, 4 columns @ sm and 4 columns @ xs</p></div>
    </div>
    <div class="${PREFIX_CLASS}-theme-cloud ${PREFIX_CLASS}-max-col-2 ${PREFIX_CLASS}-xlg-col-2 ${PREFIX_CLASS}-lg-col-2 ${PREFIX_CLASS}-md-col-2 ${PREFIX_CLASS}-sm-col-4 ${PREFIX_CLASS}-xs-col-4">
      <div class="demo-div"><p>2 columns @ max, xlg, lg and md, 4 columns @ sm and 4 columns @ xs</p></div>
    </div>
    <div class="${PREFIX_CLASS}-max-col-2 ${PREFIX_CLASS}-xlg-col-2 ${PREFIX_CLASS}-lg-col-2 ${PREFIX_CLASS}-md-col-2 ${PREFIX_CLASS}-sm-col-4 ${PREFIX_CLASS}-xs-col-4">
      <div class="demo-div"><p>2 columns @ max, xlg, lg and md, 4 columns @ sm and 4 columns @ xs</p></div>
    </div>
  </div>
  
  
  `;
};

Grid.parameters = {
  layout: 'fullscreen',
};

Grid.args = {
  fluidity: 'Standard',
  gap: 'Standard',
  padding: 'Standard'
};
