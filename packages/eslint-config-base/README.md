# @aerian/eslint-config

This is a sharable ESLint config for JavaScript.

If you're using React, try `@aerian/eslint-config-react` instead. If you're
using Preact, try `@aerian/eslint-config-preact`. If you're using TypeScript,
add `@aerian/eslint-config-typescript` too. If you need node, use
`@aerian/eslint-config-node`

To install, run:

```sh
#npm
npm i -D eslint prettier @aerian/eslint-config

#yarn
yarn add -D  eslint prettier @aerian/eslint-config
```

To use it, create the following .eslintrc.json:

```json
{
    "extends": ["@aerian/eslint-config"]
}
```

The base formatting uses Prettier, which parses and reformats your code. It runs
this through ESLint, so you can run use `eslint . --fix` to apply Prettier
formatting as well as ESLint rules.
