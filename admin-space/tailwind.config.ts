module.exports = {
    content: ['./src/**/*.{ts,tsx}', './public/index.html'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'blue': '#4F45B6',
                'yellow': '#F8C140',
                'black': '#252525',
                'green': '#86F552',
                'red': '#F84040',
                'orange': '#F58869',
                'cyan': '#64C4F7',
                'white': '#FFFFFF',
                'gray_1': '#F5EFFC',
                'gray_2': '#ECEEFB',
                'gray_3': '#D1D1D1',
                'gray_4': '#A098AE',
                'darkBG': '#261E35',
                'dark_1': '#2E293E',
                'dark_2': '#1E192A',
            },
            gridTemplateAreas: {
                'layout': [
                    'nav header',
                    'nav main',
                    'nav main',
                ],
            },
            gridTemplateColumns: {
                'layout': '1fr 10fr',
            },
            gridTemplateRows:{
                'layout': '1fr 8fr'
            },
            fontFamily: {
                'bold': ["carioBold", 'sans-serif'],
                'reg': ["carioRegular"],
                'semi': ["carioSemiBold", 'mono'],
            },
        },
    },
    plugins: [
        require('@savvywombat/tailwindcss-grid-areas')
    ],
};