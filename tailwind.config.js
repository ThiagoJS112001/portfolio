/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Lima elétrico — destaque forte, distinto do azul SaaS genérico
        primary: {
          DEFAULT: '#D4F500',
          dark: '#A8C700',
          soft: 'rgba(212, 245, 0, 0.12)',
        },
        // Coral quente — destaque secundário
        accent: {
          DEFAULT: '#FF6B35',
          dark: '#E5552A',
        },
        secondary: '#8A8A85',
        // Tema dark editorial
        bg: {
          primary: '#0A0A0A',
          secondary: '#141414',
          tertiary: '#1F1F1F',
          inverse: '#FAFAFA',
        },
        text: {
          primary: '#FAFAFA',
          secondary: '#A0A09A',
          light: '#6B6B6B',
          inverse: '#0A0A0A',
        },
        border: '#2A2A2A',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-instrument-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.7s ease-out',
        'marquee': 'marquee 40s linear infinite',
        'drift': 'drift 20s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(20px, -20px)' },
        },
      },
    },
  },
  plugins: [],
}
