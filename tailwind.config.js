module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  corePlugins: {
  },
  theme: {
    fontFamily: {
      'sans': 'Urbanist, sans-serif',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1248px',
      '2xl': '1536px'
    },
    extend: {
      height: theme => ({
        112: '28rem' /* 448px */,
        128: '32rem' /* 512px */,
        144: '36rem' /* 576px */,
        160: '40rem' /* 640px */,
        '1x1/5': '120%',
        '1x2/5': '140%',
        '1x3/5': '160%'
      }),
      width: theme => ({
        112: '28rem' /* 448px */,
        128: '32rem' /* 512px */,
        144: '36rem' /* 576px */,
        160: '40rem' /* 640px */,
        '1x1/5': '120%',
        '1x2/5': '140%',
        '1x3/5': '160%'
      }),

    },
    colors: {
      'accent-secondary': '#009CDE',
      'accent-primary': '#FF9933',
      'transparent': 'transparent',
      'white': 'white',
      'black': 'black',
      'grey': '#E3E3E3',
      'grey-dark': '#4B4B4B',
      'grey-alt': '#ABABAB',
      'grey-29': '#292929',
      'dimmed': '#9D9BA3',
      'section-inverse': '#4B4B4B',
      'section-primary': 'white',
      'section-alt': '#F4F4F4',
      'bg3d': '#E3E3E3',
      'terminal-close': '#ff5f57',
      'terminal-minimize': '#ffbd2d',
      'terminal-maximize': '#2bc840',
    },
    container: {
      center: true,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}
