/**
 * Copyright Kyndryl, Inc. 2022
 */
 import { html, LitElement, TemplateResult } from 'lit';
 import { state, property, customElement } from 'lit/decorators.js';
 import { PREFIX_CLASS, PREFIX_TAG } from '../../global/settings/settings';
 /**
  * Kyndryl-header-legacy
  */
 @customElement(`${PREFIX_TAG}-kyn-header`)
 export class kyndrylHeader extends LitElement {
   render() {
     return html` <slot></slot> `;
   }
 }