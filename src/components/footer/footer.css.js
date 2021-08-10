import { css } from 'lit-element';
export default css` 
* {
  font-family: TWK Everett,Helvetica,Arial,sans-serif;
}

.cmp-footer__link:first-child .cmp-list__item:first-child .cmp-list__item-link {
  font-weight: 500;
}
.cmp-list__item-link {
  color: #000;
  font-size: 1pc;
  font-weight: 400;
  line-height: 1;
}

.cmp-container {
  position: relative;
}

.aem-Grid {
  display: block;
  width: 100%;
}

.aem-Grid.aem-Grid--default--12>.aem-GridColumn.aem-GridColumn--default--12 {
  float: left;
  clear: none;
  width: 100%;
}

.cmp-footer {
  padding: 60px 36px 36px;
  width: 100%;
}

.cmp-container__max-width, .cmp-footer, .cmp-navigation__group-wrapper, .header__container {
  max-width: 107pc;
  padding-left: 36px;
  padding-right: 36px;
  margin-left: auto;
  margin-right: auto;
}

.cmp-footer__link:first-child .cmp-list__item:first-child .cmp-list__item-link {
  font-weight: 500;
}



.cmp-footer__image {
  max-width: 125px;
}

a {
  color: #187e3f;
  font-weight: 600;
  text-decoration: none;
}

.cmp-footer__image img {
  display: block;
}

.cmp-image__image {
  width: 100%;
}

.cmp-footer__middle-container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding-top: 60px;
}

.cmp-footer__link-container {
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 0;
  -ms-flex: 0 1 966px;
  flex: 0 1 966px;
  margin-bottom: 153px;
}

.cmp-footer__link {
  -webkit-box-flex: 0;
  -ms-flex: 0 1 220px;
  flex: 0 1 220px;
  overflow: visible;
  margin-right: 56px;
}

.cmp-list {
  list-style: none;
}

.cmp-footer__link:first-child .cmp-list__item:first-child {
  padding-bottom: 28px;
}
.cmp-list__item {
  font-size: 14px;
  line-height: 1;
  padding-bottom: 33px;
}

.cmp-footer__link:first-child .cmp-list__item:first-child .cmp-list__item-link {
  font-weight: 500;
}

.cmp-list__item-link {
  color: #000;
  font-size: 1pc;
  font-weight: 400;
  line-height: 1;
}

.cmp-footer__link__inner-container {
  -webkit-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
}

.cmp-footer__social-container {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 241px;
  flex: 0 0 241px;
}

.cmp-social__title {
  font-weight: 300;
  margin-bottom: 33px;
}

.cmp-social__list {
  list-style: none;
}

.cmp-social__item {
  padding-bottom: 33px;
}

.cmp-social__link {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #000;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 14px;
  line-height: 1;
}

.cmp-footer__language-footer-text .cmp-text {
  margin-bottom: 0;
}

.cmp-text {
  font-size: 1rem;
  line-height: 1.5rem;
  color: #3d3c3c;
  margin-bottom: 5pc;
}


.cmp-footer__language-footer-text .cmp-text p {
  font-size: 14px;
}

.cmp-footer__language-footer-text a {
  color: #000;
  text-decoration: none;
  margin-left: 5pc;
}

.cmp-footer__bottom-container {
  border-top: 1px solid #bbb;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 22px;
  padding-top: 20px;
}

.cmp-footer__copyright {
  -webkit-box-flex: 0;
  -ms-flex: 0 1 414px;
  flex: 0 1 414px;
}


.cmp-footer__copyright .cmp-text {
  margin-bottom: 0;
  font-weight: 400;
}

.cmp-footer__copyright .cmp-text p {
  font-size: 9pt;
}

.cmp-footer__bottom-link {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 1131px;
  flex: 1 1 1131px;
  padding-left: 5pc;
}

.cmp-footer__bottom-link .cmp-list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.cmp-footer__bottom-link .cmp-list__item {
  -webkit-box-flex: 0;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  margin-right: 1pc;
  min-width: 122px;
  padding-bottom: 0;
}

.cmp-footer__bottom-link .cmp-list__item-link {
  font-size: 14px;
  font-weight: 500;
}

.cmp-footer__language {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  margin-bottom: auto;
}

.cmp-languagenavigation {
  position: relative;
}

@media (min-width: 1200px)
.cmp-footer .cmp-languagenavigation__current-lang {
    white-space: nowrap;
}
.cmp-footer .cmp-languagenavigation__current-lang, .header__mobile-nav .cmp-languagenavigation__current-lang {
    font-size: 14px;
}
.cmp-languagenavigation__current-lang {
    border: none;
    background-color: transparent;
    padding-right: 20px;
    color: #3d3c3c;
}

.button__icon, .header__mobile-menu-social .cmp-text a:after, .icon, [class*=" icon-"], [class^=icon-] {
  font-family: kyndryl-Icons!important;
  speak: never;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.cmp-footer .cmp-languagenavigation__current-lang-icon:before, .header__mobile-nav .cmp-languagenavigation__current-lang-icon:before {
  -webkit-transform: rotate(
180deg
) translateY(50%);
  transform: rotate(
180deg
) translateY(50%);
}

.cmp-languagenavigation__current-lang-icon:before {
  position: absolute;
  right: 0;
  top: 50%;
  font-size: 7px;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  -webkit-transition: -webkit-transform .4s ease-in-out .5s;
  transition: -webkit-transform .4s ease-in-out .5s;
  transition: transform .4s ease-in-out .5s;
  transition: transform .4s ease-in-out .5s,-webkit-transform .4s ease-in-out .5s;
}
.icon-chevron-down:before {
  content: "";
}

@media (min-width: 767px)
.cmp-footer .cmp-languagenavigation>.cmp-languagenavigation__group {
    right: 0;
    bottom: calc(100% + 20px);
    height: unset;
    width: 20em;
    background-color: #fff;
}

.cmp-footer .cmp-languagenavigation>.cmp-languagenavigation__group {
    height: calc(100vh - 139px);
}
.cmp-footer .cmp-languagenavigation>.cmp-languagenavigation__group, .header__mobile-nav .cmp-languagenavigation>.cmp-languagenavigation__group {
    top: auto;
    bottom: 50px;
    right: -36px;
    width: 100vw;
    height: calc(100vh - 150px);
    background-color: #f2f1ee;
    border-top: none;
    border-bottom: 2px solid #ff462d;
}
.cmp-languagenavigation>.cmp-languagenavigation__group {
    position: absolute;
    top: 78px;
    right: 0;
    width: 20em;
    background: #fff;
    opacity: 0;
    visibility: hidden;
    max-height: 2px;
    overflow: hidden;
    border-top: 2px solid #ff462d;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
    -webkit-transition-property: visibility,opacity;
    transition-property: visibility,opacity;
    -webkit-transition-delay: .5s;
    transition-delay: .5s;
    z-index: 900;
}

.cmp-languagenavigation__list-wrapper {
  height: 100%;
  padding-bottom: 30px;
}

.cmp-languagenavigation__list-header {
  padding: 30px 0 20px 20px;
}

.cmp-languagenavigation__list-header {
  padding: 30px 0 20px 20px;
}

@media (min-width: 767px)
.cmp-footer .cmp-languagenavigation__list {
    max-height: 40vh;
}

.cmp-footer .cmp-languagenavigation__list, .header__mobile-nav .cmp-languagenavigation__list {
    max-height: unset;
    height: calc(100% - 5pc);
}
.cmp-languagenavigation__list {
    margin: 0;
    padding: 0;
    list-style: none;
    max-height: 40vh;
    overflow-y: scroll;
}

.cmp-languagenavigation__item {
  padding-bottom: 0;
}

.cmp-languagenavigation__item--active>.cmp-languagenavigation__item-link {
  font-weight: 500;
}

.cmp-languagenavigation__item-link {
  display: block;
  color: #000;
  width: 100%;
  padding: 10px 20px;
  margin-right: 40px;
  font-weight: 400;
  -webkit-transition: background-color .2s ease-in-out;
  transition: background-color .2s ease-in-out;
}

*, :after, :before {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.cmp-list__item-link {
  color: #000;
  font-size: 1pc;
  font-weight: 400;
  line-height: 1;
}
`;