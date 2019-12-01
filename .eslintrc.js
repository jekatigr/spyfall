module.exports =  {
    parser:  '@typescript-eslint/parser',
    extends:  [
        'airbnb',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parserOptions:  {
        ecmaVersion:  2018,
        sourceType:  'module',
        ecmaFeatures:  {
            jsx:  true,
        },
    },
    rules:  {
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "react/jsx-indent": [
            "error",
            4
        ],
        "react/jsx-indent-props": [
            "error",
            4
        ],
        "react/jsx-filename-extension": [
            "error",
            {
                extensions: [
                    ".ts",
                    ".tsx"
                ]
            }
        ],
    },
    settings:  {
        react:  {
            version:  'detect',
        },
        "import/resolver": {
            node: {
                paths: [
                    "src"
                ],
                extensions: [".js", ".jsx", ".ts", ".tsx"]
            },
            "eslint-import-resolver-typescript": true
        }
    },
};
