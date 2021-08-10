import { html } from 'lit-element';
import '../wrapper';

export default {
    title: 'Kyndryl/Wrapper',
};

export const Default = () => {
  return html`
    <kyndryl-wrapper>
        <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
    </kyndryl-wrapper>
  `;
};
