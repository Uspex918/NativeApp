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
            "prettier/prettier": [
                "error",
                {
                    singleQuote: false,
                    printWidth: 100,
                    tabWidth: 4,
                    endOfLine: "auto",
                },
            ],
        },
    },
])
