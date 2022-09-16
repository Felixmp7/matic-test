/** @type {import('tailwindcss').Config} */
module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/templates/**/*.{js,ts,jsx,tsx}',
        './src/UI/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
