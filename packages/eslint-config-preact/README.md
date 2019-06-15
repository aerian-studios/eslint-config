# @aerian/eslint-config-preact

This is a sharable ESLint config for Preact. It supports TypeScript and
JavaScript.

If you're not using React, try `@aerian/eslint-config` instead. If you're using
React, try `@aerian/eslint-config-react`

To install, run:

```sh
#npm
npm i -D eslint prettier @aerian/eslint-config-preact

#yarn
yarn add --dev eslint prettier @aerian/eslint-config-preact
```

To use it, create the following .eslintrc.json:

```json
{
    "extends": ["@aerian/eslint-config-preact"]
}
```

The base formatting uses Prettier, which parses and reformats your code. It runs
this through ESLint, so you can run use `eslint . --fix` to apply Prettier
formatting as well as ESLint rules.
