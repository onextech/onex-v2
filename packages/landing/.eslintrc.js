module.exports = {
  extends: ['@gravis-os/eslint-config'],
  parser: '@typescript-eslint/parser',
  parserOptions: { project: ['./tsconfig.json'] },
  rules: {
    'perfectionist/sort-objects': 0,
  },
}
