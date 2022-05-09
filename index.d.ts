declare module'*.scss' {
  const content: {[key: string]: any}
  export = content
}

declare module "*.svg" {
  const content: any;
  export default content;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}
