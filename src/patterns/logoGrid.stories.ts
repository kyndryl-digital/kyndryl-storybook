/**
 * Copyright Kyndryl, Inc. 2022
 */
 
import { html } from 'lit';
import { PREFIX_CLASS } from '../global/settings/settings';
import '../components/modal/modal';
import '../components/button/button';

export default {
  title: 'Patterns/Logo Grid',
};

const Template = args => {
  return html`
      <div class="${PREFIX_CLASS}-grid-container">
        <!-- BEGIN Google Logo -->
        <div class="${PREFIX_CLASS}-max-col-3 ${PREFIX_CLASS}-xlg-col-3 ${PREFIX_CLASS}-lg-col-3 ${PREFIX_CLASS}-md-col-6 ${PREFIX_CLASS}-sm-col-8 ${PREFIX_CLASS}-xs-col-4">
          <kd-modal>
            <a href="javascript://" slot="trigger" title="Microsoft">
              <svg width="280" height="210" style="width:100%;height:auto" class="${PREFIX_CLASS}-transition-default-grayscale ${PREFIX_CLASS}-transition-hover-colorize" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 280 210" style="enable-background:new 0 0 280 210;" xml:space="preserve">
                   <g>
                   <path fill="#FF462D" d="M42.3,113.9h12.6v5H36.3v-29h6V113.9z"/>
                   <path fill="#FF462D" d="M54.6,108.6c0-6.4,4.2-10.8,10.8-10.8c6.6,0,10.8,4.5,10.8,10.8c0,6.3-4.2,10.8-10.8,10.8
                     C58.7,119.3,54.6,114.9,54.6,108.6z M70.2,108.6c0-4.2-1.7-6.9-4.8-6.9c-3.2,0-4.8,2.6-4.8,6.9c0,4.2,1.7,6.8,4.8,6.8
                     C68.5,115.4,70.2,112.7,70.2,108.6z"/>
                   <path fill="#FF462D" d="M83.8,103.6c0.8-3.2,2.9-5.9,6.9-5.9v5.7h-1.5c-3.6,0-5.4,1.2-5.4,4.7v10.7H78V98.2h5.8V103.6z"/>
                   <path fill="#FF462D" d="M111.4,110.3H96.5c0.4,3.5,2.2,5.1,4.6,5.1c2.3,0,3.4-1,4.1-2.6h5.9c-1.4,4.4-5,6.6-10,6.6
                     c-6.4,0-10.5-4.5-10.5-10.8c0-6.4,4.2-10.8,10.5-10.8c6.4,0,10.5,4.4,10.5,10.9C111.5,109.1,111.4,109.7,111.4,110.3z M96.5,106.4
                     h9c-0.3-2.9-2.1-4.7-4.5-4.7C98.7,101.7,97,103.1,96.5,106.4z"/>
                   <path fill="#FF462D" d="M145,105.8L145,105.8v13.1h-5.8v-11.8V107c0-3.6-1.1-5.2-3.5-5.2s-3.5,1.6-3.5,5.3v11.8h-5.8v-11.8V107
                     c0-3.6-1.1-5.2-3.5-5.2s-3.5,1.6-3.5,5.3v11.8h-5.8V98.2h5.8v4.2c1-2.6,2.9-4.7,6.4-4.7c3.6,0,5.6,2.4,6.3,5c0.9-2.5,2.9-5,6.5-5
                     C143,97.7,145,101.1,145,105.8z"/>
                   <path fill="#29707A" d="M148.4,118.9v-29h6v29H148.4z"/>
                   <path fill="#29707A" d="M179,108.6c0,6.2-3.4,10.8-8.5,10.8c-3.2,0-5.8-1.9-6.9-4.6v11.6h-5.8V98.2h5.8v4.7
                     c0.9-2.7,3.2-5.1,6.9-5.1C175.6,97.7,179,102.3,179,108.6z M173,108.6c0-4.2-1.7-6.9-4.8-6.9s-4.8,2.6-4.8,6.9
                     c0,4.2,1.7,6.8,4.8,6.8S173,112.7,173,108.6z"/>
                   <path fill="#29707A" d="M179.6,112.6h5.9c0.4,2.1,2.2,2.7,4,2.7c2.6,0,3.9-0.8,3.9-2.2c0-1.3-0.8-1.9-3.7-2.5l-3.7-0.8
                     c-3.9-0.8-6.1-2.7-6.1-5.8c0-3.9,4-6.4,9-6.4c4.7,0,8.6,1.9,9.5,6h-5.9c-0.5-1.3-1.9-2-3.6-2c-1.9,0-3.5,0.7-3.5,2
                     c0,1.2,1.2,1.6,3.3,2.1l3.7,0.8c4.3,1,6.4,2.8,6.4,6.2c0,4.2-4.2,6.6-9.7,6.6C184.2,119.3,180.4,117.2,179.6,112.6z"/>
                   <path fill="#29707A" d="M213.9,98.2h5.8v20.7H214v-4.1c-1,2.5-2.9,4.5-6.5,4.5c-4.8,0-6.8-3.5-6.8-8v-0.1v-13h5.8V110v0.1
                     c0,3.6,1.3,5.2,3.7,5.2c2.4,0,3.7-1.8,3.7-5.3V98.2z"/>
                   <path fill="#29707A" d="M254.4,105.8L254.4,105.8v13.1h-5.8v-11.8V107c0-3.6-1.1-5.2-3.5-5.2c-2.4,0-3.5,1.6-3.5,5.3v11.8h-5.8
                     v-11.8V107c0-3.6-1.1-5.2-3.5-5.2s-3.5,1.6-3.5,5.3v11.8h-5.8V98.2h5.8v4.2c1-2.6,2.9-4.7,6.4-4.7c3.6,0,5.6,2.4,6.3,5
                     c0.9-2.5,2.9-5,6.5-5C252.4,97.7,254.4,101.1,254.4,105.8z"/>
                 </g>
                    </svg>
            </a>
            <div class="${PREFIX_CLASS}-grid-container ${PREFIX_CLASS}-fully-fluid ${PREFIX_CLASS}-no-grid-gap ${PREFIX_CLASS}-no-grid-padding">
              <div class="${PREFIX_CLASS}-max-col-6 ${PREFIX_CLASS}-xlg-col-6 ${PREFIX_CLASS}-lg-col-6 ${PREFIX_CLASS}-md-col-12 ${PREFIX_CLASS}-sm-col-8 ${PREFIX_CLASS}-xs-col-4" style="min-height:768px">
                <div class="${PREFIX_CLASS}-pt6 ${PREFIX_CLASS}-pr5 ${PREFIX_CLASS}-pb8 ${PREFIX_CLASS}-pl4">
                  <div class="${PREFIX_CLASS}-mt0 ${PREFIX_CLASS}-mb4"><img src="https://placehold.co/240x120?text=Logo" /></div>
                  <h6 class="${PREFIX_CLASS}-h6 ${PREFIX_CLASS}-mt4 ${PREFIX_CLASS}-mb4"><strong>GOOGLE CLOUD</strong></h6>
                  <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum.</p>
                  <p class="${PREFIX_CLASS}-mt4 ${PREFIX_CLASS}-mb0"><kd-button type="primary" icon="arrow-right" href="javascript://">See more</kd-button></p>
                </div>
              </div>
              <div class="${PREFIX_CLASS}-bg-cloud ${PREFIX_CLASS}-max-col-6 ${PREFIX_CLASS}-xlg-col-6 ${PREFIX_CLASS}-lg-col-6 ${PREFIX_CLASS}-md-col-12 ${PREFIX_CLASS}-sm-col-8 ${PREFIX_CLASS}-xs-col-4" style="min-height:768px">
                <div class="${PREFIX_CLASS}-pt6 ${PREFIX_CLASS}-pr5 ${PREFIX_CLASS}-pb8 ${PREFIX_CLASS}-pl4">
                  <p class="${PREFIX_CLASS}-mt0"><strong>Services Links:</strong></p>
                  <ul class="${PREFIX_CLASS}-list">
                    <li class="${PREFIX_CLASS}-list-item">Curabitur blandit tempus porttitor.</li>
                    <li class="${PREFIX_CLASS}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                    <li class="${PREFIX_CLASS}-list-item">Aenean lacinia bibendum nulla sed consectetur.</li>
                    <li class="${PREFIX_CLASS}-list-item">Nulla vitae elit libero, a pharetra augue.</li>
                  </ul>
                  <p class="${PREFIX_CLASS}-mt4"><strong>More Links:</strong></p>
                  <ul class="${PREFIX_CLASS}-list">
                    <li class="${PREFIX_CLASS}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                  </ul>
                </div>
              </div>
            </div>
          </kd-modal>
        </div>
        <!-- END Google logo -->
        <!-- BEGIN Oracle Logo -->
        <div class="${PREFIX_CLASS}-max-col-3 ${PREFIX_CLASS}-xlg-col-3 ${PREFIX_CLASS}-lg-col-3 ${PREFIX_CLASS}-md-col-6 ${PREFIX_CLASS}-sm-col-8 ${PREFIX_CLASS}-xs-col-4">
          <kd-modal>
            <a href="javascript://" slot="trigger" title="Microsoft">
              <svg width="280" height="210" style="width:100%;height:auto" class="${PREFIX_CLASS}-transition-default-grayscale ${PREFIX_CLASS}-transition-hover-colorize" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 280 210" style="enable-background:new 0 0 280 210;" xml:space="preserve">
                   <g>
                   <path fill="#FF462D" d="M42.3,113.9h12.6v5H36.3v-29h6V113.9z"/>
                   <path fill="#FF462D" d="M54.6,108.6c0-6.4,4.2-10.8,10.8-10.8c6.6,0,10.8,4.5,10.8,10.8c0,6.3-4.2,10.8-10.8,10.8
                     C58.7,119.3,54.6,114.9,54.6,108.6z M70.2,108.6c0-4.2-1.7-6.9-4.8-6.9c-3.2,0-4.8,2.6-4.8,6.9c0,4.2,1.7,6.8,4.8,6.8
                     C68.5,115.4,70.2,112.7,70.2,108.6z"/>
                   <path fill="#FF462D" d="M83.8,103.6c0.8-3.2,2.9-5.9,6.9-5.9v5.7h-1.5c-3.6,0-5.4,1.2-5.4,4.7v10.7H78V98.2h5.8V103.6z"/>
                   <path fill="#FF462D" d="M111.4,110.3H96.5c0.4,3.5,2.2,5.1,4.6,5.1c2.3,0,3.4-1,4.1-2.6h5.9c-1.4,4.4-5,6.6-10,6.6
                     c-6.4,0-10.5-4.5-10.5-10.8c0-6.4,4.2-10.8,10.5-10.8c6.4,0,10.5,4.4,10.5,10.9C111.5,109.1,111.4,109.7,111.4,110.3z M96.5,106.4
                     h9c-0.3-2.9-2.1-4.7-4.5-4.7C98.7,101.7,97,103.1,96.5,106.4z"/>
                   <path fill="#FF462D" d="M145,105.8L145,105.8v13.1h-5.8v-11.8V107c0-3.6-1.1-5.2-3.5-5.2s-3.5,1.6-3.5,5.3v11.8h-5.8v-11.8V107
                     c0-3.6-1.1-5.2-3.5-5.2s-3.5,1.6-3.5,5.3v11.8h-5.8V98.2h5.8v4.2c1-2.6,2.9-4.7,6.4-4.7c3.6,0,5.6,2.4,6.3,5c0.9-2.5,2.9-5,6.5-5
                     C143,97.7,145,101.1,145,105.8z"/>
                   <path fill="#29707A" d="M148.4,118.9v-29h6v29H148.4z"/>
                   <path fill="#29707A" d="M179,108.6c0,6.2-3.4,10.8-8.5,10.8c-3.2,0-5.8-1.9-6.9-4.6v11.6h-5.8V98.2h5.8v4.7
                     c0.9-2.7,3.2-5.1,6.9-5.1C175.6,97.7,179,102.3,179,108.6z M173,108.6c0-4.2-1.7-6.9-4.8-6.9s-4.8,2.6-4.8,6.9
                     c0,4.2,1.7,6.8,4.8,6.8S173,112.7,173,108.6z"/>
                   <path fill="#29707A" d="M179.6,112.6h5.9c0.4,2.1,2.2,2.7,4,2.7c2.6,0,3.9-0.8,3.9-2.2c0-1.3-0.8-1.9-3.7-2.5l-3.7-0.8
                     c-3.9-0.8-6.1-2.7-6.1-5.8c0-3.9,4-6.4,9-6.4c4.7,0,8.6,1.9,9.5,6h-5.9c-0.5-1.3-1.9-2-3.6-2c-1.9,0-3.5,0.7-3.5,2
                     c0,1.2,1.2,1.6,3.3,2.1l3.7,0.8c4.3,1,6.4,2.8,6.4,6.2c0,4.2-4.2,6.6-9.7,6.6C184.2,119.3,180.4,117.2,179.6,112.6z"/>
                   <path fill="#29707A" d="M213.9,98.2h5.8v20.7H214v-4.1c-1,2.5-2.9,4.5-6.5,4.5c-4.8,0-6.8-3.5-6.8-8v-0.1v-13h5.8V110v0.1
                     c0,3.6,1.3,5.2,3.7,5.2c2.4,0,3.7-1.8,3.7-5.3V98.2z"/>
                   <path fill="#29707A" d="M254.4,105.8L254.4,105.8v13.1h-5.8v-11.8V107c0-3.6-1.1-5.2-3.5-5.2c-2.4,0-3.5,1.6-3.5,5.3v11.8h-5.8
                     v-11.8V107c0-3.6-1.1-5.2-3.5-5.2s-3.5,1.6-3.5,5.3v11.8h-5.8V98.2h5.8v4.2c1-2.6,2.9-4.7,6.4-4.7c3.6,0,5.6,2.4,6.3,5
                     c0.9-2.5,2.9-5,6.5-5C252.4,97.7,254.4,101.1,254.4,105.8z"/>
                 </g>
                    </svg>
            </a>
            <div class="${PREFIX_CLASS}-grid-container ${PREFIX_CLASS}-fully-fluid ${PREFIX_CLASS}-no-grid-gap ${PREFIX_CLASS}-no-grid-padding">
              <div class="${PREFIX_CLASS}-max-col-6 ${PREFIX_CLASS}-xlg-col-6 ${PREFIX_CLASS}-lg-col-6 ${PREFIX_CLASS}-md-col-12 ${PREFIX_CLASS}-sm-col-8 ${PREFIX_CLASS}-xs-col-4" style="min-height:768px">
                <div class="${PREFIX_CLASS}-pt6 ${PREFIX_CLASS}-pr5 ${PREFIX_CLASS}-pb8 ${PREFIX_CLASS}-pl4">
                  <div class="${PREFIX_CLASS}-mt0 ${PREFIX_CLASS}-mb4"><img src="https://placehold.co/240x120?text=Logo" /></div>
                  <h6 class="${PREFIX_CLASS}-h6 ${PREFIX_CLASS}-mt4 ${PREFIX_CLASS}-mb4"><strong>ORACLE</strong></h6>
                  <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum.</p>
                  <p class="${PREFIX_CLASS}-mt4 ${PREFIX_CLASS}-mb0"><kd-button type="primary" icon="arrow-right" href="javascript://">See more</kd-button></p>
                </div>
              </div>
              <div class="${PREFIX_CLASS}-bg-cloud ${PREFIX_CLASS}-max-col-6 ${PREFIX_CLASS}-xlg-col-6 ${PREFIX_CLASS}-lg-col-6 ${PREFIX_CLASS}-md-col-12 ${PREFIX_CLASS}-sm-col-8 ${PREFIX_CLASS}-xs-col-4" style="min-height:768px">
                <div class="${PREFIX_CLASS}-pt6 ${PREFIX_CLASS}-pr5 ${PREFIX_CLASS}-pb8 ${PREFIX_CLASS}-pl4">
                  <p class="${PREFIX_CLASS}-mt0"><strong>Services Links:</strong></p>
                  <ul class="${PREFIX_CLASS}-list">
                    <li class="${PREFIX_CLASS}-list-item">Curabitur blandit tempus porttitor.</li>
                    <li class="${PREFIX_CLASS}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                    <li class="${PREFIX_CLASS}-list-item">Aenean lacinia bibendum nulla sed consectetur.</li>
                    <li class="${PREFIX_CLASS}-list-item">Nulla vitae elit libero, a pharetra augue.</li>
                  </ul>
                  <p class="${PREFIX_CLASS}-mt4"><strong>More Links:</strong></p>
                  <ul class="${PREFIX_CLASS}-list">
                    <li class="${PREFIX_CLASS}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                  </ul>
                </div>
              </div>
            </div>
          </kd-modal>
        </div>
        <!-- END Oracle logo -->
        <!-- BEGIN Google Logo -->
        <div class="${PREFIX_CLASS}-max-col-3 ${PREFIX_CLASS}-xlg-col-3 ${PREFIX_CLASS}-lg-col-3 ${PREFIX_CLASS}-md-col-6 ${PREFIX_CLASS}-sm-col-8 ${PREFIX_CLASS}-xs-col-4">
          <kd-modal>
            <a href="javascript://" slot="trigger" title="Microsoft">
              <svg width="280" height="210" style="width:100%;height:auto" class="${PREFIX_CLASS}-transition-default-grayscale ${PREFIX_CLASS}-transition-hover-colorize" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 280 210" style="enable-background:new 0 0 280 210;" xml:space="preserve">
                   <g>
                   <path fill="#FF462D" d="M42.3,113.9h12.6v5H36.3v-29h6V113.9z"/>
                   <path fill="#FF462D" d="M54.6,108.6c0-6.4,4.2-10.8,10.8-10.8c6.6,0,10.8,4.5,10.8,10.8c0,6.3-4.2,10.8-10.8,10.8
                     C58.7,119.3,54.6,114.9,54.6,108.6z M70.2,108.6c0-4.2-1.7-6.9-4.8-6.9c-3.2,0-4.8,2.6-4.8,6.9c0,4.2,1.7,6.8,4.8,6.8
                     C68.5,115.4,70.2,112.7,70.2,108.6z"/>
                   <path fill="#FF462D" d="M83.8,103.6c0.8-3.2,2.9-5.9,6.9-5.9v5.7h-1.5c-3.6,0-5.4,1.2-5.4,4.7v10.7H78V98.2h5.8V103.6z"/>
                   <path fill="#FF462D" d="M111.4,110.3H96.5c0.4,3.5,2.2,5.1,4.6,5.1c2.3,0,3.4-1,4.1-2.6h5.9c-1.4,4.4-5,6.6-10,6.6
                     c-6.4,0-10.5-4.5-10.5-10.8c0-6.4,4.2-10.8,10.5-10.8c6.4,0,10.5,4.4,10.5,10.9C111.5,109.1,111.4,109.7,111.4,110.3z M96.5,106.4
                     h9c-0.3-2.9-2.1-4.7-4.5-4.7C98.7,101.7,97,103.1,96.5,106.4z"/>
                   <path fill="#FF462D" d="M145,105.8L145,105.8v13.1h-5.8v-11.8V107c0-3.6-1.1-5.2-3.5-5.2s-3.5,1.6-3.5,5.3v11.8h-5.8v-11.8V107
                     c0-3.6-1.1-5.2-3.5-5.2s-3.5,1.6-3.5,5.3v11.8h-5.8V98.2h5.8v4.2c1-2.6,2.9-4.7,6.4-4.7c3.6,0,5.6,2.4,6.3,5c0.9-2.5,2.9-5,6.5-5
                     C143,97.7,145,101.1,145,105.8z"/>
                   <path fill="#29707A" d="M148.4,118.9v-29h6v29H148.4z"/>
                   <path fill="#29707A" d="M179,108.6c0,6.2-3.4,10.8-8.5,10.8c-3.2,0-5.8-1.9-6.9-4.6v11.6h-5.8V98.2h5.8v4.7
                     c0.9-2.7,3.2-5.1,6.9-5.1C175.6,97.7,179,102.3,179,108.6z M173,108.6c0-4.2-1.7-6.9-4.8-6.9s-4.8,2.6-4.8,6.9
                     c0,4.2,1.7,6.8,4.8,6.8S173,112.7,173,108.6z"/>
                   <path fill="#29707A" d="M179.6,112.6h5.9c0.4,2.1,2.2,2.7,4,2.7c2.6,0,3.9-0.8,3.9-2.2c0-1.3-0.8-1.9-3.7-2.5l-3.7-0.8
                     c-3.9-0.8-6.1-2.7-6.1-5.8c0-3.9,4-6.4,9-6.4c4.7,0,8.6,1.9,9.5,6h-5.9c-0.5-1.3-1.9-2-3.6-2c-1.9,0-3.5,0.7-3.5,2
                     c0,1.2,1.2,1.6,3.3,2.1l3.7,0.8c4.3,1,6.4,2.8,6.4,6.2c0,4.2-4.2,6.6-9.7,6.6C184.2,119.3,180.4,117.2,179.6,112.6z"/>
                   <path fill="#29707A" d="M213.9,98.2h5.8v20.7H214v-4.1c-1,2.5-2.9,4.5-6.5,4.5c-4.8,0-6.8-3.5-6.8-8v-0.1v-13h5.8V110v0.1
                     c0,3.6,1.3,5.2,3.7,5.2c2.4,0,3.7-1.8,3.7-5.3V98.2z"/>
                   <path fill="#29707A" d="M254.4,105.8L254.4,105.8v13.1h-5.8v-11.8V107c0-3.6-1.1-5.2-3.5-5.2c-2.4,0-3.5,1.6-3.5,5.3v11.8h-5.8
                     v-11.8V107c0-3.6-1.1-5.2-3.5-5.2s-3.5,1.6-3.5,5.3v11.8h-5.8V98.2h5.8v4.2c1-2.6,2.9-4.7,6.4-4.7c3.6,0,5.6,2.4,6.3,5
                     c0.9-2.5,2.9-5,6.5-5C252.4,97.7,254.4,101.1,254.4,105.8z"/>
                 </g>
                    </svg>
            </a>
            <div class="${PREFIX_CLASS}-grid-container ${PREFIX_CLASS}-fully-fluid ${PREFIX_CLASS}-no-grid-gap ${PREFIX_CLASS}-no-grid-padding">
              <div class="${PREFIX_CLASS}-max-col-6 ${PREFIX_CLASS}-xlg-col-6 ${PREFIX_CLASS}-lg-col-6 ${PREFIX_CLASS}-md-col-12 ${PREFIX_CLASS}-sm-col-8 ${PREFIX_CLASS}-xs-col-4" style="min-height:768px">
                <div class="${PREFIX_CLASS}-pt6 ${PREFIX_CLASS}-pr5 ${PREFIX_CLASS}-pb8 ${PREFIX_CLASS}-pl4">
                  <div class="${PREFIX_CLASS}-mt0 ${PREFIX_CLASS}-mb4"><img src="https://placehold.co/240x120?text=Logo" /></div>
                  <h6 class="${PREFIX_CLASS}-h6 ${PREFIX_CLASS}-mt4 ${PREFIX_CLASS}-mb4"><strong>GOOGLE CLOUD</strong></h6>
                  <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum.</p>
                  <p class="${PREFIX_CLASS}-mt4 ${PREFIX_CLASS}-mb0"><kd-button type="primary" icon="arrow-right" href="javascript://">See more</kd-button></p>
                </div>
              </div>
              <div class="${PREFIX_CLASS}-bg-cloud ${PREFIX_CLASS}-max-col-6 ${PREFIX_CLASS}-xlg-col-6 ${PREFIX_CLASS}-lg-col-6 ${PREFIX_CLASS}-md-col-12 ${PREFIX_CLASS}-sm-col-8 ${PREFIX_CLASS}-xs-col-4" style="min-height:768px">
                <div class="${PREFIX_CLASS}-pt6 ${PREFIX_CLASS}-pr5 ${PREFIX_CLASS}-pb8 ${PREFIX_CLASS}-pl4">
                  <p class="${PREFIX_CLASS}-mt0"><strong>Services Links:</strong></p>
                  <ul class="${PREFIX_CLASS}-list">
                    <li class="${PREFIX_CLASS}-list-item">Curabitur blandit tempus porttitor.</li>
                    <li class="${PREFIX_CLASS}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                    <li class="${PREFIX_CLASS}-list-item">Aenean lacinia bibendum nulla sed consectetur.</li>
                    <li class="${PREFIX_CLASS}-list-item">Nulla vitae elit libero, a pharetra augue.</li>
                  </ul>
                  <p class="${PREFIX_CLASS}-mt4"><strong>More Links:</strong></p>
                  <ul class="${PREFIX_CLASS}-list">
                    <li class="${PREFIX_CLASS}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                  </ul>
                </div>
              </div>
            </div>
          </kd-modal>
        </div>
        <!-- END Google logo -->
        <!-- BEGIN Oracle Logo -->
        <div class="${PREFIX_CLASS}-max-col-3 ${PREFIX_CLASS}-xlg-col-3 ${PREFIX_CLASS}-lg-col-3 ${PREFIX_CLASS}-md-col-6 ${PREFIX_CLASS}-sm-col-8 ${PREFIX_CLASS}-xs-col-4">
          <kd-modal>
            <a href="javascript://" slot="trigger" title="Microsoft">
              <svg width="280" height="210" style="width:100%;height:auto" class="${PREFIX_CLASS}-transition-default-grayscale ${PREFIX_CLASS}-transition-hover-colorize" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 280 210" style="enable-background:new 0 0 280 210;" xml:space="preserve">
                   <g>
                   <path fill="#FF462D" d="M42.3,113.9h12.6v5H36.3v-29h6V113.9z"/>
                   <path fill="#FF462D" d="M54.6,108.6c0-6.4,4.2-10.8,10.8-10.8c6.6,0,10.8,4.5,10.8,10.8c0,6.3-4.2,10.8-10.8,10.8
                     C58.7,119.3,54.6,114.9,54.6,108.6z M70.2,108.6c0-4.2-1.7-6.9-4.8-6.9c-3.2,0-4.8,2.6-4.8,6.9c0,4.2,1.7,6.8,4.8,6.8
                     C68.5,115.4,70.2,112.7,70.2,108.6z"/>
                   <path fill="#FF462D" d="M83.8,103.6c0.8-3.2,2.9-5.9,6.9-5.9v5.7h-1.5c-3.6,0-5.4,1.2-5.4,4.7v10.7H78V98.2h5.8V103.6z"/>
                   <path fill="#FF462D" d="M111.4,110.3H96.5c0.4,3.5,2.2,5.1,4.6,5.1c2.3,0,3.4-1,4.1-2.6h5.9c-1.4,4.4-5,6.6-10,6.6
                     c-6.4,0-10.5-4.5-10.5-10.8c0-6.4,4.2-10.8,10.5-10.8c6.4,0,10.5,4.4,10.5,10.9C111.5,109.1,111.4,109.7,111.4,110.3z M96.5,106.4
                     h9c-0.3-2.9-2.1-4.7-4.5-4.7C98.7,101.7,97,103.1,96.5,106.4z"/>
                   <path fill="#FF462D" d="M145,105.8L145,105.8v13.1h-5.8v-11.8V107c0-3.6-1.1-5.2-3.5-5.2s-3.5,1.6-3.5,5.3v11.8h-5.8v-11.8V107
                     c0-3.6-1.1-5.2-3.5-5.2s-3.5,1.6-3.5,5.3v11.8h-5.8V98.2h5.8v4.2c1-2.6,2.9-4.7,6.4-4.7c3.6,0,5.6,2.4,6.3,5c0.9-2.5,2.9-5,6.5-5
                     C143,97.7,145,101.1,145,105.8z"/>
                   <path fill="#29707A" d="M148.4,118.9v-29h6v29H148.4z"/>
                   <path fill="#29707A" d="M179,108.6c0,6.2-3.4,10.8-8.5,10.8c-3.2,0-5.8-1.9-6.9-4.6v11.6h-5.8V98.2h5.8v4.7
                     c0.9-2.7,3.2-5.1,6.9-5.1C175.6,97.7,179,102.3,179,108.6z M173,108.6c0-4.2-1.7-6.9-4.8-6.9s-4.8,2.6-4.8,6.9
                     c0,4.2,1.7,6.8,4.8,6.8S173,112.7,173,108.6z"/>
                   <path fill="#29707A" d="M179.6,112.6h5.9c0.4,2.1,2.2,2.7,4,2.7c2.6,0,3.9-0.8,3.9-2.2c0-1.3-0.8-1.9-3.7-2.5l-3.7-0.8
                     c-3.9-0.8-6.1-2.7-6.1-5.8c0-3.9,4-6.4,9-6.4c4.7,0,8.6,1.9,9.5,6h-5.9c-0.5-1.3-1.9-2-3.6-2c-1.9,0-3.5,0.7-3.5,2
                     c0,1.2,1.2,1.6,3.3,2.1l3.7,0.8c4.3,1,6.4,2.8,6.4,6.2c0,4.2-4.2,6.6-9.7,6.6C184.2,119.3,180.4,117.2,179.6,112.6z"/>
                   <path fill="#29707A" d="M213.9,98.2h5.8v20.7H214v-4.1c-1,2.5-2.9,4.5-6.5,4.5c-4.8,0-6.8-3.5-6.8-8v-0.1v-13h5.8V110v0.1
                     c0,3.6,1.3,5.2,3.7,5.2c2.4,0,3.7-1.8,3.7-5.3V98.2z"/>
                   <path fill="#29707A" d="M254.4,105.8L254.4,105.8v13.1h-5.8v-11.8V107c0-3.6-1.1-5.2-3.5-5.2c-2.4,0-3.5,1.6-3.5,5.3v11.8h-5.8
                     v-11.8V107c0-3.6-1.1-5.2-3.5-5.2s-3.5,1.6-3.5,5.3v11.8h-5.8V98.2h5.8v4.2c1-2.6,2.9-4.7,6.4-4.7c3.6,0,5.6,2.4,6.3,5
                     c0.9-2.5,2.9-5,6.5-5C252.4,97.7,254.4,101.1,254.4,105.8z"/>
                 </g>
                    </svg>
            </a>
            <div class="${PREFIX_CLASS}-grid-container ${PREFIX_CLASS}-fully-fluid ${PREFIX_CLASS}-no-grid-gap ${PREFIX_CLASS}-no-grid-padding">
              <div class="${PREFIX_CLASS}-max-col-6 ${PREFIX_CLASS}-xlg-col-6 ${PREFIX_CLASS}-lg-col-6 ${PREFIX_CLASS}-md-col-12 ${PREFIX_CLASS}-sm-col-8 ${PREFIX_CLASS}-xs-col-4" style="min-height:768px">
                <div class="${PREFIX_CLASS}-pt6 ${PREFIX_CLASS}-pr5 ${PREFIX_CLASS}-pb8 ${PREFIX_CLASS}-pl4">
                  <div class="${PREFIX_CLASS}-mt0 ${PREFIX_CLASS}-mb4"><img src="https://placehold.co/240x120?text=Logo" /></div>
                  <h6 class="${PREFIX_CLASS}-h6 ${PREFIX_CLASS}-mt4 ${PREFIX_CLASS}-mb4"><strong>ORACLE</strong></h6>
                  <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum.</p>
                  <p class="${PREFIX_CLASS}-mt4 ${PREFIX_CLASS}-mb0"><kd-button type="primary" icon="arrow-right" href="javascript://">See more</kd-button></p>
                </div>
              </div>
              <div class="${PREFIX_CLASS}-bg-cloud ${PREFIX_CLASS}-max-col-6 ${PREFIX_CLASS}-xlg-col-6 ${PREFIX_CLASS}-lg-col-6 ${PREFIX_CLASS}-md-col-12 ${PREFIX_CLASS}-sm-col-8 ${PREFIX_CLASS}-xs-col-4" style="min-height:768px">
                <div class="${PREFIX_CLASS}-pt6 ${PREFIX_CLASS}-pr5 ${PREFIX_CLASS}-pb8 ${PREFIX_CLASS}-pl4">
                  <p class="${PREFIX_CLASS}-mt0"><strong>Services Links:</strong></p>
                  <ul class="${PREFIX_CLASS}-list">
                    <li class="${PREFIX_CLASS}-list-item">Curabitur blandit tempus porttitor.</li>
                    <li class="${PREFIX_CLASS}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                    <li class="${PREFIX_CLASS}-list-item">Aenean lacinia bibendum nulla sed consectetur.</li>
                    <li class="${PREFIX_CLASS}-list-item">Nulla vitae elit libero, a pharetra augue.</li>
                  </ul>
                  <p class="${PREFIX_CLASS}-mt4"><strong>More Links:</strong></p>
                  <ul class="${PREFIX_CLASS}-list">
                    <li class="${PREFIX_CLASS}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                  </ul>
                </div>
              </div>
            </div>
          </kd-modal>
        </div>
        <!-- END Oracle logo -->
        
        <!-- BEGIN Oracle Logo -->
        <div class="${PREFIX_CLASS}-max-col-3 ${PREFIX_CLASS}-xlg-col-3 ${PREFIX_CLASS}-lg-col-3 ${PREFIX_CLASS}-md-col-6 ${PREFIX_CLASS}-sm-col-8 ${PREFIX_CLASS}-xs-col-4">
          <kd-modal>
            <a href="javascript://" slot="trigger" title="Microsoft">
              <svg width="280" height="210" style="width:100%;height:auto" class="${PREFIX_CLASS}-transition-default-grayscale ${PREFIX_CLASS}-transition-hover-colorize" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 280 210" style="enable-background:new 0 0 280 210;" xml:space="preserve">
                   <g>
                   <path fill="#FF462D" d="M42.3,113.9h12.6v5H36.3v-29h6V113.9z"/>
                   <path fill="#FF462D" d="M54.6,108.6c0-6.4,4.2-10.8,10.8-10.8c6.6,0,10.8,4.5,10.8,10.8c0,6.3-4.2,10.8-10.8,10.8
                     C58.7,119.3,54.6,114.9,54.6,108.6z M70.2,108.6c0-4.2-1.7-6.9-4.8-6.9c-3.2,0-4.8,2.6-4.8,6.9c0,4.2,1.7,6.8,4.8,6.8
                     C68.5,115.4,70.2,112.7,70.2,108.6z"/>
                   <path fill="#FF462D" d="M83.8,103.6c0.8-3.2,2.9-5.9,6.9-5.9v5.7h-1.5c-3.6,0-5.4,1.2-5.4,4.7v10.7H78V98.2h5.8V103.6z"/>
                   <path fill="#FF462D" d="M111.4,110.3H96.5c0.4,3.5,2.2,5.1,4.6,5.1c2.3,0,3.4-1,4.1-2.6h5.9c-1.4,4.4-5,6.6-10,6.6
                     c-6.4,0-10.5-4.5-10.5-10.8c0-6.4,4.2-10.8,10.5-10.8c6.4,0,10.5,4.4,10.5,10.9C111.5,109.1,111.4,109.7,111.4,110.3z M96.5,106.4
                     h9c-0.3-2.9-2.1-4.7-4.5-4.7C98.7,101.7,97,103.1,96.5,106.4z"/>
                   <path fill="#FF462D" d="M145,105.8L145,105.8v13.1h-5.8v-11.8V107c0-3.6-1.1-5.2-3.5-5.2s-3.5,1.6-3.5,5.3v11.8h-5.8v-11.8V107
                     c0-3.6-1.1-5.2-3.5-5.2s-3.5,1.6-3.5,5.3v11.8h-5.8V98.2h5.8v4.2c1-2.6,2.9-4.7,6.4-4.7c3.6,0,5.6,2.4,6.3,5c0.9-2.5,2.9-5,6.5-5
                     C143,97.7,145,101.1,145,105.8z"/>
                   <path fill="#29707A" d="M148.4,118.9v-29h6v29H148.4z"/>
                   <path fill="#29707A" d="M179,108.6c0,6.2-3.4,10.8-8.5,10.8c-3.2,0-5.8-1.9-6.9-4.6v11.6h-5.8V98.2h5.8v4.7
                     c0.9-2.7,3.2-5.1,6.9-5.1C175.6,97.7,179,102.3,179,108.6z M173,108.6c0-4.2-1.7-6.9-4.8-6.9s-4.8,2.6-4.8,6.9
                     c0,4.2,1.7,6.8,4.8,6.8S173,112.7,173,108.6z"/>
                   <path fill="#29707A" d="M179.6,112.6h5.9c0.4,2.1,2.2,2.7,4,2.7c2.6,0,3.9-0.8,3.9-2.2c0-1.3-0.8-1.9-3.7-2.5l-3.7-0.8
                     c-3.9-0.8-6.1-2.7-6.1-5.8c0-3.9,4-6.4,9-6.4c4.7,0,8.6,1.9,9.5,6h-5.9c-0.5-1.3-1.9-2-3.6-2c-1.9,0-3.5,0.7-3.5,2
                     c0,1.2,1.2,1.6,3.3,2.1l3.7,0.8c4.3,1,6.4,2.8,6.4,6.2c0,4.2-4.2,6.6-9.7,6.6C184.2,119.3,180.4,117.2,179.6,112.6z"/>
                   <path fill="#29707A" d="M213.9,98.2h5.8v20.7H214v-4.1c-1,2.5-2.9,4.5-6.5,4.5c-4.8,0-6.8-3.5-6.8-8v-0.1v-13h5.8V110v0.1
                     c0,3.6,1.3,5.2,3.7,5.2c2.4,0,3.7-1.8,3.7-5.3V98.2z"/>
                   <path fill="#29707A" d="M254.4,105.8L254.4,105.8v13.1h-5.8v-11.8V107c0-3.6-1.1-5.2-3.5-5.2c-2.4,0-3.5,1.6-3.5,5.3v11.8h-5.8
                     v-11.8V107c0-3.6-1.1-5.2-3.5-5.2s-3.5,1.6-3.5,5.3v11.8h-5.8V98.2h5.8v4.2c1-2.6,2.9-4.7,6.4-4.7c3.6,0,5.6,2.4,6.3,5
                     c0.9-2.5,2.9-5,6.5-5C252.4,97.7,254.4,101.1,254.4,105.8z"/>
                 </g>
                    </svg>
            </a>
            <div class="${PREFIX_CLASS}-grid-container ${PREFIX_CLASS}-fully-fluid ${PREFIX_CLASS}-no-grid-gap ${PREFIX_CLASS}-no-grid-padding">
              <div class="${PREFIX_CLASS}-max-col-6 ${PREFIX_CLASS}-xlg-col-6 ${PREFIX_CLASS}-lg-col-6 ${PREFIX_CLASS}-md-col-12 ${PREFIX_CLASS}-sm-col-8 ${PREFIX_CLASS}-xs-col-4" style="min-height:768px">
                <div class="${PREFIX_CLASS}-pt6 ${PREFIX_CLASS}-pr5 ${PREFIX_CLASS}-pb8 ${PREFIX_CLASS}-pl4">
                  <div class="${PREFIX_CLASS}-mt0 ${PREFIX_CLASS}-mb4"><img src="https://placehold.co/240x120?text=Logo" /></div>
                  <h6 class="${PREFIX_CLASS}-h6 ${PREFIX_CLASS}-mt4 ${PREFIX_CLASS}-mb4"><strong>ORACLE</strong></h6>
                  <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum.</p>
                  <p class="${PREFIX_CLASS}-mt4 ${PREFIX_CLASS}-mb0"><kd-button type="primary" icon="arrow-right" href="javascript://">See more</kd-button></p>
                </div>
              </div>
              <div class="${PREFIX_CLASS}-bg-cloud ${PREFIX_CLASS}-max-col-6 ${PREFIX_CLASS}-xlg-col-6 ${PREFIX_CLASS}-lg-col-6 ${PREFIX_CLASS}-md-col-12 ${PREFIX_CLASS}-sm-col-8 ${PREFIX_CLASS}-xs-col-4" style="min-height:768px">
                <div class="${PREFIX_CLASS}-pt6 ${PREFIX_CLASS}-pr5 ${PREFIX_CLASS}-pb8 ${PREFIX_CLASS}-pl4">
                  <p class="${PREFIX_CLASS}-mt0"><strong>Services Links:</strong></p>
                  <ul class="${PREFIX_CLASS}-list">
                    <li class="${PREFIX_CLASS}-list-item">Curabitur blandit tempus porttitor.</li>
                    <li class="${PREFIX_CLASS}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                    <li class="${PREFIX_CLASS}-list-item">Aenean lacinia bibendum nulla sed consectetur.</li>
                    <li class="${PREFIX_CLASS}-list-item">Nulla vitae elit libero, a pharetra augue.</li>
                  </ul>
                  <p class="${PREFIX_CLASS}-mt4"><strong>More Links:</strong></p>
                  <ul class="${PREFIX_CLASS}-list">
                    <li class="${PREFIX_CLASS}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                  </ul>
                </div>
              </div>
            </div>
          </kd-modal>
        </div>
        <!-- END Oracle logo -->
        <!-- BEGIN Google Logo -->
        <div class="${PREFIX_CLASS}-max-col-3 ${PREFIX_CLASS}-xlg-col-3 ${PREFIX_CLASS}-lg-col-3 ${PREFIX_CLASS}-md-col-6 ${PREFIX_CLASS}-sm-col-8 ${PREFIX_CLASS}-xs-col-4">
          <kd-modal>
            <a href="javascript://" slot="trigger" title="Microsoft">
              <svg width="280" height="210" style="width:100%;height:auto" class="${PREFIX_CLASS}-transition-default-grayscale ${PREFIX_CLASS}-transition-hover-colorize" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 280 210" style="enable-background:new 0 0 280 210;" xml:space="preserve">
                   <g>
                   <path fill="#FF462D" d="M42.3,113.9h12.6v5H36.3v-29h6V113.9z"/>
                   <path fill="#FF462D" d="M54.6,108.6c0-6.4,4.2-10.8,10.8-10.8c6.6,0,10.8,4.5,10.8,10.8c0,6.3-4.2,10.8-10.8,10.8
                     C58.7,119.3,54.6,114.9,54.6,108.6z M70.2,108.6c0-4.2-1.7-6.9-4.8-6.9c-3.2,0-4.8,2.6-4.8,6.9c0,4.2,1.7,6.8,4.8,6.8
                     C68.5,115.4,70.2,112.7,70.2,108.6z"/>
                   <path fill="#FF462D" d="M83.8,103.6c0.8-3.2,2.9-5.9,6.9-5.9v5.7h-1.5c-3.6,0-5.4,1.2-5.4,4.7v10.7H78V98.2h5.8V103.6z"/>
                   <path fill="#FF462D" d="M111.4,110.3H96.5c0.4,3.5,2.2,5.1,4.6,5.1c2.3,0,3.4-1,4.1-2.6h5.9c-1.4,4.4-5,6.6-10,6.6
                     c-6.4,0-10.5-4.5-10.5-10.8c0-6.4,4.2-10.8,10.5-10.8c6.4,0,10.5,4.4,10.5,10.9C111.5,109.1,111.4,109.7,111.4,110.3z M96.5,106.4
                     h9c-0.3-2.9-2.1-4.7-4.5-4.7C98.7,101.7,97,103.1,96.5,106.4z"/>
                   <path fill="#FF462D" d="M145,105.8L145,105.8v13.1h-5.8v-11.8V107c0-3.6-1.1-5.2-3.5-5.2s-3.5,1.6-3.5,5.3v11.8h-5.8v-11.8V107
                     c0-3.6-1.1-5.2-3.5-5.2s-3.5,1.6-3.5,5.3v11.8h-5.8V98.2h5.8v4.2c1-2.6,2.9-4.7,6.4-4.7c3.6,0,5.6,2.4,6.3,5c0.9-2.5,2.9-5,6.5-5
                     C143,97.7,145,101.1,145,105.8z"/>
                   <path fill="#29707A" d="M148.4,118.9v-29h6v29H148.4z"/>
                   <path fill="#29707A" d="M179,108.6c0,6.2-3.4,10.8-8.5,10.8c-3.2,0-5.8-1.9-6.9-4.6v11.6h-5.8V98.2h5.8v4.7
                     c0.9-2.7,3.2-5.1,6.9-5.1C175.6,97.7,179,102.3,179,108.6z M173,108.6c0-4.2-1.7-6.9-4.8-6.9s-4.8,2.6-4.8,6.9
                     c0,4.2,1.7,6.8,4.8,6.8S173,112.7,173,108.6z"/>
                   <path fill="#29707A" d="M179.6,112.6h5.9c0.4,2.1,2.2,2.7,4,2.7c2.6,0,3.9-0.8,3.9-2.2c0-1.3-0.8-1.9-3.7-2.5l-3.7-0.8
                     c-3.9-0.8-6.1-2.7-6.1-5.8c0-3.9,4-6.4,9-6.4c4.7,0,8.6,1.9,9.5,6h-5.9c-0.5-1.3-1.9-2-3.6-2c-1.9,0-3.5,0.7-3.5,2
                     c0,1.2,1.2,1.6,3.3,2.1l3.7,0.8c4.3,1,6.4,2.8,6.4,6.2c0,4.2-4.2,6.6-9.7,6.6C184.2,119.3,180.4,117.2,179.6,112.6z"/>
                   <path fill="#29707A" d="M213.9,98.2h5.8v20.7H214v-4.1c-1,2.5-2.9,4.5-6.5,4.5c-4.8,0-6.8-3.5-6.8-8v-0.1v-13h5.8V110v0.1
                     c0,3.6,1.3,5.2,3.7,5.2c2.4,0,3.7-1.8,3.7-5.3V98.2z"/>
                   <path fill="#29707A" d="M254.4,105.8L254.4,105.8v13.1h-5.8v-11.8V107c0-3.6-1.1-5.2-3.5-5.2c-2.4,0-3.5,1.6-3.5,5.3v11.8h-5.8
                     v-11.8V107c0-3.6-1.1-5.2-3.5-5.2s-3.5,1.6-3.5,5.3v11.8h-5.8V98.2h5.8v4.2c1-2.6,2.9-4.7,6.4-4.7c3.6,0,5.6,2.4,6.3,5
                     c0.9-2.5,2.9-5,6.5-5C252.4,97.7,254.4,101.1,254.4,105.8z"/>
                 </g>
                    </svg>
            </a>
            <div class="${PREFIX_CLASS}-grid-container ${PREFIX_CLASS}-fully-fluid ${PREFIX_CLASS}-no-grid-gap ${PREFIX_CLASS}-no-grid-padding">
              <div class="${PREFIX_CLASS}-max-col-6 ${PREFIX_CLASS}-xlg-col-6 ${PREFIX_CLASS}-lg-col-6 ${PREFIX_CLASS}-md-col-12 ${PREFIX_CLASS}-sm-col-8 ${PREFIX_CLASS}-xs-col-4" style="min-height:768px">
                <div class="${PREFIX_CLASS}-pt6 ${PREFIX_CLASS}-pr5 ${PREFIX_CLASS}-pb8 ${PREFIX_CLASS}-pl4">
                  <div class="${PREFIX_CLASS}-mt0 ${PREFIX_CLASS}-mb4"><img src="https://placehold.co/240x120?text=Logo" /></div>
                  <h6 class="${PREFIX_CLASS}-h6 ${PREFIX_CLASS}-mt4 ${PREFIX_CLASS}-mb4"><strong>GOOGLE CLOUD</strong></h6>
                  <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum.</p>
                  <p class="${PREFIX_CLASS}-mt4 ${PREFIX_CLASS}-mb0"><kd-button type="primary" icon="arrow-right" href="javascript://">See more</kd-button></p>
                </div>
              </div>
              <div class="${PREFIX_CLASS}-bg-cloud ${PREFIX_CLASS}-max-col-6 ${PREFIX_CLASS}-xlg-col-6 ${PREFIX_CLASS}-lg-col-6 ${PREFIX_CLASS}-md-col-12 ${PREFIX_CLASS}-sm-col-8 ${PREFIX_CLASS}-xs-col-4" style="min-height:768px">
                <div class="${PREFIX_CLASS}-pt6 ${PREFIX_CLASS}-pr5 ${PREFIX_CLASS}-pb8 ${PREFIX_CLASS}-pl4">
                  <p class="${PREFIX_CLASS}-mt0"><strong>Services Links:</strong></p>
                  <ul class="${PREFIX_CLASS}-list">
                    <li class="${PREFIX_CLASS}-list-item">Curabitur blandit tempus porttitor.</li>
                    <li class="${PREFIX_CLASS}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                    <li class="${PREFIX_CLASS}-list-item">Aenean lacinia bibendum nulla sed consectetur.</li>
                    <li class="${PREFIX_CLASS}-list-item">Nulla vitae elit libero, a pharetra augue.</li>
                  </ul>
                  <p class="${PREFIX_CLASS}-mt4"><strong>More Links:</strong></p>
                  <ul class="${PREFIX_CLASS}-list">
                    <li class="${PREFIX_CLASS}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                  </ul>
                </div>
              </div>
            </div>
          </kd-modal>
        </div>
        <!-- END Google logo -->
        <!-- BEGIN Oracle Logo -->
        <div class="${PREFIX_CLASS}-max-col-3 ${PREFIX_CLASS}-xlg-col-3 ${PREFIX_CLASS}-lg-col-3 ${PREFIX_CLASS}-md-col-6 ${PREFIX_CLASS}-sm-col-8 ${PREFIX_CLASS}-xs-col-4">
          <kd-modal>
            <a href="javascript://" slot="trigger" title="Microsoft">
              <svg width="280" height="210" style="width:100%;height:auto" class="${PREFIX_CLASS}-transition-default-grayscale ${PREFIX_CLASS}-transition-hover-colorize" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 280 210" style="enable-background:new 0 0 280 210;" xml:space="preserve">
                   <g>
                   <path fill="#FF462D" d="M42.3,113.9h12.6v5H36.3v-29h6V113.9z"/>
                   <path fill="#FF462D" d="M54.6,108.6c0-6.4,4.2-10.8,10.8-10.8c6.6,0,10.8,4.5,10.8,10.8c0,6.3-4.2,10.8-10.8,10.8
                     C58.7,119.3,54.6,114.9,54.6,108.6z M70.2,108.6c0-4.2-1.7-6.9-4.8-6.9c-3.2,0-4.8,2.6-4.8,6.9c0,4.2,1.7,6.8,4.8,6.8
                     C68.5,115.4,70.2,112.7,70.2,108.6z"/>
                   <path fill="#FF462D" d="M83.8,103.6c0.8-3.2,2.9-5.9,6.9-5.9v5.7h-1.5c-3.6,0-5.4,1.2-5.4,4.7v10.7H78V98.2h5.8V103.6z"/>
                   <path fill="#FF462D" d="M111.4,110.3H96.5c0.4,3.5,2.2,5.1,4.6,5.1c2.3,0,3.4-1,4.1-2.6h5.9c-1.4,4.4-5,6.6-10,6.6
                     c-6.4,0-10.5-4.5-10.5-10.8c0-6.4,4.2-10.8,10.5-10.8c6.4,0,10.5,4.4,10.5,10.9C111.5,109.1,111.4,109.7,111.4,110.3z M96.5,106.4
                     h9c-0.3-2.9-2.1-4.7-4.5-4.7C98.7,101.7,97,103.1,96.5,106.4z"/>
                   <path fill="#FF462D" d="M145,105.8L145,105.8v13.1h-5.8v-11.8V107c0-3.6-1.1-5.2-3.5-5.2s-3.5,1.6-3.5,5.3v11.8h-5.8v-11.8V107
                     c0-3.6-1.1-5.2-3.5-5.2s-3.5,1.6-3.5,5.3v11.8h-5.8V98.2h5.8v4.2c1-2.6,2.9-4.7,6.4-4.7c3.6,0,5.6,2.4,6.3,5c0.9-2.5,2.9-5,6.5-5
                     C143,97.7,145,101.1,145,105.8z"/>
                   <path fill="#29707A" d="M148.4,118.9v-29h6v29H148.4z"/>
                   <path fill="#29707A" d="M179,108.6c0,6.2-3.4,10.8-8.5,10.8c-3.2,0-5.8-1.9-6.9-4.6v11.6h-5.8V98.2h5.8v4.7
                     c0.9-2.7,3.2-5.1,6.9-5.1C175.6,97.7,179,102.3,179,108.6z M173,108.6c0-4.2-1.7-6.9-4.8-6.9s-4.8,2.6-4.8,6.9
                     c0,4.2,1.7,6.8,4.8,6.8S173,112.7,173,108.6z"/>
                   <path fill="#29707A" d="M179.6,112.6h5.9c0.4,2.1,2.2,2.7,4,2.7c2.6,0,3.9-0.8,3.9-2.2c0-1.3-0.8-1.9-3.7-2.5l-3.7-0.8
                     c-3.9-0.8-6.1-2.7-6.1-5.8c0-3.9,4-6.4,9-6.4c4.7,0,8.6,1.9,9.5,6h-5.9c-0.5-1.3-1.9-2-3.6-2c-1.9,0-3.5,0.7-3.5,2
                     c0,1.2,1.2,1.6,3.3,2.1l3.7,0.8c4.3,1,6.4,2.8,6.4,6.2c0,4.2-4.2,6.6-9.7,6.6C184.2,119.3,180.4,117.2,179.6,112.6z"/>
                   <path fill="#29707A" d="M213.9,98.2h5.8v20.7H214v-4.1c-1,2.5-2.9,4.5-6.5,4.5c-4.8,0-6.8-3.5-6.8-8v-0.1v-13h5.8V110v0.1
                     c0,3.6,1.3,5.2,3.7,5.2c2.4,0,3.7-1.8,3.7-5.3V98.2z"/>
                   <path fill="#29707A" d="M254.4,105.8L254.4,105.8v13.1h-5.8v-11.8V107c0-3.6-1.1-5.2-3.5-5.2c-2.4,0-3.5,1.6-3.5,5.3v11.8h-5.8
                     v-11.8V107c0-3.6-1.1-5.2-3.5-5.2s-3.5,1.6-3.5,5.3v11.8h-5.8V98.2h5.8v4.2c1-2.6,2.9-4.7,6.4-4.7c3.6,0,5.6,2.4,6.3,5
                     c0.9-2.5,2.9-5,6.5-5C252.4,97.7,254.4,101.1,254.4,105.8z"/>
                 </g>
                    </svg>
            </a>
            <div class="${PREFIX_CLASS}-grid-container ${PREFIX_CLASS}-fully-fluid ${PREFIX_CLASS}-no-grid-gap ${PREFIX_CLASS}-no-grid-padding">
              <div class="${PREFIX_CLASS}-max-col-6 ${PREFIX_CLASS}-xlg-col-6 ${PREFIX_CLASS}-lg-col-6 ${PREFIX_CLASS}-md-col-12 ${PREFIX_CLASS}-sm-col-8 ${PREFIX_CLASS}-xs-col-4" style="min-height:768px">
                <div class="${PREFIX_CLASS}-pt6 ${PREFIX_CLASS}-pr5 ${PREFIX_CLASS}-pb8 ${PREFIX_CLASS}-pl4">
                  <div class="${PREFIX_CLASS}-mt0 ${PREFIX_CLASS}-mb4"><img src="https://placehold.co/240x120?text=Logo" /></div>
                  <h6 class="${PREFIX_CLASS}-h6 ${PREFIX_CLASS}-mt4 ${PREFIX_CLASS}-mb4"><strong>ORACLE</strong></h6>
                  <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum.</p>
                  <p class="${PREFIX_CLASS}-mt4 ${PREFIX_CLASS}-mb0"><kd-button type="primary" icon="arrow-right" href="javascript://">See more</kd-button></p>
                </div>
              </div>
              <div class="${PREFIX_CLASS}-bg-cloud ${PREFIX_CLASS}-max-col-6 ${PREFIX_CLASS}-xlg-col-6 ${PREFIX_CLASS}-lg-col-6 ${PREFIX_CLASS}-md-col-12 ${PREFIX_CLASS}-sm-col-8 ${PREFIX_CLASS}-xs-col-4" style="min-height:768px">
                <div class="${PREFIX_CLASS}-pt6 ${PREFIX_CLASS}-pr5 ${PREFIX_CLASS}-pb8 ${PREFIX_CLASS}-pl4">
                  <p class="${PREFIX_CLASS}-mt0"><strong>Services Links:</strong></p>
                  <ul class="${PREFIX_CLASS}-list">
                    <li class="${PREFIX_CLASS}-list-item">Curabitur blandit tempus porttitor.</li>
                    <li class="${PREFIX_CLASS}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                    <li class="${PREFIX_CLASS}-list-item">Aenean lacinia bibendum nulla sed consectetur.</li>
                    <li class="${PREFIX_CLASS}-list-item">Nulla vitae elit libero, a pharetra augue.</li>
                  </ul>
                  <p class="${PREFIX_CLASS}-mt4"><strong>More Links:</strong></p>
                  <ul class="${PREFIX_CLASS}-list">
                    <li class="${PREFIX_CLASS}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                  </ul>
                </div>
              </div>
            </div>
          </kd-modal>
        </div>
        <!-- END Oracle logo -->
        <!-- BEGIN Google Logo -->
        <div class="${PREFIX_CLASS}-max-col-3 ${PREFIX_CLASS}-xlg-col-3 ${PREFIX_CLASS}-lg-col-3 ${PREFIX_CLASS}-md-col-6 ${PREFIX_CLASS}-sm-col-8 ${PREFIX_CLASS}-xs-col-4">
          <kd-modal>
            <a href="javascript://" slot="trigger" title="Microsoft">
              <svg width="280" height="210" style="width:100%;height:auto" class="${PREFIX_CLASS}-transition-default-grayscale ${PREFIX_CLASS}-transition-hover-colorize" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 280 210" style="enable-background:new 0 0 280 210;" xml:space="preserve">
                   <g>
                   <path fill="#FF462D" d="M42.3,113.9h12.6v5H36.3v-29h6V113.9z"/>
                   <path fill="#FF462D" d="M54.6,108.6c0-6.4,4.2-10.8,10.8-10.8c6.6,0,10.8,4.5,10.8,10.8c0,6.3-4.2,10.8-10.8,10.8
                     C58.7,119.3,54.6,114.9,54.6,108.6z M70.2,108.6c0-4.2-1.7-6.9-4.8-6.9c-3.2,0-4.8,2.6-4.8,6.9c0,4.2,1.7,6.8,4.8,6.8
                     C68.5,115.4,70.2,112.7,70.2,108.6z"/>
                   <path fill="#FF462D" d="M83.8,103.6c0.8-3.2,2.9-5.9,6.9-5.9v5.7h-1.5c-3.6,0-5.4,1.2-5.4,4.7v10.7H78V98.2h5.8V103.6z"/>
                   <path fill="#FF462D" d="M111.4,110.3H96.5c0.4,3.5,2.2,5.1,4.6,5.1c2.3,0,3.4-1,4.1-2.6h5.9c-1.4,4.4-5,6.6-10,6.6
                     c-6.4,0-10.5-4.5-10.5-10.8c0-6.4,4.2-10.8,10.5-10.8c6.4,0,10.5,4.4,10.5,10.9C111.5,109.1,111.4,109.7,111.4,110.3z M96.5,106.4
                     h9c-0.3-2.9-2.1-4.7-4.5-4.7C98.7,101.7,97,103.1,96.5,106.4z"/>
                   <path fill="#FF462D" d="M145,105.8L145,105.8v13.1h-5.8v-11.8V107c0-3.6-1.1-5.2-3.5-5.2s-3.5,1.6-3.5,5.3v11.8h-5.8v-11.8V107
                     c0-3.6-1.1-5.2-3.5-5.2s-3.5,1.6-3.5,5.3v11.8h-5.8V98.2h5.8v4.2c1-2.6,2.9-4.7,6.4-4.7c3.6,0,5.6,2.4,6.3,5c0.9-2.5,2.9-5,6.5-5
                     C143,97.7,145,101.1,145,105.8z"/>
                   <path fill="#29707A" d="M148.4,118.9v-29h6v29H148.4z"/>
                   <path fill="#29707A" d="M179,108.6c0,6.2-3.4,10.8-8.5,10.8c-3.2,0-5.8-1.9-6.9-4.6v11.6h-5.8V98.2h5.8v4.7
                     c0.9-2.7,3.2-5.1,6.9-5.1C175.6,97.7,179,102.3,179,108.6z M173,108.6c0-4.2-1.7-6.9-4.8-6.9s-4.8,2.6-4.8,6.9
                     c0,4.2,1.7,6.8,4.8,6.8S173,112.7,173,108.6z"/>
                   <path fill="#29707A" d="M179.6,112.6h5.9c0.4,2.1,2.2,2.7,4,2.7c2.6,0,3.9-0.8,3.9-2.2c0-1.3-0.8-1.9-3.7-2.5l-3.7-0.8
                     c-3.9-0.8-6.1-2.7-6.1-5.8c0-3.9,4-6.4,9-6.4c4.7,0,8.6,1.9,9.5,6h-5.9c-0.5-1.3-1.9-2-3.6-2c-1.9,0-3.5,0.7-3.5,2
                     c0,1.2,1.2,1.6,3.3,2.1l3.7,0.8c4.3,1,6.4,2.8,6.4,6.2c0,4.2-4.2,6.6-9.7,6.6C184.2,119.3,180.4,117.2,179.6,112.6z"/>
                   <path fill="#29707A" d="M213.9,98.2h5.8v20.7H214v-4.1c-1,2.5-2.9,4.5-6.5,4.5c-4.8,0-6.8-3.5-6.8-8v-0.1v-13h5.8V110v0.1
                     c0,3.6,1.3,5.2,3.7,5.2c2.4,0,3.7-1.8,3.7-5.3V98.2z"/>
                   <path fill="#29707A" d="M254.4,105.8L254.4,105.8v13.1h-5.8v-11.8V107c0-3.6-1.1-5.2-3.5-5.2c-2.4,0-3.5,1.6-3.5,5.3v11.8h-5.8
                     v-11.8V107c0-3.6-1.1-5.2-3.5-5.2s-3.5,1.6-3.5,5.3v11.8h-5.8V98.2h5.8v4.2c1-2.6,2.9-4.7,6.4-4.7c3.6,0,5.6,2.4,6.3,5
                     c0.9-2.5,2.9-5,6.5-5C252.4,97.7,254.4,101.1,254.4,105.8z"/>
                 </g>
                    </svg>
            </a>
            <div class="${PREFIX_CLASS}-grid-container ${PREFIX_CLASS}-fully-fluid ${PREFIX_CLASS}-no-grid-gap ${PREFIX_CLASS}-no-grid-padding">
              <div class="${PREFIX_CLASS}-max-col-6 ${PREFIX_CLASS}-xlg-col-6 ${PREFIX_CLASS}-lg-col-6 ${PREFIX_CLASS}-md-col-12 ${PREFIX_CLASS}-sm-col-8 ${PREFIX_CLASS}-xs-col-4" style="min-height:768px">
                <div class="${PREFIX_CLASS}-pt6 ${PREFIX_CLASS}-pr5 ${PREFIX_CLASS}-pb8 ${PREFIX_CLASS}-pl4">
                  <div class="${PREFIX_CLASS}-mt0 ${PREFIX_CLASS}-mb4"><img src="https://placehold.co/240x120?text=Logo" /></div>
                  <h6 class="${PREFIX_CLASS}-h6 ${PREFIX_CLASS}-mt4 ${PREFIX_CLASS}-mb4"><strong>GOOGLE CLOUD</strong></h6>
                  <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum.</p>
                  <p class="${PREFIX_CLASS}-mt4 ${PREFIX_CLASS}-mb0"><kd-button type="primary" icon="arrow-right" href="javascript://">See more</kd-button></p>
                </div>
              </div>
              <div class="${PREFIX_CLASS}-bg-cloud ${PREFIX_CLASS}-max-col-6 ${PREFIX_CLASS}-xlg-col-6 ${PREFIX_CLASS}-lg-col-6 ${PREFIX_CLASS}-md-col-12 ${PREFIX_CLASS}-sm-col-8 ${PREFIX_CLASS}-xs-col-4" style="min-height:768px">
                <div class="${PREFIX_CLASS}-pt6 ${PREFIX_CLASS}-pr5 ${PREFIX_CLASS}-pb8 ${PREFIX_CLASS}-pl4">
                  <p class="${PREFIX_CLASS}-mt0"><strong>Services Links:</strong></p>
                  <ul class="${PREFIX_CLASS}-list">
                    <li class="${PREFIX_CLASS}-list-item">Curabitur blandit tempus porttitor.</li>
                    <li class="${PREFIX_CLASS}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                    <li class="${PREFIX_CLASS}-list-item">Aenean lacinia bibendum nulla sed consectetur.</li>
                    <li class="${PREFIX_CLASS}-list-item">Nulla vitae elit libero, a pharetra augue.</li>
                  </ul>
                  <p class="${PREFIX_CLASS}-mt4"><strong>More Links:</strong></p>
                  <ul class="${PREFIX_CLASS}-list">
                    <li class="${PREFIX_CLASS}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                  </ul>
                </div>
              </div>
            </div>
          </kd-modal>
        </div>
        <!-- END Google logo -->

        <!-- BEGIN Google Logo -->
        <div class="${PREFIX_CLASS}-max-col-3 ${PREFIX_CLASS}-xlg-col-3 ${PREFIX_CLASS}-lg-col-3 ${PREFIX_CLASS}-md-col-6 ${PREFIX_CLASS}-sm-col-8 ${PREFIX_CLASS}-xs-col-4">
          <kd-modal>
            <a href="javascript://" slot="trigger" title="Microsoft">
              <svg width="280" height="210" style="width:100%;height:auto" class="${PREFIX_CLASS}-transition-default-grayscale ${PREFIX_CLASS}-transition-hover-colorize" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 280 210" style="enable-background:new 0 0 280 210;" xml:space="preserve">
                   <g>
                   <path fill="#FF462D" d="M42.3,113.9h12.6v5H36.3v-29h6V113.9z"/>
                   <path fill="#FF462D" d="M54.6,108.6c0-6.4,4.2-10.8,10.8-10.8c6.6,0,10.8,4.5,10.8,10.8c0,6.3-4.2,10.8-10.8,10.8
                     C58.7,119.3,54.6,114.9,54.6,108.6z M70.2,108.6c0-4.2-1.7-6.9-4.8-6.9c-3.2,0-4.8,2.6-4.8,6.9c0,4.2,1.7,6.8,4.8,6.8
                     C68.5,115.4,70.2,112.7,70.2,108.6z"/>
                   <path fill="#FF462D" d="M83.8,103.6c0.8-3.2,2.9-5.9,6.9-5.9v5.7h-1.5c-3.6,0-5.4,1.2-5.4,4.7v10.7H78V98.2h5.8V103.6z"/>
                   <path fill="#FF462D" d="M111.4,110.3H96.5c0.4,3.5,2.2,5.1,4.6,5.1c2.3,0,3.4-1,4.1-2.6h5.9c-1.4,4.4-5,6.6-10,6.6
                     c-6.4,0-10.5-4.5-10.5-10.8c0-6.4,4.2-10.8,10.5-10.8c6.4,0,10.5,4.4,10.5,10.9C111.5,109.1,111.4,109.7,111.4,110.3z M96.5,106.4
                     h9c-0.3-2.9-2.1-4.7-4.5-4.7C98.7,101.7,97,103.1,96.5,106.4z"/>
                   <path fill="#FF462D" d="M145,105.8L145,105.8v13.1h-5.8v-11.8V107c0-3.6-1.1-5.2-3.5-5.2s-3.5,1.6-3.5,5.3v11.8h-5.8v-11.8V107
                     c0-3.6-1.1-5.2-3.5-5.2s-3.5,1.6-3.5,5.3v11.8h-5.8V98.2h5.8v4.2c1-2.6,2.9-4.7,6.4-4.7c3.6,0,5.6,2.4,6.3,5c0.9-2.5,2.9-5,6.5-5
                     C143,97.7,145,101.1,145,105.8z"/>
                   <path fill="#29707A" d="M148.4,118.9v-29h6v29H148.4z"/>
                   <path fill="#29707A" d="M179,108.6c0,6.2-3.4,10.8-8.5,10.8c-3.2,0-5.8-1.9-6.9-4.6v11.6h-5.8V98.2h5.8v4.7
                     c0.9-2.7,3.2-5.1,6.9-5.1C175.6,97.7,179,102.3,179,108.6z M173,108.6c0-4.2-1.7-6.9-4.8-6.9s-4.8,2.6-4.8,6.9
                     c0,4.2,1.7,6.8,4.8,6.8S173,112.7,173,108.6z"/>
                   <path fill="#29707A" d="M179.6,112.6h5.9c0.4,2.1,2.2,2.7,4,2.7c2.6,0,3.9-0.8,3.9-2.2c0-1.3-0.8-1.9-3.7-2.5l-3.7-0.8
                     c-3.9-0.8-6.1-2.7-6.1-5.8c0-3.9,4-6.4,9-6.4c4.7,0,8.6,1.9,9.5,6h-5.9c-0.5-1.3-1.9-2-3.6-2c-1.9,0-3.5,0.7-3.5,2
                     c0,1.2,1.2,1.6,3.3,2.1l3.7,0.8c4.3,1,6.4,2.8,6.4,6.2c0,4.2-4.2,6.6-9.7,6.6C184.2,119.3,180.4,117.2,179.6,112.6z"/>
                   <path fill="#29707A" d="M213.9,98.2h5.8v20.7H214v-4.1c-1,2.5-2.9,4.5-6.5,4.5c-4.8,0-6.8-3.5-6.8-8v-0.1v-13h5.8V110v0.1
                     c0,3.6,1.3,5.2,3.7,5.2c2.4,0,3.7-1.8,3.7-5.3V98.2z"/>
                   <path fill="#29707A" d="M254.4,105.8L254.4,105.8v13.1h-5.8v-11.8V107c0-3.6-1.1-5.2-3.5-5.2c-2.4,0-3.5,1.6-3.5,5.3v11.8h-5.8
                     v-11.8V107c0-3.6-1.1-5.2-3.5-5.2s-3.5,1.6-3.5,5.3v11.8h-5.8V98.2h5.8v4.2c1-2.6,2.9-4.7,6.4-4.7c3.6,0,5.6,2.4,6.3,5
                     c0.9-2.5,2.9-5,6.5-5C252.4,97.7,254.4,101.1,254.4,105.8z"/>
                 </g>
                    </svg>
            </a>
            <div class="${PREFIX_CLASS}-grid-container ${PREFIX_CLASS}-fully-fluid ${PREFIX_CLASS}-no-grid-gap ${PREFIX_CLASS}-no-grid-padding">
              <div class="${PREFIX_CLASS}-max-col-6 ${PREFIX_CLASS}-xlg-col-6 ${PREFIX_CLASS}-lg-col-6 ${PREFIX_CLASS}-md-col-12 ${PREFIX_CLASS}-sm-col-8 ${PREFIX_CLASS}-xs-col-4" style="min-height:768px">
                <div class="${PREFIX_CLASS}-pt6 ${PREFIX_CLASS}-pr5 ${PREFIX_CLASS}-pb8 ${PREFIX_CLASS}-pl4">
                  <div class="${PREFIX_CLASS}-mt0 ${PREFIX_CLASS}-mb4"><img src="https://placehold.co/240x120?text=Logo" /></div>
                  <h6 class="${PREFIX_CLASS}-h6 ${PREFIX_CLASS}-mt4 ${PREFIX_CLASS}-mb4"><strong>GOOGLE CLOUD</strong></h6>
                  <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum.</p>
                  <p class="${PREFIX_CLASS}-mt4 ${PREFIX_CLASS}-mb0"><kd-button type="primary" icon="arrow-right" href="javascript://">See more</kd-button></p>
                </div>
              </div>
              <div class="${PREFIX_CLASS}-bg-cloud ${PREFIX_CLASS}-max-col-6 ${PREFIX_CLASS}-xlg-col-6 ${PREFIX_CLASS}-lg-col-6 ${PREFIX_CLASS}-md-col-12 ${PREFIX_CLASS}-sm-col-8 ${PREFIX_CLASS}-xs-col-4" style="min-height:768px">
                <div class="${PREFIX_CLASS}-pt6 ${PREFIX_CLASS}-pr5 ${PREFIX_CLASS}-pb8 ${PREFIX_CLASS}-pl4">
                  <p class="${PREFIX_CLASS}-mt0"><strong>Services Links:</strong></p>
                  <ul class="${PREFIX_CLASS}-list">
                    <li class="${PREFIX_CLASS}-list-item">Curabitur blandit tempus porttitor.</li>
                    <li class="${PREFIX_CLASS}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                    <li class="${PREFIX_CLASS}-list-item">Aenean lacinia bibendum nulla sed consectetur.</li>
                    <li class="${PREFIX_CLASS}-list-item">Nulla vitae elit libero, a pharetra augue.</li>
                  </ul>
                  <p class="${PREFIX_CLASS}-mt4"><strong>More Links:</strong></p>
                  <ul class="${PREFIX_CLASS}-list">
                    <li class="${PREFIX_CLASS}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                  </ul>
                </div>
              </div>
            </div>
          </kd-modal>
        </div>
        <!-- END Google logo -->
        <!-- BEGIN Oracle Logo -->
        <div class="${PREFIX_CLASS}-max-col-3 ${PREFIX_CLASS}-xlg-col-3 ${PREFIX_CLASS}-lg-col-3 ${PREFIX_CLASS}-md-col-6 ${PREFIX_CLASS}-sm-col-8 ${PREFIX_CLASS}-xs-col-4">
          <kd-modal>
            <a href="javascript://" slot="trigger" title="Microsoft">
              <svg width="280" height="210" style="width:100%;height:auto" class="${PREFIX_CLASS}-transition-default-grayscale ${PREFIX_CLASS}-transition-hover-colorize" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 280 210" style="enable-background:new 0 0 280 210;" xml:space="preserve">
                   <g>
                   <path fill="#FF462D" d="M42.3,113.9h12.6v5H36.3v-29h6V113.9z"/>
                   <path fill="#FF462D" d="M54.6,108.6c0-6.4,4.2-10.8,10.8-10.8c6.6,0,10.8,4.5,10.8,10.8c0,6.3-4.2,10.8-10.8,10.8
                     C58.7,119.3,54.6,114.9,54.6,108.6z M70.2,108.6c0-4.2-1.7-6.9-4.8-6.9c-3.2,0-4.8,2.6-4.8,6.9c0,4.2,1.7,6.8,4.8,6.8
                     C68.5,115.4,70.2,112.7,70.2,108.6z"/>
                   <path fill="#FF462D" d="M83.8,103.6c0.8-3.2,2.9-5.9,6.9-5.9v5.7h-1.5c-3.6,0-5.4,1.2-5.4,4.7v10.7H78V98.2h5.8V103.6z"/>
                   <path fill="#FF462D" d="M111.4,110.3H96.5c0.4,3.5,2.2,5.1,4.6,5.1c2.3,0,3.4-1,4.1-2.6h5.9c-1.4,4.4-5,6.6-10,6.6
                     c-6.4,0-10.5-4.5-10.5-10.8c0-6.4,4.2-10.8,10.5-10.8c6.4,0,10.5,4.4,10.5,10.9C111.5,109.1,111.4,109.7,111.4,110.3z M96.5,106.4
                     h9c-0.3-2.9-2.1-4.7-4.5-4.7C98.7,101.7,97,103.1,96.5,106.4z"/>
                   <path fill="#FF462D" d="M145,105.8L145,105.8v13.1h-5.8v-11.8V107c0-3.6-1.1-5.2-3.5-5.2s-3.5,1.6-3.5,5.3v11.8h-5.8v-11.8V107
                     c0-3.6-1.1-5.2-3.5-5.2s-3.5,1.6-3.5,5.3v11.8h-5.8V98.2h5.8v4.2c1-2.6,2.9-4.7,6.4-4.7c3.6,0,5.6,2.4,6.3,5c0.9-2.5,2.9-5,6.5-5
                     C143,97.7,145,101.1,145,105.8z"/>
                   <path fill="#29707A" d="M148.4,118.9v-29h6v29H148.4z"/>
                   <path fill="#29707A" d="M179,108.6c0,6.2-3.4,10.8-8.5,10.8c-3.2,0-5.8-1.9-6.9-4.6v11.6h-5.8V98.2h5.8v4.7
                     c0.9-2.7,3.2-5.1,6.9-5.1C175.6,97.7,179,102.3,179,108.6z M173,108.6c0-4.2-1.7-6.9-4.8-6.9s-4.8,2.6-4.8,6.9
                     c0,4.2,1.7,6.8,4.8,6.8S173,112.7,173,108.6z"/>
                   <path fill="#29707A" d="M179.6,112.6h5.9c0.4,2.1,2.2,2.7,4,2.7c2.6,0,3.9-0.8,3.9-2.2c0-1.3-0.8-1.9-3.7-2.5l-3.7-0.8
                     c-3.9-0.8-6.1-2.7-6.1-5.8c0-3.9,4-6.4,9-6.4c4.7,0,8.6,1.9,9.5,6h-5.9c-0.5-1.3-1.9-2-3.6-2c-1.9,0-3.5,0.7-3.5,2
                     c0,1.2,1.2,1.6,3.3,2.1l3.7,0.8c4.3,1,6.4,2.8,6.4,6.2c0,4.2-4.2,6.6-9.7,6.6C184.2,119.3,180.4,117.2,179.6,112.6z"/>
                   <path fill="#29707A" d="M213.9,98.2h5.8v20.7H214v-4.1c-1,2.5-2.9,4.5-6.5,4.5c-4.8,0-6.8-3.5-6.8-8v-0.1v-13h5.8V110v0.1
                     c0,3.6,1.3,5.2,3.7,5.2c2.4,0,3.7-1.8,3.7-5.3V98.2z"/>
                   <path fill="#29707A" d="M254.4,105.8L254.4,105.8v13.1h-5.8v-11.8V107c0-3.6-1.1-5.2-3.5-5.2c-2.4,0-3.5,1.6-3.5,5.3v11.8h-5.8
                     v-11.8V107c0-3.6-1.1-5.2-3.5-5.2s-3.5,1.6-3.5,5.3v11.8h-5.8V98.2h5.8v4.2c1-2.6,2.9-4.7,6.4-4.7c3.6,0,5.6,2.4,6.3,5
                     c0.9-2.5,2.9-5,6.5-5C252.4,97.7,254.4,101.1,254.4,105.8z"/>
                 </g>
                    </svg>
            </a>
            <div class="${PREFIX_CLASS}-grid-container ${PREFIX_CLASS}-fully-fluid ${PREFIX_CLASS}-no-grid-gap ${PREFIX_CLASS}-no-grid-padding">
              <div class="${PREFIX_CLASS}-max-col-6 ${PREFIX_CLASS}-xlg-col-6 ${PREFIX_CLASS}-lg-col-6 ${PREFIX_CLASS}-md-col-12 ${PREFIX_CLASS}-sm-col-8 ${PREFIX_CLASS}-xs-col-4" style="min-height:768px">
                <div class="${PREFIX_CLASS}-pt6 ${PREFIX_CLASS}-pr5 ${PREFIX_CLASS}-pb8 ${PREFIX_CLASS}-pl4">
                  <div class="${PREFIX_CLASS}-mt0 ${PREFIX_CLASS}-mb4"><img src="https://placehold.co/240x120?text=Logo" /></div>
                  <h6 class="${PREFIX_CLASS}-h6 ${PREFIX_CLASS}-mt4 ${PREFIX_CLASS}-mb4"><strong>ORACLE</strong></h6>
                  <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum.</p>
                  <p class="${PREFIX_CLASS}-mt4 ${PREFIX_CLASS}-mb0"><kd-button type="primary" icon="arrow-right" href="javascript://">See more</kd-button></p>
                </div>
              </div>
              <div class="${PREFIX_CLASS}-bg-cloud ${PREFIX_CLASS}-max-col-6 ${PREFIX_CLASS}-xlg-col-6 ${PREFIX_CLASS}-lg-col-6 ${PREFIX_CLASS}-md-col-12 ${PREFIX_CLASS}-sm-col-8 ${PREFIX_CLASS}-xs-col-4" style="min-height:768px">
                <div class="${PREFIX_CLASS}-pt6 ${PREFIX_CLASS}-pr5 ${PREFIX_CLASS}-pb8 ${PREFIX_CLASS}-pl4">
                  <p class="${PREFIX_CLASS}-mt0"><strong>Services Links:</strong></p>
                  <ul class="${PREFIX_CLASS}-list">
                    <li class="${PREFIX_CLASS}-list-item">Curabitur blandit tempus porttitor.</li>
                    <li class="${PREFIX_CLASS}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                    <li class="${PREFIX_CLASS}-list-item">Aenean lacinia bibendum nulla sed consectetur.</li>
                    <li class="${PREFIX_CLASS}-list-item">Nulla vitae elit libero, a pharetra augue.</li>
                  </ul>
                  <p class="${PREFIX_CLASS}-mt4"><strong>More Links:</strong></p>
                  <ul class="${PREFIX_CLASS}-list">
                    <li class="${PREFIX_CLASS}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                  </ul>
                </div>
              </div>
            </div>
          </kd-modal>
        </div>
        <!-- END Oracle logo -->
        <!-- BEGIN Google Logo -->
        <div class="${PREFIX_CLASS}-max-col-3 ${PREFIX_CLASS}-xlg-col-3 ${PREFIX_CLASS}-lg-col-3 ${PREFIX_CLASS}-md-col-6 ${PREFIX_CLASS}-sm-col-8 ${PREFIX_CLASS}-xs-col-4">
          <kd-modal>
            <a href="javascript://" slot="trigger" title="Microsoft">
              <svg width="280" height="210" style="width:100%;height:auto" class="${PREFIX_CLASS}-transition-default-grayscale ${PREFIX_CLASS}-transition-hover-colorize" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 280 210" style="enable-background:new 0 0 280 210;" xml:space="preserve">
                   <g>
                   <path fill="#FF462D" d="M42.3,113.9h12.6v5H36.3v-29h6V113.9z"/>
                   <path fill="#FF462D" d="M54.6,108.6c0-6.4,4.2-10.8,10.8-10.8c6.6,0,10.8,4.5,10.8,10.8c0,6.3-4.2,10.8-10.8,10.8
                     C58.7,119.3,54.6,114.9,54.6,108.6z M70.2,108.6c0-4.2-1.7-6.9-4.8-6.9c-3.2,0-4.8,2.6-4.8,6.9c0,4.2,1.7,6.8,4.8,6.8
                     C68.5,115.4,70.2,112.7,70.2,108.6z"/>
                   <path fill="#FF462D" d="M83.8,103.6c0.8-3.2,2.9-5.9,6.9-5.9v5.7h-1.5c-3.6,0-5.4,1.2-5.4,4.7v10.7H78V98.2h5.8V103.6z"/>
                   <path fill="#FF462D" d="M111.4,110.3H96.5c0.4,3.5,2.2,5.1,4.6,5.1c2.3,0,3.4-1,4.1-2.6h5.9c-1.4,4.4-5,6.6-10,6.6
                     c-6.4,0-10.5-4.5-10.5-10.8c0-6.4,4.2-10.8,10.5-10.8c6.4,0,10.5,4.4,10.5,10.9C111.5,109.1,111.4,109.7,111.4,110.3z M96.5,106.4
                     h9c-0.3-2.9-2.1-4.7-4.5-4.7C98.7,101.7,97,103.1,96.5,106.4z"/>
                   <path fill="#FF462D" d="M145,105.8L145,105.8v13.1h-5.8v-11.8V107c0-3.6-1.1-5.2-3.5-5.2s-3.5,1.6-3.5,5.3v11.8h-5.8v-11.8V107
                     c0-3.6-1.1-5.2-3.5-5.2s-3.5,1.6-3.5,5.3v11.8h-5.8V98.2h5.8v4.2c1-2.6,2.9-4.7,6.4-4.7c3.6,0,5.6,2.4,6.3,5c0.9-2.5,2.9-5,6.5-5
                     C143,97.7,145,101.1,145,105.8z"/>
                   <path fill="#29707A" d="M148.4,118.9v-29h6v29H148.4z"/>
                   <path fill="#29707A" d="M179,108.6c0,6.2-3.4,10.8-8.5,10.8c-3.2,0-5.8-1.9-6.9-4.6v11.6h-5.8V98.2h5.8v4.7
                     c0.9-2.7,3.2-5.1,6.9-5.1C175.6,97.7,179,102.3,179,108.6z M173,108.6c0-4.2-1.7-6.9-4.8-6.9s-4.8,2.6-4.8,6.9
                     c0,4.2,1.7,6.8,4.8,6.8S173,112.7,173,108.6z"/>
                   <path fill="#29707A" d="M179.6,112.6h5.9c0.4,2.1,2.2,2.7,4,2.7c2.6,0,3.9-0.8,3.9-2.2c0-1.3-0.8-1.9-3.7-2.5l-3.7-0.8
                     c-3.9-0.8-6.1-2.7-6.1-5.8c0-3.9,4-6.4,9-6.4c4.7,0,8.6,1.9,9.5,6h-5.9c-0.5-1.3-1.9-2-3.6-2c-1.9,0-3.5,0.7-3.5,2
                     c0,1.2,1.2,1.6,3.3,2.1l3.7,0.8c4.3,1,6.4,2.8,6.4,6.2c0,4.2-4.2,6.6-9.7,6.6C184.2,119.3,180.4,117.2,179.6,112.6z"/>
                   <path fill="#29707A" d="M213.9,98.2h5.8v20.7H214v-4.1c-1,2.5-2.9,4.5-6.5,4.5c-4.8,0-6.8-3.5-6.8-8v-0.1v-13h5.8V110v0.1
                     c0,3.6,1.3,5.2,3.7,5.2c2.4,0,3.7-1.8,3.7-5.3V98.2z"/>
                   <path fill="#29707A" d="M254.4,105.8L254.4,105.8v13.1h-5.8v-11.8V107c0-3.6-1.1-5.2-3.5-5.2c-2.4,0-3.5,1.6-3.5,5.3v11.8h-5.8
                     v-11.8V107c0-3.6-1.1-5.2-3.5-5.2s-3.5,1.6-3.5,5.3v11.8h-5.8V98.2h5.8v4.2c1-2.6,2.9-4.7,6.4-4.7c3.6,0,5.6,2.4,6.3,5
                     c0.9-2.5,2.9-5,6.5-5C252.4,97.7,254.4,101.1,254.4,105.8z"/>
                 </g>
                    </svg>
            </a>
            <div class="${PREFIX_CLASS}-grid-container ${PREFIX_CLASS}-fully-fluid ${PREFIX_CLASS}-no-grid-gap ${PREFIX_CLASS}-no-grid-padding">
              <div class="${PREFIX_CLASS}-max-col-6 ${PREFIX_CLASS}-xlg-col-6 ${PREFIX_CLASS}-lg-col-6 ${PREFIX_CLASS}-md-col-12 ${PREFIX_CLASS}-sm-col-8 ${PREFIX_CLASS}-xs-col-4" style="min-height:768px">
                <div class="${PREFIX_CLASS}-pt6 ${PREFIX_CLASS}-pr5 ${PREFIX_CLASS}-pb8 ${PREFIX_CLASS}-pl4">
                  <div class="${PREFIX_CLASS}-mt0 ${PREFIX_CLASS}-mb4"><img src="https://placehold.co/240x120?text=Logo" /></div>
                  <h6 class="${PREFIX_CLASS}-h6 ${PREFIX_CLASS}-mt4 ${PREFIX_CLASS}-mb4"><strong>GOOGLE CLOUD</strong></h6>
                  <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum.</p>
                  <p class="${PREFIX_CLASS}-mt4 ${PREFIX_CLASS}-mb0"><kd-button type="primary" icon="arrow-right" href="javascript://">See more</kd-button></p>
                </div>
              </div>
              <div class="${PREFIX_CLASS}-bg-cloud ${PREFIX_CLASS}-max-col-6 ${PREFIX_CLASS}-xlg-col-6 ${PREFIX_CLASS}-lg-col-6 ${PREFIX_CLASS}-md-col-12 ${PREFIX_CLASS}-sm-col-8 ${PREFIX_CLASS}-xs-col-4" style="min-height:768px">
                <div class="${PREFIX_CLASS}-pt6 ${PREFIX_CLASS}-pr5 ${PREFIX_CLASS}-pb8 ${PREFIX_CLASS}-pl4">
                  <p class="${PREFIX_CLASS}-mt0"><strong>Services Links:</strong></p>
                  <ul class="${PREFIX_CLASS}-list">
                    <li class="${PREFIX_CLASS}-list-item">Curabitur blandit tempus porttitor.</li>
                    <li class="${PREFIX_CLASS}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                    <li class="${PREFIX_CLASS}-list-item">Aenean lacinia bibendum nulla sed consectetur.</li>
                    <li class="${PREFIX_CLASS}-list-item">Nulla vitae elit libero, a pharetra augue.</li>
                  </ul>
                  <p class="${PREFIX_CLASS}-mt4"><strong>More Links:</strong></p>
                  <ul class="${PREFIX_CLASS}-list">
                    <li class="${PREFIX_CLASS}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                  </ul>
                </div>
              </div>
            </div>
          </kd-modal>
        </div>
        <!-- END Google logo -->
        <!-- BEGIN Oracle Logo -->
        <div class="${PREFIX_CLASS}-max-col-3 ${PREFIX_CLASS}-xlg-col-3 ${PREFIX_CLASS}-lg-col-3 ${PREFIX_CLASS}-md-col-6 ${PREFIX_CLASS}-sm-col-8 ${PREFIX_CLASS}-xs-col-4">
          <kd-modal>
            <a href="javascript://" slot="trigger" title="Microsoft">
              <svg width="280" height="210" style="width:100%;height:auto" class="${PREFIX_CLASS}-transition-default-grayscale ${PREFIX_CLASS}-transition-hover-colorize" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 280 210" style="enable-background:new 0 0 280 210;" xml:space="preserve">
                   <g>
                   <path fill="#FF462D" d="M42.3,113.9h12.6v5H36.3v-29h6V113.9z"/>
                   <path fill="#FF462D" d="M54.6,108.6c0-6.4,4.2-10.8,10.8-10.8c6.6,0,10.8,4.5,10.8,10.8c0,6.3-4.2,10.8-10.8,10.8
                     C58.7,119.3,54.6,114.9,54.6,108.6z M70.2,108.6c0-4.2-1.7-6.9-4.8-6.9c-3.2,0-4.8,2.6-4.8,6.9c0,4.2,1.7,6.8,4.8,6.8
                     C68.5,115.4,70.2,112.7,70.2,108.6z"/>
                   <path fill="#FF462D" d="M83.8,103.6c0.8-3.2,2.9-5.9,6.9-5.9v5.7h-1.5c-3.6,0-5.4,1.2-5.4,4.7v10.7H78V98.2h5.8V103.6z"/>
                   <path fill="#FF462D" d="M111.4,110.3H96.5c0.4,3.5,2.2,5.1,4.6,5.1c2.3,0,3.4-1,4.1-2.6h5.9c-1.4,4.4-5,6.6-10,6.6
                     c-6.4,0-10.5-4.5-10.5-10.8c0-6.4,4.2-10.8,10.5-10.8c6.4,0,10.5,4.4,10.5,10.9C111.5,109.1,111.4,109.7,111.4,110.3z M96.5,106.4
                     h9c-0.3-2.9-2.1-4.7-4.5-4.7C98.7,101.7,97,103.1,96.5,106.4z"/>
                   <path fill="#FF462D" d="M145,105.8L145,105.8v13.1h-5.8v-11.8V107c0-3.6-1.1-5.2-3.5-5.2s-3.5,1.6-3.5,5.3v11.8h-5.8v-11.8V107
                     c0-3.6-1.1-5.2-3.5-5.2s-3.5,1.6-3.5,5.3v11.8h-5.8V98.2h5.8v4.2c1-2.6,2.9-4.7,6.4-4.7c3.6,0,5.6,2.4,6.3,5c0.9-2.5,2.9-5,6.5-5
                     C143,97.7,145,101.1,145,105.8z"/>
                   <path fill="#29707A" d="M148.4,118.9v-29h6v29H148.4z"/>
                   <path fill="#29707A" d="M179,108.6c0,6.2-3.4,10.8-8.5,10.8c-3.2,0-5.8-1.9-6.9-4.6v11.6h-5.8V98.2h5.8v4.7
                     c0.9-2.7,3.2-5.1,6.9-5.1C175.6,97.7,179,102.3,179,108.6z M173,108.6c0-4.2-1.7-6.9-4.8-6.9s-4.8,2.6-4.8,6.9
                     c0,4.2,1.7,6.8,4.8,6.8S173,112.7,173,108.6z"/>
                   <path fill="#29707A" d="M179.6,112.6h5.9c0.4,2.1,2.2,2.7,4,2.7c2.6,0,3.9-0.8,3.9-2.2c0-1.3-0.8-1.9-3.7-2.5l-3.7-0.8
                     c-3.9-0.8-6.1-2.7-6.1-5.8c0-3.9,4-6.4,9-6.4c4.7,0,8.6,1.9,9.5,6h-5.9c-0.5-1.3-1.9-2-3.6-2c-1.9,0-3.5,0.7-3.5,2
                     c0,1.2,1.2,1.6,3.3,2.1l3.7,0.8c4.3,1,6.4,2.8,6.4,6.2c0,4.2-4.2,6.6-9.7,6.6C184.2,119.3,180.4,117.2,179.6,112.6z"/>
                   <path fill="#29707A" d="M213.9,98.2h5.8v20.7H214v-4.1c-1,2.5-2.9,4.5-6.5,4.5c-4.8,0-6.8-3.5-6.8-8v-0.1v-13h5.8V110v0.1
                     c0,3.6,1.3,5.2,3.7,5.2c2.4,0,3.7-1.8,3.7-5.3V98.2z"/>
                   <path fill="#29707A" d="M254.4,105.8L254.4,105.8v13.1h-5.8v-11.8V107c0-3.6-1.1-5.2-3.5-5.2c-2.4,0-3.5,1.6-3.5,5.3v11.8h-5.8
                     v-11.8V107c0-3.6-1.1-5.2-3.5-5.2s-3.5,1.6-3.5,5.3v11.8h-5.8V98.2h5.8v4.2c1-2.6,2.9-4.7,6.4-4.7c3.6,0,5.6,2.4,6.3,5
                     c0.9-2.5,2.9-5,6.5-5C252.4,97.7,254.4,101.1,254.4,105.8z"/>
                 </g>
                    </svg>
            </a>
            <div class="${PREFIX_CLASS}-grid-container ${PREFIX_CLASS}-fully-fluid ${PREFIX_CLASS}-no-grid-gap ${PREFIX_CLASS}-no-grid-padding">
              <div class="${PREFIX_CLASS}-max-col-6 ${PREFIX_CLASS}-xlg-col-6 ${PREFIX_CLASS}-lg-col-6 ${PREFIX_CLASS}-md-col-12 ${PREFIX_CLASS}-sm-col-8 ${PREFIX_CLASS}-xs-col-4" style="min-height:768px">
                <div class="${PREFIX_CLASS}-pt6 ${PREFIX_CLASS}-pr5 ${PREFIX_CLASS}-pb8 ${PREFIX_CLASS}-pl4">
                  <div class="${PREFIX_CLASS}-mt0 ${PREFIX_CLASS}-mb4"><img src="https://placehold.co/240x120?text=Logo" /></div>
                  <h6 class="${PREFIX_CLASS}-h6 ${PREFIX_CLASS}-mt4 ${PREFIX_CLASS}-mb4"><strong>ORACLE</strong></h6>
                  <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum.</p>
                  <p class="${PREFIX_CLASS}-mt4 ${PREFIX_CLASS}-mb0"><kd-button type="primary" icon="arrow-right" href="javascript://">See more</kd-button></p>
                </div>
              </div>
              <div class="${PREFIX_CLASS}-bg-cloud ${PREFIX_CLASS}-max-col-6 ${PREFIX_CLASS}-xlg-col-6 ${PREFIX_CLASS}-lg-col-6 ${PREFIX_CLASS}-md-col-12 ${PREFIX_CLASS}-sm-col-8 ${PREFIX_CLASS}-xs-col-4" style="min-height:768px">
                <div class="${PREFIX_CLASS}-pt6 ${PREFIX_CLASS}-pr5 ${PREFIX_CLASS}-pb8 ${PREFIX_CLASS}-pl4">
                  <p class="${PREFIX_CLASS}-mt0"><strong>Services Links:</strong></p>
                  <ul class="${PREFIX_CLASS}-list">
                    <li class="${PREFIX_CLASS}-list-item">Curabitur blandit tempus porttitor.</li>
                    <li class="${PREFIX_CLASS}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                    <li class="${PREFIX_CLASS}-list-item">Aenean lacinia bibendum nulla sed consectetur.</li>
                    <li class="${PREFIX_CLASS}-list-item">Nulla vitae elit libero, a pharetra augue.</li>
                  </ul>
                  <p class="${PREFIX_CLASS}-mt4"><strong>More Links:</strong></p>
                  <ul class="${PREFIX_CLASS}-list">
                    <li class="${PREFIX_CLASS}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                  </ul>
                </div>
              </div>
            </div>
          </kd-modal>
        </div>
        <!-- END Oracle logo -->
      </div>
  `;
};

export const LogoGrid = Template.bind({});
LogoGrid.parameters = {
  layout: 'fullscreen',
};
