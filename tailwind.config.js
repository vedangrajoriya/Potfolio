/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#e0d8f5',
          200: '#c1b0eb',
          300: '#a389e0',
          400: '#8a70d6', // Main primary
          500: '#7050cc',
          600: '#5a3eb3',
          700: '#452e99',
          800: '#2f1f80',
          900: '#1a0f66',
        },
        secondary: {
          100: '#d6e4ff',
          200: '#adc9ff',
          300: '#84aeff',
          400: '#4a8cff', // Main secondary
          500: '#2870f5',
          600: '#1a58dc',
          700: '#1044b3',
          800: '#08318a',
          900: '#042161',
        },
        dark: {
          100: '#d1d5db',
          200: '#9ca3af',
          300: '#6b7280',
          400: '#4b5563',
          500: '#374151',
          600: '#1f2937', // Main dark bg
          700: '#111827', // Darker bg
          800: '#0d1117',
          900: '#030712',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'gradient-x': 'gradient-x 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
      },
    },
  },
  plugins: [],
};