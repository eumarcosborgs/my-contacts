module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    node: true
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 11
  },
  plugins: ['@javascript-eslint'],
  rules: {
    'linebreak-style': false,
    'class-methods-use-this': false
  }
}
