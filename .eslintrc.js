module.exports = {
  extends: ['@gravis-os/eslint-config'],
  root: true,
  rules: {
    'default-case': 1,
    'fp/no-let': 1,
    'fp/no-loops': 1,
    'fp/no-mutating-methods': 1,
    'fp/no-mutation': 1,
    'jsx-a11y/anchor-has-content': 1,
    'jsx-a11y/heading-has-content': 1,
    'no-param-reassign': 1,
    'react/button-has-type': 1,
    'react/destructuring-assignment': 1,
    'react/no-unused-prop-types': 1,
    'unicorn/explicit-length-check': 1,
    'unicorn/no-document-cookie': 1,
  },
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
}
