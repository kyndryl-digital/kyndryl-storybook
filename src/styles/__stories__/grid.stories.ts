/**
 * Copyright Kyndryl, Inc. 2022
 */
 
import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import { PREFIX_CLASS } from '../../global/settings/settings';

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
    <div class="${PREFIX_CLASS}-theme-cloud ${PREFIX_CLASS}-max-col-1 ${PREFIX_CLASS}-xlg-col-1 ${PREFIX_CLASS}-lg-col-1 ${PREFIX_CLASS}-md-col-1 ${PREFIX_CLASS}-sm-col-1 ${PREFIX_CLASS}-xs-col-1">
      <div class="demo-div"><p>1</p></div>
    </div>
    <div class="${PREFIX_CLASS}-theme-cloud ${PREFIX_CLASS}-max-col-1 ${PREFIX_CLASS}-xlg-col-1 ${PREFIX_CLASS}-lg-col-1 ${PREFIX_CLASS}-md-col-1 ${PREFIX_CLASS}-sm-col-1 ${PREFIX_CLASS}-xs-col-1">
      <div class="demo-div"><p>2</p></div>
    </div>
    <div class="${PREFIX_CLASS}-theme-cloud ${PREFIX_CLASS}-max-col-1 ${PREFIX_CLASS}-xlg-col-1 ${PREFIX_CLASS}-lg-col-1 ${PREFIX_CLASS}-md-col-1 ${PREFIX_CLASS}-sm-col-1 ${PREFIX_CLASS}-xs-col-1">
      <div class="demo-div"><p>3</p></div>
    </div>
    <div class="${PREFIX_CLASS}-theme-cloud ${PREFIX_CLASS}-max-col-1 ${PREFIX_CLASS}-xlg-col-1 ${PREFIX_CLASS}-lg-col-1 ${PREFIX_CLASS}-md-col-1 ${PREFIX_CLASS}-sm-col-1 ${PREFIX_CLASS}-xs-col-1">
      <div class="demo-div"><p>4</p></div>
    </div>
    <div class="${PREFIX_CLASS}-theme-cloud ${PREFIX_CLASS}-max-col-1 ${PREFIX_CLASS}-xlg-col-1 ${PREFIX_CLASS}-lg-col-1 ${PREFIX_CLASS}-md-col-1 ${PREFIX_CLASS}-sm-col-1 ${PREFIX_CLASS}-xs-col-1">
      <div class="demo-div"><p>5</p></div>
    </div>
    <div class="${PREFIX_CLASS}-theme-cloud ${PREFIX_CLASS}-max-col-1 ${PREFIX_CLASS}-xlg-col-1 ${PREFIX_CLASS}-lg-col-1 ${PREFIX_CLASS}-md-col-1 ${PREFIX_CLASS}-sm-col-1 ${PREFIX_CLASS}-xs-col-1">
      <div class="demo-div"><p>6</p></div>
    </div>
    <div class="${PREFIX_CLASS}-theme-cloud ${PREFIX_CLASS}-max-col-1 ${PREFIX_CLASS}-xlg-col-1 ${PREFIX_CLASS}-lg-col-1 ${PREFIX_CLASS}-md-col-1 ${PREFIX_CLASS}-sm-col-1 ${PREFIX_CLASS}-xs-col-1">
      <div class="demo-div"><p>7</p></div>
    </div>
    <div class="${PREFIX_CLASS}-theme-cloud ${PREFIX_CLASS}-max-col-1 ${PREFIX_CLASS}-xlg-col-1 ${PREFIX_CLASS}-lg-col-1 ${PREFIX_CLASS}-md-col-1 ${PREFIX_CLASS}-sm-col-1 ${PREFIX_CLASS}-xs-col-1">
      <div class="demo-div"><p>8</p></div>
    </div>
    <div class="${PREFIX_CLASS}-theme-cloud ${PREFIX_CLASS}-max-col-1 ${PREFIX_CLASS}-xlg-col-1 ${PREFIX_CLASS}-lg-col-1 ${PREFIX_CLASS}-md-col-1 ${PREFIX_CLASS}-sm-col-1 ${PREFIX_CLASS}-xs-col-1">
      <div class="demo-div"><p>9</p></div>
    </div>
    <div class="${PREFIX_CLASS}-theme-cloud ${PREFIX_CLASS}-max-col-1 ${PREFIX_CLASS}-xlg-col-1 ${PREFIX_CLASS}-lg-col-1 ${PREFIX_CLASS}-md-col-1 ${PREFIX_CLASS}-sm-col-1 ${PREFIX_CLASS}-xs-col-1">
      <div class="demo-div"><p>10</p></div>
    </div>
    <div class="${PREFIX_CLASS}-theme-cloud ${PREFIX_CLASS}-max-col-1 ${PREFIX_CLASS}-xlg-col-1 ${PREFIX_CLASS}-lg-col-1 ${PREFIX_CLASS}-md-col-1 ${PREFIX_CLASS}-sm-col-1 ${PREFIX_CLASS}-xs-col-1">
      <div class="demo-div"><p>11</p></div>
    </div>
    <div class="${PREFIX_CLASS}-theme-cloud ${PREFIX_CLASS}-max-col-1 ${PREFIX_CLASS}-xlg-col-1 ${PREFIX_CLASS}-lg-col-1 ${PREFIX_CLASS}-md-col-1 ${PREFIX_CLASS}-sm-col-1 ${PREFIX_CLASS}-xs-col-1">
      <div class="demo-div"><p>12</p></div>
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
