/**
 * Copyright Kyndryl, Inc. 2022
 */

import { html, LitElement, TemplateResult } from 'lit';
import { state, property, customElement } from 'lit/decorators.js';
import { PREFIX_CLASS, PREFIX_TAG } from '../../global/settings/settings';
import '../../components/header/megaMenu'; //'/../../components/header/megaMenu'; //'../megaMenu';
import '../../components/navItem/navItem'; //'../../../components/navItem/navItem'; //'..//../../navItem/navItem';
import '../../components/header/header';
import stylesheet from './kyndryl-header.scss';
/**
* Kyndryl-header-legacy
*/
@customElement(`kyndryl-header`)
export class KyndrylHeader extends LitElement {
  static styles = [stylesheet];
  render() {
    return html`
     
       <kd-header>
       
       <kd-nav-item hasHoverEffect dense slot="masthead">Investors &#x2197;</a></kd-nav-item>
         <kd-mega-menu slot="primary-navigation">
           <kd-nav-item hasHoverEffect slot="trigger" hasIcon>Services</kd-nav-item>
 
           <div slot="content" id="Services-sub-menu"
             class="${PREFIX_CLASS}-header__submenu-container">
             <a href="https://www.kyndryl.com/us/en/services" class="${PREFIX_CLASS}-header__submenu-details">
               <div class="${PREFIX_CLASS}-div ${PREFIX_CLASS}-header__label">
                 <div>Services</div>
                 <kd-icon icon="arrow-right"></kd-icon>
               </div>
 
               <div class="${PREFIX_CLASS}-header__indicator"></div>
               <div class="${PREFIX_CLASS}-header__description ${PREFIX_CLASS}-text">
                 Kyndryl has a comprehensive set of Technology Services around
                 hybrid cloud solutions, business resiliency and network services
                 for your IT transformations.
               </div>
             </a>
             <div class="${PREFIX_CLASS}-header__submenu-items-list">
               <a href="https://www.kyndryl.com/us/en/services/applications">
                 <span class="hover-underline-animation">Applications</span></a>
 
               <a href="https://www.kyndryl.com/us/en/services/core-enterprise-zcloud">
                 <span class="hover-underline-animation">Core Enterprise and zCloud</span></a>
 
               <a href="https://www.kyndryl.com/us/en/services/digital-workplace">
               <span class="hover-underline-animation">Digital Workplace</span></a>
 
               <a href="https://www.kyndryl.com/us/en/services/cyber-resilience">
               <span class="hover-underline-animation">Security and Resiliency</span></a>
             </div>
 
             <div class="${PREFIX_CLASS}-header__submenu-items-list group2">
               <a href="https://www.kyndryl.com/us/en/services/cloud">
               <span class="hover-underline-animation">Cloud Services</span></a>
 
               <a href="https://www.kyndryl.com/us/en/services/data">
               <span class="hover-underline-animation">Data and AI</span></a>
 
               <a href="https://www.kyndryl.com/us/en/services/network">
               <span class="hover-underline-animation">Network and Edge</span></a>
             </div>
 
             <a href="https://www.kyndryl.com/us/en/services/advisory-implementation-services" class="${PREFIX_CLASS}-header__extra-details">
               <span class="${PREFIX_CLASS}-span ${PREFIX_CLASS}-header__label">Advisory & Implementation Services</span>
 
               <div class="${PREFIX_CLASS}-header__description ${PREFIX_CLASS}-text">
                 Strategize, design, and adopt technology solutions to unlock the
                 full potential of digital transformation.
               </div>
             </a>
           </div>
         </kd-mega-menu>
 
         <kd-mega-menu slot="primary-navigation">
           <kd-nav-item hasHoverEffect slot="trigger" hasIcon >Industries</kd-nav-item>
 
           <div slot="content" id="Industries-sub-menu" class="${PREFIX_CLASS}-header__submenu-container">
             <a href="https://www.kyndryl.com/us/en/industries" class="${PREFIX_CLASS}-header__submenu-details">
               <div class="${PREFIX_CLASS}-div ${PREFIX_CLASS}-header__label">
                 <div>Industries</div>
                 <kd-icon icon="arrow-right"></kd-icon>
               </div>
 
               <div class="${PREFIX_CLASS}-header__indicator"></div>
               <div class="${PREFIX_CLASS}-header__description ${PREFIX_CLASS}-text">
                 Kyndryl’s industry experts help modernize, digitize and secure
                 your IT to provide outstanding customer experiences.
               </div>
             </a>
             <div class="${PREFIX_CLASS}-header__submenu-items-list">
               <a href="https://www.kyndryl.com/us/en/industries/banking-and-financial-markets">
                 <span class="hover-underline-animation">Banking and Financial Markets</span></a>
 
               <a href="https://www.kyndryl.com/us/en/industries/healthcare">
                 <span class="hover-underline-animation">Healthcare</span></a>
 
               <a href="https://www.kyndryl.com/us/en/industries/manufacturing">
                 <span class="hover-underline-animation">Manufacturing</span></a>
             </div>
 
             <div class="${PREFIX_CLASS}-header__submenu-items-list group2">
               <a href="https://www.kyndryl.com/us/en/industries/government">
               <span class="hover-underline-animation">Government</span></a>
 
               <a href="https://www.kyndryl.com/us/en/industries/insurance">
               <span class="hover-underline-animation">Insurance</span></a>
 
               <a href="https://www.kyndryl.com/us/en/industries/communication-and-media">
               <span class="hover-underline-animation">Communications and Media</span></a>
             </div>
 
             <a href="https://www.kyndryl.com/us/en/industries/grants" class="${PREFIX_CLASS}-header__extra-details">
               <span class="${PREFIX_CLASS}-span ${PREFIX_CLASS}-header__label">US Public Sector Grants Program</span>
 
               <div class="${PREFIX_CLASS}-header__description ${PREFIX_CLASS}-text">
                 Strategize, design, and adopt technology solutions to unlock the
                 full potential of digital transformation.
               </div>
             </a>
           </div>
         </kd-mega-menu>
 
         <kd-mega-menu slot="primary-navigation">
           <kd-nav-item hasHoverEffect slot="trigger" hasIcon>About Us</kd-nav-item>
 
           <div slot="content" id="About-Us-sub-menu" class="${PREFIX_CLASS}-header__submenu-container">
             <a href="https://www.kyndryl.com/us/en/about-us" class="${PREFIX_CLASS}-header__submenu-details">
               <div class="${PREFIX_CLASS}-div ${PREFIX_CLASS}-header__label">
                 <div>About Us</div>
                 <kd-icon icon="arrow-right"></kd-icon>
               </div>
 
               <div class="${PREFIX_CLASS}-header__indicator"></div>
               <div class="${PREFIX_CLASS}-header__description ${PREFIX_CLASS}-text">
                 Empowering progress while modernizing and managing the world’s
                 mission-critical systems and services.
               </div>
             </a>
             <div class="${PREFIX_CLASS}-header__submenu-items-list">
               <a href="https://www.kyndryl.com/us/en/about-us/alliances">
               <span class="hover-underline-animation">Alliances</span></a>
 
               <a href="https://www.kyndryl.com/us/en/about-us/corporate-responsibility">
                 <span class="hover-underline-animation">Corporate Responsibility</span></a>
 
               <a href="https://www.kyndryl.com/us/en/about-us/leadership">
                 <span class="hover-underline-animation">Leadership</span></a>
 
                 <a href="https://www.kyndryl.com/us/en/about-us/contact-us">
                 <span class="hover-underline-animation">Contact Us</span></a>
             </div>
 
             <div class="${PREFIX_CLASS}-header__submenu-items-list group2">
               <a href="https://www.kyndryl.com/us/en/careers">
               <span class="hover-underline-animation">Careers</span></a>
              
               <a href="https://www.kyndryl.com/us/en/about-us/inclusion-diversity-equity">
               <span class="hover-underline-animation">Inclusion and Diversity</span></a>
 
               <a href="https://www.kyndryl.com/us/en/about-us/locations">
               <span class="hover-underline-animation">Locations</span></a>
 
               <a href="https://investors.kyndryl.com/overview/default.aspx">
               <span class="hover-underline-animation">Investors &#x2197;</span></a>
             </div>
 
             <a href="https://www.kyndryl.com/us/en/about-us/corporate-responsibility/environmental-sustainability" class="${PREFIX_CLASS}-header__extra-details">
               <span class="${PREFIX_CLASS}-span ${PREFIX_CLASS}-header__label">Sustainability Spotlight</span>
               
               <div class="${PREFIX_CLASS}-header__description ${PREFIX_CLASS}-text">
                 Our focus is on mitigating the impacts of climate change by
                 achieving net zero and reducing our environmental footprint.
               </div>
             </a>
           </div>
         </kd-mega-menu>
 
         <kd-nav-item hasHoverEffect slot="primary-navigation">News and Insights</kd-nav-item>
         <kd-nav-item hasHoverEffect slot="primary-navigation">Customer Stories</kd-nav-item>
         <kd-nav-item hasHoverEffect slot="primary-navigation">Careers</kd-nav-item>
       </kd-header>
     `;
  }
}
 