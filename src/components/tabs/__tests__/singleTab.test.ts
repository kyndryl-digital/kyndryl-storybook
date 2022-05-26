import { LitElement } from 'lit';

describe('tab', () => {
  const COMPONENT_TAG = 'kd-tab';
  const ELEMENT_ID = 'panel';
  let element: LitElement;

  beforeEach(() => {
    element = window.document.createElement(COMPONENT_TAG) as LitElement;
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.getElementsByTagName(COMPONENT_TAG)[0].remove();
  });

  describe('Lorem tab', () => {
    it('select Lorem tab', async () => {
      element.setAttribute('label', 'Lorem');
      const a = true;
      element.setAttribute('selected', a as any);
      await element.updateComplete;
      const label = document.body.getElementsByTagName(COMPONENT_TAG)[0].getAttribute('label');
      expect(label).toContain('Lorem');
    });

    it('Lorem tab should be visible', async () => {
      element.setAttribute('selected', true as any);
      await element.updateComplete;
      const renderedHref = document.body.getElementsByTagName(COMPONENT_TAG)[0].getAttribute('selected');
      expect(renderedHref).toContain('true');
    });
  });

  describe('Ipsum tab', () => {
    it('select Ipsum tab', async () => {
      element.setAttribute('label', 'Ipsum');
      const a = true;
      element.setAttribute('selected', a as any);
      await element.updateComplete;
      const label = document.body.getElementsByTagName(COMPONENT_TAG)[0].getAttribute('label');
      expect(label).toContain('Ipsum');
    });

    it('Ipsum tab should be visible', async () => {
      element.setAttribute('selected', true as any);
      await element.updateComplete;
      const renderedHref = document.body.getElementsByTagName(COMPONENT_TAG)[0].getAttribute('selected');
      expect(renderedHref).toContain('true');
    });
  });


  describe('Dolor tab', () => {
    it('select Dolor tab', async () => {
      element.setAttribute('label', 'Dolor');
      const a = true;
      element.setAttribute('selected', a as any);
      await element.updateComplete;
      const label = document.body.getElementsByTagName(COMPONENT_TAG)[0].getAttribute('label');
      expect(label).toContain('Dolor');
    });

    it('Dolor tab should be visible', async () => {
      element.setAttribute('selected', true as any);
      await element.updateComplete;
      const renderedHref = document.body.getElementsByTagName(COMPONENT_TAG)[0].getAttribute('selected');
      expect(renderedHref).toContain('true');
    });
  });
});
