import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import { settings } from '../../global/settings';

export default {
  title: 'Styles/Grid',

  argTypes: {
    fluidity: {
      options: ['Standard', 'Fully fluid'],
      control: { type: 'radio' },
      defaultValue: 'Standard',
      description:
        'Controls whether the grid has a max width determined by breakpoints or is always fluid',
    },
    gap: {
      options: ['Standard', 'No grid gap'],
      control: { type: 'radio' },
      defaultValue: 'Standard',
      description: 'Controls the gap between grid items',
    },
    padding: {
      options: ['Standard', 'No grid container padding'],
      control: { type: 'radio' },
      defaultValue: 'Standard',
      description:
        'Controls the padding that appears at the left / right of grid container',
    },
  },
};

export const Grid = args => {
  const classes = classMap({
    [`${settings.class_prefix}-grid-container`]: true,
    [`${settings.class_prefix}-pb1`]: true,
    [`${settings.class_prefix}-fully-fluid`]: args.fluidity === 'Fully fluid',
    [`${settings.class_prefix}-no-grid-gap`]: args.gap === 'No grid gap',
    [`${settings.class_prefix}-no-grid-padding`]:
      args.padding === 'No grid container padding',
  });

  return html`
  <style>
  .demo-div {
    text-align: center;
    padding: 8px;
  }
  </style>
  <div class="${classes}">
    <div class="${settings.class_prefix}-bg-cloud ${settings.class_prefix}-max-col-16 ${settings.class_prefix}-xlg-col-16 ${settings.class_prefix}-lg-col-16 ${settings.class_prefix}-md-col-16 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
      <div class="demo-div"><p>16 columns @ max, xlg, lg and md, 8 columns @ sm and 4 columns @ xs</p></div>
    </div>
  </div>

  <div class="${classes}">
    <div class="${settings.class_prefix}-bg-cloud ${settings.class_prefix}-max-col-8 ${settings.class_prefix}-xlg-col-8 ${settings.class_prefix}-lg-col-8 ${settings.class_prefix}-md-col-8 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
      <div class="demo-div"><p>8 columns @ max, xlg, lg and md, 8 columns @ sm and 4 columns @ xs</p></div>
    </div>
    <div class="${settings.class_prefix}-bg-stone ${settings.class_prefix}-max-col-8 ${settings.class_prefix}-xlg-col-8 ${settings.class_prefix}-lg-col-8 ${settings.class_prefix}-md-col-8 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
      <div class="demo-div"><p>8 columns @ max, xlg, lg and md, 8 columns @ sm and 4 columns @ xs</p></div>
    </div>
  </div>

  <div class="${classes}">
    <div class="${settings.class_prefix}-bg-cloud ${settings.class_prefix}-max-col-4 ${settings.class_prefix}-xlg-col-4 ${settings.class_prefix}-lg-col-4 ${settings.class_prefix}-md-col-4 ${settings.class_prefix}-sm-col-4 ${settings.class_prefix}-xs-col-4">
      <div class="demo-div"><p>4 columns @ max, xlg, lg and md, 4 columns @ sm and 4 columns @ xs</p></div>
    </div>
    <div class="${settings.class_prefix}-bg-stone ${settings.class_prefix}-max-col-4 ${settings.class_prefix}-xlg-col-4 ${settings.class_prefix}-lg-col-4 ${settings.class_prefix}-md-col-4 ${settings.class_prefix}-sm-col-4 ${settings.class_prefix}-xs-col-4">
      <div class="demo-div"><p>4 columns @ max, xlg, lg and md, 4 columns @ sm and 4 columns @ xs</p></div>
    </div>
    <div class="${settings.class_prefix}-bg-cloud ${settings.class_prefix}-max-col-4 ${settings.class_prefix}-xlg-col-4 ${settings.class_prefix}-lg-col-4 ${settings.class_prefix}-md-col-4 ${settings.class_prefix}-sm-col-4 ${settings.class_prefix}-xs-col-4">
      <div class="demo-div"><p>4 columns @ max, xlg, lg and md, 4 columns @ sm and 4 columns @ xs</p></div>
    </div>
    <div class="${settings.class_prefix}-bg-dark-white ${settings.class_prefix}-max-col-4 ${settings.class_prefix}-xlg-col-4 ${settings.class_prefix}-lg-col-4 ${settings.class_prefix}-md-col-4 ${settings.class_prefix}-sm-col-4 ${settings.class_prefix}-xs-col-4">
      <div class="demo-div"><p>4 columns @ max, xlg, lg and md, 4 columns @ sm and 4 columns @ xs</p></div>
    </div>
  </div>

  <div class="${classes}">
    <div class="${settings.class_prefix}-bg-cloud ${settings.class_prefix}-max-col-15 ${settings.class_prefix}-xlg-col-15 ${settings.class_prefix}-lg-col-15 ${settings.class_prefix}-md-col-15 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
      <div class="demo-div"><p>15</p></div>
    </div>
    <div class="${settings.class_prefix}-bg-dark-white ${settings.class_prefix}-max-col-1 ${settings.class_prefix}-xlg-col-1 ${settings.class_prefix}-lg-col-1 ${settings.class_prefix}-md-col-1 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
      <div class="demo-div"><p>1</p></div>
    </div>
  </div>
  
  <div class="${classes}">
    <div class="${settings.class_prefix}-bg-cloud ${settings.class_prefix}-max-col-14 ${settings.class_prefix}-xlg-col-14 ${settings.class_prefix}-lg-col-14 ${settings.class_prefix}-md-col-14 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
      <div class="demo-div"><p>14</p></div>
    </div>
       <div class="${settings.class_prefix}-bg-dark-white ${settings.class_prefix}-max-col-2 ${settings.class_prefix}-xlg-col-2 ${settings.class_prefix}-lg-col-2 ${settings.class_prefix}-md-col-2 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
      <div class="demo-div"><p>2</p></div>
    </div>
  </div>

  <div class="${classes}">
    <div class="${settings.class_prefix}-bg-cloud ${settings.class_prefix}-max-col-13 ${settings.class_prefix}-xlg-col-13 ${settings.class_prefix}-lg-col-13 ${settings.class_prefix}-md-col-13 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
      <div class="demo-div"><p>13</p></div>
    </div>
       <div class="${settings.class_prefix}-bg-dark-white ${settings.class_prefix}-max-col-3 ${settings.class_prefix}-xlg-col-3 ${settings.class_prefix}-lg-col-3 ${settings.class_prefix}-md-col-3 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
      <div class="demo-div"><p>3</p></div>
    </div>
  </div>

  <div class="${classes}">
    <div class="${settings.class_prefix}-bg-cloud ${settings.class_prefix}-max-col-12 ${settings.class_prefix}-xlg-col-12 ${settings.class_prefix}-lg-col-12 ${settings.class_prefix}-md-col-12 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
      <div class="demo-div"><p>12</p></div>
    </div>
       <div class="${settings.class_prefix}-bg-dark-white ${settings.class_prefix}-max-col-4 ${settings.class_prefix}-xlg-col-4 ${settings.class_prefix}-lg-col-4 ${settings.class_prefix}-md-col-4 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
      <div class="demo-div"><p>4</p></div>
    </div>
  </div>

  <div class="${classes}">
    <div class="${settings.class_prefix}-bg-cloud ${settings.class_prefix}-max-col-11 ${settings.class_prefix}-xlg-col-11 ${settings.class_prefix}-lg-col-11 ${settings.class_prefix}-md-col-11 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
      <div class="demo-div"><p>11</p></div>
    </div>
       <div class="${settings.class_prefix}-bg-dark-white ${settings.class_prefix}-max-col-5 ${settings.class_prefix}-xlg-col-5 ${settings.class_prefix}-lg-col-5 ${settings.class_prefix}-md-col-5 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
      <div class="demo-div"><p>5</p></div>
    </div>
  </div>

  <div class="${classes}">
    <div class="${settings.class_prefix}-bg-cloud ${settings.class_prefix}-max-col-10 ${settings.class_prefix}-xlg-col-10 ${settings.class_prefix}-lg-col-10 ${settings.class_prefix}-md-col-10 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
      <div class="demo-div"><p>10</p></div>
    </div>
       <div class="${settings.class_prefix}-bg-dark-white ${settings.class_prefix}-max-col-6 ${settings.class_prefix}-xlg-col-6 ${settings.class_prefix}-lg-col-6 ${settings.class_prefix}-md-col-6 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
      <div class="demo-div"><p>6</p></div>
    </div>
  </div>

  <div class="${classes}">
    <div class="${settings.class_prefix}-bg-cloud ${settings.class_prefix}-max-col-9 ${settings.class_prefix}-xlg-col-9 ${settings.class_prefix}-lg-col-9 ${settings.class_prefix}-md-col-9 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
      <div class="demo-div"><p>9</p></div>
    </div>
       <div class="${settings.class_prefix}-bg-dark-white ${settings.class_prefix}-max-col-7 ${settings.class_prefix}-xlg-col-7 ${settings.class_prefix}-lg-col-7 ${settings.class_prefix}-md-col-7 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
      <div class="demo-div"><p>7</p></div>
    </div>
  </div>
  <div class="${classes}">
    <div class="${settings.class_prefix}-bg-cloud ${settings.class_prefix}-max-col-8 ${settings.class_prefix}-xlg-col-8 ${settings.class_prefix}-lg-col-8 ${settings.class_prefix}-md-col-8 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
      <div class="demo-div"><p>8</p></div>
    </div>
       <div class="${settings.class_prefix}-bg-dark-white ${settings.class_prefix}-max-col-8 ${settings.class_prefix}-xlg-col-8 ${settings.class_prefix}-lg-col-8 ${settings.class_prefix}-md-col-8 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
      <div class="demo-div"><p>8</p></div>
    </div>
  </div>

  <div class="${classes}">
    <div class="${settings.class_prefix}-bg-cloud ${settings.class_prefix}-max-col-7 ${settings.class_prefix}-xlg-col-7 ${settings.class_prefix}-lg-col-7 ${settings.class_prefix}-md-col-7 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
      <div class="demo-div"><p>7</p></div>
    </div>
    <div class="${settings.class_prefix}-bg-dark-white ${settings.class_prefix}-max-col-9 ${settings.class_prefix}-xlg-col-9 ${settings.class_prefix}-lg-col-9 ${settings.class_prefix}-md-col-9 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
      <div class="demo-div"><p>9</p></div>
    </div>
  </div>

  <div class="${classes}">
   <div class="${settings.class_prefix}-bg-cloud ${settings.class_prefix}-max-col-6 ${settings.class_prefix}-xlg-col-6 ${settings.class_prefix}-lg-col-6 ${settings.class_prefix}-md-col-6 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
      <div class="demo-div"><p>6</p></div>
    </div>
    <div class="${settings.class_prefix}-bg-dark-white ${settings.class_prefix}-max-col-10 ${settings.class_prefix}-xlg-col-10 ${settings.class_prefix}-lg-col-10 ${settings.class_prefix}-md-col-10 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
      <div class="demo-div"><p>10</p></div>
    </div>
  </div>

  <div class="${classes}">
    <div class="${settings.class_prefix}-bg-cloud ${settings.class_prefix}-max-col-5 ${settings.class_prefix}-xlg-col-5 ${settings.class_prefix}-lg-col-5 ${settings.class_prefix}-md-col-5 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
      <div class="demo-div"><p>5</p></div>
    </div>
    <div class="${settings.class_prefix}-bg-dark-white ${settings.class_prefix}-max-col-11 ${settings.class_prefix}-xlg-col-11 ${settings.class_prefix}-lg-col-11 ${settings.class_prefix}-md-col-11 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
      <div class="demo-div"><p>11</p></div>
    </div>   
  </div>

  <div class="${classes}">
    <div class="${settings.class_prefix}-bg-cloud ${settings.class_prefix}-max-col-4 ${settings.class_prefix}-xlg-col-4 ${settings.class_prefix}-lg-col-4 ${settings.class_prefix}-md-col-4 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
      <div class="demo-div"><p>4</p></div>
    </div>
    <div class="${settings.class_prefix}-bg-dark-white ${settings.class_prefix}-max-col-12 ${settings.class_prefix}-xlg-col-12 ${settings.class_prefix}-lg-col-12 ${settings.class_prefix}-md-col-12 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
      <div class="demo-div"><p>12</p></div>
    </div>
  </div>

  <div class="${classes}">
    <div class="${settings.class_prefix}-bg-cloud ${settings.class_prefix}-max-col-3 ${settings.class_prefix}-xlg-col-3 ${settings.class_prefix}-lg-col-3 ${settings.class_prefix}-md-col-3 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
      <div class="demo-div"><p>3</p></div>
    </div>
    <div class="${settings.class_prefix}-bg-dark-white ${settings.class_prefix}-max-col-13 ${settings.class_prefix}-xlg-col-13 ${settings.class_prefix}-lg-col-13 ${settings.class_prefix}-md-col-13 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
      <div class="demo-div"><p>13</p></div>
    </div>  
  </div>

  <div class="${classes}">
    <div class="${settings.class_prefix}-bg-cloud ${settings.class_prefix}-max-col-2 ${settings.class_prefix}-xlg-col-2 ${settings.class_prefix}-lg-col-2 ${settings.class_prefix}-md-col-2 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
      <div class="demo-div"><p>2</p></div>
    </div>
    <div class="${settings.class_prefix}-bg-dark-white ${settings.class_prefix}-max-col-14 ${settings.class_prefix}-xlg-col-14 ${settings.class_prefix}-lg-col-14 ${settings.class_prefix}-md-col-14 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
      <div class="demo-div"><p>14</p></div>
    </div>  
  </div>
       
  </div>
  <div class="${classes}">
    <div class="${settings.class_prefix}-bg-cloud ${settings.class_prefix}-max-col-1 ${settings.class_prefix}-xlg-col-1 ${settings.class_prefix}-lg-col-1 ${settings.class_prefix}-md-col-1 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
      <div class="demo-div"><p>1</p></div>
    </div>
    <div class="${settings.class_prefix}-bg-dark-white ${settings.class_prefix}-max-col-15 ${settings.class_prefix}-xlg-col-15 ${settings.class_prefix}-lg-col-15 ${settings.class_prefix}-md-col-15 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
      <div class="demo-div"><p>15</p></div>
    </div> 
  </div>
  `;
};

Grid.args = {
  fluidity: 'Standard',
  gap: 'Standard',
  padding: 'Standard',
};
