"use strict";

module.exports = {
    extends: "stylelint-config-recommended",
    rules: {
        indentation: [
            4,
            {
                except: ["value"],
                severity: "warning",
            },
        ],
        "number-leading-zero": null,
        "max-nesting-depth": 3,
        "selector-max-compound-selectors": 2,
        "value-keyword-case": null,
        "declaration-colon-newline-after": null,
    },
};
