# @aerian/eslint-config-react

This is a sharable ESLint config for React. If you're using TypeScript, add
`@aerian/eslint-config-typescript` too.

If you're not using React, try `@aerian/eslint-config` instead. If you're using
Preact, try `@aerian/eslint-config-preact`

To install, run:

```sh
#npm
npm i -D eslint prettier @aerian/eslint-config-react

#yarn
yarn add --D eslint prettier @aerian/eslint-config-react
```

To use it, create the following .eslintrc.json:

```json
{
    "extends": ["@aerian/eslint-config-react"]
}
```

..or if you're using TypeScript:

```json
{
    "extends": [
        "@aerian/eslint-config-react",
        "@aerian/eslint-config-typescript"
    ]
}
```

The base formatting uses Prettier, which parses and reformats your code. It runs
this through ESLint, so you can run use `eslint . --fix` to apply Prettier
formatting as well as ESLint rules.
