// module.exports = {
//   env: {
//     browser: true,
//     es2020: true,
//     jest: true,
//   },
//   extends: [
//     // 'plugin:react/recommended',
//     'airbnb-typescript',
//   ],
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true,
//     },
//     ecmaVersion: 11,
//     project: "./tsconfig.json",
//     sourceType: 'module',
//   },
//   plugins: [
//     // 'react',
//     '@typescript-eslint',
//   ],
//   rules: {
//     'linebreak-style': 0,
//     'import/extensions': 0,
//     'max-len': ['error', { code: 120 }],
//     // 'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
//   },
//   settings: {
//     'import/resolver': {
//       node: {
//         extensions: ['.js', '.jsx', '.ts', '.tsx'],
//       },
//     },
//   },
// };

module.exports = {
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint"
  ],
  "extends": [
    "airbnb-typescript"
  ],
  "parserOptions": {
    "project": "./tsconfig.json",
    "sourceType": "module",
  },
  "rules": {
    "linebreak-style": "off",
    "react/prop-types": "off",
    "max-len": ["error", { "code": 120 }]
  }
};
