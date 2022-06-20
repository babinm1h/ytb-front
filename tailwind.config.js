module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontWeight: {
      'medium': '500',
      'semibold': '600',
    },
    extend: {
      colors: {
        'primaryBlue': "rgb(6, 95, 212)",
        'myGray': "#606060",
        'disabledGray': "#909090",
        'lightGray': "rgba(0, 0, 0, 0.1)",
        'lightBlue': '#1a73e8'
      },
      boxShadow: {
        'xs': '0 0px 1px 0px rgb(6, 95, 212)',
        'popup': '0px 1px 5px rgba(0,0,0,0.35)'
      },
      padding: {
        'sidebar': '135px',
        'header': '70px',
        'sidebar-mini': '105px',
      },
      screens: {
        "xs": "480px"
      },
      keyframes: {
        tab: {
          '0%': {
            'transform': 'scaleX(0)',
            'opacity': '0.3'
          },

          '100%': {
            'transform': 'scaleX(1)',
            'opacity': '1'
          }
        }
      },
      animation: {
        'tab': "tab 0.3s ease"
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar'),
  ],
}