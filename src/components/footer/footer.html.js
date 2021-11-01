import { html } from "lit-element";
import { formatUrl } from "../../global/mixins/global";
import logo from "../../lib/images/kyndryl-logo.svg";
import linkedin from "../../lib/images/linkedin-dark.svg";
import twitter from "../../lib/images/twitter-dark.svg";

export default html`
  <footer>
    <div class="cmp-footer base-content-container">
      <div class="cmp-footer__header">
        <div class="cmp-footer__header-logo">
          <div
            data-cmp-lazythreshold="0"
            data-cmp-src="/content/experience-fragments/kyndrylprogram/us/en/sites/footer/master/_jcr_content/root/footer_copy/image.coreimg{.width}.svg/1635346702236/kyndryl-logo-footer.svg"
            data-asset="/content/dam/kyndrylprogram/Kyndryl_Logo_footer.svg"
            data-asset-id="1b3950b3-1fe1-4d46-9736-2a1f04f167e1"
            data-title="Kyndryl"
            id="image-8753b7bba7"
            data-cmp-data-layer='{"image-8753b7bba7":{"@type":"kyndrylprogram/components/image","repo:modifyDate":"2021-10-27T14:58:22Z","xdm:linkURL":"/us/en.html","image":{"repo:id":"1b3950b3-1fe1-4d46-9736-2a1f04f167e1","repo:modifyDate":"2021-10-12T14:42:40Z","@type":"image/svg+xml","repo:path":"/content/dam/kyndrylprogram/Kyndryl_Logo_footer.svg","xdm:tags":[],"xdm:smartTags":{}}}}'
            class="cmp-image"
            itemscope=""
            itemtype="http://schema.org/ImageObject"
          >
            <a
              class="cmp-image__link"
              href="${formatUrl("us/en")}"
              data-cmp-clickable=""
              data-cmp-hook-image="link"
            >
              <img
                src="${logo}"
                class="cmp-image__image"
                itemprop="contentUrl"
                data-cmp-hook-image="image"
                alt="Kyndryl"
              />
            </a>
          </div>
        </div>
        <div class="cmp-footer__header-social">
          <div
            class="cmp-social"
            data-cmp-data-layer='{"social-42472252c4":{"@type":"kyndrylprogram/components/social","name":"socialfooter","socialItems":"[{"type":"linkedin","mainLink":"https://www.linkedin.com/company/kyndryl/","iconPath":"/content/dam/kyndrylprogram/en/global/social/linkedin-dark.svg"},{"type":"twitter","mainLink":"https://twitter.com/kyndryl","iconPath":"/content/dam/kyndrylprogram/en/global/social/twitter-dark.svg"}]"}}'
          >
            <p class="cmp-social__title">Follow Kyndryl</p>
            <ul class="cmp-social__list">
              <li class="cmp-social__item">
                <a
                  class="cmp-social__link"
                  target="_blank"
                  href="${formatUrl("company/kyndryl", {
                    host: "linkedin.com",
                  })}"
                >
                  <img class="cmp-social__image" src="${linkedin}" alt="" />
                  <span class="cmp-social__link-text">linkedin</span>
                </a>
              </li>

              <li class="cmp-social__item">
                <a
                  class="cmp-social__link"
                  target="_blank"
                  href="${formatUrl("kyndryl", {
                    host: "twitter.com",
                  })}"
                >
                  <img class="cmp-social__image" src="${twitter}" alt="" />
                  <span class="cmp-social__link-text">twitter</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="cmp-footer__content">
        <div class="cmp-footer__content-col">
          <ul
            id="list-6b91df533d"
            data-cmp-data-layer='{"list-6b91df533d":{"@type":"kyndrylprogram/components/list","repo:modifyDate":"2021-10-27T14:58:22Z"}}'
            class="cmp-list"
          >
            <li
              class="cmp-list__item"
              data-cmp-data-layer='{"list-6b91df533d-item-06105c1ec2":{"@type":"kyndrylprogram/components/list/item","repo:modifyDate":"2021-10-06T19:20:39Z","dc:title":"Services","xdm:linkURL":"/us/en/services.html"}}'
            >
              <article>
                <a
                  class="cmp-list__item-link"
                  href="${formatUrl("us/en/services")}"
                  data-cmp-clickable=""
                >
                  <span class="cmp-list__item-title">Services</span>
                </a>
              </article>
            </li>

            <li
              class="cmp-list__item"
              data-cmp-data-layer='{"list-6b91df533d-item-d1b47bbd39":{"@type":"kyndrylprogram/components/list/item","repo:modifyDate":"2021-10-15T21:02:42Z","dc:title":"Applications, Data and AI","xdm:linkURL":"/us/en/services/applications-data-ai.html"}}'
            >
              <article>
                <a
                  class="cmp-list__item-link"
                  href="${formatUrl("us/en/services/applications-data-ai")}"
                  data-cmp-clickable=""
                >
                  <span class="cmp-list__item-title"
                    >Applications, Data and AI</span
                  >
                </a>
              </article>
            </li>

            <li
              class="cmp-list__item"
              data-cmp-data-layer='{"list-6b91df533d-item-f9eca5df48":{"@type":"kyndrylprogram/components/list/item","repo:modifyDate":"2021-10-15T21:03:23Z","dc:title":"Cloud Services","xdm:linkURL":"/us/en/services/cloud.html"}}'
            >
              <article>
                <a
                  class="cmp-list__item-link"
                  href="${formatUrl("us/en/services/cloud")}"
                  data-cmp-clickable=""
                >
                  <span class="cmp-list__item-title">Cloud Services</span>
                </a>
              </article>
            </li>

            <li
              class="cmp-list__item"
              data-cmp-data-layer='{"list-6b91df533d-item-aa4691af12":{"@type":"kyndrylprogram/components/list/item","repo:modifyDate":"2021-10-16T14:53:33Z","dc:title":"Core Enterprise and zCloud","xdm:linkURL":"/us/en/services/core-enterprise-zcloud.html"}}'
            >
              <article>
                <a
                  class="cmp-list__item-link"
                  href="${formatUrl("us/en/services/core-enterprise-zcloud")}"
                  data-cmp-clickable=""
                >
                  <span class="cmp-list__item-title"
                    >Core Enterprise and zCloud</span
                  >
                </a>
              </article>
            </li>

            <li
              class="cmp-list__item"
              data-cmp-data-layer='{"list-6b91df533d-item-dc7518c087":{"@type":"kyndrylprogram/components/list/item","repo:modifyDate":"2021-10-06T19:26:51Z","dc:title":"Digital Workplace","xdm:linkURL":"/us/en/services/digital-workplace.html"}}'
            >
              <article>
                <a
                  class="cmp-list__item-link"
                  href="${formatUrl("us/en/services/digital-workplace")}"
                  data-cmp-clickable=""
                >
                  <span class="cmp-list__item-title">Digital Workplace</span>
                </a>
              </article>
            </li>

            <li
              class="cmp-list__item"
              data-cmp-data-layer='{"list-6b91df533d-item-96edb08810":{"@type":"kyndrylprogram/components/list/item","repo:modifyDate":"2021-10-06T19:26:51Z","dc:title":"Network and Edge","xdm:linkURL":"/us/en/services/network.html"}}'
            >
              <article>
                <a
                  class="cmp-list__item-link"
                  href="${formatUrl("us/en/services/network")}"
                  data-cmp-clickable=""
                >
                  <span class="cmp-list__item-title">Network and Edge</span>
                </a>
              </article>
            </li>

            <li
              class="cmp-list__item"
              data-cmp-data-layer='{"list-6b91df533d-item-b16b3fc0b8":{"@type":"kyndrylprogram/components/list/item","repo:modifyDate":"2021-10-14T15:26:15Z","dc:title":"Security and Resiliency","xdm:linkURL":"/us/en/services/business-continuity.html"}}'
            >
              <article>
                <a
                  class="cmp-list__item-link"
                  href="${formatUrl("us/en/services/business-continuity")}"
                  data-cmp-clickable=""
                >
                  <span class="cmp-list__item-title"
                    >Security and Resiliency</span
                  >
                </a>
              </article>
            </li>

            <li
              class="cmp-list__item"
              data-cmp-data-layer='{"list-6b91df533d-item-074fd93081":{"@type":"kyndrylprogram/components/list/item","repo:modifyDate":"2021-10-12T05:02:45Z","dc:title":"Advisory &amp; Implementation Services","xdm:linkURL":"/us/en/services/advisory-implementation-services.html"}}'
            >
              <article>
                <a
                  class="cmp-list__item-link"
                  href="${formatUrl(
                    "us/en/services/advisory-implementation-services"
                  )}"
                  data-cmp-clickable=""
                >
                  <span class="cmp-list__item-title"
                    >Advisory &amp; Implementation Services</span
                  >
                </a>
              </article>
            </li>
          </ul>
        </div>
        <div class="cmp-footer__content-col">
          <ul
            id="list-12b30640bb"
            data-cmp-data-layer='{"list-12b30640bb":{"@type":"kyndrylprogram/components/list","repo:modifyDate":"2021-10-27T14:58:22Z"}}'
            class="cmp-list"
          >
            <li
              class="cmp-list__item"
              data-cmp-data-layer='{"list-12b30640bb-item-53adebf38c":{"@type":"kyndrylprogram/components/list/item","repo:modifyDate":"2021-10-06T19:25:34Z","dc:title":"About Us","xdm:linkURL":"/us/en/about-us.html"}}'
            >
              <article>
                <a
                  class="cmp-list__item-link"
                  href="${formatUrl("us/en/about-us")}"
                  data-cmp-clickable=""
                >
                  <span class="cmp-list__item-title">About Us</span>
                </a>
              </article>
            </li>

            <li
              class="cmp-list__item"
              data-cmp-data-layer='{"list-12b30640bb-item-d43a61c5f3":{"@type":"kyndrylprogram/components/list/item","repo:modifyDate":"2021-10-12T05:08:49Z","dc:title":"Leadership","xdm:linkURL":"/us/en/about-us/leadership.html"}}'
            >
              <article>
                <a
                  class="cmp-list__item-link"
                  href="${formatUrl("us/en/about-us/leadership")}"
                  data-cmp-clickable=""
                >
                  <span class="cmp-list__item-title">Leadership</span>
                </a>
              </article>
            </li>

            <li
              class="cmp-list__item"
              data-cmp-data-layer='{"list-12b30640bb-item-de36cce72f":{"@type":"kyndrylprogram/components/list/item","repo:modifyDate":"2021-10-12T05:08:49Z","dc:title":"Contact Us","xdm:linkURL":"/us/en/about-us/contact-us.html"}}'
            >
              <article>
                <a
                  class="cmp-list__item-link"
                  href="${formatUrl("us/en/about-us/contact-us")}"
                  data-cmp-clickable=""
                >
                  <span class="cmp-list__item-title">Contact Us</span>
                </a>
              </article>
            </li>

            <li
              class="cmp-list__item"
              data-cmp-data-layer='{"list-12b30640bb-item-e6db7dec6e":{"@type":"kyndrylprogram/components/list/item","repo:modifyDate":"2021-10-06T19:25:35Z","dc:title":"News and Insights","xdm:linkURL":"/us/en/news.html"}}'
            >
              <article>
                <a
                  class="cmp-list__item-link"
                  href="${formatUrl("us/en/news")}"
                  data-cmp-clickable=""
                >
                  <span class="cmp-list__item-title">News and Insights</span>
                </a>
              </article>
            </li>

            <li
              class="cmp-list__item"
              data-cmp-data-layer='{"list-12b30640bb-item-bcdf80e4f9":{"@type":"kyndrylprogram/components/list/item","repo:modifyDate":"2021-10-12T05:08:49Z","dc:title":"Locations","xdm:linkURL":"/us/en/about-us/locations.html"}}'
            >
              <article>
                <a
                  class="cmp-list__item-link"
                  href="${formatUrl("us/en/about-us/locations")}"
                  data-cmp-clickable=""
                >
                  <span class="cmp-list__item-title">Locations</span>
                </a>
              </article>
            </li>

            <li
              class="cmp-list__item"
              data-cmp-data-layer='{"list-12b30640bb-item-66cb0951af":{"@type":"kyndrylprogram/components/list/item","repo:modifyDate":"2021-10-06T19:25:35Z","dc:title":"Investors","xdm:linkURL":"/us/en/investors.html"}}'
            >
              <article>
                <a
                  class="cmp-list__item-link"
                  href="${formatUrl("us/en/investors")}"
                  data-cmp-clickable=""
                >
                  <span class="cmp-list__item-title">Investors</span>
                </a>
              </article>
            </li>

            <li
              class="cmp-list__item"
              data-cmp-data-layer='{"list-12b30640bb-item-0679180a7a":{"@type":"kyndrylprogram/components/list/item","repo:modifyDate":"2021-10-06T19:25:34Z","dc:title":"Careers","xdm:linkURL":"/us/en/careers.html"}}'
            >
              <article>
                <a
                  class="cmp-list__item-link"
                  href="${formatUrl("us/en/careers")}"
                  data-cmp-clickable=""
                >
                  <span class="cmp-list__item-title">Careers</span>
                </a>
              </article>
            </li>

            <li
              class="cmp-list__item"
              data-cmp-data-layer='{"list-12b30640bb-item-3a6bf8074b":{"@type":"kyndrylprogram/components/list/item","repo:modifyDate":"2021-10-12T05:08:49Z","dc:title":"Alliances","xdm:linkURL":"/us/en/about-us/alliances.html"}}'
            >
              <article>
                <a
                  class="cmp-list__item-link"
                  href="${formatUrl("us/en/about-us/alliances")}"
                  data-cmp-clickable=""
                >
                  <span class="cmp-list__item-title">Alliances</span>
                </a>
              </article>
            </li>
          </ul>
        </div>
      </div>

      <div class="cmp-footer__footer">
        <div class="cmp-footer__footer-col">
          <div class="cmp-footer__footer-links">
            <ul
              id="list-ff58a96ea6"
              data-cmp-data-layer='{"list-ff58a96ea6":{"@type":"kyndrylprogram/components/list","repo:modifyDate":"2021-10-27T14:58:22Z"}}'
              class="cmp-list"
            >
              <li
                class="cmp-list__item"
                data-cmp-data-layer='{"list-ff58a96ea6-item-65be849d07":{"@type":"kyndrylprogram/components/list/item","repo:modifyDate":"2021-10-12T05:01:38Z","dc:title":"Privacy","xdm:linkURL":"/us/en/privacy.html"}}'
              >
                <article>
                  <a
                    class="cmp-list__item-link"
                    href="${formatUrl("us/en/privacy")}"
                    data-cmp-clickable=""
                  >
                    <span class="cmp-list__item-title">Privacy</span>
                  </a>
                </article>
              </li>

              <li
                class="cmp-list__item"
                data-cmp-data-layer='{"list-ff58a96ea6-item-4b5077cc29":{"@type":"kyndrylprogram/components/list/item","repo:modifyDate":"2021-10-12T05:01:38Z","dc:title":"Terms","xdm:linkURL":"/us/en/terms.html"}}'
              >
                <article>
                  <a
                    class="cmp-list__item-link"
                    href="${formatUrl("us/en/terms")}"
                    data-cmp-clickable=""
                  >
                    <span class="cmp-list__item-title">Terms</span>
                  </a>
                </article>
              </li>

              <li
                class="cmp-list__item"
                data-cmp-data-layer='{"list-ff58a96ea6-item-7aee1fc415":{"@type":"kyndrylprogram/components/list/item","repo:modifyDate":"2021-10-17T16:41:23Z","dc:title":"Security","xdm:linkURL":"/us/en/cyber-security.html"}}'
              >
                <article>
                  <a
                    class="cmp-list__item-link"
                    href="${formatUrl("us/en/cyber-security")}"
                    data-cmp-clickable=""
                  >
                    <span class="cmp-list__item-title">Security</span>
                  </a>
                </article>
              </li>

              <li class="cmp-list__item">
                <article>
                  <a
                    class="cmp-list__item-link"
                    href="${formatUrl("us/en/sitemap")}"
                    data-cmp-clickable=""
                  >
                    <span class="cmp-list__item-title">Sitemap</span>
                  </a>
                </article>
              </li>
              <li
                class="cmp-list__item"
                id="teconsent"
                consent="undefined"
                aria-label="Open Cookie Preferences Modal"
                role="complementary"
              ></li>
            </ul>
          </div>
          <div class="cmp-footer__footer-copyright">
            <div id="text-204aca9809" class="cmp-text cmp-rte-text ">
              <p>Copyright © 2021 Kyndryl Inc. All rights reserved<br /></p>
            </div>
          </div>
        </div>
        <div class="cmp-footer__footer-col">
          <div class="cmp-footer__language"></div>
        </div>
      </div>
    </div>
  </footer>
`;
