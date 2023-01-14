/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        borderWidth: {
            DEFAULT: '0.5px',
        },
        extend: {
            fontFamily: {
                roboto : ['Roboto', 'san-serif'],
                noto: ['"Noto Sans"','san-serif']
            }
        },
    },
    plugins: [],
};
