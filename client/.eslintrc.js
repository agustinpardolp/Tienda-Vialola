module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "import"],
  rules: {
    "react/prop-types": "off",
    "no-console": "error",
    "no-eval": "error",
    "simple-import-sort/imports": "error",
    "import/order": ["error", { "newlines-between": "always" }],
  },
};
