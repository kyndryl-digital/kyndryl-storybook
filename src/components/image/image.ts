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
  @property({ type: String }) fit = 'cover';

  render() {
    let classContainer;
    switch (this.aspectRatio) {
      case '2:1':
        classContainer = `${PREFIX_CLASS}-aspect-ratio-2x1`;
        break;
      case '1:2':
        classContainer = `${PREFIX_CLASS}-aspect-ratio-1x2`;
        break;
      case '4:3':
        classContainer = `${PREFIX_CLASS}-aspect-ratio-4x3`;
        break;
      case '3:4':
        classContainer = `${PREFIX_CLASS}-aspect-ratio-3x4`;
        break;
      case '1:1':
        classContainer = `${PREFIX_CLASS}-aspect-ratio-1x1`;
        break;
      case '16:9':
      default:
        classContainer = `${PREFIX_CLASS}-aspect-ratio-16x9`;
        break;
    }

    const classesImage = classMap({
      [`${PREFIX_CLASS}-object-fit-cover`]: this.fit === 'cover' || this.fit !== 'contain' || !this.fit,
      [`${PREFIX_CLASS}-object-fit-contain`]: this.fit === 'contain',
      [`${PREFIX_CLASS}-position-absolute`]: true,
    });

    if (this.image) {
      return html`<div class=${classContainer}>
        <img class=${classesImage} src=${this.image} alt=${this.imageAltText} />
      </div>`;
    }

    return null;
  }
}
