import { css } from "lit-element";

export default css`
  .button__icon,
  .header__mobile-menu-social .cmp-text a:after,
  .icon,
  [class*=" icon-"],
  [class^="icon-"] {
    font-family: kyndryl-Icons !important;
    speak: never;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .icon-close:before {
    content: "\\E909";
  }
  .icon-hamburger:before {
    content: "\\E90A";
  }
  .icon-chevron-up:before {
    content: "\\E908";
  }
  .icon-chevron-down:before {
    content: "\\E903";
  }
  .icon-linkedin:before {
    content: "\\E900";
  }
  .icon-twitter:before {
    content: "\\E902";
  }
  .icon-icon--pdf:before {
    content: "\\E904";
  }
  .icon-icon--pop-out:before {
    content: "\\E907";
  }
  .icon-icon--arrow-right:before {
    content: "\\E905";
  }
  .icon-icon--arrow-left:before {
    content: "\\E906";
  }
  .icon-icon--arrow-up {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  .icon-icon--arrow-up:before {
    content: "\\E906";
  }
  .icon-icon--play:before {
    content: "\\E901";
  }
`;
