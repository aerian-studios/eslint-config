module.exports = {
    extends: [
        "plugin:react/recommended",
        "@aerian/eslint-config",
        "prettier/react"
    ],
    plugins: ["react-hooks", "jsx-a11y"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        "react/jsx-indent": "off",
        "react/prefer-stateless-function": "warn",
        "react/jsx-key": "warn",
        "react/jsx-curly-spacing": "off",
        "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
        "react/prop-types": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react/style-prop-object": "error",
        "react/no-typos": "error",
        "react/no-unescaped-entities": "off",
        "jsx-a11y/accessible-emoji": "warn",
        "jsx-a11y/alt-text": "warn",
        "jsx-a11y/anchor-has-content": "warn",
        "jsx-a11y/anchor-is-valid": [
            "warn",
            {
                aspects: ["noHref", "invalidHref"]
            }
        ],
        "jsx-a11y/aria-activedescendant-has-tabindex": "warn",
        "jsx-a11y/aria-props": "warn",
        "jsx-a11y/aria-proptypes": "warn",
        "jsx-a11y/aria-role": "warn",
        "jsx-a11y/aria-unsupported-elements": "warn",
        "jsx-a11y/heading-has-content": "warn",
        "jsx-a11y/iframe-has-title": "warn",
        "jsx-a11y/img-redundant-alt": "warn",
        "jsx-a11y/no-access-key": "warn",
        "jsx-a11y/no-distracting-elements": "warn",
        "jsx-a11y/no-redundant-roles": "warn",
        "jsx-a11y/role-has-required-aria-props": "warn",
        "jsx-a11y/role-supports-aria-props": "warn",
        "jsx-a11y/scope": "warn"
    },
    settings: {
        "import/extensions": [".js", ".jsx"],
        react: {
            version: "detect"
        }
    }
};
