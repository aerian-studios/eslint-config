# @aerian/stylelint-config-base

This is a sharable [Stylelint](https://stylelint.io) config to compliment the
eslint configs at https://github.com/aerian-studios/eslint-config.

To install, run:

```sh
#npm
npm i -D stylelint @aerian/stylelint-config-base

#yarn
yarn add -D  stylelint @aerian/stylelint-config-base
```

To use it, create the following .stylelintrc.json:

```json
{
    "extends": ["@aerian/stylelint-config-base"]
}
```

Also add this to your eslint config

```json
{
    "extends": ["stylelint"]
}
```

There are many rules that can be auto-fixed using `stylelint . --fix` either in
the command line or in a package.json.

## Editor integration

There are
[various editor integrations](https://stylelint.io/user-guide/integrations/editor).
Remember that some integrations need a little setup. For vscode, add this to
your workspace settings to stop conflicting rules:

```json
{
    "css.validate": false,
    "less.validate": false,
    "scss.validate": false
}
```
