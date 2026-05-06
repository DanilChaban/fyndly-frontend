const eslint = require("@eslint/js");
const { defineConfig } = require("eslint/config");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");
const prettier = require("eslint-plugin-prettier");
const prettierConfig = require("eslint-config-prettier");

module.exports = defineConfig([
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommended,
      tseslint.configs.stylistic,
      angular.configs.tsRecommended,
    ],
    plugins: {
      prettier,
    },
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "fl",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "fl",
          style: "kebab-case",
        },
      ],
      "prettier/prettier": "error",
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      angular.configs.templateRecommended,
      angular.configs.templateAccessibility,
    ],
    plugins: {
      prettier,
    },
    rules: {
      "prettier/prettier": [
        "error",
        {
          parser: "angular",
        },
      ],
    },
  },
  prettierConfig,
]);
