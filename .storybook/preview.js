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
    columns: 12,
    gap: '32px',
    gutter: '1.5rem',
    maxWidth: '1584px',
  },
  viewport: {
    viewports: {
      mobile1: {
        name: 'Small mobile (xs)',
        styles: {
          height: '568px',
          width: '320px',
        },
        type: 'mobile',
      },
      mobile2: {
        name: 'Large mobile (sm)',
        styles: {
          height: '896px',
          width: '414px',
        },
        type: 'mobile',
      },
      tablet: {
        name: 'Tablet (md)',
        styles: {
          height: '1113px',
          width: '834px',
        },
        type: 'tablet',
      },
      laptop1: {
        name: 'Laptop (lg)',
        styles: {
          height: '737px',
          width: '1184px',
        },
        type: 'desktop',
      },
      laptop2: {
        name: 'Large laptop (xlg)',
        styles: {
          height: '890px',
          width: '1583px',
        },
        type: 'desktop',
      },
      desktop: {
        name: 'Large desktop (max)',
        styles: {
          height: '1440px',
          width: '2560px',
        },
        type: 'desktop',
      },
    },
  },
}