/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
  ],
  env: {
    "vue/setup-compiler-macros": true,
  },
  rules: {
    eqeqeq: "off",
    "one-var": "off",
    "no-mixed-operators": "off",
    "vue/order-in-components": "off",
    camelcase: "off",
    "no-unused-vars": "off",
    "no-unused-expressions": "off",
    "no-redeclare": "off",
    "no-irregular-whitespace": "off",
    "vue/require-valid-default-prop": "off",
    "prefer-promise-reject-errors": "off",
    "vue/require-default-prop": "off",
    "handle-callback-err": "off",
    "import/no-duplicates": "off",
    "standard/no-callback-literal": "off",
    "standard/object-curly-even-spacing": "off",
    "vue/require-v-for-key": "off",
    "no-undef": "off",
    "new-cap": "off",
    "vue/require-prop-types": "off",
    "no-sequences": "off",
    "vue/this-in-template": "off",
    "no-throw-literal": "off",
    "no-use-before-define": "off",
    "no-array-constructor": "off",
    "no-useless-escape": "off",
    "vue/no-side-effects-in-computed-properties": "off",
    "vue/attributes-order": "off",
    "no-return-await": "off",
    "no-inner-declarations": "off",
    "standard/computed-property-even-spacing": "off",
    "no-trailing-spaces": "off",
    "no-new": "off",
    "no-fallthrough": "off",
    "vue/no-unused-vars": "off",
    "vue/no-confusing-v-for-v-if": "off",
    "no-useless-call": "off",
    "no-return-assign": "off",
    "vue/no-parsing-error": "off",
    "vue/no-dupe-keys": "off",
    "no-proto": "off",
    "no-func-assign": "off",
    "no-eval": "off",
    "no-dupe-keys": "off",
    "no-cond-assign": "off",
    "brace-style": "off",
    "vue/attribute-hyphenation": "off",
  },
};
