import { html, LitElement } from "lit";
import { property, customElement} from "lit/decorators.js";

import stylesheet from "./example.scss";

import { settings } from '../../global/settings';

/**
 * Example web component
 */
@customElement(`${settings.tag_prefix}-example`)
export class kdExample extends LitElement {
  static styles = [ stylesheet ];

  @property({ type: String }) name = 'world';

  render() {
    return html`
        Hello, <span id="name">${this.name}</span>!
    `;
  }
}
