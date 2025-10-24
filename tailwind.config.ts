import type { Config } from 'tailwindcss'
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
        ink: '#1F2937',
        panna: '#FAFAF9',
        aqua: '#5FD1C3',
        lavanda: '#C7C5F4',
        graywarm: '#E5E7EB'
      },
      borderRadius: {
        '2xl': '1rem'
      }
    }
  }
}
