import tailwindTypography from '@tailwindcss/typography'
import pinegrowTailwindCssPlugin from '@pinegrow/tailwindcss-plugin'

export default {
  plugins: [tailwindTypography, pinegrowTailwindCssPlugin],
  get content() {
    const _content = [
      './.vitepress/theme/**/*.vue'
      //...
    ]
    return process.env.NODE_ENV === 'production'
      ? _content
      : [..._content, './_pginfo/**/*.{html,js}'] // used by Vue Desginer for live-designing during development
  }
}
