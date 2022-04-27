import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit-html/directives/class-map.js';
import { PREFIX_CLASS, PREFIX_TAG } from '../../global/settings/settings';
import { IMAGE_ASPECT_RATIOS, IMAGE_FIT } from './defs';
import stylesheet from './image.scss';

@customElement(`${PREFIX_TAG}-image`)
export class Image extends LitElement {
  static styles = [stylesheet];

  @property({ type: String }) image;
  @property({ type: String }) imageAltText = '';
  @property() aspectRatio: IMAGE_ASPECT_RATIOS = IMAGE_ASPECT_RATIOS.RATIO_16_9;
  @property() fit: IMAGE_FIT = IMAGE_FIT.COVER;

  render() {
    let classContainer;
    switch (this.aspectRatio) {
      case IMAGE_ASPECT_RATIOS.RATIO_2_1:
        classContainer = `${PREFIX_CLASS}-aspect-ratio-2x1`;
        break;
      case IMAGE_ASPECT_RATIOS.RATIO_1_2:
        classContainer = `${PREFIX_CLASS}-aspect-ratio-1x2`;
        break;
      case IMAGE_ASPECT_RATIOS.RATIO_4_3:
        classContainer = `${PREFIX_CLASS}-aspect-ratio-4x3`;
        break;
      case IMAGE_ASPECT_RATIOS.RATIO_3_4:
        classContainer = `${PREFIX_CLASS}-aspect-ratio-3x4`;
        break;
      case IMAGE_ASPECT_RATIOS.RATIO_1_1:
        classContainer = `${PREFIX_CLASS}-aspect-ratio-1x1`;
        break;
      case IMAGE_ASPECT_RATIOS.RATIO_16_9:
      default:
        classContainer = `${PREFIX_CLASS}-aspect-ratio-16x9`;
        break;
    }

    const classesImage = classMap({
      [`${PREFIX_CLASS}-object-fit-cover`]: this.fit === IMAGE_FIT.COVER || this.fit !== IMAGE_FIT.CONTAIN || !this.fit,
      [`${PREFIX_CLASS}-object-fit-contain`]: this.fit === IMAGE_FIT.CONTAIN,
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
