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
    "max-len": ["error", { "code": 120 }],
    "jsx-a11y/label-has-associated-control": [ 2, {
      "labelComponents": [],
      "labelAttributes": ["label"],
      "controlComponents": [],
      "depth": 3,
    }]
  }
};
