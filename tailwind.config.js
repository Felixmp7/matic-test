/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/logicalExercises/**/*.{js,ts,jsx,tsx}',
        './src/templates/**/*.{js,ts,jsx,tsx}',
        './src/UI/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'primary-green': '#31CF72',
                'secondary-green': '#84E1A7',
                'primary-cyan': '#2CBAC7',
                'secondary-cyan': '#81D6DB',
                'primary-gray': '#959499',
                'primary-gray-200': '#E5E7EB',
                'primary-gray-300': '#D1D5DB',
                'primary-gray-400': '#F4F5F7',
                'primary-gray-500': '#6B7280',
                'primary-red': '#FF8A8A',
                'primary-dark-blue': '#2D314E',
            },
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
    ],
};
