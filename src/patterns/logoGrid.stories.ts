import { html } from 'lit';
import { settings } from '../global/settings';
import '../components/modal/modal';
import '../components/button/button';

export default {
  title: 'Patterns/Logo Grid',
};

const Template = args => {
  return html`
      <div class="${settings.class_prefix}-grid-container">
        <!-- BEGIN Google Logo -->
        <div class="${settings.class_prefix}-max-col-3 ${settings.class_prefix}-xlg-col-3 ${settings.class_prefix}-lg-col-3 ${settings.class_prefix}-md-col-6 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
          <kd-modal>
            <a href="javascript://" slot="trigger" title="Microsoft">
              <svg width="280" height="210" style="width:100%;height:auto" class="${settings.class_prefix}-transition-default-grayscale ${settings.class_prefix}-transition-hover-colorize" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 280 210" style="enable-background:new 0 0 280 210;" xml:space="preserve">
                    <g>
                      <path fill="#5F6368" d="M170.7,114.9c-6.9,0.2-12.6-5.3-12.7-12.2c0-0.2,0-0.5,0-0.7c-0.1-3.4,1.2-6.7,3.6-9.1
                        c2.4-2.4,5.7-3.8,9.1-3.7c3.4-0.1,6.7,1.4,8.9,4l-2.2,2.2c-1.6-2.1-4.1-3.2-6.7-3.2c-2.6-0.1-5,0.9-6.8,2.7c-1.8,1.9-2.8,4.4-2.7,7
                        c-0.1,2.6,0.9,5.2,2.7,7.1c1.8,1.8,4.3,2.8,6.8,2.7c2.9,0,5.6-1.3,7.4-3.6l2.3,2.2c-1.2,1.4-2.6,2.5-4.3,3.2
                        C174.4,114.5,172.5,114.9,170.7,114.9z M186.1,89.8v24.5h-3.2V89.8H186.1z M188.8,105.9c-0.1-2.4,0.8-4.7,2.4-6.4
                        c1.6-1.7,3.9-2.6,6.2-2.5c2.3-0.1,4.6,0.9,6.2,2.5c1.7,1.7,2.5,4,2.5,6.4c0.1,2.4-0.8,4.7-2.5,6.4c-1.6,1.7-3.8,2.6-6.2,2.5
                        c-2.3,0.1-4.6-0.8-6.2-2.5C189.6,110.6,188.7,108.3,188.8,105.9z M192,105.9c-0.1,1.6,0.5,3.2,1.6,4.4c2,2.2,5.4,2.3,7.6,0.2
                        c0.1-0.1,0.2-0.1,0.2-0.2c1.1-1.2,1.7-2.8,1.6-4.4c0.1-1.6-0.5-3.2-1.6-4.4c-2-2.2-5.3-2.3-7.5-0.3c-0.1,0.1-0.2,0.2-0.3,0.3
                        C192.5,102.8,191.9,104.3,192,105.9z M223.5,114.3h-3V112h-0.1c-0.5,0.9-1.3,1.6-2.2,2.1c-0.9,0.5-2,0.8-3.1,0.8
                        c-1.8,0.1-3.5-0.5-4.8-1.8c-1.2-1.4-1.8-3.2-1.7-5V97.6h3.1v10.3c-0.2,2,1.2,3.9,3.3,4.1c0.3,0,0.6,0,0.9,0c1.2,0,2.4-0.5,3.1-1.5
                        c0.8-1,1.3-2.3,1.3-3.7v-9.3h3.2L223.5,114.3z M234.2,114.9c-2.2,0-4.2-0.9-5.6-2.6c-1.6-1.7-2.4-4-2.4-6.3
                        c-0.1-2.3,0.8-4.6,2.3-6.3c1.4-1.7,3.5-2.6,5.6-2.6c1.2,0,2.3,0.3,3.4,0.8c1,0.5,1.8,1.2,2.4,2.1h0.1l-0.1-2.3v-7.8h3.1v24.5h-3
                        V112h-0.1c-0.6,0.9-1.4,1.6-2.4,2.1C236.5,114.6,235.4,114.9,234.2,114.9z M234.7,112c1.5,0,2.9-0.6,3.8-1.7c1-1.2,1.6-2.8,1.5-4.4
                        c0.1-1.6-0.5-3.1-1.5-4.4c-0.9-1.1-2.3-1.7-3.8-1.7c-1.5,0-2.9,0.6-3.8,1.7c-1,1.2-1.6,2.8-1.5,4.4c-0.1,1.6,0.5,3.1,1.5,4.4
                        C231.8,111.4,233.2,112,234.7,112z"/>
                      <g id="_75x24px">
                        <path fill="#4285F4" d="M51.1,114.9c-7.7,0-14-6.2-14.1-13.9c0.1-7.7,6.4-13.9,14.1-13.9c3.6-0.1,7,1.3,9.5,3.8l-2.7,2.7
                          c-1.8-1.8-4.3-2.7-6.9-2.7c-5.5,0-10,4.4-10,9.9c0,0,0,0.1,0,0.1c-0.1,5.5,4.3,10,9.8,10.1c0,0,0.1,0,0.1,0c2.6,0.1,5.2-0.9,7-2.8
                          c1.2-1.3,1.9-3,2.1-4.8h-9.1v-3.8h12.8c0.1,0.8,0.2,1.6,0.2,2.4c0.1,3.3-1.1,6.4-3.3,8.8C58.3,113.6,54.7,115,51.1,114.9z"/>
                        <path fill="#EA4335" d="M83.9,105.9c0.2,4.9-3.6,9-8.5,9.2c-4.9,0.2-9-3.6-9.2-8.5c0-0.2,0-0.5,0-0.7c-0.2-4.9,3.6-9,8.5-9.2
                          c4.9-0.2,9,3.6,9.2,8.5C83.9,105.4,83.9,105.7,83.9,105.9z M80,105.9c0.3-2.7-1.8-5.2-4.5-5.4s-5.2,1.8-5.4,4.5c0,0.3,0,0.6,0,0.9
                          c-0.3,2.7,1.8,5.2,4.5,5.4s5.2-1.8,5.4-4.5C80.1,106.6,80.1,106.2,80,105.9z"/>
                        <path fill="#FBBC04" d="M103.7,105.9c0.2,4.9-3.6,9-8.5,9.2c-4.9,0.2-9-3.6-9.2-8.5c0-0.2,0-0.5,0-0.7c-0.2-4.9,3.6-9,8.5-9.2
                          c4.9-0.2,9,3.6,9.2,8.5C103.7,105.4,103.7,105.7,103.7,105.9z M99.9,105.9c0.2-2.7-1.8-5.1-4.6-5.4c-2.7-0.2-5.1,1.8-5.4,4.6
                          c0,0.3,0,0.5,0,0.8c-0.2,2.7,1.8,5.1,4.6,5.4c2.7,0.2,5.1-1.8,5.4-4.6C99.9,106.4,99.9,106.2,99.9,105.9z"/>
                        <path fill="#5F6368" d="M123.1,97.6v16c0,6.6-3.9,9.3-8.5,9.3c-3.5,0-6.6-2.1-8-5.3l3.4-1.5c0.7,1.9,2.5,3.1,4.5,3.2
                          c3,0,4.8-1.8,4.8-5.2v-1.3h-0.1c-1.2,1.4-2.9,2.1-4.8,2.1c-4.9,0-8.9-4-8.9-8.9s4-8.9,8.9-8.9c1.8,0,3.5,0.7,4.8,2.1h0.1v-1.5
                          H123.1z M119.6,106c0.2-2.8-1.8-5.2-4.6-5.4c-0.1,0-0.1,0-0.2,0c-2.9,0.1-5.1,2.5-5,5.4c0,0,0,0.1,0,0.1c-0.1,2.8,2.1,5.2,4.9,5.4
                          c0,0,0.1,0,0.1,0c2.8-0.1,4.9-2.4,4.8-5.2C119.6,106.1,119.6,106,119.6,106L119.6,106z"/>
                        <path fill="#34A853" d="M130,88.1v26.3H126V88.1H130z"/>
                        <path fill="#EA4335" d="M145.4,108.9l3.1,2.1c-1.7,2.5-4.5,4-7.4,4c-4.8,0.1-8.7-3.8-8.8-8.5c0-0.1,0-0.3,0-0.4
                          c-0.4-4.5,3-8.5,7.5-8.9c3.8-0.3,7.4,2,8.5,5.7l0.4,1l-11.9,4.9c0.8,1.7,2.5,2.8,4.4,2.7C142.9,111.4,144.5,110.4,145.4,108.9z
                           M136,105.7l8-3.3c-0.7-1.2-2-1.9-3.3-1.8C138,100.7,135.9,102.9,136,105.7C136,105.6,136,105.7,136,105.7z"/>
                      </g>
                    </g>
                    </svg>
            </a>
            <div class="${settings.class_prefix}-grid-container ${settings.class_prefix}-fully-fluid ${settings.class_prefix}-no-grid-gap ${settings.class_prefix}-no-grid-padding">
              <div class="${settings.class_prefix}-max-col-6 ${settings.class_prefix}-xlg-col-6 ${settings.class_prefix}-lg-col-6 ${settings.class_prefix}-md-col-12 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4" style="min-height:768px">
                <div class="${settings.class_prefix}-pt6 ${settings.class_prefix}-pr5 ${settings.class_prefix}-pb8 ${settings.class_prefix}-pl4">
                  <div class="${settings.class_prefix}-mt0 ${settings.class_prefix}-mb4"><img src="https://placehold.co/240x120?text=Logo" /></div>
                  <h6 class="${settings.class_prefix}-h6 ${settings.class_prefix}-mt4 ${settings.class_prefix}-mb4"><strong>GOOGLE CLOUD</strong></h6>
                  <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum.</p>
                  <p class="${settings.class_prefix}-mt4 ${settings.class_prefix}-mb0"><kd-button type="primary" icon="arrow-right" href="javascript://">See more</kd-button></p>
                </div>
              </div>
              <div class="${settings.class_prefix}-bg-cloud ${settings.class_prefix}-max-col-6 ${settings.class_prefix}-xlg-col-6 ${settings.class_prefix}-lg-col-6 ${settings.class_prefix}-md-col-12 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4" style="min-height:768px">
                <div class="${settings.class_prefix}-pt6 ${settings.class_prefix}-pr5 ${settings.class_prefix}-pb8 ${settings.class_prefix}-pl4">
                  <p class="${settings.class_prefix}-mt0"><strong>Services Links:</strong></p>
                  <ul class="${settings.class_prefix}-list">
                    <li class="${settings.class_prefix}-list-item">Curabitur blandit tempus porttitor.</li>
                    <li class="${settings.class_prefix}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                    <li class="${settings.class_prefix}-list-item">Aenean lacinia bibendum nulla sed consectetur.</li>
                    <li class="${settings.class_prefix}-list-item">Nulla vitae elit libero, a pharetra augue.</li>
                  </ul>
                  <p class="${settings.class_prefix}-mt4"><strong>More Links:</strong></p>
                  <ul class="${settings.class_prefix}-list">
                    <li class="${settings.class_prefix}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                  </ul>
                </div>
              </div>
            </div>
          </kd-modal>
        </div>
        <!-- END Google logo -->
        <!-- BEGIN Oracle Logo -->
        <div class="${settings.class_prefix}-max-col-3 ${settings.class_prefix}-xlg-col-3 ${settings.class_prefix}-lg-col-3 ${settings.class_prefix}-md-col-6 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
          <kd-modal>
            <a href="javascript://" slot="trigger" title="Microsoft">
              <svg width="280" height="210" style="width:100%;height:auto" class="${settings.class_prefix}-transition-default-grayscale ${settings.class_prefix}-transition-hover-colorize" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 280 210" style="enable-background:new 0 0 280 210;" xml:space="preserve">
                    <path fill="#C74634" d="M126.2,109h13.5l-7.1-11.5l-13.1,20.8h-6l15.9-24.9c1.2-1.7,3.6-2.1,5.3-0.9c0.4,0.2,0.7,0.5,0.9,0.9l16,25h-6
                      l-2.8-4.6h-13.6L126.2,109 M188.1,113.6V92H183v23.8c0,0.7,0.3,1.3,0.8,1.8c0.5,0.5,1.1,0.8,1.8,0.8h23l3-4.6L188.1,113.6
                       M104.5,109.7c4.9,0,8.9-4,8.9-8.9c0-4.9-4-8.9-8.9-8.9H82.4v26.3h5V96.6h16.7c2.3,0,4.3,1.9,4.3,4.3c0,2.3-1.9,4.3-4.3,4.3H89.9
                      l15.1,13.1h7.3l-10.1-8.5H104.5 M51.3,118.3h15.3c7.3-0.2,13-6.2,12.8-13.5c-0.2-7-5.8-12.6-12.8-12.8H51.3
                      c-7.3-0.2-13.3,5.5-13.5,12.8c-0.2,7.3,5.5,13.3,12.8,13.5C50.9,118.3,51.1,118.3,51.3,118.3 M66.2,113.6H51.7
                      c-4.7-0.2-8.4-4.1-8.2-8.8c0.1-4.5,3.7-8.1,8.2-8.2h14.6c4.7-0.2,8.6,3.5,8.8,8.2c0.2,4.7-3.5,8.6-8.2,8.8
                      C66.6,113.6,66.4,113.6,66.2,113.6 M162.2,118.3h15.6l3-4.6h-18.2c-4.7,0.2-8.6-3.5-8.8-8.2c-0.2-4.7,3.5-8.6,8.2-8.8
                      c0.2,0,0.4,0,0.5,0h14.8l3-4.6h-18.1c-7.3-0.2-13.3,5.5-13.5,12.8c-0.2,7.3,5.5,13.3,12.8,13.5C161.7,118.3,161.9,118.3,162.2,118.3
                       M224,113.6c-3.8,0-7.2-2.5-8.2-6.2h21.6l3-4.6h-24.6c1-3.7,4.4-6.2,8.2-6.2h14.8l3-4.6h-18.1c-7.3,0.2-13,6.2-12.8,13.5
                      c0.2,7,5.8,12.6,12.8,12.8h15.6l3-4.6L224,113.6"/>
                    </svg>
            </a>
            <div class="${settings.class_prefix}-grid-container ${settings.class_prefix}-fully-fluid ${settings.class_prefix}-no-grid-gap ${settings.class_prefix}-no-grid-padding">
              <div class="${settings.class_prefix}-max-col-6 ${settings.class_prefix}-xlg-col-6 ${settings.class_prefix}-lg-col-6 ${settings.class_prefix}-md-col-12 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4" style="min-height:768px">
                <div class="${settings.class_prefix}-pt6 ${settings.class_prefix}-pr5 ${settings.class_prefix}-pb8 ${settings.class_prefix}-pl4">
                  <div class="${settings.class_prefix}-mt0 ${settings.class_prefix}-mb4"><img src="https://placehold.co/240x120?text=Logo" /></div>
                  <h6 class="${settings.class_prefix}-h6 ${settings.class_prefix}-mt4 ${settings.class_prefix}-mb4"><strong>ORACLE</strong></h6>
                  <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum.</p>
                  <p class="${settings.class_prefix}-mt4 ${settings.class_prefix}-mb0"><kd-button type="primary" icon="arrow-right" href="javascript://">See more</kd-button></p>
                </div>
              </div>
              <div class="${settings.class_prefix}-bg-cloud ${settings.class_prefix}-max-col-6 ${settings.class_prefix}-xlg-col-6 ${settings.class_prefix}-lg-col-6 ${settings.class_prefix}-md-col-12 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4" style="min-height:768px">
                <div class="${settings.class_prefix}-pt6 ${settings.class_prefix}-pr5 ${settings.class_prefix}-pb8 ${settings.class_prefix}-pl4">
                  <p class="${settings.class_prefix}-mt0"><strong>Services Links:</strong></p>
                  <ul class="${settings.class_prefix}-list">
                    <li class="${settings.class_prefix}-list-item">Curabitur blandit tempus porttitor.</li>
                    <li class="${settings.class_prefix}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                    <li class="${settings.class_prefix}-list-item">Aenean lacinia bibendum nulla sed consectetur.</li>
                    <li class="${settings.class_prefix}-list-item">Nulla vitae elit libero, a pharetra augue.</li>
                  </ul>
                  <p class="${settings.class_prefix}-mt4"><strong>More Links:</strong></p>
                  <ul class="${settings.class_prefix}-list">
                    <li class="${settings.class_prefix}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                  </ul>
                </div>
              </div>
            </div>
          </kd-modal>
        </div>
        <!-- END Oracle logo -->
        <!-- BEGIN Google Logo -->
        <div class="${settings.class_prefix}-max-col-3 ${settings.class_prefix}-xlg-col-3 ${settings.class_prefix}-lg-col-3 ${settings.class_prefix}-md-col-6 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
          <kd-modal>
            <a href="javascript://" slot="trigger" title="Microsoft">
              <svg width="280" height="210" style="width:100%;height:auto" class="${settings.class_prefix}-transition-default-grayscale ${settings.class_prefix}-transition-hover-colorize" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 280 210" style="enable-background:new 0 0 280 210;" xml:space="preserve">
                    <g>
                      <path fill="#5F6368" d="M170.7,114.9c-6.9,0.2-12.6-5.3-12.7-12.2c0-0.2,0-0.5,0-0.7c-0.1-3.4,1.2-6.7,3.6-9.1
                        c2.4-2.4,5.7-3.8,9.1-3.7c3.4-0.1,6.7,1.4,8.9,4l-2.2,2.2c-1.6-2.1-4.1-3.2-6.7-3.2c-2.6-0.1-5,0.9-6.8,2.7c-1.8,1.9-2.8,4.4-2.7,7
                        c-0.1,2.6,0.9,5.2,2.7,7.1c1.8,1.8,4.3,2.8,6.8,2.7c2.9,0,5.6-1.3,7.4-3.6l2.3,2.2c-1.2,1.4-2.6,2.5-4.3,3.2
                        C174.4,114.5,172.5,114.9,170.7,114.9z M186.1,89.8v24.5h-3.2V89.8H186.1z M188.8,105.9c-0.1-2.4,0.8-4.7,2.4-6.4
                        c1.6-1.7,3.9-2.6,6.2-2.5c2.3-0.1,4.6,0.9,6.2,2.5c1.7,1.7,2.5,4,2.5,6.4c0.1,2.4-0.8,4.7-2.5,6.4c-1.6,1.7-3.8,2.6-6.2,2.5
                        c-2.3,0.1-4.6-0.8-6.2-2.5C189.6,110.6,188.7,108.3,188.8,105.9z M192,105.9c-0.1,1.6,0.5,3.2,1.6,4.4c2,2.2,5.4,2.3,7.6,0.2
                        c0.1-0.1,0.2-0.1,0.2-0.2c1.1-1.2,1.7-2.8,1.6-4.4c0.1-1.6-0.5-3.2-1.6-4.4c-2-2.2-5.3-2.3-7.5-0.3c-0.1,0.1-0.2,0.2-0.3,0.3
                        C192.5,102.8,191.9,104.3,192,105.9z M223.5,114.3h-3V112h-0.1c-0.5,0.9-1.3,1.6-2.2,2.1c-0.9,0.5-2,0.8-3.1,0.8
                        c-1.8,0.1-3.5-0.5-4.8-1.8c-1.2-1.4-1.8-3.2-1.7-5V97.6h3.1v10.3c-0.2,2,1.2,3.9,3.3,4.1c0.3,0,0.6,0,0.9,0c1.2,0,2.4-0.5,3.1-1.5
                        c0.8-1,1.3-2.3,1.3-3.7v-9.3h3.2L223.5,114.3z M234.2,114.9c-2.2,0-4.2-0.9-5.6-2.6c-1.6-1.7-2.4-4-2.4-6.3
                        c-0.1-2.3,0.8-4.6,2.3-6.3c1.4-1.7,3.5-2.6,5.6-2.6c1.2,0,2.3,0.3,3.4,0.8c1,0.5,1.8,1.2,2.4,2.1h0.1l-0.1-2.3v-7.8h3.1v24.5h-3
                        V112h-0.1c-0.6,0.9-1.4,1.6-2.4,2.1C236.5,114.6,235.4,114.9,234.2,114.9z M234.7,112c1.5,0,2.9-0.6,3.8-1.7c1-1.2,1.6-2.8,1.5-4.4
                        c0.1-1.6-0.5-3.1-1.5-4.4c-0.9-1.1-2.3-1.7-3.8-1.7c-1.5,0-2.9,0.6-3.8,1.7c-1,1.2-1.6,2.8-1.5,4.4c-0.1,1.6,0.5,3.1,1.5,4.4
                        C231.8,111.4,233.2,112,234.7,112z"/>
                      <g id="_75x24px">
                        <path fill="#4285F4" d="M51.1,114.9c-7.7,0-14-6.2-14.1-13.9c0.1-7.7,6.4-13.9,14.1-13.9c3.6-0.1,7,1.3,9.5,3.8l-2.7,2.7
                          c-1.8-1.8-4.3-2.7-6.9-2.7c-5.5,0-10,4.4-10,9.9c0,0,0,0.1,0,0.1c-0.1,5.5,4.3,10,9.8,10.1c0,0,0.1,0,0.1,0c2.6,0.1,5.2-0.9,7-2.8
                          c1.2-1.3,1.9-3,2.1-4.8h-9.1v-3.8h12.8c0.1,0.8,0.2,1.6,0.2,2.4c0.1,3.3-1.1,6.4-3.3,8.8C58.3,113.6,54.7,115,51.1,114.9z"/>
                        <path fill="#EA4335" d="M83.9,105.9c0.2,4.9-3.6,9-8.5,9.2c-4.9,0.2-9-3.6-9.2-8.5c0-0.2,0-0.5,0-0.7c-0.2-4.9,3.6-9,8.5-9.2
                          c4.9-0.2,9,3.6,9.2,8.5C83.9,105.4,83.9,105.7,83.9,105.9z M80,105.9c0.3-2.7-1.8-5.2-4.5-5.4s-5.2,1.8-5.4,4.5c0,0.3,0,0.6,0,0.9
                          c-0.3,2.7,1.8,5.2,4.5,5.4s5.2-1.8,5.4-4.5C80.1,106.6,80.1,106.2,80,105.9z"/>
                        <path fill="#FBBC04" d="M103.7,105.9c0.2,4.9-3.6,9-8.5,9.2c-4.9,0.2-9-3.6-9.2-8.5c0-0.2,0-0.5,0-0.7c-0.2-4.9,3.6-9,8.5-9.2
                          c4.9-0.2,9,3.6,9.2,8.5C103.7,105.4,103.7,105.7,103.7,105.9z M99.9,105.9c0.2-2.7-1.8-5.1-4.6-5.4c-2.7-0.2-5.1,1.8-5.4,4.6
                          c0,0.3,0,0.5,0,0.8c-0.2,2.7,1.8,5.1,4.6,5.4c2.7,0.2,5.1-1.8,5.4-4.6C99.9,106.4,99.9,106.2,99.9,105.9z"/>
                        <path fill="#5F6368" d="M123.1,97.6v16c0,6.6-3.9,9.3-8.5,9.3c-3.5,0-6.6-2.1-8-5.3l3.4-1.5c0.7,1.9,2.5,3.1,4.5,3.2
                          c3,0,4.8-1.8,4.8-5.2v-1.3h-0.1c-1.2,1.4-2.9,2.1-4.8,2.1c-4.9,0-8.9-4-8.9-8.9s4-8.9,8.9-8.9c1.8,0,3.5,0.7,4.8,2.1h0.1v-1.5
                          H123.1z M119.6,106c0.2-2.8-1.8-5.2-4.6-5.4c-0.1,0-0.1,0-0.2,0c-2.9,0.1-5.1,2.5-5,5.4c0,0,0,0.1,0,0.1c-0.1,2.8,2.1,5.2,4.9,5.4
                          c0,0,0.1,0,0.1,0c2.8-0.1,4.9-2.4,4.8-5.2C119.6,106.1,119.6,106,119.6,106L119.6,106z"/>
                        <path fill="#34A853" d="M130,88.1v26.3H126V88.1H130z"/>
                        <path fill="#EA4335" d="M145.4,108.9l3.1,2.1c-1.7,2.5-4.5,4-7.4,4c-4.8,0.1-8.7-3.8-8.8-8.5c0-0.1,0-0.3,0-0.4
                          c-0.4-4.5,3-8.5,7.5-8.9c3.8-0.3,7.4,2,8.5,5.7l0.4,1l-11.9,4.9c0.8,1.7,2.5,2.8,4.4,2.7C142.9,111.4,144.5,110.4,145.4,108.9z
                           M136,105.7l8-3.3c-0.7-1.2-2-1.9-3.3-1.8C138,100.7,135.9,102.9,136,105.7C136,105.6,136,105.7,136,105.7z"/>
                      </g>
                    </g>
                    </svg>
            </a>
            <div class="${settings.class_prefix}-grid-container ${settings.class_prefix}-fully-fluid ${settings.class_prefix}-no-grid-gap ${settings.class_prefix}-no-grid-padding">
              <div class="${settings.class_prefix}-max-col-6 ${settings.class_prefix}-xlg-col-6 ${settings.class_prefix}-lg-col-6 ${settings.class_prefix}-md-col-12 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4" style="min-height:768px">
                <div class="${settings.class_prefix}-pt6 ${settings.class_prefix}-pr5 ${settings.class_prefix}-pb8 ${settings.class_prefix}-pl4">
                  <div class="${settings.class_prefix}-mt0 ${settings.class_prefix}-mb4"><img src="https://placehold.co/240x120?text=Logo" /></div>
                  <h6 class="${settings.class_prefix}-h6 ${settings.class_prefix}-mt4 ${settings.class_prefix}-mb4"><strong>GOOGLE CLOUD</strong></h6>
                  <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum.</p>
                  <p class="${settings.class_prefix}-mt4 ${settings.class_prefix}-mb0"><kd-button type="primary" icon="arrow-right" href="javascript://">See more</kd-button></p>
                </div>
              </div>
              <div class="${settings.class_prefix}-bg-cloud ${settings.class_prefix}-max-col-6 ${settings.class_prefix}-xlg-col-6 ${settings.class_prefix}-lg-col-6 ${settings.class_prefix}-md-col-12 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4" style="min-height:768px">
                <div class="${settings.class_prefix}-pt6 ${settings.class_prefix}-pr5 ${settings.class_prefix}-pb8 ${settings.class_prefix}-pl4">
                  <p class="${settings.class_prefix}-mt0"><strong>Services Links:</strong></p>
                  <ul class="${settings.class_prefix}-list">
                    <li class="${settings.class_prefix}-list-item">Curabitur blandit tempus porttitor.</li>
                    <li class="${settings.class_prefix}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                    <li class="${settings.class_prefix}-list-item">Aenean lacinia bibendum nulla sed consectetur.</li>
                    <li class="${settings.class_prefix}-list-item">Nulla vitae elit libero, a pharetra augue.</li>
                  </ul>
                  <p class="${settings.class_prefix}-mt4"><strong>More Links:</strong></p>
                  <ul class="${settings.class_prefix}-list">
                    <li class="${settings.class_prefix}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                  </ul>
                </div>
              </div>
            </div>
          </kd-modal>
        </div>
        <!-- END Google logo -->
        <!-- BEGIN Oracle Logo -->
        <div class="${settings.class_prefix}-max-col-3 ${settings.class_prefix}-xlg-col-3 ${settings.class_prefix}-lg-col-3 ${settings.class_prefix}-md-col-6 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
          <kd-modal>
            <a href="javascript://" slot="trigger" title="Microsoft">
              <svg width="280" height="210" style="width:100%;height:auto" class="${settings.class_prefix}-transition-default-grayscale ${settings.class_prefix}-transition-hover-colorize" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 280 210" style="enable-background:new 0 0 280 210;" xml:space="preserve">
                    <path fill="#C74634" d="M126.2,109h13.5l-7.1-11.5l-13.1,20.8h-6l15.9-24.9c1.2-1.7,3.6-2.1,5.3-0.9c0.4,0.2,0.7,0.5,0.9,0.9l16,25h-6
                      l-2.8-4.6h-13.6L126.2,109 M188.1,113.6V92H183v23.8c0,0.7,0.3,1.3,0.8,1.8c0.5,0.5,1.1,0.8,1.8,0.8h23l3-4.6L188.1,113.6
                       M104.5,109.7c4.9,0,8.9-4,8.9-8.9c0-4.9-4-8.9-8.9-8.9H82.4v26.3h5V96.6h16.7c2.3,0,4.3,1.9,4.3,4.3c0,2.3-1.9,4.3-4.3,4.3H89.9
                      l15.1,13.1h7.3l-10.1-8.5H104.5 M51.3,118.3h15.3c7.3-0.2,13-6.2,12.8-13.5c-0.2-7-5.8-12.6-12.8-12.8H51.3
                      c-7.3-0.2-13.3,5.5-13.5,12.8c-0.2,7.3,5.5,13.3,12.8,13.5C50.9,118.3,51.1,118.3,51.3,118.3 M66.2,113.6H51.7
                      c-4.7-0.2-8.4-4.1-8.2-8.8c0.1-4.5,3.7-8.1,8.2-8.2h14.6c4.7-0.2,8.6,3.5,8.8,8.2c0.2,4.7-3.5,8.6-8.2,8.8
                      C66.6,113.6,66.4,113.6,66.2,113.6 M162.2,118.3h15.6l3-4.6h-18.2c-4.7,0.2-8.6-3.5-8.8-8.2c-0.2-4.7,3.5-8.6,8.2-8.8
                      c0.2,0,0.4,0,0.5,0h14.8l3-4.6h-18.1c-7.3-0.2-13.3,5.5-13.5,12.8c-0.2,7.3,5.5,13.3,12.8,13.5C161.7,118.3,161.9,118.3,162.2,118.3
                       M224,113.6c-3.8,0-7.2-2.5-8.2-6.2h21.6l3-4.6h-24.6c1-3.7,4.4-6.2,8.2-6.2h14.8l3-4.6h-18.1c-7.3,0.2-13,6.2-12.8,13.5
                      c0.2,7,5.8,12.6,12.8,12.8h15.6l3-4.6L224,113.6"/>
                    </svg>
            </a>
            <div class="${settings.class_prefix}-grid-container ${settings.class_prefix}-fully-fluid ${settings.class_prefix}-no-grid-gap ${settings.class_prefix}-no-grid-padding">
              <div class="${settings.class_prefix}-max-col-6 ${settings.class_prefix}-xlg-col-6 ${settings.class_prefix}-lg-col-6 ${settings.class_prefix}-md-col-12 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4" style="min-height:768px">
                <div class="${settings.class_prefix}-pt6 ${settings.class_prefix}-pr5 ${settings.class_prefix}-pb8 ${settings.class_prefix}-pl4">
                  <div class="${settings.class_prefix}-mt0 ${settings.class_prefix}-mb4"><img src="https://placehold.co/240x120?text=Logo" /></div>
                  <h6 class="${settings.class_prefix}-h6 ${settings.class_prefix}-mt4 ${settings.class_prefix}-mb4"><strong>ORACLE</strong></h6>
                  <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum.</p>
                  <p class="${settings.class_prefix}-mt4 ${settings.class_prefix}-mb0"><kd-button type="primary" icon="arrow-right" href="javascript://">See more</kd-button></p>
                </div>
              </div>
              <div class="${settings.class_prefix}-bg-cloud ${settings.class_prefix}-max-col-6 ${settings.class_prefix}-xlg-col-6 ${settings.class_prefix}-lg-col-6 ${settings.class_prefix}-md-col-12 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4" style="min-height:768px">
                <div class="${settings.class_prefix}-pt6 ${settings.class_prefix}-pr5 ${settings.class_prefix}-pb8 ${settings.class_prefix}-pl4">
                  <p class="${settings.class_prefix}-mt0"><strong>Services Links:</strong></p>
                  <ul class="${settings.class_prefix}-list">
                    <li class="${settings.class_prefix}-list-item">Curabitur blandit tempus porttitor.</li>
                    <li class="${settings.class_prefix}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                    <li class="${settings.class_prefix}-list-item">Aenean lacinia bibendum nulla sed consectetur.</li>
                    <li class="${settings.class_prefix}-list-item">Nulla vitae elit libero, a pharetra augue.</li>
                  </ul>
                  <p class="${settings.class_prefix}-mt4"><strong>More Links:</strong></p>
                  <ul class="${settings.class_prefix}-list">
                    <li class="${settings.class_prefix}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                  </ul>
                </div>
              </div>
            </div>
          </kd-modal>
        </div>
        <!-- END Oracle logo -->
        
        <!-- BEGIN Oracle Logo -->
        <div class="${settings.class_prefix}-max-col-3 ${settings.class_prefix}-xlg-col-3 ${settings.class_prefix}-lg-col-3 ${settings.class_prefix}-md-col-6 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
          <kd-modal>
            <a href="javascript://" slot="trigger" title="Microsoft">
              <svg width="280" height="210" style="width:100%;height:auto" class="${settings.class_prefix}-transition-default-grayscale ${settings.class_prefix}-transition-hover-colorize" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 280 210" style="enable-background:new 0 0 280 210;" xml:space="preserve">
                    <path fill="#C74634" d="M126.2,109h13.5l-7.1-11.5l-13.1,20.8h-6l15.9-24.9c1.2-1.7,3.6-2.1,5.3-0.9c0.4,0.2,0.7,0.5,0.9,0.9l16,25h-6
                      l-2.8-4.6h-13.6L126.2,109 M188.1,113.6V92H183v23.8c0,0.7,0.3,1.3,0.8,1.8c0.5,0.5,1.1,0.8,1.8,0.8h23l3-4.6L188.1,113.6
                       M104.5,109.7c4.9,0,8.9-4,8.9-8.9c0-4.9-4-8.9-8.9-8.9H82.4v26.3h5V96.6h16.7c2.3,0,4.3,1.9,4.3,4.3c0,2.3-1.9,4.3-4.3,4.3H89.9
                      l15.1,13.1h7.3l-10.1-8.5H104.5 M51.3,118.3h15.3c7.3-0.2,13-6.2,12.8-13.5c-0.2-7-5.8-12.6-12.8-12.8H51.3
                      c-7.3-0.2-13.3,5.5-13.5,12.8c-0.2,7.3,5.5,13.3,12.8,13.5C50.9,118.3,51.1,118.3,51.3,118.3 M66.2,113.6H51.7
                      c-4.7-0.2-8.4-4.1-8.2-8.8c0.1-4.5,3.7-8.1,8.2-8.2h14.6c4.7-0.2,8.6,3.5,8.8,8.2c0.2,4.7-3.5,8.6-8.2,8.8
                      C66.6,113.6,66.4,113.6,66.2,113.6 M162.2,118.3h15.6l3-4.6h-18.2c-4.7,0.2-8.6-3.5-8.8-8.2c-0.2-4.7,3.5-8.6,8.2-8.8
                      c0.2,0,0.4,0,0.5,0h14.8l3-4.6h-18.1c-7.3-0.2-13.3,5.5-13.5,12.8c-0.2,7.3,5.5,13.3,12.8,13.5C161.7,118.3,161.9,118.3,162.2,118.3
                       M224,113.6c-3.8,0-7.2-2.5-8.2-6.2h21.6l3-4.6h-24.6c1-3.7,4.4-6.2,8.2-6.2h14.8l3-4.6h-18.1c-7.3,0.2-13,6.2-12.8,13.5
                      c0.2,7,5.8,12.6,12.8,12.8h15.6l3-4.6L224,113.6"/>
                    </svg>
            </a>
            <div class="${settings.class_prefix}-grid-container ${settings.class_prefix}-fully-fluid ${settings.class_prefix}-no-grid-gap ${settings.class_prefix}-no-grid-padding">
              <div class="${settings.class_prefix}-max-col-6 ${settings.class_prefix}-xlg-col-6 ${settings.class_prefix}-lg-col-6 ${settings.class_prefix}-md-col-12 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4" style="min-height:768px">
                <div class="${settings.class_prefix}-pt6 ${settings.class_prefix}-pr5 ${settings.class_prefix}-pb8 ${settings.class_prefix}-pl4">
                  <div class="${settings.class_prefix}-mt0 ${settings.class_prefix}-mb4"><img src="https://placehold.co/240x120?text=Logo" /></div>
                  <h6 class="${settings.class_prefix}-h6 ${settings.class_prefix}-mt4 ${settings.class_prefix}-mb4"><strong>ORACLE</strong></h6>
                  <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum.</p>
                  <p class="${settings.class_prefix}-mt4 ${settings.class_prefix}-mb0"><kd-button type="primary" icon="arrow-right" href="javascript://">See more</kd-button></p>
                </div>
              </div>
              <div class="${settings.class_prefix}-bg-cloud ${settings.class_prefix}-max-col-6 ${settings.class_prefix}-xlg-col-6 ${settings.class_prefix}-lg-col-6 ${settings.class_prefix}-md-col-12 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4" style="min-height:768px">
                <div class="${settings.class_prefix}-pt6 ${settings.class_prefix}-pr5 ${settings.class_prefix}-pb8 ${settings.class_prefix}-pl4">
                  <p class="${settings.class_prefix}-mt0"><strong>Services Links:</strong></p>
                  <ul class="${settings.class_prefix}-list">
                    <li class="${settings.class_prefix}-list-item">Curabitur blandit tempus porttitor.</li>
                    <li class="${settings.class_prefix}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                    <li class="${settings.class_prefix}-list-item">Aenean lacinia bibendum nulla sed consectetur.</li>
                    <li class="${settings.class_prefix}-list-item">Nulla vitae elit libero, a pharetra augue.</li>
                  </ul>
                  <p class="${settings.class_prefix}-mt4"><strong>More Links:</strong></p>
                  <ul class="${settings.class_prefix}-list">
                    <li class="${settings.class_prefix}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                  </ul>
                </div>
              </div>
            </div>
          </kd-modal>
        </div>
        <!-- END Oracle logo -->
        <!-- BEGIN Google Logo -->
        <div class="${settings.class_prefix}-max-col-3 ${settings.class_prefix}-xlg-col-3 ${settings.class_prefix}-lg-col-3 ${settings.class_prefix}-md-col-6 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
          <kd-modal>
            <a href="javascript://" slot="trigger" title="Microsoft">
              <svg width="280" height="210" style="width:100%;height:auto" class="${settings.class_prefix}-transition-default-grayscale ${settings.class_prefix}-transition-hover-colorize" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 280 210" style="enable-background:new 0 0 280 210;" xml:space="preserve">
                    <g>
                      <path fill="#5F6368" d="M170.7,114.9c-6.9,0.2-12.6-5.3-12.7-12.2c0-0.2,0-0.5,0-0.7c-0.1-3.4,1.2-6.7,3.6-9.1
                        c2.4-2.4,5.7-3.8,9.1-3.7c3.4-0.1,6.7,1.4,8.9,4l-2.2,2.2c-1.6-2.1-4.1-3.2-6.7-3.2c-2.6-0.1-5,0.9-6.8,2.7c-1.8,1.9-2.8,4.4-2.7,7
                        c-0.1,2.6,0.9,5.2,2.7,7.1c1.8,1.8,4.3,2.8,6.8,2.7c2.9,0,5.6-1.3,7.4-3.6l2.3,2.2c-1.2,1.4-2.6,2.5-4.3,3.2
                        C174.4,114.5,172.5,114.9,170.7,114.9z M186.1,89.8v24.5h-3.2V89.8H186.1z M188.8,105.9c-0.1-2.4,0.8-4.7,2.4-6.4
                        c1.6-1.7,3.9-2.6,6.2-2.5c2.3-0.1,4.6,0.9,6.2,2.5c1.7,1.7,2.5,4,2.5,6.4c0.1,2.4-0.8,4.7-2.5,6.4c-1.6,1.7-3.8,2.6-6.2,2.5
                        c-2.3,0.1-4.6-0.8-6.2-2.5C189.6,110.6,188.7,108.3,188.8,105.9z M192,105.9c-0.1,1.6,0.5,3.2,1.6,4.4c2,2.2,5.4,2.3,7.6,0.2
                        c0.1-0.1,0.2-0.1,0.2-0.2c1.1-1.2,1.7-2.8,1.6-4.4c0.1-1.6-0.5-3.2-1.6-4.4c-2-2.2-5.3-2.3-7.5-0.3c-0.1,0.1-0.2,0.2-0.3,0.3
                        C192.5,102.8,191.9,104.3,192,105.9z M223.5,114.3h-3V112h-0.1c-0.5,0.9-1.3,1.6-2.2,2.1c-0.9,0.5-2,0.8-3.1,0.8
                        c-1.8,0.1-3.5-0.5-4.8-1.8c-1.2-1.4-1.8-3.2-1.7-5V97.6h3.1v10.3c-0.2,2,1.2,3.9,3.3,4.1c0.3,0,0.6,0,0.9,0c1.2,0,2.4-0.5,3.1-1.5
                        c0.8-1,1.3-2.3,1.3-3.7v-9.3h3.2L223.5,114.3z M234.2,114.9c-2.2,0-4.2-0.9-5.6-2.6c-1.6-1.7-2.4-4-2.4-6.3
                        c-0.1-2.3,0.8-4.6,2.3-6.3c1.4-1.7,3.5-2.6,5.6-2.6c1.2,0,2.3,0.3,3.4,0.8c1,0.5,1.8,1.2,2.4,2.1h0.1l-0.1-2.3v-7.8h3.1v24.5h-3
                        V112h-0.1c-0.6,0.9-1.4,1.6-2.4,2.1C236.5,114.6,235.4,114.9,234.2,114.9z M234.7,112c1.5,0,2.9-0.6,3.8-1.7c1-1.2,1.6-2.8,1.5-4.4
                        c0.1-1.6-0.5-3.1-1.5-4.4c-0.9-1.1-2.3-1.7-3.8-1.7c-1.5,0-2.9,0.6-3.8,1.7c-1,1.2-1.6,2.8-1.5,4.4c-0.1,1.6,0.5,3.1,1.5,4.4
                        C231.8,111.4,233.2,112,234.7,112z"/>
                      <g id="_75x24px">
                        <path fill="#4285F4" d="M51.1,114.9c-7.7,0-14-6.2-14.1-13.9c0.1-7.7,6.4-13.9,14.1-13.9c3.6-0.1,7,1.3,9.5,3.8l-2.7,2.7
                          c-1.8-1.8-4.3-2.7-6.9-2.7c-5.5,0-10,4.4-10,9.9c0,0,0,0.1,0,0.1c-0.1,5.5,4.3,10,9.8,10.1c0,0,0.1,0,0.1,0c2.6,0.1,5.2-0.9,7-2.8
                          c1.2-1.3,1.9-3,2.1-4.8h-9.1v-3.8h12.8c0.1,0.8,0.2,1.6,0.2,2.4c0.1,3.3-1.1,6.4-3.3,8.8C58.3,113.6,54.7,115,51.1,114.9z"/>
                        <path fill="#EA4335" d="M83.9,105.9c0.2,4.9-3.6,9-8.5,9.2c-4.9,0.2-9-3.6-9.2-8.5c0-0.2,0-0.5,0-0.7c-0.2-4.9,3.6-9,8.5-9.2
                          c4.9-0.2,9,3.6,9.2,8.5C83.9,105.4,83.9,105.7,83.9,105.9z M80,105.9c0.3-2.7-1.8-5.2-4.5-5.4s-5.2,1.8-5.4,4.5c0,0.3,0,0.6,0,0.9
                          c-0.3,2.7,1.8,5.2,4.5,5.4s5.2-1.8,5.4-4.5C80.1,106.6,80.1,106.2,80,105.9z"/>
                        <path fill="#FBBC04" d="M103.7,105.9c0.2,4.9-3.6,9-8.5,9.2c-4.9,0.2-9-3.6-9.2-8.5c0-0.2,0-0.5,0-0.7c-0.2-4.9,3.6-9,8.5-9.2
                          c4.9-0.2,9,3.6,9.2,8.5C103.7,105.4,103.7,105.7,103.7,105.9z M99.9,105.9c0.2-2.7-1.8-5.1-4.6-5.4c-2.7-0.2-5.1,1.8-5.4,4.6
                          c0,0.3,0,0.5,0,0.8c-0.2,2.7,1.8,5.1,4.6,5.4c2.7,0.2,5.1-1.8,5.4-4.6C99.9,106.4,99.9,106.2,99.9,105.9z"/>
                        <path fill="#5F6368" d="M123.1,97.6v16c0,6.6-3.9,9.3-8.5,9.3c-3.5,0-6.6-2.1-8-5.3l3.4-1.5c0.7,1.9,2.5,3.1,4.5,3.2
                          c3,0,4.8-1.8,4.8-5.2v-1.3h-0.1c-1.2,1.4-2.9,2.1-4.8,2.1c-4.9,0-8.9-4-8.9-8.9s4-8.9,8.9-8.9c1.8,0,3.5,0.7,4.8,2.1h0.1v-1.5
                          H123.1z M119.6,106c0.2-2.8-1.8-5.2-4.6-5.4c-0.1,0-0.1,0-0.2,0c-2.9,0.1-5.1,2.5-5,5.4c0,0,0,0.1,0,0.1c-0.1,2.8,2.1,5.2,4.9,5.4
                          c0,0,0.1,0,0.1,0c2.8-0.1,4.9-2.4,4.8-5.2C119.6,106.1,119.6,106,119.6,106L119.6,106z"/>
                        <path fill="#34A853" d="M130,88.1v26.3H126V88.1H130z"/>
                        <path fill="#EA4335" d="M145.4,108.9l3.1,2.1c-1.7,2.5-4.5,4-7.4,4c-4.8,0.1-8.7-3.8-8.8-8.5c0-0.1,0-0.3,0-0.4
                          c-0.4-4.5,3-8.5,7.5-8.9c3.8-0.3,7.4,2,8.5,5.7l0.4,1l-11.9,4.9c0.8,1.7,2.5,2.8,4.4,2.7C142.9,111.4,144.5,110.4,145.4,108.9z
                           M136,105.7l8-3.3c-0.7-1.2-2-1.9-3.3-1.8C138,100.7,135.9,102.9,136,105.7C136,105.6,136,105.7,136,105.7z"/>
                      </g>
                    </g>
                    </svg>
            </a>
            <div class="${settings.class_prefix}-grid-container ${settings.class_prefix}-fully-fluid ${settings.class_prefix}-no-grid-gap ${settings.class_prefix}-no-grid-padding">
              <div class="${settings.class_prefix}-max-col-6 ${settings.class_prefix}-xlg-col-6 ${settings.class_prefix}-lg-col-6 ${settings.class_prefix}-md-col-12 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4" style="min-height:768px">
                <div class="${settings.class_prefix}-pt6 ${settings.class_prefix}-pr5 ${settings.class_prefix}-pb8 ${settings.class_prefix}-pl4">
                  <div class="${settings.class_prefix}-mt0 ${settings.class_prefix}-mb4"><img src="https://placehold.co/240x120?text=Logo" /></div>
                  <h6 class="${settings.class_prefix}-h6 ${settings.class_prefix}-mt4 ${settings.class_prefix}-mb4"><strong>GOOGLE CLOUD</strong></h6>
                  <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum.</p>
                  <p class="${settings.class_prefix}-mt4 ${settings.class_prefix}-mb0"><kd-button type="primary" icon="arrow-right" href="javascript://">See more</kd-button></p>
                </div>
              </div>
              <div class="${settings.class_prefix}-bg-cloud ${settings.class_prefix}-max-col-6 ${settings.class_prefix}-xlg-col-6 ${settings.class_prefix}-lg-col-6 ${settings.class_prefix}-md-col-12 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4" style="min-height:768px">
                <div class="${settings.class_prefix}-pt6 ${settings.class_prefix}-pr5 ${settings.class_prefix}-pb8 ${settings.class_prefix}-pl4">
                  <p class="${settings.class_prefix}-mt0"><strong>Services Links:</strong></p>
                  <ul class="${settings.class_prefix}-list">
                    <li class="${settings.class_prefix}-list-item">Curabitur blandit tempus porttitor.</li>
                    <li class="${settings.class_prefix}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                    <li class="${settings.class_prefix}-list-item">Aenean lacinia bibendum nulla sed consectetur.</li>
                    <li class="${settings.class_prefix}-list-item">Nulla vitae elit libero, a pharetra augue.</li>
                  </ul>
                  <p class="${settings.class_prefix}-mt4"><strong>More Links:</strong></p>
                  <ul class="${settings.class_prefix}-list">
                    <li class="${settings.class_prefix}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                  </ul>
                </div>
              </div>
            </div>
          </kd-modal>
        </div>
        <!-- END Google logo -->
        <!-- BEGIN Oracle Logo -->
        <div class="${settings.class_prefix}-max-col-3 ${settings.class_prefix}-xlg-col-3 ${settings.class_prefix}-lg-col-3 ${settings.class_prefix}-md-col-6 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
          <kd-modal>
            <a href="javascript://" slot="trigger" title="Microsoft">
              <svg width="280" height="210" style="width:100%;height:auto" class="${settings.class_prefix}-transition-default-grayscale ${settings.class_prefix}-transition-hover-colorize" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 280 210" style="enable-background:new 0 0 280 210;" xml:space="preserve">
                    <path fill="#C74634" d="M126.2,109h13.5l-7.1-11.5l-13.1,20.8h-6l15.9-24.9c1.2-1.7,3.6-2.1,5.3-0.9c0.4,0.2,0.7,0.5,0.9,0.9l16,25h-6
                      l-2.8-4.6h-13.6L126.2,109 M188.1,113.6V92H183v23.8c0,0.7,0.3,1.3,0.8,1.8c0.5,0.5,1.1,0.8,1.8,0.8h23l3-4.6L188.1,113.6
                       M104.5,109.7c4.9,0,8.9-4,8.9-8.9c0-4.9-4-8.9-8.9-8.9H82.4v26.3h5V96.6h16.7c2.3,0,4.3,1.9,4.3,4.3c0,2.3-1.9,4.3-4.3,4.3H89.9
                      l15.1,13.1h7.3l-10.1-8.5H104.5 M51.3,118.3h15.3c7.3-0.2,13-6.2,12.8-13.5c-0.2-7-5.8-12.6-12.8-12.8H51.3
                      c-7.3-0.2-13.3,5.5-13.5,12.8c-0.2,7.3,5.5,13.3,12.8,13.5C50.9,118.3,51.1,118.3,51.3,118.3 M66.2,113.6H51.7
                      c-4.7-0.2-8.4-4.1-8.2-8.8c0.1-4.5,3.7-8.1,8.2-8.2h14.6c4.7-0.2,8.6,3.5,8.8,8.2c0.2,4.7-3.5,8.6-8.2,8.8
                      C66.6,113.6,66.4,113.6,66.2,113.6 M162.2,118.3h15.6l3-4.6h-18.2c-4.7,0.2-8.6-3.5-8.8-8.2c-0.2-4.7,3.5-8.6,8.2-8.8
                      c0.2,0,0.4,0,0.5,0h14.8l3-4.6h-18.1c-7.3-0.2-13.3,5.5-13.5,12.8c-0.2,7.3,5.5,13.3,12.8,13.5C161.7,118.3,161.9,118.3,162.2,118.3
                       M224,113.6c-3.8,0-7.2-2.5-8.2-6.2h21.6l3-4.6h-24.6c1-3.7,4.4-6.2,8.2-6.2h14.8l3-4.6h-18.1c-7.3,0.2-13,6.2-12.8,13.5
                      c0.2,7,5.8,12.6,12.8,12.8h15.6l3-4.6L224,113.6"/>
                    </svg>
            </a>
            <div class="${settings.class_prefix}-grid-container ${settings.class_prefix}-fully-fluid ${settings.class_prefix}-no-grid-gap ${settings.class_prefix}-no-grid-padding">
              <div class="${settings.class_prefix}-max-col-6 ${settings.class_prefix}-xlg-col-6 ${settings.class_prefix}-lg-col-6 ${settings.class_prefix}-md-col-12 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4" style="min-height:768px">
                <div class="${settings.class_prefix}-pt6 ${settings.class_prefix}-pr5 ${settings.class_prefix}-pb8 ${settings.class_prefix}-pl4">
                  <div class="${settings.class_prefix}-mt0 ${settings.class_prefix}-mb4"><img src="https://placehold.co/240x120?text=Logo" /></div>
                  <h6 class="${settings.class_prefix}-h6 ${settings.class_prefix}-mt4 ${settings.class_prefix}-mb4"><strong>ORACLE</strong></h6>
                  <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum.</p>
                  <p class="${settings.class_prefix}-mt4 ${settings.class_prefix}-mb0"><kd-button type="primary" icon="arrow-right" href="javascript://">See more</kd-button></p>
                </div>
              </div>
              <div class="${settings.class_prefix}-bg-cloud ${settings.class_prefix}-max-col-6 ${settings.class_prefix}-xlg-col-6 ${settings.class_prefix}-lg-col-6 ${settings.class_prefix}-md-col-12 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4" style="min-height:768px">
                <div class="${settings.class_prefix}-pt6 ${settings.class_prefix}-pr5 ${settings.class_prefix}-pb8 ${settings.class_prefix}-pl4">
                  <p class="${settings.class_prefix}-mt0"><strong>Services Links:</strong></p>
                  <ul class="${settings.class_prefix}-list">
                    <li class="${settings.class_prefix}-list-item">Curabitur blandit tempus porttitor.</li>
                    <li class="${settings.class_prefix}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                    <li class="${settings.class_prefix}-list-item">Aenean lacinia bibendum nulla sed consectetur.</li>
                    <li class="${settings.class_prefix}-list-item">Nulla vitae elit libero, a pharetra augue.</li>
                  </ul>
                  <p class="${settings.class_prefix}-mt4"><strong>More Links:</strong></p>
                  <ul class="${settings.class_prefix}-list">
                    <li class="${settings.class_prefix}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                  </ul>
                </div>
              </div>
            </div>
          </kd-modal>
        </div>
        <!-- END Oracle logo -->
        <!-- BEGIN Google Logo -->
        <div class="${settings.class_prefix}-max-col-3 ${settings.class_prefix}-xlg-col-3 ${settings.class_prefix}-lg-col-3 ${settings.class_prefix}-md-col-6 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
          <kd-modal>
            <a href="javascript://" slot="trigger" title="Microsoft">
              <svg width="280" height="210" style="width:100%;height:auto" class="${settings.class_prefix}-transition-default-grayscale ${settings.class_prefix}-transition-hover-colorize" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 280 210" style="enable-background:new 0 0 280 210;" xml:space="preserve">
                    <g>
                      <path fill="#5F6368" d="M170.7,114.9c-6.9,0.2-12.6-5.3-12.7-12.2c0-0.2,0-0.5,0-0.7c-0.1-3.4,1.2-6.7,3.6-9.1
                        c2.4-2.4,5.7-3.8,9.1-3.7c3.4-0.1,6.7,1.4,8.9,4l-2.2,2.2c-1.6-2.1-4.1-3.2-6.7-3.2c-2.6-0.1-5,0.9-6.8,2.7c-1.8,1.9-2.8,4.4-2.7,7
                        c-0.1,2.6,0.9,5.2,2.7,7.1c1.8,1.8,4.3,2.8,6.8,2.7c2.9,0,5.6-1.3,7.4-3.6l2.3,2.2c-1.2,1.4-2.6,2.5-4.3,3.2
                        C174.4,114.5,172.5,114.9,170.7,114.9z M186.1,89.8v24.5h-3.2V89.8H186.1z M188.8,105.9c-0.1-2.4,0.8-4.7,2.4-6.4
                        c1.6-1.7,3.9-2.6,6.2-2.5c2.3-0.1,4.6,0.9,6.2,2.5c1.7,1.7,2.5,4,2.5,6.4c0.1,2.4-0.8,4.7-2.5,6.4c-1.6,1.7-3.8,2.6-6.2,2.5
                        c-2.3,0.1-4.6-0.8-6.2-2.5C189.6,110.6,188.7,108.3,188.8,105.9z M192,105.9c-0.1,1.6,0.5,3.2,1.6,4.4c2,2.2,5.4,2.3,7.6,0.2
                        c0.1-0.1,0.2-0.1,0.2-0.2c1.1-1.2,1.7-2.8,1.6-4.4c0.1-1.6-0.5-3.2-1.6-4.4c-2-2.2-5.3-2.3-7.5-0.3c-0.1,0.1-0.2,0.2-0.3,0.3
                        C192.5,102.8,191.9,104.3,192,105.9z M223.5,114.3h-3V112h-0.1c-0.5,0.9-1.3,1.6-2.2,2.1c-0.9,0.5-2,0.8-3.1,0.8
                        c-1.8,0.1-3.5-0.5-4.8-1.8c-1.2-1.4-1.8-3.2-1.7-5V97.6h3.1v10.3c-0.2,2,1.2,3.9,3.3,4.1c0.3,0,0.6,0,0.9,0c1.2,0,2.4-0.5,3.1-1.5
                        c0.8-1,1.3-2.3,1.3-3.7v-9.3h3.2L223.5,114.3z M234.2,114.9c-2.2,0-4.2-0.9-5.6-2.6c-1.6-1.7-2.4-4-2.4-6.3
                        c-0.1-2.3,0.8-4.6,2.3-6.3c1.4-1.7,3.5-2.6,5.6-2.6c1.2,0,2.3,0.3,3.4,0.8c1,0.5,1.8,1.2,2.4,2.1h0.1l-0.1-2.3v-7.8h3.1v24.5h-3
                        V112h-0.1c-0.6,0.9-1.4,1.6-2.4,2.1C236.5,114.6,235.4,114.9,234.2,114.9z M234.7,112c1.5,0,2.9-0.6,3.8-1.7c1-1.2,1.6-2.8,1.5-4.4
                        c0.1-1.6-0.5-3.1-1.5-4.4c-0.9-1.1-2.3-1.7-3.8-1.7c-1.5,0-2.9,0.6-3.8,1.7c-1,1.2-1.6,2.8-1.5,4.4c-0.1,1.6,0.5,3.1,1.5,4.4
                        C231.8,111.4,233.2,112,234.7,112z"/>
                      <g id="_75x24px">
                        <path fill="#4285F4" d="M51.1,114.9c-7.7,0-14-6.2-14.1-13.9c0.1-7.7,6.4-13.9,14.1-13.9c3.6-0.1,7,1.3,9.5,3.8l-2.7,2.7
                          c-1.8-1.8-4.3-2.7-6.9-2.7c-5.5,0-10,4.4-10,9.9c0,0,0,0.1,0,0.1c-0.1,5.5,4.3,10,9.8,10.1c0,0,0.1,0,0.1,0c2.6,0.1,5.2-0.9,7-2.8
                          c1.2-1.3,1.9-3,2.1-4.8h-9.1v-3.8h12.8c0.1,0.8,0.2,1.6,0.2,2.4c0.1,3.3-1.1,6.4-3.3,8.8C58.3,113.6,54.7,115,51.1,114.9z"/>
                        <path fill="#EA4335" d="M83.9,105.9c0.2,4.9-3.6,9-8.5,9.2c-4.9,0.2-9-3.6-9.2-8.5c0-0.2,0-0.5,0-0.7c-0.2-4.9,3.6-9,8.5-9.2
                          c4.9-0.2,9,3.6,9.2,8.5C83.9,105.4,83.9,105.7,83.9,105.9z M80,105.9c0.3-2.7-1.8-5.2-4.5-5.4s-5.2,1.8-5.4,4.5c0,0.3,0,0.6,0,0.9
                          c-0.3,2.7,1.8,5.2,4.5,5.4s5.2-1.8,5.4-4.5C80.1,106.6,80.1,106.2,80,105.9z"/>
                        <path fill="#FBBC04" d="M103.7,105.9c0.2,4.9-3.6,9-8.5,9.2c-4.9,0.2-9-3.6-9.2-8.5c0-0.2,0-0.5,0-0.7c-0.2-4.9,3.6-9,8.5-9.2
                          c4.9-0.2,9,3.6,9.2,8.5C103.7,105.4,103.7,105.7,103.7,105.9z M99.9,105.9c0.2-2.7-1.8-5.1-4.6-5.4c-2.7-0.2-5.1,1.8-5.4,4.6
                          c0,0.3,0,0.5,0,0.8c-0.2,2.7,1.8,5.1,4.6,5.4c2.7,0.2,5.1-1.8,5.4-4.6C99.9,106.4,99.9,106.2,99.9,105.9z"/>
                        <path fill="#5F6368" d="M123.1,97.6v16c0,6.6-3.9,9.3-8.5,9.3c-3.5,0-6.6-2.1-8-5.3l3.4-1.5c0.7,1.9,2.5,3.1,4.5,3.2
                          c3,0,4.8-1.8,4.8-5.2v-1.3h-0.1c-1.2,1.4-2.9,2.1-4.8,2.1c-4.9,0-8.9-4-8.9-8.9s4-8.9,8.9-8.9c1.8,0,3.5,0.7,4.8,2.1h0.1v-1.5
                          H123.1z M119.6,106c0.2-2.8-1.8-5.2-4.6-5.4c-0.1,0-0.1,0-0.2,0c-2.9,0.1-5.1,2.5-5,5.4c0,0,0,0.1,0,0.1c-0.1,2.8,2.1,5.2,4.9,5.4
                          c0,0,0.1,0,0.1,0c2.8-0.1,4.9-2.4,4.8-5.2C119.6,106.1,119.6,106,119.6,106L119.6,106z"/>
                        <path fill="#34A853" d="M130,88.1v26.3H126V88.1H130z"/>
                        <path fill="#EA4335" d="M145.4,108.9l3.1,2.1c-1.7,2.5-4.5,4-7.4,4c-4.8,0.1-8.7-3.8-8.8-8.5c0-0.1,0-0.3,0-0.4
                          c-0.4-4.5,3-8.5,7.5-8.9c3.8-0.3,7.4,2,8.5,5.7l0.4,1l-11.9,4.9c0.8,1.7,2.5,2.8,4.4,2.7C142.9,111.4,144.5,110.4,145.4,108.9z
                           M136,105.7l8-3.3c-0.7-1.2-2-1.9-3.3-1.8C138,100.7,135.9,102.9,136,105.7C136,105.6,136,105.7,136,105.7z"/>
                      </g>
                    </g>
                    </svg>
            </a>
            <div class="${settings.class_prefix}-grid-container ${settings.class_prefix}-fully-fluid ${settings.class_prefix}-no-grid-gap ${settings.class_prefix}-no-grid-padding">
              <div class="${settings.class_prefix}-max-col-6 ${settings.class_prefix}-xlg-col-6 ${settings.class_prefix}-lg-col-6 ${settings.class_prefix}-md-col-12 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4" style="min-height:768px">
                <div class="${settings.class_prefix}-pt6 ${settings.class_prefix}-pr5 ${settings.class_prefix}-pb8 ${settings.class_prefix}-pl4">
                  <div class="${settings.class_prefix}-mt0 ${settings.class_prefix}-mb4"><img src="https://placehold.co/240x120?text=Logo" /></div>
                  <h6 class="${settings.class_prefix}-h6 ${settings.class_prefix}-mt4 ${settings.class_prefix}-mb4"><strong>GOOGLE CLOUD</strong></h6>
                  <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum.</p>
                  <p class="${settings.class_prefix}-mt4 ${settings.class_prefix}-mb0"><kd-button type="primary" icon="arrow-right" href="javascript://">See more</kd-button></p>
                </div>
              </div>
              <div class="${settings.class_prefix}-bg-cloud ${settings.class_prefix}-max-col-6 ${settings.class_prefix}-xlg-col-6 ${settings.class_prefix}-lg-col-6 ${settings.class_prefix}-md-col-12 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4" style="min-height:768px">
                <div class="${settings.class_prefix}-pt6 ${settings.class_prefix}-pr5 ${settings.class_prefix}-pb8 ${settings.class_prefix}-pl4">
                  <p class="${settings.class_prefix}-mt0"><strong>Services Links:</strong></p>
                  <ul class="${settings.class_prefix}-list">
                    <li class="${settings.class_prefix}-list-item">Curabitur blandit tempus porttitor.</li>
                    <li class="${settings.class_prefix}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                    <li class="${settings.class_prefix}-list-item">Aenean lacinia bibendum nulla sed consectetur.</li>
                    <li class="${settings.class_prefix}-list-item">Nulla vitae elit libero, a pharetra augue.</li>
                  </ul>
                  <p class="${settings.class_prefix}-mt4"><strong>More Links:</strong></p>
                  <ul class="${settings.class_prefix}-list">
                    <li class="${settings.class_prefix}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                  </ul>
                </div>
              </div>
            </div>
          </kd-modal>
        </div>
        <!-- END Google logo -->

        <!-- BEGIN Google Logo -->
        <div class="${settings.class_prefix}-max-col-3 ${settings.class_prefix}-xlg-col-3 ${settings.class_prefix}-lg-col-3 ${settings.class_prefix}-md-col-6 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
          <kd-modal>
            <a href="javascript://" slot="trigger" title="Microsoft">
              <svg width="280" height="210" style="width:100%;height:auto" class="${settings.class_prefix}-transition-default-grayscale ${settings.class_prefix}-transition-hover-colorize" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 280 210" style="enable-background:new 0 0 280 210;" xml:space="preserve">
                    <g>
                      <path fill="#5F6368" d="M170.7,114.9c-6.9,0.2-12.6-5.3-12.7-12.2c0-0.2,0-0.5,0-0.7c-0.1-3.4,1.2-6.7,3.6-9.1
                        c2.4-2.4,5.7-3.8,9.1-3.7c3.4-0.1,6.7,1.4,8.9,4l-2.2,2.2c-1.6-2.1-4.1-3.2-6.7-3.2c-2.6-0.1-5,0.9-6.8,2.7c-1.8,1.9-2.8,4.4-2.7,7
                        c-0.1,2.6,0.9,5.2,2.7,7.1c1.8,1.8,4.3,2.8,6.8,2.7c2.9,0,5.6-1.3,7.4-3.6l2.3,2.2c-1.2,1.4-2.6,2.5-4.3,3.2
                        C174.4,114.5,172.5,114.9,170.7,114.9z M186.1,89.8v24.5h-3.2V89.8H186.1z M188.8,105.9c-0.1-2.4,0.8-4.7,2.4-6.4
                        c1.6-1.7,3.9-2.6,6.2-2.5c2.3-0.1,4.6,0.9,6.2,2.5c1.7,1.7,2.5,4,2.5,6.4c0.1,2.4-0.8,4.7-2.5,6.4c-1.6,1.7-3.8,2.6-6.2,2.5
                        c-2.3,0.1-4.6-0.8-6.2-2.5C189.6,110.6,188.7,108.3,188.8,105.9z M192,105.9c-0.1,1.6,0.5,3.2,1.6,4.4c2,2.2,5.4,2.3,7.6,0.2
                        c0.1-0.1,0.2-0.1,0.2-0.2c1.1-1.2,1.7-2.8,1.6-4.4c0.1-1.6-0.5-3.2-1.6-4.4c-2-2.2-5.3-2.3-7.5-0.3c-0.1,0.1-0.2,0.2-0.3,0.3
                        C192.5,102.8,191.9,104.3,192,105.9z M223.5,114.3h-3V112h-0.1c-0.5,0.9-1.3,1.6-2.2,2.1c-0.9,0.5-2,0.8-3.1,0.8
                        c-1.8,0.1-3.5-0.5-4.8-1.8c-1.2-1.4-1.8-3.2-1.7-5V97.6h3.1v10.3c-0.2,2,1.2,3.9,3.3,4.1c0.3,0,0.6,0,0.9,0c1.2,0,2.4-0.5,3.1-1.5
                        c0.8-1,1.3-2.3,1.3-3.7v-9.3h3.2L223.5,114.3z M234.2,114.9c-2.2,0-4.2-0.9-5.6-2.6c-1.6-1.7-2.4-4-2.4-6.3
                        c-0.1-2.3,0.8-4.6,2.3-6.3c1.4-1.7,3.5-2.6,5.6-2.6c1.2,0,2.3,0.3,3.4,0.8c1,0.5,1.8,1.2,2.4,2.1h0.1l-0.1-2.3v-7.8h3.1v24.5h-3
                        V112h-0.1c-0.6,0.9-1.4,1.6-2.4,2.1C236.5,114.6,235.4,114.9,234.2,114.9z M234.7,112c1.5,0,2.9-0.6,3.8-1.7c1-1.2,1.6-2.8,1.5-4.4
                        c0.1-1.6-0.5-3.1-1.5-4.4c-0.9-1.1-2.3-1.7-3.8-1.7c-1.5,0-2.9,0.6-3.8,1.7c-1,1.2-1.6,2.8-1.5,4.4c-0.1,1.6,0.5,3.1,1.5,4.4
                        C231.8,111.4,233.2,112,234.7,112z"/>
                      <g id="_75x24px">
                        <path fill="#4285F4" d="M51.1,114.9c-7.7,0-14-6.2-14.1-13.9c0.1-7.7,6.4-13.9,14.1-13.9c3.6-0.1,7,1.3,9.5,3.8l-2.7,2.7
                          c-1.8-1.8-4.3-2.7-6.9-2.7c-5.5,0-10,4.4-10,9.9c0,0,0,0.1,0,0.1c-0.1,5.5,4.3,10,9.8,10.1c0,0,0.1,0,0.1,0c2.6,0.1,5.2-0.9,7-2.8
                          c1.2-1.3,1.9-3,2.1-4.8h-9.1v-3.8h12.8c0.1,0.8,0.2,1.6,0.2,2.4c0.1,3.3-1.1,6.4-3.3,8.8C58.3,113.6,54.7,115,51.1,114.9z"/>
                        <path fill="#EA4335" d="M83.9,105.9c0.2,4.9-3.6,9-8.5,9.2c-4.9,0.2-9-3.6-9.2-8.5c0-0.2,0-0.5,0-0.7c-0.2-4.9,3.6-9,8.5-9.2
                          c4.9-0.2,9,3.6,9.2,8.5C83.9,105.4,83.9,105.7,83.9,105.9z M80,105.9c0.3-2.7-1.8-5.2-4.5-5.4s-5.2,1.8-5.4,4.5c0,0.3,0,0.6,0,0.9
                          c-0.3,2.7,1.8,5.2,4.5,5.4s5.2-1.8,5.4-4.5C80.1,106.6,80.1,106.2,80,105.9z"/>
                        <path fill="#FBBC04" d="M103.7,105.9c0.2,4.9-3.6,9-8.5,9.2c-4.9,0.2-9-3.6-9.2-8.5c0-0.2,0-0.5,0-0.7c-0.2-4.9,3.6-9,8.5-9.2
                          c4.9-0.2,9,3.6,9.2,8.5C103.7,105.4,103.7,105.7,103.7,105.9z M99.9,105.9c0.2-2.7-1.8-5.1-4.6-5.4c-2.7-0.2-5.1,1.8-5.4,4.6
                          c0,0.3,0,0.5,0,0.8c-0.2,2.7,1.8,5.1,4.6,5.4c2.7,0.2,5.1-1.8,5.4-4.6C99.9,106.4,99.9,106.2,99.9,105.9z"/>
                        <path fill="#5F6368" d="M123.1,97.6v16c0,6.6-3.9,9.3-8.5,9.3c-3.5,0-6.6-2.1-8-5.3l3.4-1.5c0.7,1.9,2.5,3.1,4.5,3.2
                          c3,0,4.8-1.8,4.8-5.2v-1.3h-0.1c-1.2,1.4-2.9,2.1-4.8,2.1c-4.9,0-8.9-4-8.9-8.9s4-8.9,8.9-8.9c1.8,0,3.5,0.7,4.8,2.1h0.1v-1.5
                          H123.1z M119.6,106c0.2-2.8-1.8-5.2-4.6-5.4c-0.1,0-0.1,0-0.2,0c-2.9,0.1-5.1,2.5-5,5.4c0,0,0,0.1,0,0.1c-0.1,2.8,2.1,5.2,4.9,5.4
                          c0,0,0.1,0,0.1,0c2.8-0.1,4.9-2.4,4.8-5.2C119.6,106.1,119.6,106,119.6,106L119.6,106z"/>
                        <path fill="#34A853" d="M130,88.1v26.3H126V88.1H130z"/>
                        <path fill="#EA4335" d="M145.4,108.9l3.1,2.1c-1.7,2.5-4.5,4-7.4,4c-4.8,0.1-8.7-3.8-8.8-8.5c0-0.1,0-0.3,0-0.4
                          c-0.4-4.5,3-8.5,7.5-8.9c3.8-0.3,7.4,2,8.5,5.7l0.4,1l-11.9,4.9c0.8,1.7,2.5,2.8,4.4,2.7C142.9,111.4,144.5,110.4,145.4,108.9z
                           M136,105.7l8-3.3c-0.7-1.2-2-1.9-3.3-1.8C138,100.7,135.9,102.9,136,105.7C136,105.6,136,105.7,136,105.7z"/>
                      </g>
                    </g>
                    </svg>
            </a>
            <div class="${settings.class_prefix}-grid-container ${settings.class_prefix}-fully-fluid ${settings.class_prefix}-no-grid-gap ${settings.class_prefix}-no-grid-padding">
              <div class="${settings.class_prefix}-max-col-6 ${settings.class_prefix}-xlg-col-6 ${settings.class_prefix}-lg-col-6 ${settings.class_prefix}-md-col-12 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4" style="min-height:768px">
                <div class="${settings.class_prefix}-pt6 ${settings.class_prefix}-pr5 ${settings.class_prefix}-pb8 ${settings.class_prefix}-pl4">
                  <div class="${settings.class_prefix}-mt0 ${settings.class_prefix}-mb4"><img src="https://placehold.co/240x120?text=Logo" /></div>
                  <h6 class="${settings.class_prefix}-h6 ${settings.class_prefix}-mt4 ${settings.class_prefix}-mb4"><strong>GOOGLE CLOUD</strong></h6>
                  <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum.</p>
                  <p class="${settings.class_prefix}-mt4 ${settings.class_prefix}-mb0"><kd-button type="primary" icon="arrow-right" href="javascript://">See more</kd-button></p>
                </div>
              </div>
              <div class="${settings.class_prefix}-bg-cloud ${settings.class_prefix}-max-col-6 ${settings.class_prefix}-xlg-col-6 ${settings.class_prefix}-lg-col-6 ${settings.class_prefix}-md-col-12 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4" style="min-height:768px">
                <div class="${settings.class_prefix}-pt6 ${settings.class_prefix}-pr5 ${settings.class_prefix}-pb8 ${settings.class_prefix}-pl4">
                  <p class="${settings.class_prefix}-mt0"><strong>Services Links:</strong></p>
                  <ul class="${settings.class_prefix}-list">
                    <li class="${settings.class_prefix}-list-item">Curabitur blandit tempus porttitor.</li>
                    <li class="${settings.class_prefix}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                    <li class="${settings.class_prefix}-list-item">Aenean lacinia bibendum nulla sed consectetur.</li>
                    <li class="${settings.class_prefix}-list-item">Nulla vitae elit libero, a pharetra augue.</li>
                  </ul>
                  <p class="${settings.class_prefix}-mt4"><strong>More Links:</strong></p>
                  <ul class="${settings.class_prefix}-list">
                    <li class="${settings.class_prefix}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                  </ul>
                </div>
              </div>
            </div>
          </kd-modal>
        </div>
        <!-- END Google logo -->
        <!-- BEGIN Oracle Logo -->
        <div class="${settings.class_prefix}-max-col-3 ${settings.class_prefix}-xlg-col-3 ${settings.class_prefix}-lg-col-3 ${settings.class_prefix}-md-col-6 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
          <kd-modal>
            <a href="javascript://" slot="trigger" title="Microsoft">
              <svg width="280" height="210" style="width:100%;height:auto" class="${settings.class_prefix}-transition-default-grayscale ${settings.class_prefix}-transition-hover-colorize" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 280 210" style="enable-background:new 0 0 280 210;" xml:space="preserve">
                    <path fill="#C74634" d="M126.2,109h13.5l-7.1-11.5l-13.1,20.8h-6l15.9-24.9c1.2-1.7,3.6-2.1,5.3-0.9c0.4,0.2,0.7,0.5,0.9,0.9l16,25h-6
                      l-2.8-4.6h-13.6L126.2,109 M188.1,113.6V92H183v23.8c0,0.7,0.3,1.3,0.8,1.8c0.5,0.5,1.1,0.8,1.8,0.8h23l3-4.6L188.1,113.6
                       M104.5,109.7c4.9,0,8.9-4,8.9-8.9c0-4.9-4-8.9-8.9-8.9H82.4v26.3h5V96.6h16.7c2.3,0,4.3,1.9,4.3,4.3c0,2.3-1.9,4.3-4.3,4.3H89.9
                      l15.1,13.1h7.3l-10.1-8.5H104.5 M51.3,118.3h15.3c7.3-0.2,13-6.2,12.8-13.5c-0.2-7-5.8-12.6-12.8-12.8H51.3
                      c-7.3-0.2-13.3,5.5-13.5,12.8c-0.2,7.3,5.5,13.3,12.8,13.5C50.9,118.3,51.1,118.3,51.3,118.3 M66.2,113.6H51.7
                      c-4.7-0.2-8.4-4.1-8.2-8.8c0.1-4.5,3.7-8.1,8.2-8.2h14.6c4.7-0.2,8.6,3.5,8.8,8.2c0.2,4.7-3.5,8.6-8.2,8.8
                      C66.6,113.6,66.4,113.6,66.2,113.6 M162.2,118.3h15.6l3-4.6h-18.2c-4.7,0.2-8.6-3.5-8.8-8.2c-0.2-4.7,3.5-8.6,8.2-8.8
                      c0.2,0,0.4,0,0.5,0h14.8l3-4.6h-18.1c-7.3-0.2-13.3,5.5-13.5,12.8c-0.2,7.3,5.5,13.3,12.8,13.5C161.7,118.3,161.9,118.3,162.2,118.3
                       M224,113.6c-3.8,0-7.2-2.5-8.2-6.2h21.6l3-4.6h-24.6c1-3.7,4.4-6.2,8.2-6.2h14.8l3-4.6h-18.1c-7.3,0.2-13,6.2-12.8,13.5
                      c0.2,7,5.8,12.6,12.8,12.8h15.6l3-4.6L224,113.6"/>
                    </svg>
            </a>
            <div class="${settings.class_prefix}-grid-container ${settings.class_prefix}-fully-fluid ${settings.class_prefix}-no-grid-gap ${settings.class_prefix}-no-grid-padding">
              <div class="${settings.class_prefix}-max-col-6 ${settings.class_prefix}-xlg-col-6 ${settings.class_prefix}-lg-col-6 ${settings.class_prefix}-md-col-12 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4" style="min-height:768px">
                <div class="${settings.class_prefix}-pt6 ${settings.class_prefix}-pr5 ${settings.class_prefix}-pb8 ${settings.class_prefix}-pl4">
                  <div class="${settings.class_prefix}-mt0 ${settings.class_prefix}-mb4"><img src="https://placehold.co/240x120?text=Logo" /></div>
                  <h6 class="${settings.class_prefix}-h6 ${settings.class_prefix}-mt4 ${settings.class_prefix}-mb4"><strong>ORACLE</strong></h6>
                  <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum.</p>
                  <p class="${settings.class_prefix}-mt4 ${settings.class_prefix}-mb0"><kd-button type="primary" icon="arrow-right" href="javascript://">See more</kd-button></p>
                </div>
              </div>
              <div class="${settings.class_prefix}-bg-cloud ${settings.class_prefix}-max-col-6 ${settings.class_prefix}-xlg-col-6 ${settings.class_prefix}-lg-col-6 ${settings.class_prefix}-md-col-12 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4" style="min-height:768px">
                <div class="${settings.class_prefix}-pt6 ${settings.class_prefix}-pr5 ${settings.class_prefix}-pb8 ${settings.class_prefix}-pl4">
                  <p class="${settings.class_prefix}-mt0"><strong>Services Links:</strong></p>
                  <ul class="${settings.class_prefix}-list">
                    <li class="${settings.class_prefix}-list-item">Curabitur blandit tempus porttitor.</li>
                    <li class="${settings.class_prefix}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                    <li class="${settings.class_prefix}-list-item">Aenean lacinia bibendum nulla sed consectetur.</li>
                    <li class="${settings.class_prefix}-list-item">Nulla vitae elit libero, a pharetra augue.</li>
                  </ul>
                  <p class="${settings.class_prefix}-mt4"><strong>More Links:</strong></p>
                  <ul class="${settings.class_prefix}-list">
                    <li class="${settings.class_prefix}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                  </ul>
                </div>
              </div>
            </div>
          </kd-modal>
        </div>
        <!-- END Oracle logo -->
        <!-- BEGIN Google Logo -->
        <div class="${settings.class_prefix}-max-col-3 ${settings.class_prefix}-xlg-col-3 ${settings.class_prefix}-lg-col-3 ${settings.class_prefix}-md-col-6 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
          <kd-modal>
            <a href="javascript://" slot="trigger" title="Microsoft">
              <svg width="280" height="210" style="width:100%;height:auto" class="${settings.class_prefix}-transition-default-grayscale ${settings.class_prefix}-transition-hover-colorize" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 280 210" style="enable-background:new 0 0 280 210;" xml:space="preserve">
                    <g>
                      <path fill="#5F6368" d="M170.7,114.9c-6.9,0.2-12.6-5.3-12.7-12.2c0-0.2,0-0.5,0-0.7c-0.1-3.4,1.2-6.7,3.6-9.1
                        c2.4-2.4,5.7-3.8,9.1-3.7c3.4-0.1,6.7,1.4,8.9,4l-2.2,2.2c-1.6-2.1-4.1-3.2-6.7-3.2c-2.6-0.1-5,0.9-6.8,2.7c-1.8,1.9-2.8,4.4-2.7,7
                        c-0.1,2.6,0.9,5.2,2.7,7.1c1.8,1.8,4.3,2.8,6.8,2.7c2.9,0,5.6-1.3,7.4-3.6l2.3,2.2c-1.2,1.4-2.6,2.5-4.3,3.2
                        C174.4,114.5,172.5,114.9,170.7,114.9z M186.1,89.8v24.5h-3.2V89.8H186.1z M188.8,105.9c-0.1-2.4,0.8-4.7,2.4-6.4
                        c1.6-1.7,3.9-2.6,6.2-2.5c2.3-0.1,4.6,0.9,6.2,2.5c1.7,1.7,2.5,4,2.5,6.4c0.1,2.4-0.8,4.7-2.5,6.4c-1.6,1.7-3.8,2.6-6.2,2.5
                        c-2.3,0.1-4.6-0.8-6.2-2.5C189.6,110.6,188.7,108.3,188.8,105.9z M192,105.9c-0.1,1.6,0.5,3.2,1.6,4.4c2,2.2,5.4,2.3,7.6,0.2
                        c0.1-0.1,0.2-0.1,0.2-0.2c1.1-1.2,1.7-2.8,1.6-4.4c0.1-1.6-0.5-3.2-1.6-4.4c-2-2.2-5.3-2.3-7.5-0.3c-0.1,0.1-0.2,0.2-0.3,0.3
                        C192.5,102.8,191.9,104.3,192,105.9z M223.5,114.3h-3V112h-0.1c-0.5,0.9-1.3,1.6-2.2,2.1c-0.9,0.5-2,0.8-3.1,0.8
                        c-1.8,0.1-3.5-0.5-4.8-1.8c-1.2-1.4-1.8-3.2-1.7-5V97.6h3.1v10.3c-0.2,2,1.2,3.9,3.3,4.1c0.3,0,0.6,0,0.9,0c1.2,0,2.4-0.5,3.1-1.5
                        c0.8-1,1.3-2.3,1.3-3.7v-9.3h3.2L223.5,114.3z M234.2,114.9c-2.2,0-4.2-0.9-5.6-2.6c-1.6-1.7-2.4-4-2.4-6.3
                        c-0.1-2.3,0.8-4.6,2.3-6.3c1.4-1.7,3.5-2.6,5.6-2.6c1.2,0,2.3,0.3,3.4,0.8c1,0.5,1.8,1.2,2.4,2.1h0.1l-0.1-2.3v-7.8h3.1v24.5h-3
                        V112h-0.1c-0.6,0.9-1.4,1.6-2.4,2.1C236.5,114.6,235.4,114.9,234.2,114.9z M234.7,112c1.5,0,2.9-0.6,3.8-1.7c1-1.2,1.6-2.8,1.5-4.4
                        c0.1-1.6-0.5-3.1-1.5-4.4c-0.9-1.1-2.3-1.7-3.8-1.7c-1.5,0-2.9,0.6-3.8,1.7c-1,1.2-1.6,2.8-1.5,4.4c-0.1,1.6,0.5,3.1,1.5,4.4
                        C231.8,111.4,233.2,112,234.7,112z"/>
                      <g id="_75x24px">
                        <path fill="#4285F4" d="M51.1,114.9c-7.7,0-14-6.2-14.1-13.9c0.1-7.7,6.4-13.9,14.1-13.9c3.6-0.1,7,1.3,9.5,3.8l-2.7,2.7
                          c-1.8-1.8-4.3-2.7-6.9-2.7c-5.5,0-10,4.4-10,9.9c0,0,0,0.1,0,0.1c-0.1,5.5,4.3,10,9.8,10.1c0,0,0.1,0,0.1,0c2.6,0.1,5.2-0.9,7-2.8
                          c1.2-1.3,1.9-3,2.1-4.8h-9.1v-3.8h12.8c0.1,0.8,0.2,1.6,0.2,2.4c0.1,3.3-1.1,6.4-3.3,8.8C58.3,113.6,54.7,115,51.1,114.9z"/>
                        <path fill="#EA4335" d="M83.9,105.9c0.2,4.9-3.6,9-8.5,9.2c-4.9,0.2-9-3.6-9.2-8.5c0-0.2,0-0.5,0-0.7c-0.2-4.9,3.6-9,8.5-9.2
                          c4.9-0.2,9,3.6,9.2,8.5C83.9,105.4,83.9,105.7,83.9,105.9z M80,105.9c0.3-2.7-1.8-5.2-4.5-5.4s-5.2,1.8-5.4,4.5c0,0.3,0,0.6,0,0.9
                          c-0.3,2.7,1.8,5.2,4.5,5.4s5.2-1.8,5.4-4.5C80.1,106.6,80.1,106.2,80,105.9z"/>
                        <path fill="#FBBC04" d="M103.7,105.9c0.2,4.9-3.6,9-8.5,9.2c-4.9,0.2-9-3.6-9.2-8.5c0-0.2,0-0.5,0-0.7c-0.2-4.9,3.6-9,8.5-9.2
                          c4.9-0.2,9,3.6,9.2,8.5C103.7,105.4,103.7,105.7,103.7,105.9z M99.9,105.9c0.2-2.7-1.8-5.1-4.6-5.4c-2.7-0.2-5.1,1.8-5.4,4.6
                          c0,0.3,0,0.5,0,0.8c-0.2,2.7,1.8,5.1,4.6,5.4c2.7,0.2,5.1-1.8,5.4-4.6C99.9,106.4,99.9,106.2,99.9,105.9z"/>
                        <path fill="#5F6368" d="M123.1,97.6v16c0,6.6-3.9,9.3-8.5,9.3c-3.5,0-6.6-2.1-8-5.3l3.4-1.5c0.7,1.9,2.5,3.1,4.5,3.2
                          c3,0,4.8-1.8,4.8-5.2v-1.3h-0.1c-1.2,1.4-2.9,2.1-4.8,2.1c-4.9,0-8.9-4-8.9-8.9s4-8.9,8.9-8.9c1.8,0,3.5,0.7,4.8,2.1h0.1v-1.5
                          H123.1z M119.6,106c0.2-2.8-1.8-5.2-4.6-5.4c-0.1,0-0.1,0-0.2,0c-2.9,0.1-5.1,2.5-5,5.4c0,0,0,0.1,0,0.1c-0.1,2.8,2.1,5.2,4.9,5.4
                          c0,0,0.1,0,0.1,0c2.8-0.1,4.9-2.4,4.8-5.2C119.6,106.1,119.6,106,119.6,106L119.6,106z"/>
                        <path fill="#34A853" d="M130,88.1v26.3H126V88.1H130z"/>
                        <path fill="#EA4335" d="M145.4,108.9l3.1,2.1c-1.7,2.5-4.5,4-7.4,4c-4.8,0.1-8.7-3.8-8.8-8.5c0-0.1,0-0.3,0-0.4
                          c-0.4-4.5,3-8.5,7.5-8.9c3.8-0.3,7.4,2,8.5,5.7l0.4,1l-11.9,4.9c0.8,1.7,2.5,2.8,4.4,2.7C142.9,111.4,144.5,110.4,145.4,108.9z
                           M136,105.7l8-3.3c-0.7-1.2-2-1.9-3.3-1.8C138,100.7,135.9,102.9,136,105.7C136,105.6,136,105.7,136,105.7z"/>
                      </g>
                    </g>
                    </svg>
            </a>
            <div class="${settings.class_prefix}-grid-container ${settings.class_prefix}-fully-fluid ${settings.class_prefix}-no-grid-gap ${settings.class_prefix}-no-grid-padding">
              <div class="${settings.class_prefix}-max-col-6 ${settings.class_prefix}-xlg-col-6 ${settings.class_prefix}-lg-col-6 ${settings.class_prefix}-md-col-12 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4" style="min-height:768px">
                <div class="${settings.class_prefix}-pt6 ${settings.class_prefix}-pr5 ${settings.class_prefix}-pb8 ${settings.class_prefix}-pl4">
                  <div class="${settings.class_prefix}-mt0 ${settings.class_prefix}-mb4"><img src="https://placehold.co/240x120?text=Logo" /></div>
                  <h6 class="${settings.class_prefix}-h6 ${settings.class_prefix}-mt4 ${settings.class_prefix}-mb4"><strong>GOOGLE CLOUD</strong></h6>
                  <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum.</p>
                  <p class="${settings.class_prefix}-mt4 ${settings.class_prefix}-mb0"><kd-button type="primary" icon="arrow-right" href="javascript://">See more</kd-button></p>
                </div>
              </div>
              <div class="${settings.class_prefix}-bg-cloud ${settings.class_prefix}-max-col-6 ${settings.class_prefix}-xlg-col-6 ${settings.class_prefix}-lg-col-6 ${settings.class_prefix}-md-col-12 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4" style="min-height:768px">
                <div class="${settings.class_prefix}-pt6 ${settings.class_prefix}-pr5 ${settings.class_prefix}-pb8 ${settings.class_prefix}-pl4">
                  <p class="${settings.class_prefix}-mt0"><strong>Services Links:</strong></p>
                  <ul class="${settings.class_prefix}-list">
                    <li class="${settings.class_prefix}-list-item">Curabitur blandit tempus porttitor.</li>
                    <li class="${settings.class_prefix}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                    <li class="${settings.class_prefix}-list-item">Aenean lacinia bibendum nulla sed consectetur.</li>
                    <li class="${settings.class_prefix}-list-item">Nulla vitae elit libero, a pharetra augue.</li>
                  </ul>
                  <p class="${settings.class_prefix}-mt4"><strong>More Links:</strong></p>
                  <ul class="${settings.class_prefix}-list">
                    <li class="${settings.class_prefix}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                  </ul>
                </div>
              </div>
            </div>
          </kd-modal>
        </div>
        <!-- END Google logo -->
        <!-- BEGIN Oracle Logo -->
        <div class="${settings.class_prefix}-max-col-3 ${settings.class_prefix}-xlg-col-3 ${settings.class_prefix}-lg-col-3 ${settings.class_prefix}-md-col-6 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
          <kd-modal>
            <a href="javascript://" slot="trigger" title="Microsoft">
              <svg width="280" height="210" style="width:100%;height:auto" class="${settings.class_prefix}-transition-default-grayscale ${settings.class_prefix}-transition-hover-colorize" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 280 210" style="enable-background:new 0 0 280 210;" xml:space="preserve">
                    <path fill="#C74634" d="M126.2,109h13.5l-7.1-11.5l-13.1,20.8h-6l15.9-24.9c1.2-1.7,3.6-2.1,5.3-0.9c0.4,0.2,0.7,0.5,0.9,0.9l16,25h-6
                      l-2.8-4.6h-13.6L126.2,109 M188.1,113.6V92H183v23.8c0,0.7,0.3,1.3,0.8,1.8c0.5,0.5,1.1,0.8,1.8,0.8h23l3-4.6L188.1,113.6
                       M104.5,109.7c4.9,0,8.9-4,8.9-8.9c0-4.9-4-8.9-8.9-8.9H82.4v26.3h5V96.6h16.7c2.3,0,4.3,1.9,4.3,4.3c0,2.3-1.9,4.3-4.3,4.3H89.9
                      l15.1,13.1h7.3l-10.1-8.5H104.5 M51.3,118.3h15.3c7.3-0.2,13-6.2,12.8-13.5c-0.2-7-5.8-12.6-12.8-12.8H51.3
                      c-7.3-0.2-13.3,5.5-13.5,12.8c-0.2,7.3,5.5,13.3,12.8,13.5C50.9,118.3,51.1,118.3,51.3,118.3 M66.2,113.6H51.7
                      c-4.7-0.2-8.4-4.1-8.2-8.8c0.1-4.5,3.7-8.1,8.2-8.2h14.6c4.7-0.2,8.6,3.5,8.8,8.2c0.2,4.7-3.5,8.6-8.2,8.8
                      C66.6,113.6,66.4,113.6,66.2,113.6 M162.2,118.3h15.6l3-4.6h-18.2c-4.7,0.2-8.6-3.5-8.8-8.2c-0.2-4.7,3.5-8.6,8.2-8.8
                      c0.2,0,0.4,0,0.5,0h14.8l3-4.6h-18.1c-7.3-0.2-13.3,5.5-13.5,12.8c-0.2,7.3,5.5,13.3,12.8,13.5C161.7,118.3,161.9,118.3,162.2,118.3
                       M224,113.6c-3.8,0-7.2-2.5-8.2-6.2h21.6l3-4.6h-24.6c1-3.7,4.4-6.2,8.2-6.2h14.8l3-4.6h-18.1c-7.3,0.2-13,6.2-12.8,13.5
                      c0.2,7,5.8,12.6,12.8,12.8h15.6l3-4.6L224,113.6"/>
                    </svg>
            </a>
            <div class="${settings.class_prefix}-grid-container ${settings.class_prefix}-fully-fluid ${settings.class_prefix}-no-grid-gap ${settings.class_prefix}-no-grid-padding">
              <div class="${settings.class_prefix}-max-col-6 ${settings.class_prefix}-xlg-col-6 ${settings.class_prefix}-lg-col-6 ${settings.class_prefix}-md-col-12 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4" style="min-height:768px">
                <div class="${settings.class_prefix}-pt6 ${settings.class_prefix}-pr5 ${settings.class_prefix}-pb8 ${settings.class_prefix}-pl4">
                  <div class="${settings.class_prefix}-mt0 ${settings.class_prefix}-mb4"><img src="https://placehold.co/240x120?text=Logo" /></div>
                  <h6 class="${settings.class_prefix}-h6 ${settings.class_prefix}-mt4 ${settings.class_prefix}-mb4"><strong>ORACLE</strong></h6>
                  <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum.</p>
                  <p class="${settings.class_prefix}-mt4 ${settings.class_prefix}-mb0"><kd-button type="primary" icon="arrow-right" href="javascript://">See more</kd-button></p>
                </div>
              </div>
              <div class="${settings.class_prefix}-bg-cloud ${settings.class_prefix}-max-col-6 ${settings.class_prefix}-xlg-col-6 ${settings.class_prefix}-lg-col-6 ${settings.class_prefix}-md-col-12 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4" style="min-height:768px">
                <div class="${settings.class_prefix}-pt6 ${settings.class_prefix}-pr5 ${settings.class_prefix}-pb8 ${settings.class_prefix}-pl4">
                  <p class="${settings.class_prefix}-mt0"><strong>Services Links:</strong></p>
                  <ul class="${settings.class_prefix}-list">
                    <li class="${settings.class_prefix}-list-item">Curabitur blandit tempus porttitor.</li>
                    <li class="${settings.class_prefix}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                    <li class="${settings.class_prefix}-list-item">Aenean lacinia bibendum nulla sed consectetur.</li>
                    <li class="${settings.class_prefix}-list-item">Nulla vitae elit libero, a pharetra augue.</li>
                  </ul>
                  <p class="${settings.class_prefix}-mt4"><strong>More Links:</strong></p>
                  <ul class="${settings.class_prefix}-list">
                    <li class="${settings.class_prefix}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
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
