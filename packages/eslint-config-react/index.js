module.exports = {
    extends: [
        "plugin:react/recommended",
        "@aerian/eslint-config",
        "prettier/react"
    ],
    plugins: ["react-hooks"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
        "react/prop-types": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn"
    },
    settings: {
        "import/extensions": [".js", ".jsx"]
    }
};
