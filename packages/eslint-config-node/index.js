module.exports = {
    extends: ["plugin:prettier/recommended", "plugin:node/recommended"],
    env: {
        es6: true,
        node: true,
        "jest/globals": true
    },

    parserOptions: {
        sourceType: "script",
        ecmaVersion: 2020,
        ecmaFeatures: {
            impliedStrict: true
        }
    },

    rules: {
        "import/no-commonjs": "off",
        "node/no-callback-literal": "error",
        "node/exports-style": ["error", "module.exports"],
        "node/file-extension-in-import": [
            "warn",
            "never",
            {
                tryExtensions: [".js", ".node", ".mjs"],
                ".json": "always"
            }
        ],
        "node/prefer-global/buffer": ["error", "always"],
        "node/prefer-global/console": ["error", "always"],
        "node/prefer-global/process": ["error", "always"],
        "node/prefer-global/url-search-params": ["error", "always"],
        "node/prefer-global/url": ["error", "always"],
        "node/prefer-promises/dns": "error",
        "node/prefer-promises/fs": "error"
    }
};
