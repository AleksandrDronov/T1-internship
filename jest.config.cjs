module.exports = {
  // collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/app/jest-config/setup-tests.ts"],
  transform: {
    "^.+\\.(ts|tsx)$": "@swc/jest",
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
    "^.+\\.module\\.css$",
  ],
  moduleNameMapper: {
    "^.+\\.module\\.css$": "identity-obj-proxy",
    "^.+\\.svg$": "<rootDir>/src/app/jest-config/file-mock.ts",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  moduleFileExtensions: ["ts", "tsx", "js"],
};
