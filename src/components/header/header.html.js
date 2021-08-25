import { html } from "lit-element";
import { settings } from "../../global/settings";
import logo from "../../lib/images/logo.png";
import linkedin from '../../lib/images/linkedin.png';
import twitter from '../../lib/images/twitter.png';

export default html`

<div class="header aem-GridColumn aem-GridColumn--default--12">
  <section class="header ">

    <section class="header ">
      <div class="header__container">
        <div class="header__logo">
          <div data-cmp-lazythreshold="0" data-cmp-src="/content/experience-fragments/kyndrylprogram/us/en/sites/header/master/_jcr_content/root/header_copy/image.coreimg{.width}.svg/1629428076443/kyndryl-logo.svg"
            data-asset="/content/dam/kyndrylprogram/kyndryl-logo.svg" data-asset-id="5cd882d0-b4c8-4790-8e42-edc3e675a5e1" data-title="Kyndryl" id="image-548f8c07c7"
            data-cmp-data-layer='{"image-548f8c07c7":{"@type":"kyndrylprogram/components/image","repo:modifyDate":"2021-08-20T02:54:36Z","xdm:linkURL":"/us/en.html","image":{"repo:id":"5cd882d0-b4c8-4790-8e42-edc3e675a5e1","repo:modifyDate":"2021-08-20T00:06:08Z","@type":"image/svg+xml","repo:path":"/content/dam/kyndrylprogram/kyndryl-logo.svg","xdm:tags":[],"xdm:smartTags":{}}}}'
            class="cmp-image" itemscope="" itemtype="http://schema.org/ImageObject">
            <a class="cmp-image__link" href="${settings.urlPath}/us/en.html" data-cmp-clickable="" data-cmp-hook-image="link">
              <img src="${logo}" class="cmp-image__image" itemprop="contentUrl" data-cmp-hook-image="image" alt="Kyndryl" />
            </a>
          </div>
        </div>

        <div class="header__desktop-menu">
          <nav id="navigation-7238cfa551" class="cmp-navigation" role="navigation" itemscope="" itemtype="http://schema.org/SiteNavigationElement"
            data-cmp-data-layer='{"navigation-7238cfa551":{"@type":"kyndrylprogram/components/navigation","repo:modifyDate":"2021-08-20T02:54:36Z"}}'>
            <ul class="cmp-navigation__group">
              <li class="cmp-navigation__item cmp-navigation__item--level-0 cmp-navigation__item--main"
                data-cmp-data-layer='{"navigation-7238cfa551-item-06105c1ec2":{"@type":"kyndrylprogram/components/navigation/item","repo:modifyDate":"2021-07-02T16:38:41Z","dc:title":"Services","xdm:linkURL":"/us/en/services.html"}}'>
                <a href="${settings.urlPath}/us/en/services.html" title="Services" data-cmp-clickable="" data-nav-right-rail="links" class="cmp-navigation__item-link cmp-navigation__item-link--level-0 cmp-navigation__item-link-sub">Services
                  <span class="cmp-navigation__item-link-icon icon-chevron-down"></span></a>

                <div class="cmp-navigation__group-container cmp-navigation__group-container--level-0" aria-hidden="true">
                  <div class="cmp-navigation__group-wrapper">
                    <div>
                      <div>
                        <a class="cmp-navigation__item-link cmp-navigation__item-link--landing" href="${settings.urlPath}/us/en/services.html" title="Services" tabindex="0">Services</a>
                      </div>

                      <ul class="cmp-navigation__group">
                        <li class="cmp-navigation__item cmp-navigation__item--level-1"
                          data-cmp-data-layer='{"navigation-7238cfa551-item-6b458dbdac":{"@type":"kyndrylprogram/components/navigation/item","repo:modifyDate":"2021-08-23T05:20:31Z","dc:title":"Applications, Data, and AI","xdm:linkURL":"/us/en/services/enterprise-application-management.html"}}'>
                          <a href="${settings.urlPath}/us/en/services/enterprise-application-management.html" title="Applications, Data, and AI" data-cmp-clickable="" data-nav-right-rail="none"
                            class="cmp-navigation__item-link cmp-navigation__item-link--level-1 " tabindex="0">Applications, Data, and AI
                          </a>

                          <div class="cmp-navigation__item-description">
                            SAP or Oracle applications managed on your choice of
                            hyperscaler.
                          </div>
                        </li>

                        <li class="cmp-navigation__item cmp-navigation__item--level-1"
                          data-cmp-data-layer='{"navigation-7238cfa551-item-55492a7184":{"@type":"kyndrylprogram/components/navigation/item","repo:modifyDate":"2021-08-23T05:20:31Z","dc:title":"Cloud Services","xdm:linkURL":"/us/en/services/cloud-managed.html"}}'>
                          <a href="${settings.urlPath}/us/en/services/cloud-managed.html" title="Cloud Services" data-cmp-clickable="" data-nav-right-rail="none" class="cmp-navigation__item-link cmp-navigation__item-link--level-1 " tabindex="0">Cloud
                            Services
                          </a>

                          <div class="cmp-navigation__item-description">
                            Simplify complex hybrid IT management for greater
                            visibility, manageability and flexibility.
                          </div>
                        </li>

                        <li class="cmp-navigation__item cmp-navigation__item--level-1"
                          data-cmp-data-layer='{"navigation-7238cfa551-item-847d8338d9":{"@type":"kyndrylprogram/components/navigation/item","repo:modifyDate":"2021-08-23T05:20:32Z","dc:title":"Core Enterprise and zCloud","xdm:linkURL":"/us/en/services/modernize-it.html"}}'>
                          <a href="${settings.urlPath}/us/en/services/modernize-it.html" title="Core Enterprise and zCloud" data-cmp-clickable="" data-nav-right-rail="none" class="cmp-navigation__item-link cmp-navigation__item-link--level-1 "
                            tabindex="0">Core Enterprise and zCloud
                          </a>

                          <div class="cmp-navigation__item-description">
                            Modernize and extend legacy IT to cloud-enabled
                            hybrid, open platforms to gain agility and flexibility
                          </div>
                        </li>

                        <li class="cmp-navigation__item cmp-navigation__item--level-1"
                          data-cmp-data-layer='{"navigation-7238cfa551-item-dc7518c087":{"@type":"kyndrylprogram/components/navigation/item","repo:modifyDate":"2021-08-23T05:20:31Z","dc:title":"Digital Workplace","xdm:linkURL":"/us/en/services/digital-workplace.html"}}'>
                          <a href="${settings.urlPath}/us/en/services/digital-workplace.html" title="Digital Workplace" data-cmp-clickable="" data-nav-right-rail="none" class="cmp-navigation__item-link cmp-navigation__item-link--level-1 "
                            tabindex="0">Digital Workplace
                          </a>

                          <div class="cmp-navigation__item-description">
                            Enterprise mobility services to help you plan, manage
                            and secure your digital workplace.
                          </div>
                        </li>

                        <li class="cmp-navigation__item cmp-navigation__item--level-1"
                          data-cmp-data-layer='{"navigation-7238cfa551-item-96edb08810":{"@type":"kyndrylprogram/components/navigation/item","repo:modifyDate":"2021-08-23T05:20:32Z","dc:title":"Network and Edge","xdm:linkURL":"/us/en/services/network.html"}}'>
                          <a href="${settings.urlPath}/us/en/services/network.html" title="Network and Edge" data-cmp-clickable="" data-nav-right-rail="none" class="cmp-navigation__item-link cmp-navigation__item-link--level-1 " tabindex="0">Network
                            and Edge
                          </a>

                          <div class="cmp-navigation__item-description">
                            Prepare for the next wave of cloud with 5G-enabled
                            edge and software-defined networking (SDN).
                          </div>
                        </li>

                        <li class="cmp-navigation__item cmp-navigation__item--level-1"
                          data-cmp-data-layer='{"navigation-7238cfa551-item-b16b3fc0b8":{"@type":"kyndrylprogram/components/navigation/item","repo:modifyDate":"2021-08-23T05:20:31Z","dc:title":"Security and Resiliency","xdm:linkURL":"/us/en/services/business-continuity.html"}}'>
                          <a href="${settings.urlPath}/us/en/services/business-continuity.html" title="Security and Resiliency" data-cmp-clickable="" data-nav-right-rail="none" class="cmp-navigation__item-link cmp-navigation__item-link--level-1 "
                            tabindex="0">Security and Resiliency
                          </a>

                          <div class="cmp-navigation__item-description">
                            Enable resilient models to mitigate risks and ensure
                            business continuity.
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div class="cmp-navigation__group-right-container cmp-navigation__group-right-container--links">
                      <div class="cmp-navigation__learn">
                        <p class="cmp-navigation__learn-title">Learn</p>
                        <ul class="cmp-navigation__learn-list">
                          <li class="cmp-navigation__learn-list-item">
                            <a class="cmp-navigation__learn-link" href="${settings.urlPath}/us/en/seo/plan.html" title="What is a business continuity plan (BCP)?" tabindex="0">
                              What is a business continuity plan (BCP)?
                            </a>
                          </li>

                          <li class="cmp-navigation__learn-list-item">
                            <a class="cmp-navigation__learn-link" href="${settings.urlPath}/us/en/seo/edge-computing.html" title="What is edge computing and how can it transform your business?  " tabindex="0">
                              What is edge computing and how can it transform your
                              business?
                            </a>
                          </li>

                          <li class="cmp-navigation__learn-list-item">
                            <a class="cmp-navigation__learn-link" href="${settings.urlPath}/us/en/seo/rto.html" title="RTO (Recovery Time Objective) explained" tabindex="0">
                              RTO (Recovery Time Objective) explained
                            </a>
                          </li>

                          <li class="cmp-navigation__learn-list-item">
                            <a class="cmp-navigation__learn-link" href="${settings.urlPath}/us/en/seo/sd-wan.html" title="What is SD-WAN? | Software-defined WAN (SD-WAN)" tabindex="0">
                              What is SD-WAN? | Software-defined WAN (SD-WAN)
                            </a>
                          </li>

                          <li class="cmp-navigation__learn-list-item">
                            <a class="cmp-navigation__learn-link" href="${settings.urlPath}/us/en/seo/disaster-recovery-plan.html" title="What is a disaster recovery (DR) plan" tabindex="0">
                              What is a disaster recovery (DR) plan
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li class="cmp-navigation__item cmp-navigation__item--level-0 cmp-navigation__item--main"
                data-cmp-data-layer='{"navigation-7238cfa551-item-7240361870":{"@type":"kyndrylprogram/components/navigation/item","repo:modifyDate":"2021-07-14T16:55:08Z","dc:title":"Customer Stories","xdm:linkURL":"/us/en/client-stories.html"}}'>
                <a href="${settings.urlPath}/us/en/client-stories.html" title="Customer Stories" data-cmp-clickable="" data-nav-right-rail="none" class="cmp-navigation__item-link cmp-navigation__item-link--level-0 ">Customer Stories
                </a>
              </li>

              <li class="cmp-navigation__item cmp-navigation__item--level-0 cmp-navigation__item--main"
                data-cmp-data-layer='{"navigation-7238cfa551-item-53adebf38c":{"@type":"kyndrylprogram/components/navigation/item","repo:modifyDate":"2021-07-30T18:39:02Z","dc:title":"About Us","xdm:linkURL":"/us/en/about-us.html"}}'>
                <a href="${settings.urlPath}/us/en/about-us.html" title="About Us" data-cmp-clickable="" data-nav-right-rail="address" class="cmp-navigation__item-link cmp-navigation__item-link--level-0 cmp-navigation__item-link-sub">About Us
                  <span class="cmp-navigation__item-link-icon icon-chevron-down"></span></a>

                <div class="cmp-navigation__group-container cmp-navigation__group-container--level-0">
                  <div class="cmp-navigation__group-wrapper">
                    <div>
                      <div>
                        <a class="cmp-navigation__item-link cmp-navigation__item-link--landing" href="${settings.urlPath}/us/en/about-us.html" title="About Us" tabindex="-1">About Us</a>
                      </div>

                      <ul class="cmp-navigation__group">
                        <li class="cmp-navigation__item cmp-navigation__item--level-1"
                          data-cmp-data-layer='{"navigation-7238cfa551-item-d43a61c5f3":{"@type":"kyndrylprogram/components/navigation/item","repo:modifyDate":"2021-07-30T18:39:04Z","dc:title":"Leadership","xdm:linkURL":"/us/en/about-us/leadership.html"}}'>
                          <a href="${settings.urlPath}/us/en/about-us/leadership.html" title="Leadership" data-cmp-clickable="" data-nav-right-rail="none" class="cmp-navigation__item-link cmp-navigation__item-link--level-1 " tabindex="-1">Leadership
                          </a>
                        </li>

                        <li class="cmp-navigation__item cmp-navigation__item--level-1"
                          data-cmp-data-layer='{"navigation-7238cfa551-item-a5ff279d10":{"@type":"kyndrylprogram/components/navigation/item","repo:modifyDate":"2021-07-30T18:39:17Z","dc:title":"FAQs","xdm:linkURL":"/us/en/about-us/frequently-asked-questions.html"}}'>
                          <a href="${settings.urlPath}/us/en/about-us/frequently-asked-questions.html" title="Frequently Asked Questions" data-cmp-clickable="" data-nav-right-rail="none"
                            class="cmp-navigation__item-link cmp-navigation__item-link--level-1 " tabindex="-1">Frequently Asked Questions
                          </a>
                        </li>

                        <li class="cmp-navigation__item cmp-navigation__item--level-1"
                          data-cmp-data-layer='{"navigation-7238cfa551-item-84d40ce64e":{"@type":"kyndrylprogram/components/navigation/item","repo:modifyDate":"2021-08-23T04:40:00Z","dc:title":"Join Our Team","xdm:linkURL":"/us/en/about-us/careers.html"}}'>
                          <a href="${settings.urlPath}/us/en/about-us/careers.html" title="Join Our Team" data-cmp-clickable="" data-nav-right-rail="none" class="cmp-navigation__item-link cmp-navigation__item-link--level-1 " tabindex="-1">Join Our
                            Team
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div class="cmp-navigation__group-right-container cmp-navigation__group-right-container--address">
                      <div class="cmp-navigation__address">
                        <h4 class="cmp-navigation__address-title">
                          Corporate Headquarters
                        </h4>
                        <address class="cmp-navigation__address-content">
                          <span>1 Vanderbilt Ave<br /></span>

                          <span>New York,&nbsp;NY&nbsp;10017<br /></span>
                          <span>United States<br /></span>
                          <span>US: 212-500-1901</span>
                        </address>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li class="cmp-navigation__item cmp-navigation__item--level-0 cmp-navigation__item--main">
                <a href="https://newsroom.kyndryl.com" title="Newsroom" data-cmp-clickable="true" class="cmp-navigation__item-link cmp-navigation__item-link--level-0">Newsroom</a>
              </li>

              <li class="cmp-navigation__item cmp-navigation__item--level-0 cmp-navigation__item--main"
                data-cmp-data-layer='{"navigation-7238cfa551-item-0679180a7a":{"@type":"kyndrylprogram/components/navigation/item","repo:modifyDate":"2021-08-05T14:26:50Z","dc:title":"Join Our Team","xdm:linkURL":"/us/en/careers.html"}}'>
                <a href="${settings.urlPath}/us/en/careers.html" title="Join Our Team" data-cmp-clickable="" data-nav-right-rail="none" class="cmp-navigation__item-link cmp-navigation__item-link--level-0 ">Join Our Team
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="header__language-nav"></div>

        <div class="header__mobile-menu">
          <button class="header__trigger-menu--open">
            <span class="icon-hamburger"></span>
          </button>
          <button class="header__trigger-menu--close">
            <span class="icon-close"></span>
          </button>
        </div>
      </div>
    </section>


    <div class="header__mobile-nav">

    <nav id="navigation-7238cfa551" class="cmp-navigation" role="navigation" itemscope itemtype="http://schema.org/SiteNavigationElement"
      data-cmp-data-layer="{&#34;navigation-7238cfa551&#34;:{&#34;@type&#34;:&#34;kyndrylprogram/components/navigation&#34;,&#34;repo:modifyDate&#34;:&#34;2021-08-23T22:21:40Z&#34;}}" data-cmp-is="navidation">
      <ul class="cmp-navigation__group">


        <li class="cmp-navigation__item cmp-navigation__item--level-0 cmp-navigation__item--main"
          data-cmp-data-layer="{&#34;navigation-7238cfa551-item-06105c1ec2&#34;:{&#34;@type&#34;:&#34;kyndrylprogram/components/navigation/item&#34;,&#34;repo:modifyDate&#34;:&#34;2021-08-23T05:20:31Z&#34;,&#34;dc:title&#34;:&#34;Services&#34;,&#34;xdm:linkURL&#34;:&#34;/us/en/services.html&#34;}}">

          <a href="${settings.urlPath}/us/en/services.html" title="Services" data-cmp-clickable data-nav-right-rail="links" class="cmp-navigation__item-link cmp-navigation__item-link--level-0 cmp-navigation__item-link-sub">Services <span
              class="cmp-navigation__item-link-icon icon-chevron-down"></span></a>




          <div class="cmp-navigation__group-container cmp-navigation__group-container--level-0">
            <div class="cmp-navigation__group-wrapper">
              <div>
                <div><a class="cmp-navigation__item-link cmp-navigation__item-link--landing" href="${settings.urlPath}/us/en/services.html" title="Services">Services</a>

                </div>

                <ul class="cmp-navigation__group">


                  <li class="cmp-navigation__item cmp-navigation__item--level-1"
                    data-cmp-data-layer="{&#34;navigation-7238cfa551-item-6b458dbdac&#34;:{&#34;@type&#34;:&#34;kyndrylprogram/components/navigation/item&#34;,&#34;repo:modifyDate&#34;:&#34;2021-08-23T05:20:31Z&#34;,&#34;dc:title&#34;:&#34;Applications, Data, and AI&#34;,&#34;xdm:linkURL&#34;:&#34;/us/en/services/enterprise-application-management.html&#34;}}">

                    <a href="${settings.urlPath}/us/en/services/enterprise-application-management.html" title="Applications, Data, and AI" data-cmp-clickable data-nav-right-rail="none"
                      class="cmp-navigation__item-link cmp-navigation__item-link--level-1 ">Applications, Data, and AI </a>

                    <div class="cmp-navigation__item-description">SAP or Oracle applications managed on your choice of hyperscaler.</div>



                  </li>





                  <li class="cmp-navigation__item cmp-navigation__item--level-1"
                    data-cmp-data-layer="{&#34;navigation-7238cfa551-item-55492a7184&#34;:{&#34;@type&#34;:&#34;kyndrylprogram/components/navigation/item&#34;,&#34;repo:modifyDate&#34;:&#34;2021-08-23T05:20:31Z&#34;,&#34;dc:title&#34;:&#34;Cloud Services&#34;,&#34;xdm:linkURL&#34;:&#34;/us/en/services/cloud-managed.html&#34;}}">

                    <a href="${settings.urlPath}/us/en/services/cloud-managed.html" title="Cloud Services" data-cmp-clickable data-nav-right-rail="none" class="cmp-navigation__item-link cmp-navigation__item-link--level-1 ">Cloud Services </a>

                    <div class="cmp-navigation__item-description">Simplify complex hybrid IT management for greater visibility, manageability and flexibility.</div>



                  </li>





                  <li class="cmp-navigation__item cmp-navigation__item--level-1"
                    data-cmp-data-layer="{&#34;navigation-7238cfa551-item-847d8338d9&#34;:{&#34;@type&#34;:&#34;kyndrylprogram/components/navigation/item&#34;,&#34;repo:modifyDate&#34;:&#34;2021-08-23T05:20:32Z&#34;,&#34;dc:title&#34;:&#34;Core Enterprise and zCloud&#34;,&#34;xdm:linkURL&#34;:&#34;/us/en/services/modernize-it.html&#34;}}">

                    <a href="${settings.urlPath}/us/en/services/modernize-it.html" title="Core Enterprise and zCloud" data-cmp-clickable data-nav-right-rail="none" class="cmp-navigation__item-link cmp-navigation__item-link--level-1 ">Core Enterprise and
                      zCloud </a>

                    <div class="cmp-navigation__item-description">Modernize and extend legacy IT to cloud-enabled hybrid, open platforms to gain agility and flexibility</div>



                  </li>





                  <li class="cmp-navigation__item cmp-navigation__item--level-1"
                    data-cmp-data-layer="{&#34;navigation-7238cfa551-item-dc7518c087&#34;:{&#34;@type&#34;:&#34;kyndrylprogram/components/navigation/item&#34;,&#34;repo:modifyDate&#34;:&#34;2021-08-23T05:20:31Z&#34;,&#34;dc:title&#34;:&#34;Digital Workplace&#34;,&#34;xdm:linkURL&#34;:&#34;/us/en/services/digital-workplace.html&#34;}}">

                    <a href="${settings.urlPath}/us/en/services/digital-workplace.html" title="Digital Workplace" data-cmp-clickable data-nav-right-rail="none" class="cmp-navigation__item-link cmp-navigation__item-link--level-1 ">Digital Workplace </a>

                    <div class="cmp-navigation__item-description">Enterprise mobility services to help you plan, manage and secure your digital workplace.</div>



                  </li>





                  <li class="cmp-navigation__item cmp-navigation__item--level-1"
                    data-cmp-data-layer="{&#34;navigation-7238cfa551-item-96edb08810&#34;:{&#34;@type&#34;:&#34;kyndrylprogram/components/navigation/item&#34;,&#34;repo:modifyDate&#34;:&#34;2021-08-23T05:20:32Z&#34;,&#34;dc:title&#34;:&#34;Network and Edge&#34;,&#34;xdm:linkURL&#34;:&#34;/us/en/services/network.html&#34;}}">

                    <a href="${settings.urlPath}/us/en/services/network.html" title="Network and Edge" data-cmp-clickable data-nav-right-rail="none" class="cmp-navigation__item-link cmp-navigation__item-link--level-1 ">Network and Edge </a>

                    <div class="cmp-navigation__item-description">Prepare for the next wave of cloud with 5G-enabled edge and software-defined networking (SDN).</div>



                  </li>





                  <li class="cmp-navigation__item cmp-navigation__item--level-1"
                    data-cmp-data-layer="{&#34;navigation-7238cfa551-item-b16b3fc0b8&#34;:{&#34;@type&#34;:&#34;kyndrylprogram/components/navigation/item&#34;,&#34;repo:modifyDate&#34;:&#34;2021-08-23T05:20:31Z&#34;,&#34;dc:title&#34;:&#34;Security and Resiliency&#34;,&#34;xdm:linkURL&#34;:&#34;/us/en/services/business-continuity.html&#34;}}">

                    <a href="${settings.urlPath}/us/en/services/business-continuity.html" title="Security and Resiliency" data-cmp-clickable data-nav-right-rail="none" class="cmp-navigation__item-link cmp-navigation__item-link--level-1 ">Security and
                      Resiliency </a>

                    <div class="cmp-navigation__item-description">Enable resilient models to mitigate risks and ensure business continuity.</div>



                  </li>


                </ul>

              </div>

              <div class="cmp-navigation__group-right-container cmp-navigation__group-right-container--links">


                <div class="cmp-navigation__learn">

                  <p class="cmp-navigation__learn-title">Learn</p>
                  <ul class="cmp-navigation__learn-list">
                    <li class="cmp-navigation__learn-list-item">
                      <a class="cmp-navigation__learn-link" href="${settings.urlPath}/us/en/seo/plan.html" title="What is a business continuity plan (BCP)?">
                        What is a business continuity plan (BCP)?
                      </a>
                    </li>

                    <li class="cmp-navigation__learn-list-item">
                      <a class="cmp-navigation__learn-link" href="${settings.urlPath}/us/en/seo/disaster-recovery-plan.html" title="What is a disaster recovery (DR) plan">
                        What is a disaster recovery (DR) plan
                      </a>
                    </li>

                    <li class="cmp-navigation__learn-list-item">
                      <a class="cmp-navigation__learn-link" href="${settings.urlPath}/us/en/seo/edge-computing.html" title="What is edge computing and how can it transform your business?  ">
                        What is edge computing and how can it transform your business?
                      </a>
                    </li>

                    <li class="cmp-navigation__learn-list-item">
                      <a class="cmp-navigation__learn-link" href="${settings.urlPath}/us/en/seo/sd-wan.html" title="What is SD-WAN? | Software-defined WAN (SD-WAN)">
                        What is SD-WAN? | Software-defined WAN (SD-WAN)
                      </a>
                    </li>

                    <li class="cmp-navigation__learn-list-item">
                      <a class="cmp-navigation__learn-link" href="${settings.urlPath}/us/en/seo/rto.html" title="RTO (Recovery Time Objective) explained">
                        RTO (Recovery Time Objective) explained
                      </a>
                    </li>
                  </ul>
                </div>




              </div>
            </div>
          </div>
        </li>





        <li class="cmp-navigation__item cmp-navigation__item--level-0 cmp-navigation__item--main"
          data-cmp-data-layer="{&#34;navigation-7238cfa551-item-7240361870&#34;:{&#34;@type&#34;:&#34;kyndrylprogram/components/navigation/item&#34;,&#34;repo:modifyDate&#34;:&#34;2021-08-23T05:20:32Z&#34;,&#34;dc:title&#34;:&#34;Customer Stories&#34;,&#34;xdm:linkURL&#34;:&#34;/us/en/client-stories.html&#34;}}">

          <a href="${settings.urlPath}/us/en/client-stories.html" title="Customer Stories" data-cmp-clickable data-nav-right-rail="none" class="cmp-navigation__item-link cmp-navigation__item-link--level-0 ">Customer Stories </a>





        </li>





        <li class="cmp-navigation__item cmp-navigation__item--level-0 cmp-navigation__item--main"
          data-cmp-data-layer="{&#34;navigation-7238cfa551-item-53adebf38c&#34;:{&#34;@type&#34;:&#34;kyndrylprogram/components/navigation/item&#34;,&#34;repo:modifyDate&#34;:&#34;2021-08-23T05:20:32Z&#34;,&#34;dc:title&#34;:&#34;About Us&#34;,&#34;xdm:linkURL&#34;:&#34;/us/en/about-us.html&#34;}}">

          <a href="${settings.urlPath}/us/en/about-us.html" title="About Us" data-cmp-clickable data-nav-right-rail="address" class="cmp-navigation__item-link cmp-navigation__item-link--level-0 cmp-navigation__item-link-sub">About Us <span
              class="cmp-navigation__item-link-icon icon-chevron-down"></span></a>




          <div class="cmp-navigation__group-container cmp-navigation__group-container--level-0">
            <div class="cmp-navigation__group-wrapper">
              <div>
                <div><a class="cmp-navigation__item-link cmp-navigation__item-link--landing" href="${settings.urlPath}/us/en/about-us.html" title="About Us">About Us</a>

                </div>

                <ul class="cmp-navigation__group">


                  <li class="cmp-navigation__item cmp-navigation__item--level-1"
                    data-cmp-data-layer="{&#34;navigation-7238cfa551-item-d43a61c5f3&#34;:{&#34;@type&#34;:&#34;kyndrylprogram/components/navigation/item&#34;,&#34;repo:modifyDate&#34;:&#34;2021-08-23T05:20:32Z&#34;,&#34;dc:title&#34;:&#34;Leadership&#34;,&#34;xdm:linkURL&#34;:&#34;/us/en/about-us/leadership.html&#34;}}">

                    <a href="${settings.urlPath}/us/en/about-us/leadership.html" title="Leadership" data-cmp-clickable data-nav-right-rail="none" class="cmp-navigation__item-link cmp-navigation__item-link--level-1 ">Leadership </a>





                  </li>





                  <li class="cmp-navigation__item cmp-navigation__item--level-1"
                    data-cmp-data-layer="{&#34;navigation-7238cfa551-item-a5ff279d10&#34;:{&#34;@type&#34;:&#34;kyndrylprogram/components/navigation/item&#34;,&#34;repo:modifyDate&#34;:&#34;2021-08-23T05:20:32Z&#34;,&#34;dc:title&#34;:&#34;Frequently Asked Questions&#34;,&#34;xdm:linkURL&#34;:&#34;/us/en/about-us/frequently-asked-questions.html&#34;}}">

                    <a href="${settings.urlPath}/us/en/about-us/frequently-asked-questions.html" title="Frequently Asked Questions" data-cmp-clickable data-nav-right-rail="none"
                      class="cmp-navigation__item-link cmp-navigation__item-link--level-1 ">Frequently Asked Questions </a>





                  </li>





                  <li class="cmp-navigation__item cmp-navigation__item--level-1"
                    data-cmp-data-layer="{&#34;navigation-7238cfa551-item-84d40ce64e&#34;:{&#34;@type&#34;:&#34;kyndrylprogram/components/navigation/item&#34;,&#34;repo:modifyDate&#34;:&#34;2021-08-23T05:20:32Z&#34;,&#34;dc:title&#34;:&#34;Join Our Team&#34;,&#34;xdm:linkURL&#34;:&#34;/us/en/about-us/careers.html&#34;}}">

                    <a href="${settings.urlPath}/us/en/about-us/careers.html" title="Join Our Team" data-cmp-clickable data-nav-right-rail="none" class="cmp-navigation__item-link cmp-navigation__item-link--level-1 ">Join Our Team </a>





                  </li>


                </ul>

              </div>

              <div class="cmp-navigation__group-right-container cmp-navigation__group-right-container--address">




                <div class="cmp-navigation__address">
                  <h4 class="cmp-navigation__address-title"> Corporate Headquarters</h4>
                  <address class="cmp-navigation__address-content">
                    <span>1 Vanderbilt Ave<br /></span>

                    <span>New York,&nbsp;NY&nbsp;10017<br /></span>
                    <span>United States<br /></span>
                    <span>US: 212-500-1901</span>
                  </address>
                </div>


              </div>
            </div>
          </div>
        </li>




        <li class="cmp-navigation__item cmp-navigation__item--level-0 cmp-navigation__item--main">
          <a href="https://newsroom.kyndryl.com" title="Newsroom" data-cmp-clickable="true" class="cmp-navigation__item-link cmp-navigation__item-link--level-0">Newsroom</a>
        </li>


        <li class="cmp-navigation__item cmp-navigation__item--level-0 cmp-navigation__item--main"
          data-cmp-data-layer="{&#34;navigation-7238cfa551-item-0679180a7a&#34;:{&#34;@type&#34;:&#34;kyndrylprogram/components/navigation/item&#34;,&#34;repo:modifyDate&#34;:&#34;2021-08-23T05:20:33Z&#34;,&#34;dc:title&#34;:&#34;Join Our Team&#34;,&#34;xdm:linkURL&#34;:&#34;/us/en/careers.html&#34;}}">

          <a href="${settings.urlPath}/us/en/careers.html" title="Join Our Team" data-cmp-clickable data-nav-right-rail="none" class="cmp-navigation__item-link cmp-navigation__item-link--level-0 ">Join Our Team </a>





        </li>


      </ul>
    </nav>





    <div class="header__mobile-menu-social">
      <div class="header__mobile-menu-connect">
        <div>
          <div
            data-cmp-data-layer="{&#34;text-6ff695bf7e&#34;:{&#34;@type&#34;:&#34;kyndrylprogram/components/text&#34;,&#34;repo:modifyDate&#34;:&#34;2021-08-20T02:54:36Z&#34;,&#34;xdm:text&#34;:&#34;&lt;p>Connect with Kyndryl&lt;/p>\r\n&#34;}}"
            id="text-6ff695bf7e" class="cmp-text">
            <p>Connect with Kyndryl</p>

          </div>



        </div>
      </div>
      <div class="header__mobile-menu-contact">
        <div>
          <div
            data-cmp-data-layer="{&#34;text-4028c6f3a1&#34;:{&#34;@type&#34;:&#34;kyndrylprogram/components/text&#34;,&#34;repo:modifyDate&#34;:&#34;2021-08-20T02:54:36Z&#34;,&#34;xdm:text&#34;:&#34;&lt;p>&lt;a title=\&#34;Contact Us\&#34; href=\&#34;https://contact.kyndryl.com/en_contactus.html\&#34; target=\&#34;_blank\&#34;>Contact Us&lt;/a>&lt;/p>\r\n&#34;}}"
            id="text-4028c6f3a1" class="cmp-text">
            <p><a title="Contact Us" href="https://contact.kyndryl.com/en_contactus.html" target="_blank">Contact Us</a><span class="traicon-icon--arrow-right"></span></p>

          </div>



        </div>
      </div>
      <div class="header__mobile-menu-media">
        <div>

          <div class="cmp-social"
            data-cmp-data-layer="{&#34;social-18ee061dd6&#34;:{&#34;@type&#34;:&#34;kyndrylprogram/components/social&#34;,&#34;name&#34;:&#34;social&#34;,&#34;socialItems&#34;:&#34;[{\&#34;type\&#34;:\&#34;linkedin\&#34;,\&#34;mainLink\&#34;:\&#34;https://www.linkedin.com/company/kyndryl/\&#34;,\&#34;iconPath\&#34;:\&#34;/content/dam/kyndrylprogram/linkedin.png\&#34;},{\&#34;type\&#34;:\&#34;twitter\&#34;,\&#34;mainLink\&#34;:\&#34;https://twitter.com/kyndryl\&#34;,\&#34;iconPath\&#34;:\&#34;/content/dam/kyndrylprogram/twitter.png\&#34;}]&#34;}}">
            <p class="cmp-social__title">Follow Kyndryl</p>
            <ul class="cmp-social__list">
              <li class="cmp-social__item">
                <a class="cmp-social__link" href="https://www.linkedin.com/company/kyndryl/">
                  <img class="cmp-social__image" src="${linkedin}" alt="" />
                  <span class="cmp-social__link-text">linkedin</span>
                </a>
              </li>

              <li class="cmp-social__item">
                <a class="cmp-social__link" href="https://twitter.com/kyndryl">
                  <img class="cmp-social__image" src="${twitter}" alt="" />
                  <span class="cmp-social__link-text">twitter</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="header__mobile-menu-language-nav">
      
    </div>
  </div>

</div>
`;

