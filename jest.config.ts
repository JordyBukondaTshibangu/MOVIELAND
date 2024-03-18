module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest"
  },
  transformIgnorePatterns: [
      'node_modules/(?!(axios)/)' // Adjust the regex to include any packages that need transforming
    ],
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // For CSS modules
      'axios': '<rootDir>/__mocks__/axios.js', // Mock specific module
    },
};