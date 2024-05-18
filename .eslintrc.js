module.exports = {
  root: true,
  extends: ['universe/native', 'prettier', 'plugin:@tanstack/eslint-plugin-query/recommended'],
  plugins: ['prettier'],
  rules: {
    // Ensures props and state inside functions are always up-to-date
    'react-hooks/exhaustive-deps': 'warn',
    'prettier/prettier': 2,
  },
};
