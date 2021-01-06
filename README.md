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
-   **@aerian/eslint-config-node**: Adds support for node. Can be installed
    alongside the other configs.
-   **@aerian/stylelint-config-base**: Adds support for CSS and SCSS linting
    (currently a WIP).

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

### Transpiled (Typescript/Babel) node scripts

It is possible to use standard ES syntaxes with node scripts if you are
transpiling your code... ESModules coming to node soon!

If you are transpiling, it may make more sense for the time being to just use
the base `@aerian/eslint-config` (and, if you are using TypeScript,
`@aerian/eslint-config-typescript`). This will avoid conflicting rules.

### Development

This is a monorepo managed by [Lerna](https://lerna.js.org/).

You will need to have lerna as a global, `yarn add global lerna` or use `npx` to
prefix all the lerna commands.

1. Please make a new git branch for your changes
1. Commit with meaningful commit - ideally using
   [conventional commit](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#summary)
   messages.
1. Submit completed changes for review to one of the Aerian team.

### To publish

1. Merge code changes into master
1. Check out master
1. Make sure that you are logged in to npm.
1. Then run, `lerna publish`. This will take you through a wizard for managing
   the realease to npm.

Versioning should follow semver, but make sure that **new rules** are treated as
a major version change, as they're breaking changes for existing projects.
