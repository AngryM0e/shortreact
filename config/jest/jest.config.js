module.exports = {
	verbose: true,
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	coveragePathIgnorePatterns: [
		'\\\\node_modules\\\\',
	],
	moduleFileExtensions: [
		'js',
		'jsx',
		'ts',
		'tsx',
		'json',
		'node',
	],
	moduleDirectories: [
		'node_modules',
		'src',
	],
	testMatch: [
		'<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
	],
	setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
	moduleNameMapper: {
		'\\.(css|scss)$': 'identity-obj-proxy',
	},
};
