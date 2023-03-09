const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// add any custom config to be passed to Jest
const customJestConfig = {
  moduleNameMapper: {
    // handle module aliases (this will be automatically configured for you soon)
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    './src/**/*.{js,jsx,ts,tsx}',
    '!./src/**/_*.{js,jsx,ts,tsx}',
    '!./src/**/index*.{js,jsx,ts,tsx}',
    '!./src/styles/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: 60,
    },
  },
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)
