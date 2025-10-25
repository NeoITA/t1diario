import type { Config } from 'tailwindcss'

const palette = {
  espresso: '#2B1F18',
  moka: '#4C3428',
  crema: '#F8F2E6',
  sabbia: '#E4D4C3',
  teak: '#CDA47A',
  salvia: '#7FA6A0',
  ambra: '#D8743C',
  fumo: '#A48F80'
}

export default <Partial<Config>>{
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './content/**/*.md'
  ],
  theme: {
    extend: {
      colors: {
        ...palette
      },
      borderRadius: {
        '2xl': '1rem'
      }
    }
  }
}
