import { html } from 'lit';
import { PREFIX_TAG } from '../../../global/settings/settings';
import '../megaMenu';
import '../../navItem/navItem';

export default {
  title: 'Web Components/Mega Menu',
  component: `${PREFIX_TAG}-mega-menu`,
};

const Template = args => {
  return html`
      <kd-mega-menu>
        <kd-nav-item slot="trigger" hasIcon>Services</kd-nav-item>
        <div slot="content">Mega menu</div>
      </kd-mega-menu>
    `;
};

export const megaMenu = Template.bind({});