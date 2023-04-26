
import { html } from 'lit-html';



export default {

  title: 'Colors',
};

const colors = [
  {value: '--k-color-spruce-100'},
  {value: '--k-color-spruce-90'},
  {value: '--k-color-spruce-80'},
  {value: '--k-color-spruce-70'},
  {value: '--k-color-spruce-60'},
  {value: '--k-color-spruce-50'},
  {value: '--k-color-spruce-40'},
  {value: '--k-color-spruce-30'},
  {value: '--k-color-spruce-20'},
  {value: '--k-color-spruce-10'},
  {value: '--k-color-skye-100'},
  {value: '--k-color-skye-90'},
  {value: '--k-color-skye-80'},
  {value: '--k-color-skye-70'},
  {value: '--k-color-skye-60'},
  {value: '--k-color-skye-50'},
  {value: '--k-color-skye-40'},
  {value: '--k-color-skye-30'},
  {value: '--k-color-skye-20'},
  {value: '--k-color-skye-10'},
  {value: '--k-color-deepforest-100'},
  {value: '--k-color-deepforest-90'},
  {value: '--k-color-deepforest-80'},
  {value: '--k-color-deepforest-70'},
  {value: '--k-color-deepforest-60'},
  {value: '--k-color-deepforest-50'},
  {value: '--k-color-deepforest-40'},
  {value: '--k-color-deepforest-30'},
  {value: '--k-color-deepforest-20'},
  {value: '--k-color-deepforest-10'},
  {value:'--k-color-darkstone-100'},
  {value:'--k-color-darkstone-80'},
  {value:'--k-color-darkstone-70'},
  {value:'--k-color-darkstone-50'},
  {value:'--k-color-darkstone-20'},
  {value:'--k-color-darkstone-10'},
  {value: '--k-color-springgreen-100'},
  {value: '--k-color-springgreen-90'},
  {value: '--k-color-springgreen-80'},
  {value: '--k-color-springgreen-70'},
  {value: '--k-color-springgreen-60'},
  {value: '--k-color-springgreen-50'},
  {value: '--k-color-springgreen-40'},
  {value: '--k-color-springgreen-30'},
  {value: '--k-color-springgreen-20'},
  {value: '--k-color-springgreen-10'},
  {value: '--k-color-dk-springgreen-100'},
  {value: '--k-color-dk-springgreen-90'},
  {value: '--k-color-dk-springgreen-80'},
  {value: '--k-color-dk-springgreen-70'},
  {value: '--k-color-dk-springgreen-60'},
  {value: '--k-color-dk-springgreen-50'},
  {value: '--k-color-dk-springgreen-40'},
  {value: '--k-color-dk-springgreen-30'},
  {value: '--k-color-dk-springgreen-20'},
  {value: '--k-color-dk-springgreen-10'},
  {value: '--k-color-warmred-100'},
  {value: '--k-color-warmred-90'},
  {value: '--k-color-warmred-80'},
  {value: '--k-color-warmred-70'},
  {value: '--k-color-warmred-60'},
  {value: '--k-color-warmred-50'},
  {value: '--k-color-warmred-40'},
  {value: '--k-color-warmred-30'},
  {value: '--k-color-warmred-20'},
  {value: '--k-color-warmred-10'},
  {value: '--k-color-darkearth-100'},
  {value: '--k-color-darkearth-90'},
  {value: '--k-color-darkearth-80'},
  {value: '--k-color-darkearth-70'},
  {value: '--k-color-darkearth-60'},
  {value: '--k-color-darkearth-50'},
  {value: '--k-color-darkearth-40'},
  {value: '--k-color-darkearth-30'},
  {value: '--k-color-darkearth-20'},
  {value: '--k-color-darkearth-10'},
  {value: '--k-color-earth-100'},
  {value: '--k-color-earth-90'},
  {value: '--k-color-earth-80'},
  {value: '--k-color-earth-70'},
  {value: '--k-color-earth-60'},
  {value: '--k-color-earth-50'},
  {value: '--k-color-earth-40'},
  {value: '--k-color-earth-30'},
  {value: '--k-color-earth-20'},
  {value: '--k-color-earth-10'},
  {value: '--k-color-cloud-100'},
  {value: '--k-color-cloud-90'},
  {value: '--k-color-cloud-80'},
  {value: '--k-color-cloud-70'},
  {value: '--k-color-cloud-60'},
  {value: '--k-color-cloud-50'},
  {value: '--k-color-cloud-40'},
  {value: '--k-color-cloud-30'},
  {value: '--k-color-cloud-20'},
  {value: '--k-color-cloud-10'},
  {value: '--k-color-darkstone-100'},
  {value: '--k-color-darkstone-90'},
  {value: '--k-color-darkstone-80'},
  {value: '--k-color-darkstone-70'},
  {value: '--k-color-darkstone-60'},
  {value: '--k-color-darkstone-50'},
  {value: '--k-color-darkstone-40'},
  {value: '--k-color-darkstone-30'},
  {value: '--k-color-darkstone-20'},
  {value: '--k-color-darkstone-10'},
  {value: '--k-color-warmgray-100'},
  {value: '--k-color-warmgray-90'},
  {value: '--k-color-warmgray-80'},
  {value: '--k-color-warmgray-70'},
  {value: '--k-color-warmgray-60'},
  {value: '--k-color-warmgray-50'},
  {value: '--k-color-warmgray-40'},
  {value: '--k-color-warmgray-30'},
  {value: '--k-color-warmgray-20'},
  {value: '--k-color-warmgray-10'},

  
  
  
  {value:'--k-color-spruce-80'},
  {value:'--k-color-spruce-70'},
  {value:'--k-color-spruce-60'},
  {value:'--k-color-spruce-40'},
  {value:'--k-color-spruce-30'},
  {value:'--k-color-warmred-50'},
  {value:'--k-color-warmred-40'},
  {value:'--k-color-neutral-white'},
  {value:'--k-color-warmgray-20'},
  {value:'--k-color-springgreen-20'},
  {value:'--k-color-springgreen-30'},
  {value:'--k-color-deepforest-90'},
  {value:'--k-color-cloud-10'},
  {value:'--k-color-cloud-20'},
  {value:'--k-color-skye-10'},
  {value:'--k-color-skye-20'},
  {value:'--k-color-dk-springgreen-60'},
  {value:'--k-color-coolgray-30'},
  {value:'--k-color-coolgray-20'},
  {value:'--k-color-warmgray-50'},
  {value:'--k-color-success'},
  {value:'--k-color-success-light'},
  {value:'--k-color-error'},
  {value:'--k-color-error-light'},
  {value:'--k-color-warning'},
  {value:'--k-color-warning-light'},
  {value:'--k-color-informational'},

];

export const ColorSwatches = () => html`
<style>
table {
 border-collapse: collapse;
 width: 70%;
}

td,
th {
 border: 1px solid #dddddd;
 text-align: left;
 padding: 8px;
}

tr:nth-child(even) {
background-color: #ffffff;
}
</style>
<table>
<thead>
 <tr>
   <th>Variable Name</th>
   <th>Hex value</th>
   <th>Preview</th>
 </tr>
</thead>
<tbody>
 ${colors.map(
   (color) => html`
     <tr>
       <td> ${color.value}</td>
       <td> ${getComputedStyle(document.documentElement).getPropertyValue(color.value)}</td>
       <td style="background-color: var(${color.value}); width: 50px; height: 50px;"></td>
     </tr>
   `
 )}
</tbody>
</table>
`;



