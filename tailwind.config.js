/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          indigo: '#4f46e5',
          violet: '#7c3aed',
          dark: '#0f172a',
          slate: '#64748b',
          light: '#f8fafc',
          emerald: '#047857',
          wa: '#25D366',
          waHover: '#1eb958'
        }
      },
      fontFamily: {
        sans: ['Segoe UI', 'Noto Sans Bengali', 'system-ui', 'sans-serif'],
      },
      animation: {
        'grad-shift': 'gradShift 7s ease infinite',
        'shine': 'shine 3.4s ease infinite',
        'tag-pulse': 'tagPulse 2.6s ease-in-out infinite',
      },
      keyframes: {
        gradShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        shine: {
          '0%': { left: '-70%' },
          '60%, 100%': { left: '130%' },
        },
        tagPulse: {
          '0%, 100%': { transform: 'translateX(-50%) scale(1)' },
          '50%': { transform: 'translateX(-50%) scale(1.06)' },
        }
      }
    },
  },
  plugins: [],
}
