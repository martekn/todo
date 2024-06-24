module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  overrides: [
    {
      env: {
        node: true
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script"
      }
    },
    {
      files: [
        "cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}",
        "cypress.config.cjs",
        "cypress/support/**/*.{js,ts,jsx,tsx}"
      ],
      env: { "cypress/globals": true, node: true },
      plugins: ["cypress"],
      extends: ["plugin:cypress/recommended"]
    }
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["@typescript-eslint"],
  rules: {}
};
