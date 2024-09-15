import globals from "globals"
import pluginJs from "@eslint/js"
// import pluginReact from "eslint-plugin-react"

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: { globals: globals.browser },
    rules: {
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "indent": ["error", 2],
      "semi": ["error", "never"],
      "eol-last": ["error", "always"],
      "no-multiple-empty-lines": ["error", {
        "max": 1,
        "maxEOF": 1
      }],
      "space-before-function-paren": ["error", "always"]
    }
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
]
