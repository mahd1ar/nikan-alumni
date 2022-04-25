module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs',
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  plugins: [],
  ignorePatterns: ['types/types.ts'],
  // add your custom rules here
  rules: {
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: [],
      },
    ],
  },
}
