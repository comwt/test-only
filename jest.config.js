// jest.config.js
const {defaults} = require('jest-config');

module.exports = {
  "moduleFileExtensions": [
    "js"
  ],
  "moduleNameMapper": {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  "transform": {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
  },
  "moduleDirectories": [
    "node_modules",
    "src"
  ]
}