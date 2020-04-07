module.exports = {
    extends: [
        "plugin:import/react",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "@aerian/eslint-config",
        "prettier/react",
    ],
    plugins: ["react-hooks", "jsx-a11y"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        "react/jsx-indent": "off",
        "react/prefer-stateless-function": "warn",
        "react/jsx-key": "warn",
        "react/jsx-curly-spacing": "off",
        "react/jsx-filename-extension": [
            1,
            { extensions: [".js", ".jsx", ".ts", ".tsx"] },
        ],
        "react/prop-types": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react/style-prop-object": "error",
        "react/no-typos": "error",
        "react/no-unescaped-entities": "off",
    },
    settings: {
        "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
        react: {
            version: "detect",
        },
    },
};
