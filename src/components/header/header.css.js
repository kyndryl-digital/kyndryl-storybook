import { css } from 'lit-element';
export default css`
  .button__icon, .header__mobile-menu-social .cmp-text a:after, .icon, [class*=" icon-"], [class^=icon-] {
    font-family: kyndryl-Icons !important;
    speak: never;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
  }

  *, :after, :before {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 1pc;
 
    line-height: 1.5;

}

.aem-Grid.aem-Grid--default--12>.aem-GridColumn.aem-GridColumn--default--12 {
  float: left;
  clear: none;
  width: 100%;
}

  .icon-close:before {
    content: ""
  }

  .icon-hamburger:before {
    content: ""
  }

  .icon-chevron-up:before {
    content: ""
  }

  .icon-chevron-down:before {
    content: ""
  }

  .icon-linkedin:before {
    content: ""
  }

  .icon-twitter:before {
    content: ""
  }

  .icon-icon--pdf:before {
    content: ""
  }

  .icon-icon--pop-out:before {
    content: ""
  }

  .icon-icon--arrow-right:before {
    content: ""
  }

  .icon-icon--arrow-left:before {
    content: ""
  }

  .icon-icon--arrow-up {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg)
  }

  .icon-icon--arrow-up:before {
    content: ""
  }

  .icon-icon--play:before {
    content: ""
  }

  .header a {
    color: #187e3f;
    font-weight: 600;
    text-decoration: none;
  }

  .header {
    font-family: 'TWK Everett', Helvetica, Arial, sans-serif;
    background-color: #fff;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 500;
  }


  .header__container {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: no-wrap;
    flex-wrap: no-wrap;
  }

  
  .cmp-image__image {
    width: 100%;
  }
  
  .header__logo {
    width: 124px;
  }

  .header__logo img {
    display: block;
  }

  .header__desktop-menu {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
  }

  .cmp-navigation {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
  }
  
  .cmp-navigation__group {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .header__desktop-menu .cmp-navigation__group {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
  }
  
  .header__desktop-menu .cmp-navigation>.cmp-navigation__group {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
  }
  .cmp-navigation__item--main {
     padding: 0;
  }
  
  .header__desktop-menu .cmp-navigation__item--main {
    margin: 0 50px 0 0;
  }

  .cmp-navigation__item-link {
    color: #3d3c3c;
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
  }
  .cmp-navigation__item-link--level-0 {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .header__desktop-menu .cmp-navigation__item--main:hover>.cmp-navigation__item-link--level-0,
  .header__desktop-menu .cmp-navigation__item-link--level-0:hover {
    border-bottom: 2px solid #ff462d;
    padding-bottom: 26px;
  }
  .header__desktop-menu .cmp-navigation__item-link {
    color: #3d3c3c;
  }
  .header__desktop-menu .cmp-navigation__item-link--level-0 {
    padding: 28px 15px 28px 0;
  }
  .header__desktop-menu .cmp-navigation__item-link--level-0.cmp-navigation__item-link-sub {
    padding-right: 0;
  }
  .cmp-navigation__item-link-icon {
    font-size: 7px;
    pointer-events: none;
  }
  .header__desktop-menu .cmp-navigation__item-link-icon {
    margin-left: 24px;
  }
  
  
  .cmp-navigation__group-container--level-0 {
    display: none;
  }
  .header__desktop-menu .cmp-navigation__item--main:hover>.cmp-navigation__group-container--level-0 {
    display: block;
  }
  .header__desktop-menu .cmp-navigation__group-container--level-0 {
    border-bottom: 2px solid #ff462d;
    background-color: #fff;
    //display: none;
    left: 0;
    position: absolute;
    top: 100%;
    width: 100%;
  }

  
  .header__desktop-menu .cmp-navigation__group-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding-bottom: 58px;
    padding-top: 40px;
    width: 100%;
  }

  .header__desktop-menu .cmp-navigation__group-right-container {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 380px;
    flex: 0 0 380px;
    margin: 0 18px 0 0;
  }
  .cmp-navigation__learn-title {
    color: #3d3c3c;
    font-size: 18px;
    font-weight: 300;
    line-height: 24px;
    margin-bottom: 38px;
    margin-top: 0px;
  }
  .cmp-navigation__learn-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .cmp-navigation__learn-list-item {
    margin: 0 0 18px;
    padding: 0;
  }
  .cmp-navigation__learn-link {
    color: #3d3c3c;
    font-size: 1pc;
    line-height: 22px;
  }
  .cmp-navigation__address-title {
    font-size: 18px;
    font-weight: 300;
    line-height: 24px;
    margin-bottom: 18px;
  }
  .cmp-navigation__address-content {
    font-size: 1pc;
    font-style: normal;
    line-height: 26px;
  }
  .cmp-navigation__group {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .header__desktop-menu .cmp-navigation__group {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
  }
  .header__desktop-menu .cmp-navigation__item--level-0:first-child .cmp-navigation__group {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  
  .header__desktop-menu .cmp-navigation__item--level-0:first-child .cmp-navigation__item--level-1 {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 33.333%;
    flex: 0 1 33.333%;
    padding: 0 34px 0 0;
  }
  .cmp-navigation__item--level-1 {
    padding: 0 0 28px;
  }
  .cmp-navigation__item-link {
    color: #3d3c3c;
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
  }
  .header__desktop-menu .cmp-navigation__item-link {
    color: #3d3c3c;
  }
  .header__desktop-menu .cmp-navigation__item-link--landing, .header__desktop-menu .cmp-navigation__item-link--level-1 {
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
  }
  .header__desktop-menu .cmp-navigation__item--level-0:first-child .cmp-navigation__item-description {
    color: #565049;
    font-size: 1pc;
    font-weight: 400;
    line-height: 22px;
    margin-top: 8px;
    margin-bottom: 38px;
  }
  
  .header__desktop-menu .cmp-navigation__item-link {
    color: #3d3c3c;
  }
  .header__desktop-menu .cmp-navigation__item-link--landing, .header__desktop-menu .cmp-navigation__item-link--level-1 {
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
  }
  .header__desktop-menu .cmp-navigation__item-link--landing {
    display: none;
  }
  .header__desktop-menu .cmp-navigation__item--level-0:first-child .cmp-navigation__item-link--landing {
    display: block;
    padding: 0 34px 0 0;
  }
  
  
  
  
  
  
  
  
  ////////// cmp-navigation__group-wrapper

  .header__language-nav {
    -webkit-box-flex: 0;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
  }
  .cmp-languagenavigation {
    position: relative;
  }
  .cmp-languagenavigation__current-lang {
    border: none;
    background-color: transparent;
    padding-right: 20px;
    color: #3d3c3c;
    font: inherit;
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
  .cmp-languagenavigation__item--active>.cmp-languagenavigation__item-link {
    font-weight: 500;
  }

  .header__mobile-nav {
    padding: 36px 0;
}
.header__mobile-nav {
    background-color: #fff;
    display: none;
    height: calc(100vh - 60px);
    overflow: auto;
    position: absolute;
    right: -100%;
    top: 60px;
    -webkit-transition: right .35s ease;
    transition: right .35s ease;
    width: 100%;
    z-index: 100;
}

.header__mobile-menu, .header__mobile-nav {
  display: none;
}

.header__trigger-menu--close, .header__trigger-menu--open {
  background-color: transparent;
  border: 0;
  font-size: 18px;
  line-height: 1;
}

.header__trigger-menu--close {
  display: none;
}

.header__mobile-nav--opened .header__mobile-nav {
  right: 0;
}

.header__mobile-nav .cmp-navigation {
  padding: 0;
}

.cmp-navigation {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

.cmp-navigation__group {
  list-style: none;
  margin: 0;
  padding: 0;
}

.cmp-navigation__item--main {
  padding: 0;
}

.cmp-navigation__item-link-icon {
  font-size: 7px;
  pointer-events: none;
}

.header__mobile-nav .cmp-navigation__item-link--level-0 {
  border-bottom: 1px solid #bbb;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  line-height: 21px;
  margin: 0 36px;
  padding: 22px 0 21px;
}
.cmp-navigation__item-link--level-0 {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.header__mobile-nav .cmp-navigation__group-container--level-0 {
  background-color: #f2f1ee;
}
.cmp-navigation__group-container--level-0 {
  height: 0;
  overflow: hidden;
  -webkit-transition: height .25s linear;
  transition: height .25s linear;
}

.header__mobile-nav .cmp-navigation__group-container--level-0>.cmp-navigation__group-wrapper {
  padding: 41px 36px 28px;
  border-bottom: 2px solid #ff462d;
  border-top: 1px solid #bbb;
}



.cmp-navigation__group-wrapper>div {
  opacity: 0;
  -webkit-transition: opacity .25s linear;
  transition: opacity .25s linear;
}

.header__mobile-nav .cmp-navigation__item-link--landing {
  display: block;
  margin: 0 0 28px;
}

.cmp-navigation__item-link {
  color: #3d3c3c;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
}

.cmp-navigation__group {
  list-style: none;
  margin: 0;
  padding: 0;
}

.header__mobile-nav .cmp-navigation__item-link--level-1 {
  font-size: 1pc;
  line-height: 21px;
}
.cmp-navigation__item-link {
  color: #3d3c3c;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
}

.header__mobile-nav .cmp-navigation__item--level-0:first-child .cmp-navigation__item--level-1 {
  padding-left: 20px;
}
.cmp-navigation__item--level-1 {
  padding: 0 0 28px;
}


.header__mobile-nav--opened .header__trigger-menu--open {
  display: none;
}

.header__mobile-nav--opened .header__trigger-menu--close {
  display: block;
}

  @media (max-width: 1022px) {

    .header__desktop-menu, .header__language-nav {
        display: none;
    }

    
    .header__mobile-menu {
        height: 60px;
        padding: 21px 0;
        position: relative;
    }

    .header__mobile-menu {
      height: 60px;
      padding: 21px 0;
      position: relative;
  }
  
  .header__mobile-menu, .header__mobile-nav {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
  }

  .base-content-container {
    margin-left: auto;
    margin-right: auto;
    padding-left: 18px;
    padding-right: 18px;
    width: 100%;
  }

  .header__logo {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 82px;
    flex: 0 0 82px;
    margin: 0;
    padding: 20px 0 10px;
}

.header__mobile-menu, .header__mobile-nav {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}
}


  
`;
