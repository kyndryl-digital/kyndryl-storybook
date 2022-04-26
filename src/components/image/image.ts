import { html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { classMap } from 'lit-html/directives/class-map.js';
import { PREFIX_CLASS, PREFIX_TAG } from '../../global/settings/settings';
import stylesheet from './image.scss';

@customElement(`${PREFIX_TAG}-image`)
export class Image extends LitElement {
  static styles = [stylesheet];

  @property({ type: String }) image;
  @property({ type: String }) imageAltText = '';
  @property({ type: String }) aspectRatio = '16:9';

  render() {
    const containerClasses = classMap({
      [`${PREFIX_CLASS}-aspect-ratio`]: true,
      [`${PREFIX_CLASS}-aspect-ratio--16x9`]: this.aspectRatio === '16:9' || !this.aspectRatio,
      [`${PREFIX_CLASS}-aspect-ratio--2x1`]: this.aspectRatio === '2:1',
      [`${PREFIX_CLASS}-aspect-ratio--1x2`]: this.aspectRatio === '1:2',
      [`${PREFIX_CLASS}-aspect-ratio--4x3`]: this.aspectRatio === '4:3',
      [`${PREFIX_CLASS}-aspect-ratio--3x4`]: this.aspectRatio === '3:4',
      [`${PREFIX_CLASS}-aspect-ratio--1x1`]: this.aspectRatio === '1:1',
    });

    const imgClasses = classMap({
      [`${PREFIX_CLASS}-object-fit`]: true,
      [`${PREFIX_CLASS}-position-absolute`]: true,
    });

    if (this.image) {
      return html`<div class=${containerClasses}>
        <img class=${imgClasses} src=${this.image} alt=${this.imageAltText} />
      </div>`;
    }

    return null;
  }
}
