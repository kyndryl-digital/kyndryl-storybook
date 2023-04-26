import { html } from 'lit-html';

export default {
  title: 'Spacer Variants',
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: [
          'spacing-0',
          'spacing-1',
          'spacing-2',
          'spacing-3',
          'spacing-4',
          'spacing-5',
          'spacing-6',
          'spacing-7',
          'spacing-8',
          'spacing-9',
          'spacing-10',
          'spacing-11',
          'spacing-12',
          'spacing-13',
        ],
      },
    },
  },
};


const Template = ({ size }) =>
  html`
   <div class="spacer-demo">
   <div style="background-color: red; width: 100px; height: 100px; margin: 16px;"></div>
     <div class="${size}"></div>
     <div style="background-color: green; width: 100px; height: 100px; margin: 16px;"></div>
   </div>
 `;


export const Spacer = Template.bind({});
Spacer.args = {
  size: 'spacing-24',
};


