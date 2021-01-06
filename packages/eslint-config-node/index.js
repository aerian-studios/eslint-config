module.exports = {
    extends: ["@aerian/eslint-config", "plugin:node/recommended"],
    env: {
        es6: true,
        node: true,
    },

    parserOptions: {
        sourceType: "script",
        ecmaVersion: 2020,
        ecmaFeatures: {
            impliedStrict: true,
        },
    },

    rules: {
        "import/no-commonjs": "off",
        "node/no-callback-literal": "error",
        "node/exports-style": ["warn", "module.exports"],
        "node/file-extension-in-import": [
            "warn",
            "never",
            {
                tryExtensions: [".js", ".node", ".mjs"],
                ".json": "always",
            },
        ],
        "node/prefer-global/buffer": ["warn", "always"],
        "node/prefer-global/console": ["warn", "always"],
        "node/prefer-global/process": ["warn", "always"],
        "node/prefer-global/url-search-params": ["warn", "always"],
        "node/prefer-global/url": ["warn", "always"],
        "node/prefer-promises/dns": "warn",
        "node/prefer-promises/fs": "warn",
    },
};
