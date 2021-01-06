# @aerian/eslint-config-typescript

This is a sharable ESLint config for TypeScript.

This isn't meant to be used on its own. If you're using plain TypeScript add
`@aerian/eslint-config`. Alternatively, if you're using React, use
`@aerian/eslint-config-react`. If you're using Preact, use
`@aerian/eslint-config-preact`. If you need node, use
`@aerian/eslint-config-node`

To install, run:

```sh
#npm
npm i -D eslint prettier @aerian/eslint-config @aerian/eslint-config-typescript

#yarn
yarn add -D  eslint prettier @aerian/eslint-config @aerian/eslint-config-typescript
```

To use it, create the following .eslintrc.json:

```json
{
    "extends": ["@aerian/eslint-config", "@aerian/eslint-config-typescript"]
}
```

also see config for mono-repos:
https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/MONOREPO.md

The base formatting uses Prettier, which parses and reformats your code. It runs
this through ESLint, so you can run use `eslint . --fix` to apply Prettier
formatting as well as ESLint rules.

By default, the VSCode ESLint plugin doesn't handle TypeScript. To fix this, add
something like the following to your user or workspace settings:

```json
{
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
        "source.fixAll": true
    },
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "typescript",
        "typescriptreact"
    ],
    "[javascript]": {
        "editor.formatOnSave": false
    },
    "[javascriptreact]": {
        "editor.formatOnSave": false
    },
    "[typescript]": {
        "editor.formatOnSave": false
    },
    "[typescriptreact]": {
        "editor.formatOnSave": false
    },
    "eslint.lintTask.enable": true,
    "[json]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
}
```
