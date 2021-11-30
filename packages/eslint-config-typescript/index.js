module.exports = {
    extends: [
        "eslint-config-prettier",
        "eslint-config-prettier/@typescript-eslint",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
    ],
    plugins: ["@typescript-eslint"],
    settings: {
        "import/resolver": {
            typescript: {},
        },
    },
    overrides: [
        {
            files: ["**/*.ts", "**/*.tsx"],
            parser: "@typescript-eslint/parser",
            parserOptions: {
                ecmaVersion: 12,
                sourceType: "module",
                ecmaFeatures: {
                    jsx: true,
                },
            },
            rules: {
                //https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#i-am-using-a-rule-from-eslint-core-and-it-doesnt-work-correctly-with-typescript-code
                "default-case": "off",
                "no-dupe-class-members": "off",
                "no-magic-numbers": "off",
                "@typescript-eslint/adjacent-overload-signatures": "error",
                "@typescript-eslint/await-thenable": "warn",
                "@typescript-eslint/explicit-member-accessibility": "warn",
                indent: "off",
                complexity: ["warn", 8],
                "@typescript-eslint/consistent-type-assertions": [
                    "error",
                    {
                        assertionStyle: "as",
                        objectLiteralTypeAssertions: "allow-as-parameter",
                    },
                ],
                "no-array-constructor": "off",
                "@typescript-eslint/no-array-constructor": "error",
                "@typescript-eslint/no-empty-interface": [
                    "warn",
                    {
                        allowSingleExtends: true,
                    },
                ],
                "@typescript-eslint/no-explicit-any": "warn",
                "@typescript-eslint/no-inferrable-types": "warn",
                "@typescript-eslint/no-misused-new": "error",
                "@typescript-eslint/no-namespace": "error",
                "@typescript-eslint/triple-slash-reference": "error",
                "no-unused-vars": "off",
                "@typescript-eslint/no-unused-vars": [
                    "warn",
                    {
                        args: "none",
                        ignoreRestSiblings: true,
                        argsIgnorePattern: "^_",
                        varsIgnorePattern: "^_",
                    },
                ],
                "import/no-commonjs": "off",
                "no-use-before-define": "off",
                "@typescript-eslint/no-use-before-define": [
                    "warn",
                    {
                        functions: true,
                        classes: true,
                        variables: true,
                    },
                ],
                "@typescript-eslint/no-var-requires": "error",
                "@typescript-eslint/prefer-namespace-keyword": "error",
                "@typescript-eslint/array-type": [
                    "warn",
                    { default: "array-simple" },
                ],
                "no-useless-constructor": "off",
                "@typescript-eslint/no-useless-constructor": "warn",
                "@typescript-eslint/ban-types": [
                    "error",
                    {
                        types: {
                            Object: "Use {} instead, or type properly",
                            String: {
                                message: "Use string instead",
                                fixWith: "string",
                            },
                            Number: {
                                message: "Use number instead",
                                fixWith: "number",
                            },
                        },
                    },
                ],
                "@typescript-eslint/prefer-regexp-exec": "warn",
            },
        },
    ],
};
