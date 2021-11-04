module.exports = {
    extends: ['@commitlint/config-conventional'],
    'rules': {
        'body-max-line-length': [0, 'always', 100000],
        'type-enum': [
            2,
            'always',
            [
                'break',
                'chore',
                'documentation',
                'feat',
                'fix',
                'perf',
                'testing',
            ],
        ],
    },
};