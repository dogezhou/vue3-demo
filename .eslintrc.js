module.exports = {
    plugins: ['prettier'],
    extends: [
        // add more generic rulesets here, such as:
        // 'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'eslint:recommended',
        'prettier',
        'prettier/vue',
        'prettier/@typescript-eslint',
    ],
    rules: {
        // override/add rules settings here, such as:
        // 'vue/no-unused-vars': 'error'
        'prettier/prettier': ['warn'],
    },
    parserOptions: {
        parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    },
}
