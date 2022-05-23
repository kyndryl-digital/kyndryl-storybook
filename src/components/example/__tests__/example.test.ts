/**
 * Copyright Kyndryl, Inc. 2022
 */
 
import { LitElement } from 'lit';

describe('Example component', () => {

  const COMPONENT_TAG = 'kd-example';
  let element: LitElement;

  beforeEach(() => {
    element = window.document.createElement(COMPONENT_TAG) as LitElement;
    document.body.appendChild(element);
  });

  afterEach(() => {
    document.body.getElementsByTagName(COMPONENT_TAG)[0].remove();
  });

  it('name parameter not set', async () => {
    await element.updateComplete;
    const renderedHref = document.body.getElementsByTagName(COMPONENT_TAG)[0].shadowRoot.getElementById('name').innerText;
    expect(renderedHref).toEqual('world');
  });

  it('name parameter set', async () => {
    element.setAttribute('name', 'John');
    await element.updateComplete;
    const renderedHref = document.body.getElementsByTagName(COMPONENT_TAG)[0].shadowRoot.getElementById('name').innerText;
    expect(renderedHref).toEqual('John');
  });

});
