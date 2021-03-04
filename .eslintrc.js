module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  // https://segmentfault.com/q/1010000013689274?sort=created
  // 解析器类型
  // espima(默认), babel-eslint,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-console': 0,
    'func-names': 0,
    eqeqeq: 0,
    'no-unused-vars': 0,
    'no-restricted-syntax': 0,
    'no-plusplus': 0, // 可以使用 sum ++，   严格模式要使用 sum += 1；
    'class-methods-use-this': 0, // class的方法中可以不调用this
    'no-continue': 0, // for循环可以使用 continue
  },
};
