# Aerian ESLint config

This monorepo includes several opinionated ESLint configs:

-   **@aerian/eslint-config**: The base JavaScript config. The rules are similar
    to those in create-react-app (minus the React-specific stuff, which is
    included below), which in turn is based on Airbnb rules. Formatting is all
    handled by Prettier.
-   **@aerian/eslint-config-react**: A JavaScript config with support for React.
    Extends @aerian/eslint-config, so there's no need to include both.
-   **@aerian/eslint-config-preact**: Identical to the above, but for Preact
    instead of React.
-   **@aerian/eslint-config-typescript**: Adds support for TypeScript. Can be
    installed alongside either the base config or -react or -preact configs to
    add TypeScript support.

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

### Development

This is a monorepo managed by Lerna.

You will need to have lerna as a global, `yarn add global lerna`.

Once you have made changes:

1. don't push your changes.
2. make sure that you are logged in to npm.
3. Then run, `lerna publish`. This will take you through a wizard for managing
   the realease to npm.

Versioning should follow semver, but make sure that **new rules** are treated as
a major version change, as they're breaking changes for existing projects.
