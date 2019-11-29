module.exports = {
    extends: ["plugin:import/typescript"],
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
                "default-case": "off",
                "no-dupe-class-members": "off",
                "no-undef": "off",
                "no-magic-numbers": "off",
                "@typescript-eslint/adjacent-overload-signatures": "error",
                "@typescript-eslint/await-thenable": "warn",
                camelcase: "off",
                "@typescript-eslint/camelcase": [
                    "warn",
                    { properties: "never" }
                ],
                "@typescript-eslint/class-name-casing": "error",
                "@typescript-eslint/explicit-member-accessibility": "warn",
                indent: "off",
                "@typescript-eslint/interface-name-prefix": "error",
                "@typescript-eslint/consistent-type-assertions": [
                    "error",
                    {
                        assertionStyle: "as",
                        objectLiteralTypeAssertions: "allow-as-parameter"
                    }
                ],
                "no-array-constructor": "off",
                "@typescript-eslint/no-array-constructor": "error",
                "@typescript-eslint/no-empty-interface": [
                    "warn",
                    {
                        allowSingleExtends: true
                    }
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
                        varsIgnorePattern: "^_"
                    }
                ],
                "import/no-commonjs": "off",
                "@typescript-eslint/no-var-requires": "error",
                "@typescript-eslint/prefer-namespace-keyword": "error",
                "@typescript-eslint/array-type": [
                    "warn",
                    { default: "array-simple" }
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
                                fixWith: "string"
                            },
                            Number: {
                                message: "Use number instead",
                                fixWith: "number"
                            }
                        }
                    }
                ]
            }
        }
    ]
};
