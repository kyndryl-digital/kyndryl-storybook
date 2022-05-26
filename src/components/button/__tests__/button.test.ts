/**
 * Copyright Kyndryl, Inc. 2022
 */
 
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

   //icons

   describe('test icon with different button', () => {
    it('arrow-right', async () => {
      const icon = 'arrow-right';
      const type = 'text';
      element.setAttribute('type', type);
      element.setAttribute('icon', icon);
      await element.updateComplete;
      const renderedText = getShadowRoot(COMPONENT_TAG).getElementById(ELEMENT_ID);
      expect(renderedText).toBeTruthy();
      const icon_classes = getShadowRoot(COMPONENT_TAG).getElementById('icon').className;
      expect(icon_classes).toContain('kd-icon-arrow-right');
    });

    it('chevron-wide-down', async () => {
      const icon = 'chevron-wide-down';
      const type = 'text';
      element.setAttribute('type', type);
      element.setAttribute('icon', icon);
      await element.updateComplete;
      const renderedText = getShadowRoot(COMPONENT_TAG).getElementById(ELEMENT_ID);
      expect(renderedText).toBeTruthy();
      const icon_classes = getShadowRoot(COMPONENT_TAG).getElementById('icon').className;
      expect(icon_classes).toContain('kd-icon-chevron-wide-down');
    });

    it('chevron-up', async () => {
      const icon = 'chevron-up';
      const type = 'text';
      element.setAttribute('type', type);
      element.setAttribute('icon', icon);
      await element.updateComplete;
      const renderedText = getShadowRoot(COMPONENT_TAG).getElementById(ELEMENT_ID);
      expect(renderedText).toBeTruthy();
      const icon_classes = getShadowRoot(COMPONENT_TAG).getElementById('icon').className;
      expect(icon_classes).toContain('kd-icon-chevron-up');
    });

    it('chevron-right', async () => {
      const icon = 'chevron-right';
      const type = 'text';
      element.setAttribute('type', type);
      element.setAttribute('icon', icon);
      await element.updateComplete;
      const renderedText =  getShadowRoot(COMPONENT_TAG).getElementById(ELEMENT_ID);
      expect(renderedText).toBeTruthy();
      const icon_classes =  getShadowRoot(COMPONENT_TAG).getElementById('icon').className;
      expect(icon_classes).toContain('kd-icon-chevron-right');
    });

    it('chevron-left', async () => {
      const icon = 'chevron-left';
      const type = 'text';
      element.setAttribute('type', type);
      element.setAttribute('icon', icon);
      await element.updateComplete;
      const renderedText = getShadowRoot(COMPONENT_TAG).getElementById(ELEMENT_ID);
      expect(renderedText).toBeTruthy();
      const icon_classes = getShadowRoot(COMPONENT_TAG).getElementById('icon').className;
      expect(icon_classes).toContain('kd-icon-chevron-left');
    });

    it('chevron-down', async () => {
      const icon = 'chevron-down';
      const type = 'text';
      element.setAttribute('type', type);
      element.setAttribute('icon', icon);
      await element.updateComplete;
      const renderedText = getShadowRoot(COMPONENT_TAG).getElementById(ELEMENT_ID);
      expect(renderedText).toBeTruthy();
      const icon_classes = getShadowRoot(COMPONENT_TAG).getElementById('icon').className;
      expect(icon_classes).toContain('kd-icon-chevron-down');
    });

    it('twitter', async () => {
      const icon = 'twitter';
      const type = 'text';
      element.setAttribute('type', type);
      element.setAttribute('icon', icon);
      await element.updateComplete;
      const renderedText = getShadowRoot(COMPONENT_TAG).getElementById(ELEMENT_ID);
      expect(renderedText).toBeTruthy();
      const icon_classes = getShadowRoot(COMPONENT_TAG).getElementById('icon').className;
      expect(icon_classes).toContain('kd-icon-twitter');
    });

    it('pop-out', async () => {
      const icon = 'pop-out';
      const type = 'text';
      element.setAttribute('type', type);
      element.setAttribute('icon', icon);
      await element.updateComplete;
      const renderedText = getShadowRoot(COMPONENT_TAG).getElementById(ELEMENT_ID);
      expect(renderedText).toBeTruthy();
     const icon_classes =  getShadowRoot(COMPONENT_TAG).getElementById('icon').className;
      expect(icon_classes).toContain('kd-icon-pop-out');
    });

    it('play', async () => {
      const icon = 'play';
      const type = 'text';
      element.setAttribute('type', type);
      element.setAttribute('icon', icon);
      await element.updateComplete;
      const renderedText = getShadowRoot(COMPONENT_TAG).getElementById(ELEMENT_ID);
      expect(renderedText).toBeTruthy();
      const icon_classes = getShadowRoot(COMPONENT_TAG).getElementById('icon').className;
      expect(icon_classes).toContain('kd-icon-play');
    });

    it('pdf', async () => {
      const icon = 'pdf';
      const type = 'text';
      element.setAttribute('type', type);
      element.setAttribute('icon', icon);
      await element.updateComplete;
      const renderedText = getShadowRoot(COMPONENT_TAG).getElementById(ELEMENT_ID);
      expect(renderedText).toBeTruthy();
      const icon_classes = getShadowRoot(COMPONENT_TAG).getElementById('icon').className;
      expect(icon_classes).toContain('kd-icon-pdf');
    });

    it('linkedin', async () => {
      const icon = 'linkedin';
      const type = 'text';
      element.setAttribute('type', type);
      element.setAttribute('icon', icon);
      await element.updateComplete;
      const renderedText = getShadowRoot(COMPONENT_TAG).getElementById(ELEMENT_ID);
      expect(renderedText).toBeTruthy();
      const icon_classes = getShadowRoot(COMPONENT_TAG).getElementById('icon').className;
      expect(icon_classes).toContain('kd-icon-linkedin');
    });


    it('hamburger', async () => {
      const icon = 'hamburger';
      const type = 'text';
      element.setAttribute('type', type);
      element.setAttribute('icon', icon);
      await element.updateComplete;
      const renderedText = getShadowRoot(COMPONENT_TAG).getElementById(ELEMENT_ID);
      expect(renderedText).toBeTruthy();
      const icon_classes = getShadowRoot(COMPONENT_TAG).getElementById('icon').className;
      expect(icon_classes).toContain('kd-icon-hamburger');
    });

    it('download', async () => {
      const icon = 'download';
      const type = 'text';
      element.setAttribute('type', type);
      element.setAttribute('icon', icon);
      await element.updateComplete;
      const renderedText = getShadowRoot(COMPONENT_TAG).getElementById(ELEMENT_ID);
      expect(renderedText).toBeTruthy();
      const icon_classes = getShadowRoot(COMPONENT_TAG).getElementById('icon').className;
      expect(icon_classes).toContain('kd-icon-download');
    });


    it('close', async () => {
      const icon = 'close';
      const type = 'text';
      element.setAttribute('type', type);
      element.setAttribute('icon', icon);
      await element.updateComplete;
      const renderedText = getShadowRoot(COMPONENT_TAG).getElementById(ELEMENT_ID);
      expect(renderedText).toBeTruthy();
      const icon_classes = getShadowRoot(COMPONENT_TAG).getElementById('icon').className;
      expect(icon_classes).toContain('kd-icon-close');
    });


    it('chevron-wide-up', async () => {
      const icon = 'chevron-wide-up';
      const type = 'text';
      element.setAttribute('type', type);
      element.setAttribute('icon', icon);
      await element.updateComplete;
      const renderedText = getShadowRoot(COMPONENT_TAG).getElementById(ELEMENT_ID);
      expect(renderedText).toBeTruthy();
      const icon_classes = getShadowRoot(COMPONENT_TAG).getElementById('icon').className;
      expect(icon_classes).toContain('kd-icon-chevron-wide-up');
    });


    it('chevron-wide-right', async () => {
      const icon = 'chevron-wide-right';
      const type = 'text';
      element.setAttribute('type', type);
      element.setAttribute('icon', icon);
      await element.updateComplete;
      const renderedText = getShadowRoot(COMPONENT_TAG).getElementById(ELEMENT_ID);
      expect(renderedText).toBeTruthy();
      const icon_classes = getShadowRoot(COMPONENT_TAG).getElementById('icon').className;
      expect(icon_classes).toContain('kd-icon-chevron-wide-right');
    });


    it('chevron-wide-left', async () => {
      const icon = 'chevron-wide-left';
      const type = 'text';
      element.setAttribute('type', type);
      element.setAttribute('icon', icon);
      await element.updateComplete;
      const renderedText = getShadowRoot(COMPONENT_TAG).getElementById(ELEMENT_ID);
      expect(renderedText).toBeTruthy();
      const icon_classes = getShadowRoot(COMPONENT_TAG).getElementById('icon').className;
      expect(icon_classes).toContain('kd-icon-chevron-wide-left');
    });
  });
});

//added them here for reference 
// 'chevron-down',
// 'chevron-left',
// 'chevron-right',
// 'chevron-up',
// 'chevron-wide-down',
// 'chevron-wide-left',
// 'chevron-wide-right',
// 'chevron-wide-up',
// 'close',
// 'download',
// 'hamburger',
// 'linkedin',
// 'pdf',
// 'play',
// 'pop-out',
// 'twitter',

