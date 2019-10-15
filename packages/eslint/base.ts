import { Linter } from "eslint";
import prettierOptions from "@justaddjam/prettier";

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
    prettierOptions,
    rules: {
    }
} as Linter.Config
