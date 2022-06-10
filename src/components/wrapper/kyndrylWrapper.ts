/**
 * Copyright Kyndryl, Inc. 2022
 */

import { customElement } from 'lit/decorators.js';
import { Wrapper } from './wrapper';

/**
 * Legacy Kyndryl page wrapper.
 *
 * @slot - This element has a slot
 */
@customElement(`kyndryl-wrapper`)
export class kyndrylWrapper extends Wrapper {

  render() {
    return super.render();
  }

}
