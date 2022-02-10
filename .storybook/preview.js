import '!style-loader!css-loader!sass-loader!../src/styles/_global.storybook.scss';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  grid: {
    cellSize: 8,
    gridOn: false,
    columns: 16,
    gap: '32px',
    gutter: '1.5rem',
    maxWidth: '1584px',
  },
  viewport: {
    viewports: {
      mobile1: {
        name: 'Small mobile',
        styles: {
          height: '568px',
          width: '320px',
        },
        type: 'mobile',
      },
      mobile2: {
        name: 'Large mobile',
        styles: {
          height: '896px',
          width: '414px',
        },
        type: 'mobile',
      },
      tablet: {
        name: 'Tablet',
        styles: {
          height: '1113px',
          width: '834px',
        },
        type: 'tablet',
      },
      laptop1: {
        name: 'Laptop',
        styles: {
          height: '737px',
          width: '1311px',
        },
        type: 'desktop',
      },
      laptop2: {
        name: 'Large laptop',
        styles: {
          height: '890px',
          width: '1583px',
        },
        type: 'desktop',
      },
      desktop: {
        name: 'Large desktop',
        styles: {
          height: '1440px',
          width: '2560px',
        },
        type: 'desktop',
      },
    },
  },
}