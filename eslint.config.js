// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config")
const expoConfig = require("eslint-config-expo/flat")

module.exports = defineConfig([
    expoConfig,
    {
        ignores: ["dist/*"],
    },
    {
        rules: {
            "no-console": "warn",
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/no-unused-expressions": "warn",
            "prettier/prettier": [
                "error",
                {
                    singleQuote: false,
                    printWidth: 130,
                    objectWrap: "collapse",
                    tabWidth: 4,
                    endOfLine: "auto",
                },
            ],
        },
    },
])
