module.exports = {
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        content: ['./src/**/*.tsx', './src/**/*.ts', './src/**/*.jsx', './src/**/*.js'],
    },
    theme: {
        extend: {
            spacing: {
                '80': '20rem',
                '128': '32rem',
            },
        },
    },
    variants: {
        opacity: ['responsive', 'hover', 'focus', 'disabled'],
        cursor: ['responsive', 'hover', 'focus', 'disabled'],
    },
    plugins: [],
};
