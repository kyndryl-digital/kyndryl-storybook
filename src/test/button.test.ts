import { html, LitElement } from 'lit';
import { fixture, expect } from '@open-wc/testing';

const args = {
  type: 'primary',
  href: 'http://kyndryl.com',
  target: '_self',
  label: 'Click here',
  size: 'default',
  icon: 'none',
};

interface ButtonProps extends LitElement {
  textContent: string;
}

describe('Button', () => {
  it('has by default Click here as title', async () => {
    const el: ButtonProps = await fixture(html`<kd-button
      type=${args.type}
      size=${args.size != 'default' ? args.size : null}
      icon=${args.icon != 'none' ? args.icon : null}
      href=${args.href}
      target=${args.target}
      >${args.label}</kd-button
    >`);

    expect(el.textContent).to.equal('Click here');
  });
});
