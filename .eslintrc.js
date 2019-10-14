module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': [
      // eslint校验不成功后，error或2则报错，warn或1则警告，off或0则无提示
      'error',
      {
        semi: false,
        singleQuote: true,
        printWidth: 160
      }
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
