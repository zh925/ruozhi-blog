module.exports = {
    'env': {
        'browser': true,
        'es2020': true
    },
    'parser': '@typescript-eslint/parser',
    'extends': ['plugin:@typescript-eslint/recommended'],
    'plugins': ['@typescript-eslint'],
    'parserOptions': {
        'ecmaVersion': 11,
        'sourceType': 'module'
    },
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'windows'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ],
        '@typescript-eslint/explicit-module-boundary-types': 'off'
    }
}
