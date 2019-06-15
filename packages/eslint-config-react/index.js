module.exports = {
    extends: ["plugin:react/recommended", "@aerian/eslint-config"],
    plugins: ["react-hooks"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        "react/prop-types": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn"
    }
};
