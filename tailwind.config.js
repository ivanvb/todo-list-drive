module.exports = {
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        content: ['./src/**/*.tsx', './src/**/*.ts', './src/**/*.jsx', './src/**/*.js'],
    },
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [],
};
