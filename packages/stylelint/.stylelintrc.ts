import { Configuration } from "stylelint";

export = {
    extends: [
        "stylelint-config-standard-scss"
    ],
    plugins: [
        "stylelint-no-unsupported-browser-features",
        "stylelint-prettier"
    ],
    rules: {
        "plugin/no-unsupported-browser-features": [ true, {
            "browsers": ["> 1%", "Last 2 versions"],
            "ignore": ["rem"]
        }],
        "prettier/prettier": true
    }

} as Partial<Configuration>
