import { LitElement } from 'lit';

describe('Button component', () => {
  const COMPONENT_TAG = 'kd-button';
  const ELEMENT_ID = 'button';
  let element: LitElement;

  const getShadowRoot = (tagName: string): ShadowRoot => {
    return document.body.getElementsByTagName(tagName)[0].shadowRoot;
  };
  beforeEach(() => {
    element = window.document.createElement(COMPONENT_TAG) as LitElement;
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.getElementsByTagName(COMPONENT_TAG)[0].remove();
  });

  //primary

  describe('primary button', () => {
    it('should display primary button', async () => {
      const type = 'primary';
      element.setAttribute('type', type);
      await element.updateComplete;
      const renderedText = getShadowRoot(COMPONENT_TAG).getElementById(ELEMENT_ID).className;
      expect(renderedText).toContain('kd-btn-primary');
    });

    it('should display primary button with button size small', async () => {
      const type = 'primary';
      const size = 'small';
      element.setAttribute('type', type);
      element.setAttribute('size', size);
      await element.updateComplete;
      const renderedText = getShadowRoot(COMPONENT_TAG).getElementById(ELEMENT_ID).className;
      expect(renderedText).toContain('kd-btn-primary');
      expect(renderedText).toContain('kd-btn-sm');
    });

    it('should display primary button with button size large', async () => {
      const type = 'primary';
      const size = 'large';
      element.setAttribute('type', type);
      element.setAttribute('size', size);
      await element.updateComplete;
      const renderedText = getShadowRoot(COMPONENT_TAG).getElementById(ELEMENT_ID).className;
      expect(renderedText).toContain('kd-btn-primary');
      expect(renderedText).toContain('kd-btn-lg');
    });

    it('should display primary button with icon', async () => {
      const icon = 'arrow-left';
      const type = 'primary';
      element.setAttribute('type', type);
      element.setAttribute('icon', icon);
      await element.updateComplete;
      const renderedText = getShadowRoot(COMPONENT_TAG).getElementById(ELEMENT_ID).className;
      expect(renderedText).toContain('kd-btn-primary');
      const icon_classes = getShadowRoot(COMPONENT_TAG).getElementById('icon').className;
      expect(icon_classes).toContain('kd-icon-arrow-left');
    });
  });

//secondary

  describe('secondary button', () => {
    it('should display secondary button', async () => {
      const type = 'secondary';
      element.setAttribute('type', type);
      await element.updateComplete;
      const renderedText = getShadowRoot(COMPONENT_TAG).getElementById(ELEMENT_ID).className;
      expect(renderedText).toContain('kd-btn-secondary');
    });

    it('should display secondary button with button size small', async () => {
      const type = 'secondary';
      const size = 'small';
      element.setAttribute('type', type);
      element.setAttribute('size', size);
      await element.updateComplete;
      const renderedText = getShadowRoot(COMPONENT_TAG).getElementById(ELEMENT_ID).className;
      expect(renderedText).toContain('kd-btn-secondary');
      expect(renderedText).toContain('kd-btn-sm');
    });

    it('should display text button with button size large', async () => {
      const type = 'secondary';
      const size = 'large';
      element.setAttribute('type', type);
      element.setAttribute('size', size);
      await element.updateComplete;
      const renderedText = getShadowRoot(COMPONENT_TAG).getElementById(ELEMENT_ID).className;
      expect(renderedText).toContain('kd-btn-secondary');
      expect(renderedText).toContain('kd-btn-lg');
    });

    it('should display secondary button with icon', async () => {
      const icon = 'arrow-down';
      const type = 'secondary';
      element.setAttribute('type', type);
      element.setAttribute('icon', icon);
      await element.updateComplete;
      const renderedText = getShadowRoot(COMPONENT_TAG).getElementById(ELEMENT_ID).className;
      expect(renderedText).toContain('kd-btn-secondary');
      const icon_classes = getShadowRoot(COMPONENT_TAG).getElementById('icon').className;
      expect(icon_classes).toContain('kd-icon-arrow-down');
    });
  });

//text
  
  describe('text button', () => {
    it('should dispaly text when primary and secondary button not selected', async () => {
      const type = 'text';
      element.setAttribute('type', type);
      element.setAttribute('label', 'any value');
      await element.updateComplete;
      const renderedText = document.body.getElementsByTagName(COMPONENT_TAG)[0].getAttribute('label');
      expect(renderedText).toEqual('any value');
    });

    //this was added to make the test fail
    it('when type is not selected primary button will select by default', async () => {
      const type = '';
      element.setAttribute('type', type);
      await element.updateComplete;
      const renderedText = getShadowRoot(COMPONENT_TAG).getElementById(ELEMENT_ID).className;
      expect(renderedText).toContain('kd-btn-primary');
    });

    it('should display text button', async () => {
      const type = 'text';
      element.setAttribute('type', type);
      await element.updateComplete;
      const renderedText = getShadowRoot(COMPONENT_TAG).getElementById(ELEMENT_ID).className;
      expect(renderedText).toContain('kd-btn-text');
    });

    it('should display text button with button size small', async () => {
      const type = 'text';
      const size = 'small';
      element.setAttribute('type', type);
      element.setAttribute('size', size);
      await element.updateComplete;
      const renderedText = getShadowRoot(COMPONENT_TAG).getElementById(ELEMENT_ID);
      expect(renderedText).toBeTruthy();
    });

    it('should display text button with button size large', async () => {
      const type = 'text';
      const size = 'large';
      element.setAttribute('type', type);
      element.setAttribute('size', size);
      await element.updateComplete;
      const renderedText = getShadowRoot(COMPONENT_TAG).getElementById(ELEMENT_ID);
      expect(renderedText).toBeTruthy();
    });

    it('should display text button with icon', async () => {
      const icon = 'arrow-up';
      const type = 'text';
      element.setAttribute('type', type);
      element.setAttribute('icon', icon);
      await element.updateComplete;
      const renderedText = getShadowRoot(COMPONENT_TAG).getElementById(ELEMENT_ID);
      expect(renderedText).toBeTruthy();
      const icon_classes = getShadowRoot(COMPONENT_TAG).getElementById('icon').className;
      expect(icon_classes).toContain('kd-icon-arrow-up');
    });
  });
});
