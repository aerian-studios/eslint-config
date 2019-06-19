# @aerian/eslint-config-typescript

This is a sharable ESLint config for TypeScript.

If you're using React, use `@aerian/eslint-config-react` as well. If you're
using Preact, use `@aerian/eslint-config-preact`.

To install, run:

```sh
#npm
npm i -D eslint prettier @aerian/eslint-config-typescript

#yarn
yarn add -D  eslint prettier @aerian/eslint-config-typescript
```

To use it, create the following .eslintrc.json:

```json
{
    "extends": ["@aerian/eslint-config-typescript"]
}
```

The base formatting uses Prettier, which parses and reformats your code. It runs
this through ESLint, so you can run use `eslint . --fix` to apply Prettier
formatting as well as ESLint rules.
