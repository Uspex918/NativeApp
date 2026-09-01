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
            "max-len": ["warn", { code: 120 }], // 100 символов вместо 80
        },
    },
])
