const path = require('path');
const resolve = path.resolve;
const join = path.join;

module.exports = {
    collectCoverage: true,

    coverageReporters: [
        'lcov',
        'text',
        'clover'
    ],

    watchPathIgnorePatterns: [
        'node_modules'
    ],

    clearMocks: true,

    moduleFileExtensions: [
        'js',
        'ts'
    ],

    moduleNameMapper: {
        '\\.(css|less|scss)$': resolve(join(__dirname, '@tool/__mocks__/styleMock.js')),
        '^src(.*)$': `${process.env.ADMIN_PATH}/src$1`,
        // Quick fix to avoid mixing of es modules and umd on webpack builds
        '^\@allincart-ag/admin-extension-sdk/es(.*)$': '\@allincart-ag/admin-extension-sdk/umd$1',
        '^\@allincart-ag/meteor-admin-sdk/es(.*)$': '\@allincart-ag/meteor-admin-sdk/umd$1',
        '^lodash-es$': 'lodash',
    },

    transform: {
        '^.+\\.jsx?$': resolve(join(__dirname, '@tool/transform.js')),
        '^.+\\.tsx?$': resolve(join(__dirname, '@tool/transform.js')),
        '^.+(\\.twig|\\.html)$': resolve(join(__dirname, '@tool/twig-to-vue-transformer/index.js')),
    },

    modulePathIgnorePatterns: [
        '<rootDir>/test/e2e/'
    ],

    setupFilesAfterEnv: [
        resolve(join(__dirname, '@tool/setup-env-for-allincart.js')),
    ],

    testMatch: [
        '<rootDir>/src/**/*.spec.js',
        '<rootDir>/src/**/*.spec.ts'
    ],

    testEnvironment: 'jsdom',
};
