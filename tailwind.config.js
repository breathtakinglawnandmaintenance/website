/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // High-end, nature-inspired palette
        primary: {
          50: '#f2f7f4',
          100: '#e1ede6',
          200: '#c5dccf',
          300: '#9cc3ad',
          400: '#6fa386',
          500: '#4d876a',
          600: '#3a6b53',
          700: '#2f5644',
          800: '#274537',
          900: '#20392e',
          950: '#11201a',
        },
        secondary: {
          50: '#fbfaf8',
          100: '#f5f3ef',
          200: '#eae5db',
          300: '#d7d0bf',
          400: '#c1b399',
          500: '#a8987b',
          600: '#71604e',
          700: '#71604e',
          800: '#5e4f42',
          900: '#4d4138',
          950: '#29221d',
        },
        stone: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'ui-serif', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(to bottom, rgba(17, 32, 26, 0.7), rgba(17, 32, 26, 0.4))",
      }
    },
  },
  plugins: [],
};