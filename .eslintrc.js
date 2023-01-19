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
        'plugin:@typescript-eslint/recommended',
        'plugin:nuxt/recommended',
        'plugin:vue/vue3-recommended'
    ],
    plugins: ['@typescript-eslint'],
    // add your custom rules here
    rules: {
        indent: ['error', 4, {
            ignoredNodes: ['TemplateLiteral'],
            SwitchCase: 1
        }],
        'no-tabs': ['error', { allowIndentationTabs: true }],
        quotes: ['error', 'single'],
        semi: ['error', 'never'],
        'comma-dangle': ['error', 'never'],
        'linebreak-style': ['warn', 'windows'],
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

        // Vue specific rules
        'vue/multi-word-component-names': ['error', {
            ignores: ['default', 'index', '[name]', 'teamspeak', 'projects', 'impressum']
        }],
        'vue/max-attributes-per-line': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/multiline-html-element-content-newline': 'off',
        'vue/html-indent': ['error', 'tab'],
        'vue/no-v-html': 'off'
    }
}
