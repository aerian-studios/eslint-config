# Aerian ESLint config

This monorepo includes several ESLint configs:

-   **@aerian/eslint-config**: The base JavaScript config
-   **@aerian/eslint-config-react**: A JavaScript config with support for React.
    Extends @aerian/eslint-config, so there's no need to include both.
-   **@aerian/eslint-config-preact**: As above, but for Preact instead of React.
-   **@aerian/eslint-config-typescript**: Adds support for TypeScript. Extends
    @aerian/eslint-config, and can be installed alongside the -react or -preact
    configs to add TypeScript support.

To install the packages, run:

```sh
#npm
npm i -D eslint prettier @aerian/eslint-config # or @aerian/eslint-config-react etc

#yarn
yarn add -D eslint prettier @aerian/eslint-config # or @aerian/eslint-config-react etc
```

To use the packages, create an .eslintrc.json like this:

```json
{
    "extends": ["@aerian/eslint-config"]
}
```

..or..

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
