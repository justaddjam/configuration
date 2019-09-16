import { Linter } from "eslint";

export = {
    parser:  "@typescript-eslint/parser",
    extends: [
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended" 
    ],
    parserOptions:  {
      ecmaVersion: 2016,
      sourceType: "module"
    },
    rules: {
    }
} as Linter.Config
