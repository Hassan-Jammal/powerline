/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
    theme: {
        container: {
            center: true,
            padding: '1rem',
        },
        extend: {
            colors: {
                primary: '#475467',
                // secondary: '#00DFDF',
            },
            screens: {
                '2xl': '1536px',
                '3xl': '1792px',
                '4xl': '2048px',
                '5xl': '2304px',
                '6xl': '2688px',
                '7xl': '3072px',
                '8xl': '3584px',
                '9xl': '4096px',
            },
            fontFamily: {
                albert: ['"Albert Sans"', 'sans-serif'], // Define your custom font here
            },
        }
    },
    // important: true,
    plugins: [],
}