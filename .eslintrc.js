module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	parserOptions: {
		ecmaVersion: 'latest',
		parser: '@typescript-eslint/parser',
		sourceType: 'module'
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/essential',
		'plugin:@typescript-eslint/recommended',
		'@nuxtjs/eslint-config-typescript'
	],
	plugins: ['vue', '@typescript-eslint'],
	// add your custom rules here
	rules: {
		indent: ['error', 'tab', {
			ignoredNodes: ['TemplateLiteral'],
			SwitchCase: 1
		}],
		'no-tabs': ['error', { allowIndentationTabs: true }],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		'comma-dangle': ['error', 'never'],
		'linebreak-style': ['error', 'windows'],
		'template-curly-spacing': 'off',
		'max-len': ['off', { code: 120 }],
		'no-console': 'off',
		'arrow-parens': ['error', 'always'],
		'space-before-function-paren': ['error', 'never'],
		curly: ['error', 'multi-line'],
		'import/no-extraneous-dependencies': 'off',
		'require-await': 0,

		'global-require': 0,
		'import/no-unresolved': 0,
		'import/newline-after-import': 0,
		'no-underscore-dangle': 0,

		'vue/max-attributes-per-line': 'off',
		'vue/singleline-html-element-content-newline': 'off',
		'vue/multiline-html-element-content-newline': 'off',

		'vue/html-indent': ['error', 4, {
			attribute: 1,
			baseIndent: 1,
			closeBracket: 0,
			alignAttributesVertically: true,
			ignores: []
		}
		],

		'vue/no-v-html': 'off'
	}
}
