module.exports = {
  extends: ["plugin:import/typescript", "@aerian/eslint-config"],
  plugins: ["@typescript-eslint"],

  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
        ecmaVersion: 2018,
        sourceType: "module"
      },
      rules: {
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/ban-types": "error",
        camelcase: "off",
        "@typescript-eslint/camelcase": "error",
        "@typescript-eslint/class-name-casing": "error",
        "@typescript-eslint/explicit-member-accessibility": "error",
        indent: "off",
        "@typescript-eslint/interface-name-prefix": "error",
        "@typescript-eslint/no-angle-bracket-type-assertion": "error",
        "no-array-constructor": "off",
        "@typescript-eslint/no-array-constructor": "error",
        "@typescript-eslint/no-empty-interface": "error",
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-inferrable-types": "error",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-namespace": "error",
        "@typescript-eslint/no-object-literal-type-assertion": "error",
        "@typescript-eslint/no-triple-slash-reference": "error",
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/no-use-before-define": "error",
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/prefer-interface": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/array-type": ["warn", "array-simple"]
      }
    }
  ]
};
