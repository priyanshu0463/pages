import '@tailwindcss/vite'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0A1F3D',
        orange: '#F2611E',
        surface: '#F3F5F8',
        ink: '#4B5563',
        whatsapp: '#25D366',
        primary: {
          DEFAULT: '#0A1F3D',
          dark: '#051229',
          light: '#1a3a6b',
        },
        accent: {
          DEFAULT: '#F2611E',
          dark: '#d94d10',
          light: '#ff7a3d',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'Arial Narrow', 'sans-serif'],
        sans: ['IBM Plex Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'custom-sm': '0 1px 2px 0 rgb(10 31 61 / 0.05)',
        'custom-md': '0 4px 6px -1px rgb(10 31 61 / 0.08), 0 2px 4px -2px rgb(10 31 61 / 0.04)',
        'custom-lg': '0 10px 15px -3px rgb(10 31 61 / 0.1), 0 4px 6px -4px rgb(10 31 61 / 0.05)',
        'custom-xl': '0 20px 25px -5px rgb(10 31 61 / 0.12), 0 8px 10px -6px rgb(10 31 61 / 0.06)',
      },
      borderRadius: {
        DEFAULT: '8px',
        'sm': '4px',
        'md': '12px',
        'lg': '16px',
      },
    },
  },
  plugins: [],
}
