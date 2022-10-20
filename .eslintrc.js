module.exports = {
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	extends: [
		'standard',
		'plugin:vue/recommended'
	],
	// add your custom rules here
	rules: {
		'arrow-parens': 0,
		'generator-star-spacing': 0,
		'no-debugger': 'off',
		indent: [2, 'tab', {SwitchCase: 1}],
		'no-tabs': 0,
		'comma-dangle': 0,
		curly: 0,
		'no-return-assign': 0,
		'no-console': 'off',
		'vue/require-default-prop': 0,
		'vue/no-reserved-keys': 0,
		'import/first': 0, // does not work with multiple script tags
		'no-unused-vars': 0 // does not with setup + pug
	},
	globals: {
		localStorage: false,
		$: 'readonly',
		$$: 'readonly',
		$ref: 'readonly',
		$computed: 'readonly',
	},
	env: {
		node: true,
		'vue/setup-compiler-macros': true
	}
}
