export * from '../global/settings';
export * from './button/button';
export * from './example/example';
export * from './modal/modal';
export * from './tabs/tabs';
export * from './wrapper/wrapper';
export * from './header/header';
export * from './footer/footer';
export * from './accordion/accordion';


declare global {
    namespace JSX {
      interface IntrinsicElements {
        [elemName: string]: any;
      }
    }
  }
