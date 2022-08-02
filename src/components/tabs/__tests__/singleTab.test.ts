import { LitElement } from 'lit';

describe('tabs', () => {
  const COMPONENT_TAG = 'kd-tabs';
  const ELEMENT_ID = 'tabs';
  const child_tag = 'kd-tab';
  const id = 'tab';
  let _activeTab = true;
  let element: LitElement;
  let elementSecond: LitElement;
  let elementthird: LitElement;

  beforeEach(() => {
    element = window.document.createElement(COMPONENT_TAG) as LitElement;
    elementSecond = window.document.createElement(child_tag) as LitElement;
    elementthird = window.document.createElement(child_tag) as LitElement;
    elementSecond.setAttribute('label', 'Dolor');
    elementSecond.setAttribute('selected', _activeTab as any);
    element.appendChild(elementSecond);
    elementthird.setAttribute('label', 'Ipsum');
    elementthird.setAttribute('selected', !_activeTab as any);
    element.appendChild(elementthird);
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.getElementsByTagName(child_tag)[0].remove();
    document.body.getElementsByTagName(COMPONENT_TAG)[0].remove();
  });

  describe('check Dollar tab', () => {
    it('select Dolor tab', async () => {
      const label =
        document.body.getElementsByTagName(COMPONENT_TAG)[0].shadowRoot
          .textContent;
      expect(label).toContain('Dolor');
    });
    it('Now check whether Dolor it is active or not', () => {
      const label = document.body
        .getElementsByTagName(COMPONENT_TAG)[0]
        .getElementsByTagName(child_tag)[0]
        .getAttribute('selected');
      expect(label).toContain('true');
    });
    it(' Ipsum tab should be not active', () => {
      const label = document.body
        .getElementsByTagName(COMPONENT_TAG)[0]
        .getElementsByTagName(child_tag)[1]
        .getAttribute('selected');
      expect(label).toContain('false');
    });
  });
});
