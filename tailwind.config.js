/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    proxy: {
        '/api': 'http://localhost:3000',
    },
    theme: {
        extend: {
            colors: {
                blue1: '#2F3061',
                orange1: '#FF785A'
            },
        },
    },
    plugins: [],
};
