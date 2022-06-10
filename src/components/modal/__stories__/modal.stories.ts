/**
 * Copyright Kyndryl, Inc. 2022
 */

import { html } from 'lit';
import { createOptionsArray } from '../../../global/mixins/global';
import { PREFIX_TAG } from '../../../global/settings/settings';
import { ICON_IDS } from '../../../global/defs/iconIds';
import { BUTTON_TYPES, BUTTON_ICON_POSITION } from '../../button/defs';
import '../../button/button';
import { MODAL_SIZES } from '../defs';
import '../modal';

const optionsModalSize = createOptionsArray(MODAL_SIZES);

export default {
  title: 'Web Components/Modal',
  component: `${PREFIX_TAG}-modal`,
  argTypes: {
    size: {
      description: 'Size of the modal window.',
      options: [...optionsModalSize],
      control: { type: 'select' },
    },
    closeLabel: {
      description: 'Accessible label for the modal close button.',
      control: { type: 'text' },
    },
  },
};

const demoButtonText = 'Modal Trigger';
const demoCloseLabel = 'Close window';
const demoModalContent = html`
  <div class="kd-pt4 kd-pr4 kd-pl4 kd-pb6">
    <h2>Modal Content</h2>
    <p>Quae si <a href="javascript://">inflammat optimis</a> ad et ipsum melius cum. Triarius ratio vos singulos publicae comparandis nihil optimos possit nolo non familiares quis prope doloris infamia est quicquid tenueris inflammat enim. Ne voluptatem elit ut instrumento voluptatem admirationis triarius.</p>
    <p>Necesse et optimis modo <a href="javascript://">comparandis</a> non esse atqui est istud positum enim isto vacuitatem enim optimis esse disserendo quae voluptatem abducas coercendi istud. Familiares noster sane quidem peripateticis quo callipho potuit enim dedocendi per virtutes dissensio potius quid redargueret nisi est est. Inquam dicis volo meum quis non ei est singulos artibus interrete et nam dedocendi.</p>
  </div>
`;

export const Text = args => {
  return html` 
    <kd-modal size=${args.size} closeLabel=${args.closeLabel}>
      <kd-button
        slot="trigger"
        type=${BUTTON_TYPES.TEXT}
        href="javascript://"
      >
        ${demoButtonText}
      </kd-button>
      ${demoModalContent}
    </kd-modal>
  `;
};

Text.args = {
  size: MODAL_SIZES.DEFAULT,
  closeLabel: demoCloseLabel,
};

export const Button = args => {
  return html`
    <kd-modal size=${args.size} closeLabel=${args.closeLabel}>
      <kd-button 
        slot="trigger" 
        type=${BUTTON_TYPES.PRIMARY} 
        icon=${ICON_IDS.POP_OUT} 
        iconPosition=${BUTTON_ICON_POSITION.RIGHT}
        href="javascript://"
      >
        ${demoButtonText}
      </kd-button>
      ${demoModalContent}
    </kd-modal>
  `;
};

Button.args = {
  size: MODAL_SIZES.DEFAULT,
  closeLabel: demoCloseLabel,
};

export const Image = args => {
  return html`
    <kd-modal size=${args.size} closeLabel=${args.closeLabel}>
      <img
        slot="trigger"
        src="https://placehold.co/400x300?text=${demoButtonText}"
        alt=""
        title=${demoButtonText}
      />
      ${demoModalContent}
    </kd-modal>
  `;
};

Image.args = {
  size: MODAL_SIZES.DEFAULT,
  closeLabel: demoCloseLabel,
};
