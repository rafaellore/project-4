// here we set some constants related to styles, like fonts, colors etc
// this const is used on ThemeProvider of styled-components with allows you to use in the childrens styles

export const theme = {
  colors: {
    primaryColor: '#0A1128',
    secondaryColor: '#dc143c',
    white: '#FFFFFF',
    mediumGray: '#DDDDDD',
  },

  spacings: {
    xsmall: '0.5rem',
    small: '1rem',
    medium: '1.5rem',
    large: '2rem',
    xlarge: '2.5rem',
    xxlarge: '3rem',
    huge: '3.5rem',
    xhuge: '4rem',
  },

  font: {
    sizes: {
      xsmall: '0.5rem',
      small: '1rem',
      medium: '1.5rem',
      large: '2rem',
      xlarge: '2.5rem',
      xxlarge: '3rem',
      huge: '3.5rem',
      xhuge: '4rem',
    },
  },

  media: {
    lteMedium: '(max-width: 768px)',
  },
};
