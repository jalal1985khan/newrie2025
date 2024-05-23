const flowbite = require('flowbite-react/tailwind')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', flowbite.content()],

  theme: {
    extend: {
      boxShadow: {
        custom: '0px 6px 10px 0px rgba(196, 225, 226, 0.20)',
      },
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(180deg, #B4CDFD 44.79%, #C9AFFF 100%)',
      },
    },
  },
  plugins: [flowbite.plugin()],
}
