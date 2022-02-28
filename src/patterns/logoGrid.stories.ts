import { html } from 'lit';
import { settings } from '../global/settings';
import '../components/modal/modal';
import '../components/button/button';

export default {
  title: 'Patterns/Logo Grid',
};

export const LogoGrid = (args) => {
  return html`
      <div class="${settings.class_prefix}-grid-container">
          <div class="${settings.class_prefix}-max-col-4 ${settings.class_prefix}-xlg-col-4 ${settings.class_prefix}-lg-col-4 ${settings.class_prefix}-md-col-8 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
              <kd-modal>
                <a href="javascript://" slot="trigger">
                  <svg height="auto" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 288 216" class="${settings.class_prefix}-transition-default-grayscale ${settings.class_prefix}-transition-hover-colorize ">
                      <path d="M125.82 94.21v27.58H121v-21.62l-8.56 21.62h-3.18l-8.77-21.62h-.06v21.62H96V94.21h6.87l7.92 20.45h.12l8.37-20.45Zm4 2.09a2.52 2.52 0 0 1 .84-1.93 3 3 0 0 1 4 0 2.59 2.59 0 0 1 .81 1.91 2.52 2.52 0 0 1-.83 1.91 2.86 2.86 0 0 1-2 .77 2.82 2.82 0 0 1-2-.78 2.54 2.54 0 0 1-.82-1.88ZM135 102v19.77h-4.7V102Zm14.12 16.39a6.44 6.44 0 0 0 2.29-.48 10 10 0 0 0 2.31-1.27V121a9.5 9.5 0 0 1-2.53 1 13.7 13.7 0 0 1-3.11.32 9.4 9.4 0 0 1-9.83-9.81 11.28 11.28 0 0 1 2.75-7.91q2.79-3.07 7.91-3.08a11 11 0 0 1 2.64.33 9.27 9.27 0 0 1 2.13.78v4.47a9.48 9.48 0 0 0-2.2-1.23 6.55 6.55 0 0 0-2.3-.43 5.85 5.85 0 0 0-4.45 1.79 6.72 6.72 0 0 0-1.69 4.83 6.38 6.38 0 0 0 1.63 4.67 5.84 5.84 0 0 0 4.41 1.68Zm17.85-16.72a6.08 6.08 0 0 1 1 .08 4.09 4.09 0 0 1 .75.19v4.71a4.12 4.12 0 0 0-1.07-.51 5.32 5.32 0 0 0-1.7-.24 3.62 3.62 0 0 0-2.9 1.44 7 7 0 0 0-1.18 4.45v10h-4.66V102h4.66v3.11h.07a5.55 5.55 0 0 1 1.93-2.53 5.2 5.2 0 0 1 3.06-.89Zm2 10.5a10.69 10.69 0 0 1 2.77-7.77 10.19 10.19 0 0 1 7.69-2.87 9.51 9.51 0 0 1 7.25 2.77 12 12 0 0 1-.17 15.11 10 10 0 0 1-7.54 2.84 9.32 9.32 0 0 1-10-10.08Zm4.85-.15a7 7 0 0 0 1.4 4.73 5 5 0 0 0 4 1.64 4.71 4.71 0 0 0 3.87-1.64 7.58 7.58 0 0 0 1.33-4.85 7.31 7.31 0 0 0-1.42-4.8 4.79 4.79 0 0 0-3.86-1.62 4.89 4.89 0 0 0-4 1.7 7.45 7.45 0 0 0-1.35 4.82Zm22.39-4.83a2 2 0 0 0 .63 1.57 11.05 11.05 0 0 0 2.81 1.43 9.6 9.6 0 0 1 3.92 2.51 5.22 5.22 0 0 1 1.12 3.38 5.42 5.42 0 0 1-2.14 4.48 9.12 9.12 0 0 1-5.8 1.69A13.79 13.79 0 0 1 194 122a12.54 12.54 0 0 1-2.53-.76v-4.58a11 11 0 0 0 2.73 1.4 7.89 7.89 0 0 0 2.65.52 4.8 4.8 0 0 0 2.33-.44 1.59 1.59 0 0 0 .75-1.48 2.06 2.06 0 0 0-.78-1.63 11.69 11.69 0 0 0-3-1.53 9.14 9.14 0 0 1-3.66-2.42 5.31 5.31 0 0 1-1.07-3.43 5.39 5.39 0 0 1 2.12-4.39 8.48 8.48 0 0 1 5.51-1.72 12.72 12.72 0 0 1 2.33.23 10.37 10.37 0 0 1 2.16.59v4.43a10.35 10.35 0 0 0-2.16-1.06 7.28 7.28 0 0 0-2.44-.44 3.52 3.52 0 0 0-2.07.52 1.64 1.64 0 0 0-.69 1.4Zm10.48 5a10.73 10.73 0 0 1 2.77-7.77 10.23 10.23 0 0 1 7.7-2.87 9.49 9.49 0 0 1 7.24 2.77 10.39 10.39 0 0 1 2.61 7.45 10.5 10.5 0 0 1-2.77 7.66 10 10 0 0 1-7.54 2.84 9.34 9.34 0 0 1-10-10.08Zm4.85-.15a7 7 0 0 0 1.41 4.73 5 5 0 0 0 4 1.64 4.68 4.68 0 0 0 3.86-1.64 7.52 7.52 0 0 0 1.33-4.85 7.37 7.37 0 0 0-1.37-4.82 4.8 4.8 0 0 0-3.86-1.62 4.88 4.88 0 0 0-4 1.7 7.39 7.39 0 0 0-1.4 4.82Zm30.92-6.21h-6.94v16h-4.71v-16h-3.31V102h3.31v-2.73a6.81 6.81 0 0 1 2-5.11 7.1 7.1 0 0 1 5.2-2 13.06 13.06 0 0 1 1.5.08 6.66 6.66 0 0 1 1.16.26v4a4.62 4.62 0 0 0-.81-.32 4.18 4.18 0 0 0-1.33-.2 2.82 2.82 0 0 0-2.25.92 4 4 0 0 0-.79 2.7v2.4h6.94v-4.43l4.67-1.42V102h4.71v3.81h-4.71v9.25a3.92 3.92 0 0 0 .66 2.58 2.67 2.67 0 0 0 2.09.75 3.36 3.36 0 0 0 1-.19 4.55 4.55 0 0 0 1-.47v3.85a5.19 5.19 0 0 1-1.47.46 10.07 10.07 0 0 1-2 .21 5.78 5.78 0 0 1-4.41-1.56 6.7 6.7 0 0 1-1.47-4.73Z" fill="#737373"></path>
                      <path fill="#f25022" d="M36.19 85.01h21.85v21.85H36.19z"></path>
                      <path fill="#7fba00" d="M60.31 85.01h21.85v21.85H60.31z"></path>
                      <path fill="#00a4ef" d="M36.19 109.14h21.85v21.85H36.19z"></path>
                      <path fill="#ffb900" d="M60.31 109.14h21.85v21.85H60.31z"></path>
                  </svg>
                </a>
                <div class="${settings.class_prefix}-grid-container ${settings.class_prefix}-fully-fluid ${settings.class_prefix}-no-grid-gap ${settings.class_prefix}-no-grid-padding">
                    <div class="${settings.class_prefix}-max-col-8 ${settings.class_prefix}-xlg-col-8 ${settings.class_prefix}-lg-col-8 ${settings.class_prefix}-md-col-8 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4" style="min-height:600px">
                        <div class="${settings.class_prefix}-pt4 ${settings.class_prefix}-pr4 ${settings.class_prefix}-pb6 ${settings.class_prefix}-pl4">
                        <p class="${settings.class_prefix}-mt0 ${settings.class_prefix}-mb4"><img src="https://placehold.co/200x100?text=Logo" /></p>
                        <p><strong>Microsoft</strong></p>
                        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum.</p>
                        <p class="${settings.class_prefix}-mt4"><kd-button type="primary" icon="arrow-right" href="javascript://">View partner page</kd-button></p>
                        </div>
                    </div>
                    <div class="${settings.class_prefix}-bg-dark-white ${settings.class_prefix}-max-col-8 ${settings.class_prefix}-xlg-col-8 ${settings.class_prefix}-lg-col-8 ${settings.class_prefix}-md-col-8 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4" style="min-height:600px">
                        <div class="${settings.class_prefix}-pt4 ${settings.class_prefix}-pr4 ${settings.class_prefix}-pb6 ${settings.class_prefix}-pl4">
                            <p class="${settings.class_prefix}-mt0"><strong>Services Links:</strong></p>
                            <ul class="${settings.class_prefix}-list">
                                <li class="${settings.class_prefix}-list-item">Curabitur blandit tempus porttitor.</li>
                                <li class="${settings.class_prefix}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                                <li class="${settings.class_prefix}-list-item">Aenean lacinia bibendum nulla sed consectetur.</li>
                                <li class="${settings.class_prefix}-list-item">Nulla vitae elit libero, a pharetra augue.</li>
                                <li class="${settings.class_prefix}-list-item">Donec sed odio dui.</li>
                                <li class="${settings.class_prefix}-list-item">Cras justo odio, dapibus ac facilisis in, egestas eget quam.</li>
                            </ul>
                            <p><strong>More Links:</strong></p>
                            <ul class="${settings.class_prefix}-list">
                                <li class="${settings.class_prefix}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                            </ul>
                        </div>
                    </div>
                </div>
              </kd-modal>
          </div>
          <div class="${settings.class_prefix}-max-col-4 ${settings.class_prefix}-xlg-col-4 ${settings.class_prefix}-lg-col-4 ${settings.class_prefix}-md-col-8 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
              <kd-modal>
                  <a href="javascript://" slot="trigger">
                      <svg height="auto" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 288 216" class="${settings.class_prefix}-transition-default-grayscale ${settings.class_prefix}-transition-hover-colorize ">
                          <path d="M125.82 94.21v27.58H121v-21.62l-8.56 21.62h-3.18l-8.77-21.62h-.06v21.62H96V94.21h6.87l7.92 20.45h.12l8.37-20.45Zm4 2.09a2.52 2.52 0 0 1 .84-1.93 3 3 0 0 1 4 0 2.59 2.59 0 0 1 .81 1.91 2.52 2.52 0 0 1-.83 1.91 2.86 2.86 0 0 1-2 .77 2.82 2.82 0 0 1-2-.78 2.54 2.54 0 0 1-.82-1.88ZM135 102v19.77h-4.7V102Zm14.12 16.39a6.44 6.44 0 0 0 2.29-.48 10 10 0 0 0 2.31-1.27V121a9.5 9.5 0 0 1-2.53 1 13.7 13.7 0 0 1-3.11.32 9.4 9.4 0 0 1-9.83-9.81 11.28 11.28 0 0 1 2.75-7.91q2.79-3.07 7.91-3.08a11 11 0 0 1 2.64.33 9.27 9.27 0 0 1 2.13.78v4.47a9.48 9.48 0 0 0-2.2-1.23 6.55 6.55 0 0 0-2.3-.43 5.85 5.85 0 0 0-4.45 1.79 6.72 6.72 0 0 0-1.69 4.83 6.38 6.38 0 0 0 1.63 4.67 5.84 5.84 0 0 0 4.41 1.68Zm17.85-16.72a6.08 6.08 0 0 1 1 .08 4.09 4.09 0 0 1 .75.19v4.71a4.12 4.12 0 0 0-1.07-.51 5.32 5.32 0 0 0-1.7-.24 3.62 3.62 0 0 0-2.9 1.44 7 7 0 0 0-1.18 4.45v10h-4.66V102h4.66v3.11h.07a5.55 5.55 0 0 1 1.93-2.53 5.2 5.2 0 0 1 3.06-.89Zm2 10.5a10.69 10.69 0 0 1 2.77-7.77 10.19 10.19 0 0 1 7.69-2.87 9.51 9.51 0 0 1 7.25 2.77 12 12 0 0 1-.17 15.11 10 10 0 0 1-7.54 2.84 9.32 9.32 0 0 1-10-10.08Zm4.85-.15a7 7 0 0 0 1.4 4.73 5 5 0 0 0 4 1.64 4.71 4.71 0 0 0 3.87-1.64 7.58 7.58 0 0 0 1.33-4.85 7.31 7.31 0 0 0-1.42-4.8 4.79 4.79 0 0 0-3.86-1.62 4.89 4.89 0 0 0-4 1.7 7.45 7.45 0 0 0-1.35 4.82Zm22.39-4.83a2 2 0 0 0 .63 1.57 11.05 11.05 0 0 0 2.81 1.43 9.6 9.6 0 0 1 3.92 2.51 5.22 5.22 0 0 1 1.12 3.38 5.42 5.42 0 0 1-2.14 4.48 9.12 9.12 0 0 1-5.8 1.69A13.79 13.79 0 0 1 194 122a12.54 12.54 0 0 1-2.53-.76v-4.58a11 11 0 0 0 2.73 1.4 7.89 7.89 0 0 0 2.65.52 4.8 4.8 0 0 0 2.33-.44 1.59 1.59 0 0 0 .75-1.48 2.06 2.06 0 0 0-.78-1.63 11.69 11.69 0 0 0-3-1.53 9.14 9.14 0 0 1-3.66-2.42 5.31 5.31 0 0 1-1.07-3.43 5.39 5.39 0 0 1 2.12-4.39 8.48 8.48 0 0 1 5.51-1.72 12.72 12.72 0 0 1 2.33.23 10.37 10.37 0 0 1 2.16.59v4.43a10.35 10.35 0 0 0-2.16-1.06 7.28 7.28 0 0 0-2.44-.44 3.52 3.52 0 0 0-2.07.52 1.64 1.64 0 0 0-.69 1.4Zm10.48 5a10.73 10.73 0 0 1 2.77-7.77 10.23 10.23 0 0 1 7.7-2.87 9.49 9.49 0 0 1 7.24 2.77 10.39 10.39 0 0 1 2.61 7.45 10.5 10.5 0 0 1-2.77 7.66 10 10 0 0 1-7.54 2.84 9.34 9.34 0 0 1-10-10.08Zm4.85-.15a7 7 0 0 0 1.41 4.73 5 5 0 0 0 4 1.64 4.68 4.68 0 0 0 3.86-1.64 7.52 7.52 0 0 0 1.33-4.85 7.37 7.37 0 0 0-1.37-4.82 4.8 4.8 0 0 0-3.86-1.62 4.88 4.88 0 0 0-4 1.7 7.39 7.39 0 0 0-1.4 4.82Zm30.92-6.21h-6.94v16h-4.71v-16h-3.31V102h3.31v-2.73a6.81 6.81 0 0 1 2-5.11 7.1 7.1 0 0 1 5.2-2 13.06 13.06 0 0 1 1.5.08 6.66 6.66 0 0 1 1.16.26v4a4.62 4.62 0 0 0-.81-.32 4.18 4.18 0 0 0-1.33-.2 2.82 2.82 0 0 0-2.25.92 4 4 0 0 0-.79 2.7v2.4h6.94v-4.43l4.67-1.42V102h4.71v3.81h-4.71v9.25a3.92 3.92 0 0 0 .66 2.58 2.67 2.67 0 0 0 2.09.75 3.36 3.36 0 0 0 1-.19 4.55 4.55 0 0 0 1-.47v3.85a5.19 5.19 0 0 1-1.47.46 10.07 10.07 0 0 1-2 .21 5.78 5.78 0 0 1-4.41-1.56 6.7 6.7 0 0 1-1.47-4.73Z" fill="#737373"></path>
                          <path fill="#f25022" d="M36.19 85.01h21.85v21.85H36.19z"></path>
                          <path fill="#7fba00" d="M60.31 85.01h21.85v21.85H60.31z"></path>
                          <path fill="#00a4ef" d="M36.19 109.14h21.85v21.85H36.19z"></path>
                          <path fill="#ffb900" d="M60.31 109.14h21.85v21.85H60.31z"></path>
                      </svg>
                  </a>
                  <div class="${settings.class_prefix}-grid-container ${settings.class_prefix}-fully-fluid ${settings.class_prefix}-no-grid-gap ${settings.class_prefix}-no-grid-padding">
                      <div class="${settings.class_prefix}-max-col-8 ${settings.class_prefix}-xlg-col-8 ${settings.class_prefix}-lg-col-8 ${settings.class_prefix}-md-col-8 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4" style="min-height:600px">
                          <div class="${settings.class_prefix}-pt4 ${settings.class_prefix}-pr4 ${settings.class_prefix}-pb6 ${settings.class_prefix}-pl4">
                              <p class="${settings.class_prefix}-mt0 ${settings.class_prefix}-mb4"><img src="https://placehold.co/200x100?text=Logo" /></p>
                              <p><strong>Microsoft</strong></p>
                              <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum.</p>
                              <p class="${settings.class_prefix}-mt4"><kd-button type="primary" icon="arrow-right" href="javascript://">View partner page</kd-button></p>
                          </div>
                      </div>
                      <div class="${settings.class_prefix}-bg-dark-white ${settings.class_prefix}-max-col-8 ${settings.class_prefix}-xlg-col-8 ${settings.class_prefix}-lg-col-8 ${settings.class_prefix}-md-col-8 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4" style="min-height:600px">
                          <div class="${settings.class_prefix}-pt4 ${settings.class_prefix}-pr4 ${settings.class_prefix}-pb6 ${settings.class_prefix}-pl4">
                              <p class="${settings.class_prefix}-mt0"><strong>Services Links:</strong></p>
                              <ul class="${settings.class_prefix}-list">
                                  <li class="${settings.class_prefix}-list-item">Curabitur blandit tempus porttitor.</li>
                                  <li class="${settings.class_prefix}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                                  <li class="${settings.class_prefix}-list-item">Aenean lacinia bibendum nulla sed consectetur.</li>
                                  <li class="${settings.class_prefix}-list-item">Nulla vitae elit libero, a pharetra augue.</li>
                                  <li class="${settings.class_prefix}-list-item">Donec sed odio dui.</li>
                                  <li class="${settings.class_prefix}-list-item">Cras justo odio, dapibus ac facilisis in, egestas eget quam.</li>
                              </ul>
                              <p><strong>More Links:</strong></p>
                              <ul class="${settings.class_prefix}-list">
                                  <li class="${settings.class_prefix}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </kd-modal>
          </div>
          <div class="${settings.class_prefix}-max-col-4 ${settings.class_prefix}-xlg-col-4 ${settings.class_prefix}-lg-col-4 ${settings.class_prefix}-md-col-8 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
              <kd-modal>
                  <a href="javascript://" slot="trigger">
                      <svg height="auto" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 288 216" class="${settings.class_prefix}-transition-default-grayscale ${settings.class_prefix}-transition-hover-colorize ">
                          <path d="M125.82 94.21v27.58H121v-21.62l-8.56 21.62h-3.18l-8.77-21.62h-.06v21.62H96V94.21h6.87l7.92 20.45h.12l8.37-20.45Zm4 2.09a2.52 2.52 0 0 1 .84-1.93 3 3 0 0 1 4 0 2.59 2.59 0 0 1 .81 1.91 2.52 2.52 0 0 1-.83 1.91 2.86 2.86 0 0 1-2 .77 2.82 2.82 0 0 1-2-.78 2.54 2.54 0 0 1-.82-1.88ZM135 102v19.77h-4.7V102Zm14.12 16.39a6.44 6.44 0 0 0 2.29-.48 10 10 0 0 0 2.31-1.27V121a9.5 9.5 0 0 1-2.53 1 13.7 13.7 0 0 1-3.11.32 9.4 9.4 0 0 1-9.83-9.81 11.28 11.28 0 0 1 2.75-7.91q2.79-3.07 7.91-3.08a11 11 0 0 1 2.64.33 9.27 9.27 0 0 1 2.13.78v4.47a9.48 9.48 0 0 0-2.2-1.23 6.55 6.55 0 0 0-2.3-.43 5.85 5.85 0 0 0-4.45 1.79 6.72 6.72 0 0 0-1.69 4.83 6.38 6.38 0 0 0 1.63 4.67 5.84 5.84 0 0 0 4.41 1.68Zm17.85-16.72a6.08 6.08 0 0 1 1 .08 4.09 4.09 0 0 1 .75.19v4.71a4.12 4.12 0 0 0-1.07-.51 5.32 5.32 0 0 0-1.7-.24 3.62 3.62 0 0 0-2.9 1.44 7 7 0 0 0-1.18 4.45v10h-4.66V102h4.66v3.11h.07a5.55 5.55 0 0 1 1.93-2.53 5.2 5.2 0 0 1 3.06-.89Zm2 10.5a10.69 10.69 0 0 1 2.77-7.77 10.19 10.19 0 0 1 7.69-2.87 9.51 9.51 0 0 1 7.25 2.77 12 12 0 0 1-.17 15.11 10 10 0 0 1-7.54 2.84 9.32 9.32 0 0 1-10-10.08Zm4.85-.15a7 7 0 0 0 1.4 4.73 5 5 0 0 0 4 1.64 4.71 4.71 0 0 0 3.87-1.64 7.58 7.58 0 0 0 1.33-4.85 7.31 7.31 0 0 0-1.42-4.8 4.79 4.79 0 0 0-3.86-1.62 4.89 4.89 0 0 0-4 1.7 7.45 7.45 0 0 0-1.35 4.82Zm22.39-4.83a2 2 0 0 0 .63 1.57 11.05 11.05 0 0 0 2.81 1.43 9.6 9.6 0 0 1 3.92 2.51 5.22 5.22 0 0 1 1.12 3.38 5.42 5.42 0 0 1-2.14 4.48 9.12 9.12 0 0 1-5.8 1.69A13.79 13.79 0 0 1 194 122a12.54 12.54 0 0 1-2.53-.76v-4.58a11 11 0 0 0 2.73 1.4 7.89 7.89 0 0 0 2.65.52 4.8 4.8 0 0 0 2.33-.44 1.59 1.59 0 0 0 .75-1.48 2.06 2.06 0 0 0-.78-1.63 11.69 11.69 0 0 0-3-1.53 9.14 9.14 0 0 1-3.66-2.42 5.31 5.31 0 0 1-1.07-3.43 5.39 5.39 0 0 1 2.12-4.39 8.48 8.48 0 0 1 5.51-1.72 12.72 12.72 0 0 1 2.33.23 10.37 10.37 0 0 1 2.16.59v4.43a10.35 10.35 0 0 0-2.16-1.06 7.28 7.28 0 0 0-2.44-.44 3.52 3.52 0 0 0-2.07.52 1.64 1.64 0 0 0-.69 1.4Zm10.48 5a10.73 10.73 0 0 1 2.77-7.77 10.23 10.23 0 0 1 7.7-2.87 9.49 9.49 0 0 1 7.24 2.77 10.39 10.39 0 0 1 2.61 7.45 10.5 10.5 0 0 1-2.77 7.66 10 10 0 0 1-7.54 2.84 9.34 9.34 0 0 1-10-10.08Zm4.85-.15a7 7 0 0 0 1.41 4.73 5 5 0 0 0 4 1.64 4.68 4.68 0 0 0 3.86-1.64 7.52 7.52 0 0 0 1.33-4.85 7.37 7.37 0 0 0-1.37-4.82 4.8 4.8 0 0 0-3.86-1.62 4.88 4.88 0 0 0-4 1.7 7.39 7.39 0 0 0-1.4 4.82Zm30.92-6.21h-6.94v16h-4.71v-16h-3.31V102h3.31v-2.73a6.81 6.81 0 0 1 2-5.11 7.1 7.1 0 0 1 5.2-2 13.06 13.06 0 0 1 1.5.08 6.66 6.66 0 0 1 1.16.26v4a4.62 4.62 0 0 0-.81-.32 4.18 4.18 0 0 0-1.33-.2 2.82 2.82 0 0 0-2.25.92 4 4 0 0 0-.79 2.7v2.4h6.94v-4.43l4.67-1.42V102h4.71v3.81h-4.71v9.25a3.92 3.92 0 0 0 .66 2.58 2.67 2.67 0 0 0 2.09.75 3.36 3.36 0 0 0 1-.19 4.55 4.55 0 0 0 1-.47v3.85a5.19 5.19 0 0 1-1.47.46 10.07 10.07 0 0 1-2 .21 5.78 5.78 0 0 1-4.41-1.56 6.7 6.7 0 0 1-1.47-4.73Z" fill="#737373"></path>
                          <path fill="#f25022" d="M36.19 85.01h21.85v21.85H36.19z"></path>
                          <path fill="#7fba00" d="M60.31 85.01h21.85v21.85H60.31z"></path>
                          <path fill="#00a4ef" d="M36.19 109.14h21.85v21.85H36.19z"></path>
                          <path fill="#ffb900" d="M60.31 109.14h21.85v21.85H60.31z"></path>
                      </svg>
                  </a>
                  <div class="${settings.class_prefix}-grid-container ${settings.class_prefix}-fully-fluid ${settings.class_prefix}-no-grid-gap ${settings.class_prefix}-no-grid-padding">
                      <div class="${settings.class_prefix}-max-col-8 ${settings.class_prefix}-xlg-col-8 ${settings.class_prefix}-lg-col-8 ${settings.class_prefix}-md-col-8 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4" style="min-height:600px">
                          <div class="${settings.class_prefix}-pt4 ${settings.class_prefix}-pr4 ${settings.class_prefix}-pb6 ${settings.class_prefix}-pl4">
                              <p class="${settings.class_prefix}-mt0 ${settings.class_prefix}-mb4"><img src="https://placehold.co/200x100?text=Logo" /></p>
                              <p><strong>Microsoft</strong></p>
                              <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum.</p>
                              <p class="${settings.class_prefix}-mt4"><kd-button type="primary" icon="arrow-right" href="javascript://">View partner page</kd-button></p>
                          </div>
                      </div>
                      <div class="${settings.class_prefix}-bg-dark-white ${settings.class_prefix}-max-col-8 ${settings.class_prefix}-xlg-col-8 ${settings.class_prefix}-lg-col-8 ${settings.class_prefix}-md-col-8 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4" style="min-height:600px">
                          <div class="${settings.class_prefix}-pt4 ${settings.class_prefix}-pr4 ${settings.class_prefix}-pb6 ${settings.class_prefix}-pl4">
                              <p class="${settings.class_prefix}-mt0"><strong>Services Links:</strong></p>
                              <ul class="${settings.class_prefix}-list">
                                  <li class="${settings.class_prefix}-list-item">Curabitur blandit tempus porttitor.</li>
                                  <li class="${settings.class_prefix}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                                  <li class="${settings.class_prefix}-list-item">Aenean lacinia bibendum nulla sed consectetur.</li>
                                  <li class="${settings.class_prefix}-list-item">Nulla vitae elit libero, a pharetra augue.</li>
                                  <li class="${settings.class_prefix}-list-item">Donec sed odio dui.</li>
                                  <li class="${settings.class_prefix}-list-item">Cras justo odio, dapibus ac facilisis in, egestas eget quam.</li>
                              </ul>
                              <p><strong>More Links:</strong></p>
                              <ul class="${settings.class_prefix}-list">
                                  <li class="${settings.class_prefix}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </kd-modal>
          </div>
          <div class="${settings.class_prefix}-max-col-4 ${settings.class_prefix}-xlg-col-4 ${settings.class_prefix}-lg-col-4 ${settings.class_prefix}-md-col-8 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
              <kd-modal>
                  <a href="javascript://" slot="trigger">
                      <svg height="auto" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 288 216" class="${settings.class_prefix}-transition-default-grayscale ${settings.class_prefix}-transition-hover-colorize ">
                          <path d="M125.82 94.21v27.58H121v-21.62l-8.56 21.62h-3.18l-8.77-21.62h-.06v21.62H96V94.21h6.87l7.92 20.45h.12l8.37-20.45Zm4 2.09a2.52 2.52 0 0 1 .84-1.93 3 3 0 0 1 4 0 2.59 2.59 0 0 1 .81 1.91 2.52 2.52 0 0 1-.83 1.91 2.86 2.86 0 0 1-2 .77 2.82 2.82 0 0 1-2-.78 2.54 2.54 0 0 1-.82-1.88ZM135 102v19.77h-4.7V102Zm14.12 16.39a6.44 6.44 0 0 0 2.29-.48 10 10 0 0 0 2.31-1.27V121a9.5 9.5 0 0 1-2.53 1 13.7 13.7 0 0 1-3.11.32 9.4 9.4 0 0 1-9.83-9.81 11.28 11.28 0 0 1 2.75-7.91q2.79-3.07 7.91-3.08a11 11 0 0 1 2.64.33 9.27 9.27 0 0 1 2.13.78v4.47a9.48 9.48 0 0 0-2.2-1.23 6.55 6.55 0 0 0-2.3-.43 5.85 5.85 0 0 0-4.45 1.79 6.72 6.72 0 0 0-1.69 4.83 6.38 6.38 0 0 0 1.63 4.67 5.84 5.84 0 0 0 4.41 1.68Zm17.85-16.72a6.08 6.08 0 0 1 1 .08 4.09 4.09 0 0 1 .75.19v4.71a4.12 4.12 0 0 0-1.07-.51 5.32 5.32 0 0 0-1.7-.24 3.62 3.62 0 0 0-2.9 1.44 7 7 0 0 0-1.18 4.45v10h-4.66V102h4.66v3.11h.07a5.55 5.55 0 0 1 1.93-2.53 5.2 5.2 0 0 1 3.06-.89Zm2 10.5a10.69 10.69 0 0 1 2.77-7.77 10.19 10.19 0 0 1 7.69-2.87 9.51 9.51 0 0 1 7.25 2.77 12 12 0 0 1-.17 15.11 10 10 0 0 1-7.54 2.84 9.32 9.32 0 0 1-10-10.08Zm4.85-.15a7 7 0 0 0 1.4 4.73 5 5 0 0 0 4 1.64 4.71 4.71 0 0 0 3.87-1.64 7.58 7.58 0 0 0 1.33-4.85 7.31 7.31 0 0 0-1.42-4.8 4.79 4.79 0 0 0-3.86-1.62 4.89 4.89 0 0 0-4 1.7 7.45 7.45 0 0 0-1.35 4.82Zm22.39-4.83a2 2 0 0 0 .63 1.57 11.05 11.05 0 0 0 2.81 1.43 9.6 9.6 0 0 1 3.92 2.51 5.22 5.22 0 0 1 1.12 3.38 5.42 5.42 0 0 1-2.14 4.48 9.12 9.12 0 0 1-5.8 1.69A13.79 13.79 0 0 1 194 122a12.54 12.54 0 0 1-2.53-.76v-4.58a11 11 0 0 0 2.73 1.4 7.89 7.89 0 0 0 2.65.52 4.8 4.8 0 0 0 2.33-.44 1.59 1.59 0 0 0 .75-1.48 2.06 2.06 0 0 0-.78-1.63 11.69 11.69 0 0 0-3-1.53 9.14 9.14 0 0 1-3.66-2.42 5.31 5.31 0 0 1-1.07-3.43 5.39 5.39 0 0 1 2.12-4.39 8.48 8.48 0 0 1 5.51-1.72 12.72 12.72 0 0 1 2.33.23 10.37 10.37 0 0 1 2.16.59v4.43a10.35 10.35 0 0 0-2.16-1.06 7.28 7.28 0 0 0-2.44-.44 3.52 3.52 0 0 0-2.07.52 1.64 1.64 0 0 0-.69 1.4Zm10.48 5a10.73 10.73 0 0 1 2.77-7.77 10.23 10.23 0 0 1 7.7-2.87 9.49 9.49 0 0 1 7.24 2.77 10.39 10.39 0 0 1 2.61 7.45 10.5 10.5 0 0 1-2.77 7.66 10 10 0 0 1-7.54 2.84 9.34 9.34 0 0 1-10-10.08Zm4.85-.15a7 7 0 0 0 1.41 4.73 5 5 0 0 0 4 1.64 4.68 4.68 0 0 0 3.86-1.64 7.52 7.52 0 0 0 1.33-4.85 7.37 7.37 0 0 0-1.37-4.82 4.8 4.8 0 0 0-3.86-1.62 4.88 4.88 0 0 0-4 1.7 7.39 7.39 0 0 0-1.4 4.82Zm30.92-6.21h-6.94v16h-4.71v-16h-3.31V102h3.31v-2.73a6.81 6.81 0 0 1 2-5.11 7.1 7.1 0 0 1 5.2-2 13.06 13.06 0 0 1 1.5.08 6.66 6.66 0 0 1 1.16.26v4a4.62 4.62 0 0 0-.81-.32 4.18 4.18 0 0 0-1.33-.2 2.82 2.82 0 0 0-2.25.92 4 4 0 0 0-.79 2.7v2.4h6.94v-4.43l4.67-1.42V102h4.71v3.81h-4.71v9.25a3.92 3.92 0 0 0 .66 2.58 2.67 2.67 0 0 0 2.09.75 3.36 3.36 0 0 0 1-.19 4.55 4.55 0 0 0 1-.47v3.85a5.19 5.19 0 0 1-1.47.46 10.07 10.07 0 0 1-2 .21 5.78 5.78 0 0 1-4.41-1.56 6.7 6.7 0 0 1-1.47-4.73Z" fill="#737373"></path>
                          <path fill="#f25022" d="M36.19 85.01h21.85v21.85H36.19z"></path>
                          <path fill="#7fba00" d="M60.31 85.01h21.85v21.85H60.31z"></path>
                          <path fill="#00a4ef" d="M36.19 109.14h21.85v21.85H36.19z"></path>
                          <path fill="#ffb900" d="M60.31 109.14h21.85v21.85H60.31z"></path>
                      </svg>
                  </a>
                  <div class="${settings.class_prefix}-grid-container ${settings.class_prefix}-fully-fluid ${settings.class_prefix}-no-grid-gap ${settings.class_prefix}-no-grid-padding">
                      <div class="${settings.class_prefix}-max-col-8 ${settings.class_prefix}-xlg-col-8 ${settings.class_prefix}-lg-col-8 ${settings.class_prefix}-md-col-8 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4" style="min-height:600px">
                          <div class="${settings.class_prefix}-pt4 ${settings.class_prefix}-pr4 ${settings.class_prefix}-pb6 ${settings.class_prefix}-pl4">
                              <p class="${settings.class_prefix}-mt0 ${settings.class_prefix}-mb4"><img src="https://placehold.co/200x100?text=Logo" /></p>
                              <p><strong>Microsoft</strong></p>
                              <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum.</p>
                              <p class="${settings.class_prefix}-mt4"><kd-button type="primary" icon="arrow-right" href="javascript://">View partner page</kd-button></p>
                          </div>
                      </div>
                      <div class="${settings.class_prefix}-bg-dark-white ${settings.class_prefix}-max-col-8 ${settings.class_prefix}-xlg-col-8 ${settings.class_prefix}-lg-col-8 ${settings.class_prefix}-md-col-8 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4" style="min-height:600px">
                          <div class="${settings.class_prefix}-pt4 ${settings.class_prefix}-pr4 ${settings.class_prefix}-pb6 ${settings.class_prefix}-pl4">
                              <p class="${settings.class_prefix}-mt0"><strong>Services Links:</strong></p>
                              <ul class="${settings.class_prefix}-list">
                                  <li class="${settings.class_prefix}-list-item">Curabitur blandit tempus porttitor.</li>
                                  <li class="${settings.class_prefix}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                                  <li class="${settings.class_prefix}-list-item">Aenean lacinia bibendum nulla sed consectetur.</li>
                                  <li class="${settings.class_prefix}-list-item">Nulla vitae elit libero, a pharetra augue.</li>
                                  <li class="${settings.class_prefix}-list-item">Donec sed odio dui.</li>
                                  <li class="${settings.class_prefix}-list-item">Cras justo odio, dapibus ac facilisis in, egestas eget quam.</li>
                              </ul>
                              <p><strong>More Links:</strong></p>
                              <ul class="${settings.class_prefix}-list">
                                  <li class="${settings.class_prefix}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </kd-modal>
          </div>
          <div class="${settings.class_prefix}-max-col-4 ${settings.class_prefix}-xlg-col-4 ${settings.class_prefix}-lg-col-4 ${settings.class_prefix}-md-col-8 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
              <kd-modal>
                  <a href="javascript://" slot="trigger">
                      <svg height="auto" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 288 216" class="${settings.class_prefix}-transition-default-grayscale ${settings.class_prefix}-transition-hover-colorize ">
                          <path d="M125.82 94.21v27.58H121v-21.62l-8.56 21.62h-3.18l-8.77-21.62h-.06v21.62H96V94.21h6.87l7.92 20.45h.12l8.37-20.45Zm4 2.09a2.52 2.52 0 0 1 .84-1.93 3 3 0 0 1 4 0 2.59 2.59 0 0 1 .81 1.91 2.52 2.52 0 0 1-.83 1.91 2.86 2.86 0 0 1-2 .77 2.82 2.82 0 0 1-2-.78 2.54 2.54 0 0 1-.82-1.88ZM135 102v19.77h-4.7V102Zm14.12 16.39a6.44 6.44 0 0 0 2.29-.48 10 10 0 0 0 2.31-1.27V121a9.5 9.5 0 0 1-2.53 1 13.7 13.7 0 0 1-3.11.32 9.4 9.4 0 0 1-9.83-9.81 11.28 11.28 0 0 1 2.75-7.91q2.79-3.07 7.91-3.08a11 11 0 0 1 2.64.33 9.27 9.27 0 0 1 2.13.78v4.47a9.48 9.48 0 0 0-2.2-1.23 6.55 6.55 0 0 0-2.3-.43 5.85 5.85 0 0 0-4.45 1.79 6.72 6.72 0 0 0-1.69 4.83 6.38 6.38 0 0 0 1.63 4.67 5.84 5.84 0 0 0 4.41 1.68Zm17.85-16.72a6.08 6.08 0 0 1 1 .08 4.09 4.09 0 0 1 .75.19v4.71a4.12 4.12 0 0 0-1.07-.51 5.32 5.32 0 0 0-1.7-.24 3.62 3.62 0 0 0-2.9 1.44 7 7 0 0 0-1.18 4.45v10h-4.66V102h4.66v3.11h.07a5.55 5.55 0 0 1 1.93-2.53 5.2 5.2 0 0 1 3.06-.89Zm2 10.5a10.69 10.69 0 0 1 2.77-7.77 10.19 10.19 0 0 1 7.69-2.87 9.51 9.51 0 0 1 7.25 2.77 12 12 0 0 1-.17 15.11 10 10 0 0 1-7.54 2.84 9.32 9.32 0 0 1-10-10.08Zm4.85-.15a7 7 0 0 0 1.4 4.73 5 5 0 0 0 4 1.64 4.71 4.71 0 0 0 3.87-1.64 7.58 7.58 0 0 0 1.33-4.85 7.31 7.31 0 0 0-1.42-4.8 4.79 4.79 0 0 0-3.86-1.62 4.89 4.89 0 0 0-4 1.7 7.45 7.45 0 0 0-1.35 4.82Zm22.39-4.83a2 2 0 0 0 .63 1.57 11.05 11.05 0 0 0 2.81 1.43 9.6 9.6 0 0 1 3.92 2.51 5.22 5.22 0 0 1 1.12 3.38 5.42 5.42 0 0 1-2.14 4.48 9.12 9.12 0 0 1-5.8 1.69A13.79 13.79 0 0 1 194 122a12.54 12.54 0 0 1-2.53-.76v-4.58a11 11 0 0 0 2.73 1.4 7.89 7.89 0 0 0 2.65.52 4.8 4.8 0 0 0 2.33-.44 1.59 1.59 0 0 0 .75-1.48 2.06 2.06 0 0 0-.78-1.63 11.69 11.69 0 0 0-3-1.53 9.14 9.14 0 0 1-3.66-2.42 5.31 5.31 0 0 1-1.07-3.43 5.39 5.39 0 0 1 2.12-4.39 8.48 8.48 0 0 1 5.51-1.72 12.72 12.72 0 0 1 2.33.23 10.37 10.37 0 0 1 2.16.59v4.43a10.35 10.35 0 0 0-2.16-1.06 7.28 7.28 0 0 0-2.44-.44 3.52 3.52 0 0 0-2.07.52 1.64 1.64 0 0 0-.69 1.4Zm10.48 5a10.73 10.73 0 0 1 2.77-7.77 10.23 10.23 0 0 1 7.7-2.87 9.49 9.49 0 0 1 7.24 2.77 10.39 10.39 0 0 1 2.61 7.45 10.5 10.5 0 0 1-2.77 7.66 10 10 0 0 1-7.54 2.84 9.34 9.34 0 0 1-10-10.08Zm4.85-.15a7 7 0 0 0 1.41 4.73 5 5 0 0 0 4 1.64 4.68 4.68 0 0 0 3.86-1.64 7.52 7.52 0 0 0 1.33-4.85 7.37 7.37 0 0 0-1.37-4.82 4.8 4.8 0 0 0-3.86-1.62 4.88 4.88 0 0 0-4 1.7 7.39 7.39 0 0 0-1.4 4.82Zm30.92-6.21h-6.94v16h-4.71v-16h-3.31V102h3.31v-2.73a6.81 6.81 0 0 1 2-5.11 7.1 7.1 0 0 1 5.2-2 13.06 13.06 0 0 1 1.5.08 6.66 6.66 0 0 1 1.16.26v4a4.62 4.62 0 0 0-.81-.32 4.18 4.18 0 0 0-1.33-.2 2.82 2.82 0 0 0-2.25.92 4 4 0 0 0-.79 2.7v2.4h6.94v-4.43l4.67-1.42V102h4.71v3.81h-4.71v9.25a3.92 3.92 0 0 0 .66 2.58 2.67 2.67 0 0 0 2.09.75 3.36 3.36 0 0 0 1-.19 4.55 4.55 0 0 0 1-.47v3.85a5.19 5.19 0 0 1-1.47.46 10.07 10.07 0 0 1-2 .21 5.78 5.78 0 0 1-4.41-1.56 6.7 6.7 0 0 1-1.47-4.73Z" fill="#737373"></path>
                          <path fill="#f25022" d="M36.19 85.01h21.85v21.85H36.19z"></path>
                          <path fill="#7fba00" d="M60.31 85.01h21.85v21.85H60.31z"></path>
                          <path fill="#00a4ef" d="M36.19 109.14h21.85v21.85H36.19z"></path>
                          <path fill="#ffb900" d="M60.31 109.14h21.85v21.85H60.31z"></path>
                      </svg>
                  </a>
                  <div class="${settings.class_prefix}-grid-container ${settings.class_prefix}-fully-fluid ${settings.class_prefix}-no-grid-gap ${settings.class_prefix}-no-grid-padding">
                      <div class="${settings.class_prefix}-max-col-8 ${settings.class_prefix}-xlg-col-8 ${settings.class_prefix}-lg-col-8 ${settings.class_prefix}-md-col-8 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4" style="min-height:600px">
                          <div class="${settings.class_prefix}-pt4 ${settings.class_prefix}-pr4 ${settings.class_prefix}-pb6 ${settings.class_prefix}-pl4">
                              <p class="${settings.class_prefix}-mt0 ${settings.class_prefix}-mb4"><img src="https://placehold.co/200x100?text=Logo" /></p>
                              <p><strong>Microsoft</strong></p>
                              <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum.</p>
                              <p class="${settings.class_prefix}-mt4"><kd-button type="primary" icon="arrow-right" href="javascript://">View partner page</kd-button></p>
                          </div>
                      </div>
                      <div class="${settings.class_prefix}-bg-dark-white ${settings.class_prefix}-max-col-8 ${settings.class_prefix}-xlg-col-8 ${settings.class_prefix}-lg-col-8 ${settings.class_prefix}-md-col-8 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4" style="min-height:600px">
                          <div class="${settings.class_prefix}-pt4 ${settings.class_prefix}-pr4 ${settings.class_prefix}-pb6 ${settings.class_prefix}-pl4">
                              <p class="${settings.class_prefix}-mt0"><strong>Services Links:</strong></p>
                              <ul class="${settings.class_prefix}-list">
                                  <li class="${settings.class_prefix}-list-item">Curabitur blandit tempus porttitor.</li>
                                  <li class="${settings.class_prefix}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                                  <li class="${settings.class_prefix}-list-item">Aenean lacinia bibendum nulla sed consectetur.</li>
                                  <li class="${settings.class_prefix}-list-item">Nulla vitae elit libero, a pharetra augue.</li>
                                  <li class="${settings.class_prefix}-list-item">Donec sed odio dui.</li>
                                  <li class="${settings.class_prefix}-list-item">Cras justo odio, dapibus ac facilisis in, egestas eget quam.</li>
                              </ul>
                              <p><strong>More Links:</strong></p>
                              <ul class="${settings.class_prefix}-list">
                                  <li class="${settings.class_prefix}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </kd-modal>
          </div>
          <div class="${settings.class_prefix}-max-col-4 ${settings.class_prefix}-xlg-col-4 ${settings.class_prefix}-lg-col-4 ${settings.class_prefix}-md-col-8 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
              <kd-modal>
                  <a href="javascript://" slot="trigger">
                      <svg height="auto" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 288 216" class="${settings.class_prefix}-transition-default-grayscale ${settings.class_prefix}-transition-hover-colorize ">
                          <path d="M125.82 94.21v27.58H121v-21.62l-8.56 21.62h-3.18l-8.77-21.62h-.06v21.62H96V94.21h6.87l7.92 20.45h.12l8.37-20.45Zm4 2.09a2.52 2.52 0 0 1 .84-1.93 3 3 0 0 1 4 0 2.59 2.59 0 0 1 .81 1.91 2.52 2.52 0 0 1-.83 1.91 2.86 2.86 0 0 1-2 .77 2.82 2.82 0 0 1-2-.78 2.54 2.54 0 0 1-.82-1.88ZM135 102v19.77h-4.7V102Zm14.12 16.39a6.44 6.44 0 0 0 2.29-.48 10 10 0 0 0 2.31-1.27V121a9.5 9.5 0 0 1-2.53 1 13.7 13.7 0 0 1-3.11.32 9.4 9.4 0 0 1-9.83-9.81 11.28 11.28 0 0 1 2.75-7.91q2.79-3.07 7.91-3.08a11 11 0 0 1 2.64.33 9.27 9.27 0 0 1 2.13.78v4.47a9.48 9.48 0 0 0-2.2-1.23 6.55 6.55 0 0 0-2.3-.43 5.85 5.85 0 0 0-4.45 1.79 6.72 6.72 0 0 0-1.69 4.83 6.38 6.38 0 0 0 1.63 4.67 5.84 5.84 0 0 0 4.41 1.68Zm17.85-16.72a6.08 6.08 0 0 1 1 .08 4.09 4.09 0 0 1 .75.19v4.71a4.12 4.12 0 0 0-1.07-.51 5.32 5.32 0 0 0-1.7-.24 3.62 3.62 0 0 0-2.9 1.44 7 7 0 0 0-1.18 4.45v10h-4.66V102h4.66v3.11h.07a5.55 5.55 0 0 1 1.93-2.53 5.2 5.2 0 0 1 3.06-.89Zm2 10.5a10.69 10.69 0 0 1 2.77-7.77 10.19 10.19 0 0 1 7.69-2.87 9.51 9.51 0 0 1 7.25 2.77 12 12 0 0 1-.17 15.11 10 10 0 0 1-7.54 2.84 9.32 9.32 0 0 1-10-10.08Zm4.85-.15a7 7 0 0 0 1.4 4.73 5 5 0 0 0 4 1.64 4.71 4.71 0 0 0 3.87-1.64 7.58 7.58 0 0 0 1.33-4.85 7.31 7.31 0 0 0-1.42-4.8 4.79 4.79 0 0 0-3.86-1.62 4.89 4.89 0 0 0-4 1.7 7.45 7.45 0 0 0-1.35 4.82Zm22.39-4.83a2 2 0 0 0 .63 1.57 11.05 11.05 0 0 0 2.81 1.43 9.6 9.6 0 0 1 3.92 2.51 5.22 5.22 0 0 1 1.12 3.38 5.42 5.42 0 0 1-2.14 4.48 9.12 9.12 0 0 1-5.8 1.69A13.79 13.79 0 0 1 194 122a12.54 12.54 0 0 1-2.53-.76v-4.58a11 11 0 0 0 2.73 1.4 7.89 7.89 0 0 0 2.65.52 4.8 4.8 0 0 0 2.33-.44 1.59 1.59 0 0 0 .75-1.48 2.06 2.06 0 0 0-.78-1.63 11.69 11.69 0 0 0-3-1.53 9.14 9.14 0 0 1-3.66-2.42 5.31 5.31 0 0 1-1.07-3.43 5.39 5.39 0 0 1 2.12-4.39 8.48 8.48 0 0 1 5.51-1.72 12.72 12.72 0 0 1 2.33.23 10.37 10.37 0 0 1 2.16.59v4.43a10.35 10.35 0 0 0-2.16-1.06 7.28 7.28 0 0 0-2.44-.44 3.52 3.52 0 0 0-2.07.52 1.64 1.64 0 0 0-.69 1.4Zm10.48 5a10.73 10.73 0 0 1 2.77-7.77 10.23 10.23 0 0 1 7.7-2.87 9.49 9.49 0 0 1 7.24 2.77 10.39 10.39 0 0 1 2.61 7.45 10.5 10.5 0 0 1-2.77 7.66 10 10 0 0 1-7.54 2.84 9.34 9.34 0 0 1-10-10.08Zm4.85-.15a7 7 0 0 0 1.41 4.73 5 5 0 0 0 4 1.64 4.68 4.68 0 0 0 3.86-1.64 7.52 7.52 0 0 0 1.33-4.85 7.37 7.37 0 0 0-1.37-4.82 4.8 4.8 0 0 0-3.86-1.62 4.88 4.88 0 0 0-4 1.7 7.39 7.39 0 0 0-1.4 4.82Zm30.92-6.21h-6.94v16h-4.71v-16h-3.31V102h3.31v-2.73a6.81 6.81 0 0 1 2-5.11 7.1 7.1 0 0 1 5.2-2 13.06 13.06 0 0 1 1.5.08 6.66 6.66 0 0 1 1.16.26v4a4.62 4.62 0 0 0-.81-.32 4.18 4.18 0 0 0-1.33-.2 2.82 2.82 0 0 0-2.25.92 4 4 0 0 0-.79 2.7v2.4h6.94v-4.43l4.67-1.42V102h4.71v3.81h-4.71v9.25a3.92 3.92 0 0 0 .66 2.58 2.67 2.67 0 0 0 2.09.75 3.36 3.36 0 0 0 1-.19 4.55 4.55 0 0 0 1-.47v3.85a5.19 5.19 0 0 1-1.47.46 10.07 10.07 0 0 1-2 .21 5.78 5.78 0 0 1-4.41-1.56 6.7 6.7 0 0 1-1.47-4.73Z" fill="#737373"></path>
                          <path fill="#f25022" d="M36.19 85.01h21.85v21.85H36.19z"></path>
                          <path fill="#7fba00" d="M60.31 85.01h21.85v21.85H60.31z"></path>
                          <path fill="#00a4ef" d="M36.19 109.14h21.85v21.85H36.19z"></path>
                          <path fill="#ffb900" d="M60.31 109.14h21.85v21.85H60.31z"></path>
                      </svg>
                  </a>
                  <div class="${settings.class_prefix}-grid-container ${settings.class_prefix}-fully-fluid ${settings.class_prefix}-no-grid-gap ${settings.class_prefix}-no-grid-padding">
                      <div class="${settings.class_prefix}-max-col-8 ${settings.class_prefix}-xlg-col-8 ${settings.class_prefix}-lg-col-8 ${settings.class_prefix}-md-col-8 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4" style="min-height:600px">
                          <div class="${settings.class_prefix}-pt4 ${settings.class_prefix}-pr4 ${settings.class_prefix}-pb6 ${settings.class_prefix}-pl4">
                              <p class="${settings.class_prefix}-mt0 ${settings.class_prefix}-mb4"><img src="https://placehold.co/200x100?text=Logo" /></p>
                              <p><strong>Microsoft</strong></p>
                              <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum.</p>
                              <p class="${settings.class_prefix}-mt4"><kd-button type="primary" icon="arrow-right" href="javascript://">View partner page</kd-button></p>
                          </div>
                      </div>
                      <div class="${settings.class_prefix}-bg-dark-white ${settings.class_prefix}-max-col-8 ${settings.class_prefix}-xlg-col-8 ${settings.class_prefix}-lg-col-8 ${settings.class_prefix}-md-col-8 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4" style="min-height:600px">
                          <div class="${settings.class_prefix}-pt4 ${settings.class_prefix}-pr4 ${settings.class_prefix}-pb6 ${settings.class_prefix}-pl4">
                              <p class="${settings.class_prefix}-mt0"><strong>Services Links:</strong></p>
                              <ul class="${settings.class_prefix}-list">
                                  <li class="${settings.class_prefix}-list-item">Curabitur blandit tempus porttitor.</li>
                                  <li class="${settings.class_prefix}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                                  <li class="${settings.class_prefix}-list-item">Aenean lacinia bibendum nulla sed consectetur.</li>
                                  <li class="${settings.class_prefix}-list-item">Nulla vitae elit libero, a pharetra augue.</li>
                                  <li class="${settings.class_prefix}-list-item">Donec sed odio dui.</li>
                                  <li class="${settings.class_prefix}-list-item">Cras justo odio, dapibus ac facilisis in, egestas eget quam.</li>
                              </ul>
                              <p><strong>More Links:</strong></p>
                              <ul class="${settings.class_prefix}-list">
                                  <li class="${settings.class_prefix}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </kd-modal>
          </div>
          <div class="${settings.class_prefix}-max-col-4 ${settings.class_prefix}-xlg-col-4 ${settings.class_prefix}-lg-col-4 ${settings.class_prefix}-md-col-8 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
              <kd-modal>
                  <a href="javascript://" slot="trigger">
                      <svg height="auto" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 288 216" class="${settings.class_prefix}-transition-default-grayscale ${settings.class_prefix}-transition-hover-colorize ">
                          <path d="M125.82 94.21v27.58H121v-21.62l-8.56 21.62h-3.18l-8.77-21.62h-.06v21.62H96V94.21h6.87l7.92 20.45h.12l8.37-20.45Zm4 2.09a2.52 2.52 0 0 1 .84-1.93 3 3 0 0 1 4 0 2.59 2.59 0 0 1 .81 1.91 2.52 2.52 0 0 1-.83 1.91 2.86 2.86 0 0 1-2 .77 2.82 2.82 0 0 1-2-.78 2.54 2.54 0 0 1-.82-1.88ZM135 102v19.77h-4.7V102Zm14.12 16.39a6.44 6.44 0 0 0 2.29-.48 10 10 0 0 0 2.31-1.27V121a9.5 9.5 0 0 1-2.53 1 13.7 13.7 0 0 1-3.11.32 9.4 9.4 0 0 1-9.83-9.81 11.28 11.28 0 0 1 2.75-7.91q2.79-3.07 7.91-3.08a11 11 0 0 1 2.64.33 9.27 9.27 0 0 1 2.13.78v4.47a9.48 9.48 0 0 0-2.2-1.23 6.55 6.55 0 0 0-2.3-.43 5.85 5.85 0 0 0-4.45 1.79 6.72 6.72 0 0 0-1.69 4.83 6.38 6.38 0 0 0 1.63 4.67 5.84 5.84 0 0 0 4.41 1.68Zm17.85-16.72a6.08 6.08 0 0 1 1 .08 4.09 4.09 0 0 1 .75.19v4.71a4.12 4.12 0 0 0-1.07-.51 5.32 5.32 0 0 0-1.7-.24 3.62 3.62 0 0 0-2.9 1.44 7 7 0 0 0-1.18 4.45v10h-4.66V102h4.66v3.11h.07a5.55 5.55 0 0 1 1.93-2.53 5.2 5.2 0 0 1 3.06-.89Zm2 10.5a10.69 10.69 0 0 1 2.77-7.77 10.19 10.19 0 0 1 7.69-2.87 9.51 9.51 0 0 1 7.25 2.77 12 12 0 0 1-.17 15.11 10 10 0 0 1-7.54 2.84 9.32 9.32 0 0 1-10-10.08Zm4.85-.15a7 7 0 0 0 1.4 4.73 5 5 0 0 0 4 1.64 4.71 4.71 0 0 0 3.87-1.64 7.58 7.58 0 0 0 1.33-4.85 7.31 7.31 0 0 0-1.42-4.8 4.79 4.79 0 0 0-3.86-1.62 4.89 4.89 0 0 0-4 1.7 7.45 7.45 0 0 0-1.35 4.82Zm22.39-4.83a2 2 0 0 0 .63 1.57 11.05 11.05 0 0 0 2.81 1.43 9.6 9.6 0 0 1 3.92 2.51 5.22 5.22 0 0 1 1.12 3.38 5.42 5.42 0 0 1-2.14 4.48 9.12 9.12 0 0 1-5.8 1.69A13.79 13.79 0 0 1 194 122a12.54 12.54 0 0 1-2.53-.76v-4.58a11 11 0 0 0 2.73 1.4 7.89 7.89 0 0 0 2.65.52 4.8 4.8 0 0 0 2.33-.44 1.59 1.59 0 0 0 .75-1.48 2.06 2.06 0 0 0-.78-1.63 11.69 11.69 0 0 0-3-1.53 9.14 9.14 0 0 1-3.66-2.42 5.31 5.31 0 0 1-1.07-3.43 5.39 5.39 0 0 1 2.12-4.39 8.48 8.48 0 0 1 5.51-1.72 12.72 12.72 0 0 1 2.33.23 10.37 10.37 0 0 1 2.16.59v4.43a10.35 10.35 0 0 0-2.16-1.06 7.28 7.28 0 0 0-2.44-.44 3.52 3.52 0 0 0-2.07.52 1.64 1.64 0 0 0-.69 1.4Zm10.48 5a10.73 10.73 0 0 1 2.77-7.77 10.23 10.23 0 0 1 7.7-2.87 9.49 9.49 0 0 1 7.24 2.77 10.39 10.39 0 0 1 2.61 7.45 10.5 10.5 0 0 1-2.77 7.66 10 10 0 0 1-7.54 2.84 9.34 9.34 0 0 1-10-10.08Zm4.85-.15a7 7 0 0 0 1.41 4.73 5 5 0 0 0 4 1.64 4.68 4.68 0 0 0 3.86-1.64 7.52 7.52 0 0 0 1.33-4.85 7.37 7.37 0 0 0-1.37-4.82 4.8 4.8 0 0 0-3.86-1.62 4.88 4.88 0 0 0-4 1.7 7.39 7.39 0 0 0-1.4 4.82Zm30.92-6.21h-6.94v16h-4.71v-16h-3.31V102h3.31v-2.73a6.81 6.81 0 0 1 2-5.11 7.1 7.1 0 0 1 5.2-2 13.06 13.06 0 0 1 1.5.08 6.66 6.66 0 0 1 1.16.26v4a4.62 4.62 0 0 0-.81-.32 4.18 4.18 0 0 0-1.33-.2 2.82 2.82 0 0 0-2.25.92 4 4 0 0 0-.79 2.7v2.4h6.94v-4.43l4.67-1.42V102h4.71v3.81h-4.71v9.25a3.92 3.92 0 0 0 .66 2.58 2.67 2.67 0 0 0 2.09.75 3.36 3.36 0 0 0 1-.19 4.55 4.55 0 0 0 1-.47v3.85a5.19 5.19 0 0 1-1.47.46 10.07 10.07 0 0 1-2 .21 5.78 5.78 0 0 1-4.41-1.56 6.7 6.7 0 0 1-1.47-4.73Z" fill="#737373"></path>
                          <path fill="#f25022" d="M36.19 85.01h21.85v21.85H36.19z"></path>
                          <path fill="#7fba00" d="M60.31 85.01h21.85v21.85H60.31z"></path>
                          <path fill="#00a4ef" d="M36.19 109.14h21.85v21.85H36.19z"></path>
                          <path fill="#ffb900" d="M60.31 109.14h21.85v21.85H60.31z"></path>
                      </svg>
                  </a>
                  <div class="${settings.class_prefix}-grid-container ${settings.class_prefix}-fully-fluid ${settings.class_prefix}-no-grid-gap ${settings.class_prefix}-no-grid-padding">
                      <div class="${settings.class_prefix}-max-col-8 ${settings.class_prefix}-xlg-col-8 ${settings.class_prefix}-lg-col-8 ${settings.class_prefix}-md-col-8 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4" style="min-height:600px">
                          <div class="${settings.class_prefix}-pt4 ${settings.class_prefix}-pr4 ${settings.class_prefix}-pb6 ${settings.class_prefix}-pl4">
                              <p class="${settings.class_prefix}-mt0 ${settings.class_prefix}-mb4"><img src="https://placehold.co/200x100?text=Logo" /></p>
                              <p><strong>Microsoft</strong></p>
                              <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum.</p>
                              <p class="${settings.class_prefix}-mt4"><kd-button type="primary" icon="arrow-right" href="javascript://">View partner page</kd-button></p>
                          </div>
                      </div>
                      <div class="${settings.class_prefix}-bg-dark-white ${settings.class_prefix}-max-col-8 ${settings.class_prefix}-xlg-col-8 ${settings.class_prefix}-lg-col-8 ${settings.class_prefix}-md-col-8 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4" style="min-height:600px">
                          <div class="${settings.class_prefix}-pt4 ${settings.class_prefix}-pr4 ${settings.class_prefix}-pb6 ${settings.class_prefix}-pl4">
                              <p class="${settings.class_prefix}-mt0"><strong>Services Links:</strong></p>
                              <ul class="${settings.class_prefix}-list">
                                  <li class="${settings.class_prefix}-list-item">Curabitur blandit tempus porttitor.</li>
                                  <li class="${settings.class_prefix}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                                  <li class="${settings.class_prefix}-list-item">Aenean lacinia bibendum nulla sed consectetur.</li>
                                  <li class="${settings.class_prefix}-list-item">Nulla vitae elit libero, a pharetra augue.</li>
                                  <li class="${settings.class_prefix}-list-item">Donec sed odio dui.</li>
                                  <li class="${settings.class_prefix}-list-item">Cras justo odio, dapibus ac facilisis in, egestas eget quam.</li>
                              </ul>
                              <p><strong>More Links:</strong></p>
                              <ul class="${settings.class_prefix}-list">
                                  <li class="${settings.class_prefix}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </kd-modal>
          </div>
          <div class="${settings.class_prefix}-max-col-4 ${settings.class_prefix}-xlg-col-4 ${settings.class_prefix}-lg-col-4 ${settings.class_prefix}-md-col-8 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
              <kd-modal>
                  <a href="javascript://" slot="trigger">
                      <svg height="auto" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 288 216" class="${settings.class_prefix}-transition-default-grayscale ${settings.class_prefix}-transition-hover-colorize ">
                          <path d="M125.82 94.21v27.58H121v-21.62l-8.56 21.62h-3.18l-8.77-21.62h-.06v21.62H96V94.21h6.87l7.92 20.45h.12l8.37-20.45Zm4 2.09a2.52 2.52 0 0 1 .84-1.93 3 3 0 0 1 4 0 2.59 2.59 0 0 1 .81 1.91 2.52 2.52 0 0 1-.83 1.91 2.86 2.86 0 0 1-2 .77 2.82 2.82 0 0 1-2-.78 2.54 2.54 0 0 1-.82-1.88ZM135 102v19.77h-4.7V102Zm14.12 16.39a6.44 6.44 0 0 0 2.29-.48 10 10 0 0 0 2.31-1.27V121a9.5 9.5 0 0 1-2.53 1 13.7 13.7 0 0 1-3.11.32 9.4 9.4 0 0 1-9.83-9.81 11.28 11.28 0 0 1 2.75-7.91q2.79-3.07 7.91-3.08a11 11 0 0 1 2.64.33 9.27 9.27 0 0 1 2.13.78v4.47a9.48 9.48 0 0 0-2.2-1.23 6.55 6.55 0 0 0-2.3-.43 5.85 5.85 0 0 0-4.45 1.79 6.72 6.72 0 0 0-1.69 4.83 6.38 6.38 0 0 0 1.63 4.67 5.84 5.84 0 0 0 4.41 1.68Zm17.85-16.72a6.08 6.08 0 0 1 1 .08 4.09 4.09 0 0 1 .75.19v4.71a4.12 4.12 0 0 0-1.07-.51 5.32 5.32 0 0 0-1.7-.24 3.62 3.62 0 0 0-2.9 1.44 7 7 0 0 0-1.18 4.45v10h-4.66V102h4.66v3.11h.07a5.55 5.55 0 0 1 1.93-2.53 5.2 5.2 0 0 1 3.06-.89Zm2 10.5a10.69 10.69 0 0 1 2.77-7.77 10.19 10.19 0 0 1 7.69-2.87 9.51 9.51 0 0 1 7.25 2.77 12 12 0 0 1-.17 15.11 10 10 0 0 1-7.54 2.84 9.32 9.32 0 0 1-10-10.08Zm4.85-.15a7 7 0 0 0 1.4 4.73 5 5 0 0 0 4 1.64 4.71 4.71 0 0 0 3.87-1.64 7.58 7.58 0 0 0 1.33-4.85 7.31 7.31 0 0 0-1.42-4.8 4.79 4.79 0 0 0-3.86-1.62 4.89 4.89 0 0 0-4 1.7 7.45 7.45 0 0 0-1.35 4.82Zm22.39-4.83a2 2 0 0 0 .63 1.57 11.05 11.05 0 0 0 2.81 1.43 9.6 9.6 0 0 1 3.92 2.51 5.22 5.22 0 0 1 1.12 3.38 5.42 5.42 0 0 1-2.14 4.48 9.12 9.12 0 0 1-5.8 1.69A13.79 13.79 0 0 1 194 122a12.54 12.54 0 0 1-2.53-.76v-4.58a11 11 0 0 0 2.73 1.4 7.89 7.89 0 0 0 2.65.52 4.8 4.8 0 0 0 2.33-.44 1.59 1.59 0 0 0 .75-1.48 2.06 2.06 0 0 0-.78-1.63 11.69 11.69 0 0 0-3-1.53 9.14 9.14 0 0 1-3.66-2.42 5.31 5.31 0 0 1-1.07-3.43 5.39 5.39 0 0 1 2.12-4.39 8.48 8.48 0 0 1 5.51-1.72 12.72 12.72 0 0 1 2.33.23 10.37 10.37 0 0 1 2.16.59v4.43a10.35 10.35 0 0 0-2.16-1.06 7.28 7.28 0 0 0-2.44-.44 3.52 3.52 0 0 0-2.07.52 1.64 1.64 0 0 0-.69 1.4Zm10.48 5a10.73 10.73 0 0 1 2.77-7.77 10.23 10.23 0 0 1 7.7-2.87 9.49 9.49 0 0 1 7.24 2.77 10.39 10.39 0 0 1 2.61 7.45 10.5 10.5 0 0 1-2.77 7.66 10 10 0 0 1-7.54 2.84 9.34 9.34 0 0 1-10-10.08Zm4.85-.15a7 7 0 0 0 1.41 4.73 5 5 0 0 0 4 1.64 4.68 4.68 0 0 0 3.86-1.64 7.52 7.52 0 0 0 1.33-4.85 7.37 7.37 0 0 0-1.37-4.82 4.8 4.8 0 0 0-3.86-1.62 4.88 4.88 0 0 0-4 1.7 7.39 7.39 0 0 0-1.4 4.82Zm30.92-6.21h-6.94v16h-4.71v-16h-3.31V102h3.31v-2.73a6.81 6.81 0 0 1 2-5.11 7.1 7.1 0 0 1 5.2-2 13.06 13.06 0 0 1 1.5.08 6.66 6.66 0 0 1 1.16.26v4a4.62 4.62 0 0 0-.81-.32 4.18 4.18 0 0 0-1.33-.2 2.82 2.82 0 0 0-2.25.92 4 4 0 0 0-.79 2.7v2.4h6.94v-4.43l4.67-1.42V102h4.71v3.81h-4.71v9.25a3.92 3.92 0 0 0 .66 2.58 2.67 2.67 0 0 0 2.09.75 3.36 3.36 0 0 0 1-.19 4.55 4.55 0 0 0 1-.47v3.85a5.19 5.19 0 0 1-1.47.46 10.07 10.07 0 0 1-2 .21 5.78 5.78 0 0 1-4.41-1.56 6.7 6.7 0 0 1-1.47-4.73Z" fill="#737373"></path>
                          <path fill="#f25022" d="M36.19 85.01h21.85v21.85H36.19z"></path>
                          <path fill="#7fba00" d="M60.31 85.01h21.85v21.85H60.31z"></path>
                          <path fill="#00a4ef" d="M36.19 109.14h21.85v21.85H36.19z"></path>
                          <path fill="#ffb900" d="M60.31 109.14h21.85v21.85H60.31z"></path>
                      </svg>
                  </a>
                  <div class="${settings.class_prefix}-grid-container ${settings.class_prefix}-fully-fluid ${settings.class_prefix}-no-grid-gap ${settings.class_prefix}-no-grid-padding">
                      <div class="${settings.class_prefix}-max-col-8 ${settings.class_prefix}-xlg-col-8 ${settings.class_prefix}-lg-col-8 ${settings.class_prefix}-md-col-8 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4" style="min-height:600px">
                          <div class="${settings.class_prefix}-pt4 ${settings.class_prefix}-pr4 ${settings.class_prefix}-pb6 ${settings.class_prefix}-pl4">
                              <p class="${settings.class_prefix}-mt0 ${settings.class_prefix}-mb4"><img src="https://placehold.co/200x100?text=Logo" /></p>
                              <p><strong>Microsoft</strong></p>
                              <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum.</p>
                              <p class="${settings.class_prefix}-mt4"><kd-button type="primary" icon="arrow-right" href="javascript://">View partner page</kd-button></p>
                          </div>
                      </div>
                      <div class="${settings.class_prefix}-bg-dark-white ${settings.class_prefix}-max-col-8 ${settings.class_prefix}-xlg-col-8 ${settings.class_prefix}-lg-col-8 ${settings.class_prefix}-md-col-8 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4" style="min-height:600px">
                          <div class="${settings.class_prefix}-pt4 ${settings.class_prefix}-pr4 ${settings.class_prefix}-pb6 ${settings.class_prefix}-pl4">
                              <p class="${settings.class_prefix}-mt0"><strong>Services Links:</strong></p>
                              <ul class="${settings.class_prefix}-list">
                                  <li class="${settings.class_prefix}-list-item">Curabitur blandit tempus porttitor.</li>
                                  <li class="${settings.class_prefix}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                                  <li class="${settings.class_prefix}-list-item">Aenean lacinia bibendum nulla sed consectetur.</li>
                                  <li class="${settings.class_prefix}-list-item">Nulla vitae elit libero, a pharetra augue.</li>
                                  <li class="${settings.class_prefix}-list-item">Donec sed odio dui.</li>
                                  <li class="${settings.class_prefix}-list-item">Cras justo odio, dapibus ac facilisis in, egestas eget quam.</li>
                              </ul>
                              <p><strong>More Links:</strong></p>
                              <ul class="${settings.class_prefix}-list">
                                  <li class="${settings.class_prefix}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </kd-modal>
          </div>
          <div class="${settings.class_prefix}-max-col-4 ${settings.class_prefix}-xlg-col-4 ${settings.class_prefix}-lg-col-4 ${settings.class_prefix}-md-col-8 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
              <kd-modal>
                  <a href="javascript://" slot="trigger">
                      <svg height="auto" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 288 216" class="${settings.class_prefix}-transition-default-grayscale ${settings.class_prefix}-transition-hover-colorize ">
                          <path d="M125.82 94.21v27.58H121v-21.62l-8.56 21.62h-3.18l-8.77-21.62h-.06v21.62H96V94.21h6.87l7.92 20.45h.12l8.37-20.45Zm4 2.09a2.52 2.52 0 0 1 .84-1.93 3 3 0 0 1 4 0 2.59 2.59 0 0 1 .81 1.91 2.52 2.52 0 0 1-.83 1.91 2.86 2.86 0 0 1-2 .77 2.82 2.82 0 0 1-2-.78 2.54 2.54 0 0 1-.82-1.88ZM135 102v19.77h-4.7V102Zm14.12 16.39a6.44 6.44 0 0 0 2.29-.48 10 10 0 0 0 2.31-1.27V121a9.5 9.5 0 0 1-2.53 1 13.7 13.7 0 0 1-3.11.32 9.4 9.4 0 0 1-9.83-9.81 11.28 11.28 0 0 1 2.75-7.91q2.79-3.07 7.91-3.08a11 11 0 0 1 2.64.33 9.27 9.27 0 0 1 2.13.78v4.47a9.48 9.48 0 0 0-2.2-1.23 6.55 6.55 0 0 0-2.3-.43 5.85 5.85 0 0 0-4.45 1.79 6.72 6.72 0 0 0-1.69 4.83 6.38 6.38 0 0 0 1.63 4.67 5.84 5.84 0 0 0 4.41 1.68Zm17.85-16.72a6.08 6.08 0 0 1 1 .08 4.09 4.09 0 0 1 .75.19v4.71a4.12 4.12 0 0 0-1.07-.51 5.32 5.32 0 0 0-1.7-.24 3.62 3.62 0 0 0-2.9 1.44 7 7 0 0 0-1.18 4.45v10h-4.66V102h4.66v3.11h.07a5.55 5.55 0 0 1 1.93-2.53 5.2 5.2 0 0 1 3.06-.89Zm2 10.5a10.69 10.69 0 0 1 2.77-7.77 10.19 10.19 0 0 1 7.69-2.87 9.51 9.51 0 0 1 7.25 2.77 12 12 0 0 1-.17 15.11 10 10 0 0 1-7.54 2.84 9.32 9.32 0 0 1-10-10.08Zm4.85-.15a7 7 0 0 0 1.4 4.73 5 5 0 0 0 4 1.64 4.71 4.71 0 0 0 3.87-1.64 7.58 7.58 0 0 0 1.33-4.85 7.31 7.31 0 0 0-1.42-4.8 4.79 4.79 0 0 0-3.86-1.62 4.89 4.89 0 0 0-4 1.7 7.45 7.45 0 0 0-1.35 4.82Zm22.39-4.83a2 2 0 0 0 .63 1.57 11.05 11.05 0 0 0 2.81 1.43 9.6 9.6 0 0 1 3.92 2.51 5.22 5.22 0 0 1 1.12 3.38 5.42 5.42 0 0 1-2.14 4.48 9.12 9.12 0 0 1-5.8 1.69A13.79 13.79 0 0 1 194 122a12.54 12.54 0 0 1-2.53-.76v-4.58a11 11 0 0 0 2.73 1.4 7.89 7.89 0 0 0 2.65.52 4.8 4.8 0 0 0 2.33-.44 1.59 1.59 0 0 0 .75-1.48 2.06 2.06 0 0 0-.78-1.63 11.69 11.69 0 0 0-3-1.53 9.14 9.14 0 0 1-3.66-2.42 5.31 5.31 0 0 1-1.07-3.43 5.39 5.39 0 0 1 2.12-4.39 8.48 8.48 0 0 1 5.51-1.72 12.72 12.72 0 0 1 2.33.23 10.37 10.37 0 0 1 2.16.59v4.43a10.35 10.35 0 0 0-2.16-1.06 7.28 7.28 0 0 0-2.44-.44 3.52 3.52 0 0 0-2.07.52 1.64 1.64 0 0 0-.69 1.4Zm10.48 5a10.73 10.73 0 0 1 2.77-7.77 10.23 10.23 0 0 1 7.7-2.87 9.49 9.49 0 0 1 7.24 2.77 10.39 10.39 0 0 1 2.61 7.45 10.5 10.5 0 0 1-2.77 7.66 10 10 0 0 1-7.54 2.84 9.34 9.34 0 0 1-10-10.08Zm4.85-.15a7 7 0 0 0 1.41 4.73 5 5 0 0 0 4 1.64 4.68 4.68 0 0 0 3.86-1.64 7.52 7.52 0 0 0 1.33-4.85 7.37 7.37 0 0 0-1.37-4.82 4.8 4.8 0 0 0-3.86-1.62 4.88 4.88 0 0 0-4 1.7 7.39 7.39 0 0 0-1.4 4.82Zm30.92-6.21h-6.94v16h-4.71v-16h-3.31V102h3.31v-2.73a6.81 6.81 0 0 1 2-5.11 7.1 7.1 0 0 1 5.2-2 13.06 13.06 0 0 1 1.5.08 6.66 6.66 0 0 1 1.16.26v4a4.62 4.62 0 0 0-.81-.32 4.18 4.18 0 0 0-1.33-.2 2.82 2.82 0 0 0-2.25.92 4 4 0 0 0-.79 2.7v2.4h6.94v-4.43l4.67-1.42V102h4.71v3.81h-4.71v9.25a3.92 3.92 0 0 0 .66 2.58 2.67 2.67 0 0 0 2.09.75 3.36 3.36 0 0 0 1-.19 4.55 4.55 0 0 0 1-.47v3.85a5.19 5.19 0 0 1-1.47.46 10.07 10.07 0 0 1-2 .21 5.78 5.78 0 0 1-4.41-1.56 6.7 6.7 0 0 1-1.47-4.73Z" fill="#737373"></path>
                          <path fill="#f25022" d="M36.19 85.01h21.85v21.85H36.19z"></path>
                          <path fill="#7fba00" d="M60.31 85.01h21.85v21.85H60.31z"></path>
                          <path fill="#00a4ef" d="M36.19 109.14h21.85v21.85H36.19z"></path>
                          <path fill="#ffb900" d="M60.31 109.14h21.85v21.85H60.31z"></path>
                      </svg>
                  </a>
                  <div class="${settings.class_prefix}-grid-container ${settings.class_prefix}-fully-fluid ${settings.class_prefix}-no-grid-gap ${settings.class_prefix}-no-grid-padding">
                      <div class="${settings.class_prefix}-max-col-8 ${settings.class_prefix}-xlg-col-8 ${settings.class_prefix}-lg-col-8 ${settings.class_prefix}-md-col-8 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4" style="min-height:600px">
                          <div class="${settings.class_prefix}-pt4 ${settings.class_prefix}-pr4 ${settings.class_prefix}-pb6 ${settings.class_prefix}-pl4">
                              <p class="${settings.class_prefix}-mt0 ${settings.class_prefix}-mb4"><img src="https://placehold.co/200x100?text=Logo" /></p>
                              <p><strong>Microsoft</strong></p>
                              <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum.</p>
                              <p class="${settings.class_prefix}-mt4"><kd-button type="primary" icon="arrow-right" href="javascript://">View partner page</kd-button></p>
                          </div>
                      </div>
                      <div class="${settings.class_prefix}-bg-dark-white ${settings.class_prefix}-max-col-8 ${settings.class_prefix}-xlg-col-8 ${settings.class_prefix}-lg-col-8 ${settings.class_prefix}-md-col-8 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4" style="min-height:600px">
                          <div class="${settings.class_prefix}-pt4 ${settings.class_prefix}-pr4 ${settings.class_prefix}-pb6 ${settings.class_prefix}-pl4">
                              <p class="${settings.class_prefix}-mt0"><strong>Services Links:</strong></p>
                              <ul class="${settings.class_prefix}-list">
                                  <li class="${settings.class_prefix}-list-item">Curabitur blandit tempus porttitor.</li>
                                  <li class="${settings.class_prefix}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                                  <li class="${settings.class_prefix}-list-item">Aenean lacinia bibendum nulla sed consectetur.</li>
                                  <li class="${settings.class_prefix}-list-item">Nulla vitae elit libero, a pharetra augue.</li>
                                  <li class="${settings.class_prefix}-list-item">Donec sed odio dui.</li>
                                  <li class="${settings.class_prefix}-list-item">Cras justo odio, dapibus ac facilisis in, egestas eget quam.</li>
                              </ul>
                              <p><strong>More Links:</strong></p>
                              <ul class="${settings.class_prefix}-list">
                                  <li class="${settings.class_prefix}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </kd-modal>
          </div>
          <div class="${settings.class_prefix}-max-col-4 ${settings.class_prefix}-xlg-col-4 ${settings.class_prefix}-lg-col-4 ${settings.class_prefix}-md-col-8 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
              <kd-modal>
                  <a href="javascript://" slot="trigger">
                      <svg height="auto" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 288 216" class="${settings.class_prefix}-transition-default-grayscale ${settings.class_prefix}-transition-hover-colorize ">
                          <path d="M125.82 94.21v27.58H121v-21.62l-8.56 21.62h-3.18l-8.77-21.62h-.06v21.62H96V94.21h6.87l7.92 20.45h.12l8.37-20.45Zm4 2.09a2.52 2.52 0 0 1 .84-1.93 3 3 0 0 1 4 0 2.59 2.59 0 0 1 .81 1.91 2.52 2.52 0 0 1-.83 1.91 2.86 2.86 0 0 1-2 .77 2.82 2.82 0 0 1-2-.78 2.54 2.54 0 0 1-.82-1.88ZM135 102v19.77h-4.7V102Zm14.12 16.39a6.44 6.44 0 0 0 2.29-.48 10 10 0 0 0 2.31-1.27V121a9.5 9.5 0 0 1-2.53 1 13.7 13.7 0 0 1-3.11.32 9.4 9.4 0 0 1-9.83-9.81 11.28 11.28 0 0 1 2.75-7.91q2.79-3.07 7.91-3.08a11 11 0 0 1 2.64.33 9.27 9.27 0 0 1 2.13.78v4.47a9.48 9.48 0 0 0-2.2-1.23 6.55 6.55 0 0 0-2.3-.43 5.85 5.85 0 0 0-4.45 1.79 6.72 6.72 0 0 0-1.69 4.83 6.38 6.38 0 0 0 1.63 4.67 5.84 5.84 0 0 0 4.41 1.68Zm17.85-16.72a6.08 6.08 0 0 1 1 .08 4.09 4.09 0 0 1 .75.19v4.71a4.12 4.12 0 0 0-1.07-.51 5.32 5.32 0 0 0-1.7-.24 3.62 3.62 0 0 0-2.9 1.44 7 7 0 0 0-1.18 4.45v10h-4.66V102h4.66v3.11h.07a5.55 5.55 0 0 1 1.93-2.53 5.2 5.2 0 0 1 3.06-.89Zm2 10.5a10.69 10.69 0 0 1 2.77-7.77 10.19 10.19 0 0 1 7.69-2.87 9.51 9.51 0 0 1 7.25 2.77 12 12 0 0 1-.17 15.11 10 10 0 0 1-7.54 2.84 9.32 9.32 0 0 1-10-10.08Zm4.85-.15a7 7 0 0 0 1.4 4.73 5 5 0 0 0 4 1.64 4.71 4.71 0 0 0 3.87-1.64 7.58 7.58 0 0 0 1.33-4.85 7.31 7.31 0 0 0-1.42-4.8 4.79 4.79 0 0 0-3.86-1.62 4.89 4.89 0 0 0-4 1.7 7.45 7.45 0 0 0-1.35 4.82Zm22.39-4.83a2 2 0 0 0 .63 1.57 11.05 11.05 0 0 0 2.81 1.43 9.6 9.6 0 0 1 3.92 2.51 5.22 5.22 0 0 1 1.12 3.38 5.42 5.42 0 0 1-2.14 4.48 9.12 9.12 0 0 1-5.8 1.69A13.79 13.79 0 0 1 194 122a12.54 12.54 0 0 1-2.53-.76v-4.58a11 11 0 0 0 2.73 1.4 7.89 7.89 0 0 0 2.65.52 4.8 4.8 0 0 0 2.33-.44 1.59 1.59 0 0 0 .75-1.48 2.06 2.06 0 0 0-.78-1.63 11.69 11.69 0 0 0-3-1.53 9.14 9.14 0 0 1-3.66-2.42 5.31 5.31 0 0 1-1.07-3.43 5.39 5.39 0 0 1 2.12-4.39 8.48 8.48 0 0 1 5.51-1.72 12.72 12.72 0 0 1 2.33.23 10.37 10.37 0 0 1 2.16.59v4.43a10.35 10.35 0 0 0-2.16-1.06 7.28 7.28 0 0 0-2.44-.44 3.52 3.52 0 0 0-2.07.52 1.64 1.64 0 0 0-.69 1.4Zm10.48 5a10.73 10.73 0 0 1 2.77-7.77 10.23 10.23 0 0 1 7.7-2.87 9.49 9.49 0 0 1 7.24 2.77 10.39 10.39 0 0 1 2.61 7.45 10.5 10.5 0 0 1-2.77 7.66 10 10 0 0 1-7.54 2.84 9.34 9.34 0 0 1-10-10.08Zm4.85-.15a7 7 0 0 0 1.41 4.73 5 5 0 0 0 4 1.64 4.68 4.68 0 0 0 3.86-1.64 7.52 7.52 0 0 0 1.33-4.85 7.37 7.37 0 0 0-1.37-4.82 4.8 4.8 0 0 0-3.86-1.62 4.88 4.88 0 0 0-4 1.7 7.39 7.39 0 0 0-1.4 4.82Zm30.92-6.21h-6.94v16h-4.71v-16h-3.31V102h3.31v-2.73a6.81 6.81 0 0 1 2-5.11 7.1 7.1 0 0 1 5.2-2 13.06 13.06 0 0 1 1.5.08 6.66 6.66 0 0 1 1.16.26v4a4.62 4.62 0 0 0-.81-.32 4.18 4.18 0 0 0-1.33-.2 2.82 2.82 0 0 0-2.25.92 4 4 0 0 0-.79 2.7v2.4h6.94v-4.43l4.67-1.42V102h4.71v3.81h-4.71v9.25a3.92 3.92 0 0 0 .66 2.58 2.67 2.67 0 0 0 2.09.75 3.36 3.36 0 0 0 1-.19 4.55 4.55 0 0 0 1-.47v3.85a5.19 5.19 0 0 1-1.47.46 10.07 10.07 0 0 1-2 .21 5.78 5.78 0 0 1-4.41-1.56 6.7 6.7 0 0 1-1.47-4.73Z" fill="#737373"></path>
                          <path fill="#f25022" d="M36.19 85.01h21.85v21.85H36.19z"></path>
                          <path fill="#7fba00" d="M60.31 85.01h21.85v21.85H60.31z"></path>
                          <path fill="#00a4ef" d="M36.19 109.14h21.85v21.85H36.19z"></path>
                          <path fill="#ffb900" d="M60.31 109.14h21.85v21.85H60.31z"></path>
                      </svg>
                  </a>
                  <div class="${settings.class_prefix}-grid-container ${settings.class_prefix}-fully-fluid ${settings.class_prefix}-no-grid-gap ${settings.class_prefix}-no-grid-padding">
                      <div class="${settings.class_prefix}-max-col-8 ${settings.class_prefix}-xlg-col-8 ${settings.class_prefix}-lg-col-8 ${settings.class_prefix}-md-col-8 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4" style="min-height:600px">
                          <div class="${settings.class_prefix}-pt4 ${settings.class_prefix}-pr4 ${settings.class_prefix}-pb6 ${settings.class_prefix}-pl4">
                              <p class="${settings.class_prefix}-mt0 ${settings.class_prefix}-mb4"><img src="https://placehold.co/200x100?text=Logo" /></p>
                              <p><strong>Microsoft</strong></p>
                              <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum.</p>
                              <p class="${settings.class_prefix}-mt4"><kd-button type="primary" icon="arrow-right" href="javascript://">View partner page</kd-button></p>
                          </div>
                      </div>
                      <div class="${settings.class_prefix}-bg-dark-white ${settings.class_prefix}-max-col-8 ${settings.class_prefix}-xlg-col-8 ${settings.class_prefix}-lg-col-8 ${settings.class_prefix}-md-col-8 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4" style="min-height:600px">
                          <div class="${settings.class_prefix}-pt4 ${settings.class_prefix}-pr4 ${settings.class_prefix}-pb6 ${settings.class_prefix}-pl4">
                              <p class="${settings.class_prefix}-mt0"><strong>Services Links:</strong></p>
                              <ul class="${settings.class_prefix}-list">
                                  <li class="${settings.class_prefix}-list-item">Curabitur blandit tempus porttitor.</li>
                                  <li class="${settings.class_prefix}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                                  <li class="${settings.class_prefix}-list-item">Aenean lacinia bibendum nulla sed consectetur.</li>
                                  <li class="${settings.class_prefix}-list-item">Nulla vitae elit libero, a pharetra augue.</li>
                                  <li class="${settings.class_prefix}-list-item">Donec sed odio dui.</li>
                                  <li class="${settings.class_prefix}-list-item">Cras justo odio, dapibus ac facilisis in, egestas eget quam.</li>
                              </ul>
                              <p><strong>More Links:</strong></p>
                              <ul class="${settings.class_prefix}-list">
                                  <li class="${settings.class_prefix}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </kd-modal>
          </div>
          <div class="${settings.class_prefix}-max-col-4 ${settings.class_prefix}-xlg-col-4 ${settings.class_prefix}-lg-col-4 ${settings.class_prefix}-md-col-8 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
              <kd-modal>
                  <a href="javascript://" slot="trigger">
                      <svg height="auto" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 288 216" class="${settings.class_prefix}-transition-default-grayscale ${settings.class_prefix}-transition-hover-colorize ">
                          <path d="M125.82 94.21v27.58H121v-21.62l-8.56 21.62h-3.18l-8.77-21.62h-.06v21.62H96V94.21h6.87l7.92 20.45h.12l8.37-20.45Zm4 2.09a2.52 2.52 0 0 1 .84-1.93 3 3 0 0 1 4 0 2.59 2.59 0 0 1 .81 1.91 2.52 2.52 0 0 1-.83 1.91 2.86 2.86 0 0 1-2 .77 2.82 2.82 0 0 1-2-.78 2.54 2.54 0 0 1-.82-1.88ZM135 102v19.77h-4.7V102Zm14.12 16.39a6.44 6.44 0 0 0 2.29-.48 10 10 0 0 0 2.31-1.27V121a9.5 9.5 0 0 1-2.53 1 13.7 13.7 0 0 1-3.11.32 9.4 9.4 0 0 1-9.83-9.81 11.28 11.28 0 0 1 2.75-7.91q2.79-3.07 7.91-3.08a11 11 0 0 1 2.64.33 9.27 9.27 0 0 1 2.13.78v4.47a9.48 9.48 0 0 0-2.2-1.23 6.55 6.55 0 0 0-2.3-.43 5.85 5.85 0 0 0-4.45 1.79 6.72 6.72 0 0 0-1.69 4.83 6.38 6.38 0 0 0 1.63 4.67 5.84 5.84 0 0 0 4.41 1.68Zm17.85-16.72a6.08 6.08 0 0 1 1 .08 4.09 4.09 0 0 1 .75.19v4.71a4.12 4.12 0 0 0-1.07-.51 5.32 5.32 0 0 0-1.7-.24 3.62 3.62 0 0 0-2.9 1.44 7 7 0 0 0-1.18 4.45v10h-4.66V102h4.66v3.11h.07a5.55 5.55 0 0 1 1.93-2.53 5.2 5.2 0 0 1 3.06-.89Zm2 10.5a10.69 10.69 0 0 1 2.77-7.77 10.19 10.19 0 0 1 7.69-2.87 9.51 9.51 0 0 1 7.25 2.77 12 12 0 0 1-.17 15.11 10 10 0 0 1-7.54 2.84 9.32 9.32 0 0 1-10-10.08Zm4.85-.15a7 7 0 0 0 1.4 4.73 5 5 0 0 0 4 1.64 4.71 4.71 0 0 0 3.87-1.64 7.58 7.58 0 0 0 1.33-4.85 7.31 7.31 0 0 0-1.42-4.8 4.79 4.79 0 0 0-3.86-1.62 4.89 4.89 0 0 0-4 1.7 7.45 7.45 0 0 0-1.35 4.82Zm22.39-4.83a2 2 0 0 0 .63 1.57 11.05 11.05 0 0 0 2.81 1.43 9.6 9.6 0 0 1 3.92 2.51 5.22 5.22 0 0 1 1.12 3.38 5.42 5.42 0 0 1-2.14 4.48 9.12 9.12 0 0 1-5.8 1.69A13.79 13.79 0 0 1 194 122a12.54 12.54 0 0 1-2.53-.76v-4.58a11 11 0 0 0 2.73 1.4 7.89 7.89 0 0 0 2.65.52 4.8 4.8 0 0 0 2.33-.44 1.59 1.59 0 0 0 .75-1.48 2.06 2.06 0 0 0-.78-1.63 11.69 11.69 0 0 0-3-1.53 9.14 9.14 0 0 1-3.66-2.42 5.31 5.31 0 0 1-1.07-3.43 5.39 5.39 0 0 1 2.12-4.39 8.48 8.48 0 0 1 5.51-1.72 12.72 12.72 0 0 1 2.33.23 10.37 10.37 0 0 1 2.16.59v4.43a10.35 10.35 0 0 0-2.16-1.06 7.28 7.28 0 0 0-2.44-.44 3.52 3.52 0 0 0-2.07.52 1.64 1.64 0 0 0-.69 1.4Zm10.48 5a10.73 10.73 0 0 1 2.77-7.77 10.23 10.23 0 0 1 7.7-2.87 9.49 9.49 0 0 1 7.24 2.77 10.39 10.39 0 0 1 2.61 7.45 10.5 10.5 0 0 1-2.77 7.66 10 10 0 0 1-7.54 2.84 9.34 9.34 0 0 1-10-10.08Zm4.85-.15a7 7 0 0 0 1.41 4.73 5 5 0 0 0 4 1.64 4.68 4.68 0 0 0 3.86-1.64 7.52 7.52 0 0 0 1.33-4.85 7.37 7.37 0 0 0-1.37-4.82 4.8 4.8 0 0 0-3.86-1.62 4.88 4.88 0 0 0-4 1.7 7.39 7.39 0 0 0-1.4 4.82Zm30.92-6.21h-6.94v16h-4.71v-16h-3.31V102h3.31v-2.73a6.81 6.81 0 0 1 2-5.11 7.1 7.1 0 0 1 5.2-2 13.06 13.06 0 0 1 1.5.08 6.66 6.66 0 0 1 1.16.26v4a4.62 4.62 0 0 0-.81-.32 4.18 4.18 0 0 0-1.33-.2 2.82 2.82 0 0 0-2.25.92 4 4 0 0 0-.79 2.7v2.4h6.94v-4.43l4.67-1.42V102h4.71v3.81h-4.71v9.25a3.92 3.92 0 0 0 .66 2.58 2.67 2.67 0 0 0 2.09.75 3.36 3.36 0 0 0 1-.19 4.55 4.55 0 0 0 1-.47v3.85a5.19 5.19 0 0 1-1.47.46 10.07 10.07 0 0 1-2 .21 5.78 5.78 0 0 1-4.41-1.56 6.7 6.7 0 0 1-1.47-4.73Z" fill="#737373"></path>
                          <path fill="#f25022" d="M36.19 85.01h21.85v21.85H36.19z"></path>
                          <path fill="#7fba00" d="M60.31 85.01h21.85v21.85H60.31z"></path>
                          <path fill="#00a4ef" d="M36.19 109.14h21.85v21.85H36.19z"></path>
                          <path fill="#ffb900" d="M60.31 109.14h21.85v21.85H60.31z"></path>
                      </svg>
                  </a>
                  <div class="${settings.class_prefix}-grid-container ${settings.class_prefix}-fully-fluid ${settings.class_prefix}-no-grid-gap ${settings.class_prefix}-no-grid-padding">
                      <div class="${settings.class_prefix}-max-col-8 ${settings.class_prefix}-xlg-col-8 ${settings.class_prefix}-lg-col-8 ${settings.class_prefix}-md-col-8 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4" style="min-height:600px">
                          <div class="${settings.class_prefix}-pt4 ${settings.class_prefix}-pr4 ${settings.class_prefix}-pb6 ${settings.class_prefix}-pl4">
                              <p class="${settings.class_prefix}-mt0 ${settings.class_prefix}-mb4"><img src="https://placehold.co/200x100?text=Logo" /></p>
                              <p><strong>Microsoft</strong></p>
                              <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum.</p>
                              <p class="${settings.class_prefix}-mt4"><kd-button type="primary" icon="arrow-right" href="javascript://">View partner page</kd-button></p>
                          </div>
                      </div>
                      <div class="${settings.class_prefix}-bg-dark-white ${settings.class_prefix}-max-col-8 ${settings.class_prefix}-xlg-col-8 ${settings.class_prefix}-lg-col-8 ${settings.class_prefix}-md-col-8 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4" style="min-height:600px">
                          <div class="${settings.class_prefix}-pt4 ${settings.class_prefix}-pr4 ${settings.class_prefix}-pb6 ${settings.class_prefix}-pl4">
                              <p class="${settings.class_prefix}-mt0"><strong>Services Links:</strong></p>
                              <ul class="${settings.class_prefix}-list">
                                  <li class="${settings.class_prefix}-list-item">Curabitur blandit tempus porttitor.</li>
                                  <li class="${settings.class_prefix}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                                  <li class="${settings.class_prefix}-list-item">Aenean lacinia bibendum nulla sed consectetur.</li>
                                  <li class="${settings.class_prefix}-list-item">Nulla vitae elit libero, a pharetra augue.</li>
                                  <li class="${settings.class_prefix}-list-item">Donec sed odio dui.</li>
                                  <li class="${settings.class_prefix}-list-item">Cras justo odio, dapibus ac facilisis in, egestas eget quam.</li>
                              </ul>
                              <p><strong>More Links:</strong></p>
                              <ul class="${settings.class_prefix}-list">
                                  <li class="${settings.class_prefix}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </kd-modal>
          </div>
          <div class="${settings.class_prefix}-max-col-4 ${settings.class_prefix}-xlg-col-4 ${settings.class_prefix}-lg-col-4 ${settings.class_prefix}-md-col-8 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4">
              <kd-modal>
                  <a href="javascript://" slot="trigger">
                      <svg height="auto" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 288 216" class="${settings.class_prefix}-transition-default-grayscale ${settings.class_prefix}-transition-hover-colorize ">
                          <path d="M125.82 94.21v27.58H121v-21.62l-8.56 21.62h-3.18l-8.77-21.62h-.06v21.62H96V94.21h6.87l7.92 20.45h.12l8.37-20.45Zm4 2.09a2.52 2.52 0 0 1 .84-1.93 3 3 0 0 1 4 0 2.59 2.59 0 0 1 .81 1.91 2.52 2.52 0 0 1-.83 1.91 2.86 2.86 0 0 1-2 .77 2.82 2.82 0 0 1-2-.78 2.54 2.54 0 0 1-.82-1.88ZM135 102v19.77h-4.7V102Zm14.12 16.39a6.44 6.44 0 0 0 2.29-.48 10 10 0 0 0 2.31-1.27V121a9.5 9.5 0 0 1-2.53 1 13.7 13.7 0 0 1-3.11.32 9.4 9.4 0 0 1-9.83-9.81 11.28 11.28 0 0 1 2.75-7.91q2.79-3.07 7.91-3.08a11 11 0 0 1 2.64.33 9.27 9.27 0 0 1 2.13.78v4.47a9.48 9.48 0 0 0-2.2-1.23 6.55 6.55 0 0 0-2.3-.43 5.85 5.85 0 0 0-4.45 1.79 6.72 6.72 0 0 0-1.69 4.83 6.38 6.38 0 0 0 1.63 4.67 5.84 5.84 0 0 0 4.41 1.68Zm17.85-16.72a6.08 6.08 0 0 1 1 .08 4.09 4.09 0 0 1 .75.19v4.71a4.12 4.12 0 0 0-1.07-.51 5.32 5.32 0 0 0-1.7-.24 3.62 3.62 0 0 0-2.9 1.44 7 7 0 0 0-1.18 4.45v10h-4.66V102h4.66v3.11h.07a5.55 5.55 0 0 1 1.93-2.53 5.2 5.2 0 0 1 3.06-.89Zm2 10.5a10.69 10.69 0 0 1 2.77-7.77 10.19 10.19 0 0 1 7.69-2.87 9.51 9.51 0 0 1 7.25 2.77 12 12 0 0 1-.17 15.11 10 10 0 0 1-7.54 2.84 9.32 9.32 0 0 1-10-10.08Zm4.85-.15a7 7 0 0 0 1.4 4.73 5 5 0 0 0 4 1.64 4.71 4.71 0 0 0 3.87-1.64 7.58 7.58 0 0 0 1.33-4.85 7.31 7.31 0 0 0-1.42-4.8 4.79 4.79 0 0 0-3.86-1.62 4.89 4.89 0 0 0-4 1.7 7.45 7.45 0 0 0-1.35 4.82Zm22.39-4.83a2 2 0 0 0 .63 1.57 11.05 11.05 0 0 0 2.81 1.43 9.6 9.6 0 0 1 3.92 2.51 5.22 5.22 0 0 1 1.12 3.38 5.42 5.42 0 0 1-2.14 4.48 9.12 9.12 0 0 1-5.8 1.69A13.79 13.79 0 0 1 194 122a12.54 12.54 0 0 1-2.53-.76v-4.58a11 11 0 0 0 2.73 1.4 7.89 7.89 0 0 0 2.65.52 4.8 4.8 0 0 0 2.33-.44 1.59 1.59 0 0 0 .75-1.48 2.06 2.06 0 0 0-.78-1.63 11.69 11.69 0 0 0-3-1.53 9.14 9.14 0 0 1-3.66-2.42 5.31 5.31 0 0 1-1.07-3.43 5.39 5.39 0 0 1 2.12-4.39 8.48 8.48 0 0 1 5.51-1.72 12.72 12.72 0 0 1 2.33.23 10.37 10.37 0 0 1 2.16.59v4.43a10.35 10.35 0 0 0-2.16-1.06 7.28 7.28 0 0 0-2.44-.44 3.52 3.52 0 0 0-2.07.52 1.64 1.64 0 0 0-.69 1.4Zm10.48 5a10.73 10.73 0 0 1 2.77-7.77 10.23 10.23 0 0 1 7.7-2.87 9.49 9.49 0 0 1 7.24 2.77 10.39 10.39 0 0 1 2.61 7.45 10.5 10.5 0 0 1-2.77 7.66 10 10 0 0 1-7.54 2.84 9.34 9.34 0 0 1-10-10.08Zm4.85-.15a7 7 0 0 0 1.41 4.73 5 5 0 0 0 4 1.64 4.68 4.68 0 0 0 3.86-1.64 7.52 7.52 0 0 0 1.33-4.85 7.37 7.37 0 0 0-1.37-4.82 4.8 4.8 0 0 0-3.86-1.62 4.88 4.88 0 0 0-4 1.7 7.39 7.39 0 0 0-1.4 4.82Zm30.92-6.21h-6.94v16h-4.71v-16h-3.31V102h3.31v-2.73a6.81 6.81 0 0 1 2-5.11 7.1 7.1 0 0 1 5.2-2 13.06 13.06 0 0 1 1.5.08 6.66 6.66 0 0 1 1.16.26v4a4.62 4.62 0 0 0-.81-.32 4.18 4.18 0 0 0-1.33-.2 2.82 2.82 0 0 0-2.25.92 4 4 0 0 0-.79 2.7v2.4h6.94v-4.43l4.67-1.42V102h4.71v3.81h-4.71v9.25a3.92 3.92 0 0 0 .66 2.58 2.67 2.67 0 0 0 2.09.75 3.36 3.36 0 0 0 1-.19 4.55 4.55 0 0 0 1-.47v3.85a5.19 5.19 0 0 1-1.47.46 10.07 10.07 0 0 1-2 .21 5.78 5.78 0 0 1-4.41-1.56 6.7 6.7 0 0 1-1.47-4.73Z" fill="#737373"></path>
                          <path fill="#f25022" d="M36.19 85.01h21.85v21.85H36.19z"></path>
                          <path fill="#7fba00" d="M60.31 85.01h21.85v21.85H60.31z"></path>
                          <path fill="#00a4ef" d="M36.19 109.14h21.85v21.85H36.19z"></path>
                          <path fill="#ffb900" d="M60.31 109.14h21.85v21.85H60.31z"></path>
                      </svg>
                  </a>
                  <div class="${settings.class_prefix}-grid-container ${settings.class_prefix}-fully-fluid ${settings.class_prefix}-no-grid-gap ${settings.class_prefix}-no-grid-padding">
                      <div class="${settings.class_prefix}-max-col-8 ${settings.class_prefix}-xlg-col-8 ${settings.class_prefix}-lg-col-8 ${settings.class_prefix}-md-col-8 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4" style="min-height:600px">
                          <div class="${settings.class_prefix}-pt4 ${settings.class_prefix}-pr4 ${settings.class_prefix}-pb6 ${settings.class_prefix}-pl4">
                              <p class="${settings.class_prefix}-mt0 ${settings.class_prefix}-mb4"><img src="https://placehold.co/200x100?text=Logo" /></p>
                              <p><strong>Microsoft</strong></p>
                              <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum.</p>
                              <p class="${settings.class_prefix}-mt4"><kd-button type="primary" icon="arrow-right" href="javascript://">View partner page</kd-button></p>
                          </div>
                      </div>
                      <div class="${settings.class_prefix}-bg-dark-white ${settings.class_prefix}-max-col-8 ${settings.class_prefix}-xlg-col-8 ${settings.class_prefix}-lg-col-8 ${settings.class_prefix}-md-col-8 ${settings.class_prefix}-sm-col-8 ${settings.class_prefix}-xs-col-4" style="min-height:600px">
                          <div class="${settings.class_prefix}-pt4 ${settings.class_prefix}-pr4 ${settings.class_prefix}-pb6 ${settings.class_prefix}-pl4">
                              <p class="${settings.class_prefix}-mt0"><strong>Services Links:</strong></p>
                              <ul class="${settings.class_prefix}-list">
                                  <li class="${settings.class_prefix}-list-item">Curabitur blandit tempus porttitor.</li>
                                  <li class="${settings.class_prefix}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                                  <li class="${settings.class_prefix}-list-item">Aenean lacinia bibendum nulla sed consectetur.</li>
                                  <li class="${settings.class_prefix}-list-item">Nulla vitae elit libero, a pharetra augue.</li>
                                  <li class="${settings.class_prefix}-list-item">Donec sed odio dui.</li>
                                  <li class="${settings.class_prefix}-list-item">Cras justo odio, dapibus ac facilisis in, egestas eget quam.</li>
                              </ul>
                              <p><strong>More Links:</strong></p>
                              <ul class="${settings.class_prefix}-list">
                                  <li class="${settings.class_prefix}-list-item">Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </kd-modal>
          </div>
      </div>
  `;
};
