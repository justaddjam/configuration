import { Configuration } from "stylelint";

export = {
    extends: [
        "stylelint-config-standard-scss"
    ],
    plugins: [
        "stylelint-prettier"
    ],
    rules: {
        "prettier/prettier": true
    }

} as Partial<Configuration>
