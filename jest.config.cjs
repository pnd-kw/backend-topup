const { createDefaultPreset } = require("ts-jest");

/** @type {import("jest").Config} **/
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.ts$": ["ts-jest", {
      useESM: true,
    }]
  },
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  extensionsToTreatAsEsm: [".ts"],
};

// /** @type {import("jest").Config} **/
// module.exports = {
//   testEnvironment: "node",
//   extensionsToTreatAsEsm: [".ts"],
//   transform: {
//     "^.+\\.ts$": ["ts-jest", {
//       useESM: true,
//       diagnostics: false,
//       tsconfig: {
//         module: "ESNext",
//         moduleResolution: "bundler",
//         esModuleInterop: true,
//         target: "ES2020",
//         strict: true,
//         verbatimModuleSyntax: false,
//         isolatedModules: true,
//         skipLibCheck: true,
//       }
//     }]
//   },
//   moduleNameMapper: {
//     "^(\\.{1,2}/.*)\\.js$": "$1",
//   },
// };