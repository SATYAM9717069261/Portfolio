/* eslint-env node */
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:solid/typescript",
    "plugin:prettier/recommended",
  ],
  rules: {
    // ----- Naming conventions -----
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "class",
        format: ["PascalCase"],
      },
      {
        selector: "variable",
        format: ["camelCase", "UPPER_CASE"],
        leadingUnderscore: "allow",
      },
      {
        selector: "function",
        format: ["camelCase"],
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
    ],

    // ----- Formatting & style -----
    indent: ["error", 2],
    quotes: ["error", "single", { avoidEscape: true }],
    semi: ["error", "always"],
    "max-len": ["error", { code: 100 }],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",

    // ----- TS rules -----
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],

    // ----- Prettier -----
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        semi: true,
        printWidth: 100,
        tabWidth: 2,
        trailingComma: "none",
      },
    ],
  },
};
