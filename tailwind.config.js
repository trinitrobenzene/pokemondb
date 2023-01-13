/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            fontFamily: {
                roboto : ['Roboto', 'san-serif'],
                noto: ['"Noto Sans"','san-serif']
            }
        },
    },
    plugins: [],
};
