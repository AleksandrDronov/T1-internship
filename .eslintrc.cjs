module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:jsx-a11y/recommended",
    "plugin:react/jsx-runtime",
  ],
  settings: {
    "import/resolver": {
      typescript: true,
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  ignorePatterns: [
    "dist",
    ".eslintrc.cjs",
    "vite.config.ts",
    "public",
    "jest.config.cjs",
    "/src/app/jest-config",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  parserOptions: {
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/jsx-filename-extension": "off",
    quotes: ["error", "double"],
    "react/jsx-props-no-spreading": "off",
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "react/require-default-props": "off",
    "import/no-unresolved": "off",
    "import/no-absolute-path": "off",
    "react/button-has-type": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "test.{ts,tsx}", // repos with a single test file
          "test-*.{ts,tsx}", // repos with multiple top-level test files
          "**/*{.,_}{test,spec}.{ts,tsx}", // tests where the extension or filename suffix denotes that it is a test
          "**/jest.config.ts", // jest config
          "**/jest.setup.ts", // jest setup
        ],
        optionalDependencies: false,
      },
    ],
  },
};
