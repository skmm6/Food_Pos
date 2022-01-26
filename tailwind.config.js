module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Barlow', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
     },
     placeholderColor: theme => theme('colors'),
     placeholderColor: {
      'primary': '#3490dc',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
      'in-gray':'#889898',
     },
    extend: {
      colors: {
        'basedark': '#1F1D2B',
        'primory': '#EB966A',
        'primoryop': '#eb956a42',
        'navitem': '#EA7C69',
        'bacdark': '#252836',
        't-gray': '#E0E6E9',
        'in-gray': '#2D303E',
        't-2-gray': '#ABBBC2',
        'red': '#FF7CA3',
        'fafafa': '#FAFAFA',
      },
      backgroundImage: theme => ({
        'bgnavitem': "url('./assets/img/Pattern.png')",
        'bgnavitemgr': "url('./assets/img/Patterngr.svg')",
       }),
       boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        none: 'none',
        itemnav: '0px 8px 24px rgba(234, 124, 105, 0.32)',
      },
      borderColor: theme => ({
        ...theme('colors'),
         DEFAULT: theme('colors.gray.300', 'currentColor'),
        'primary': '#3490dc',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
        'input-gray': "#393C49",
        'navitem': '#EA7C69',
        'red': '#FF7CA3',
       }),
       height: {
        xxxxxl: '650px',
        h454: '454px',
       },
       minWidth: {
        '192': '192px',
        '104': '104px',
        '409': '409px',
       },
       maxWidth: {
        '100': '100px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
