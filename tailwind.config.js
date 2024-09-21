/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: false,
  },
};
