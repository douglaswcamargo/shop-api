module.exports = {
  extends: 'standard-with-typescript',
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/strict-boolean-expressions': 0
  },
  ignorePatterns: ['**/build/*.*']
}
