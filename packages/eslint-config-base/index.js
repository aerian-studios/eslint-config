module.exports = {
    extends: [
        "es/browser",
        "plugin:import/react",
        "plugin:prettier/recommended"
    ],
    plugins: ["jest", "import", "prettier"],
    parser: "babel-eslint",
    env: {
        mocha: false,
        es6: true,
        browser: true,
        "jest/globals": true
    },
    overrides: [
        {
            files: ["**/*.js", "**/*.jsx"],

            parser: "babel-eslint",
            parserOptions: {
                sourceType: "module",
                ecmaVersion: 2019,
                ecmaFeatures: {
                    impliedStrict: true
                }
            },

            rules: {
                "babel/object-curly-spacing": "always",
                "sort-imports": 0,
                "no-console": 0,
                "import/no-commonjs": "error",
                "import/no-amd": "error",
                "import/no-duplicates": "error",
                "import/no-dynamic-require": "error",
                "import/no-extraneous-dependencies": "error",
                "import/no-mutable-exports": "error",

                // No mocha
                "mocha/handle-done-callback": false,
                "mocha/max-top-level-suites": false,
                "mocha/no-async-describe": false,
                "mocha/no-exclusive-tests": false,
                "mocha/no-global-tests": false,
                "mocha/no-identical-title": false,
                "mocha/no-nested-tests": false,
                "mocha/no-pending-tests": false,
                "mocha/no-return-and-callback": false,
                "mocha/no-sibling-hooks": false,
                "mocha/no-skipped-tests": false,
                "mocha/no-synchronous-tests": false,
                "mocha/no-top-level-hooks": false,
                "mocha/valid-suite-description": false,
                "mocha/valid-test-description": false,

                "unicorn/import-index": false
            }
        }
    ],
    rules: {
        "no-array-constructor": "off",
        "prefer-const": [
            "warn",
            {
                destructuring: "all",
                ignoreReadBeforeAssign: false
            }
        ]
    }
};
