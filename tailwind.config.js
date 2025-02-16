/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: 'tw-',
	important: false,
	content: [
		"**/*.{html, jsx, js}",
		"**/*.js",
		"**/*.html",
	],
	theme: {
		extend: {
			colors: {
				primary: "#000"
			},
			fontFamily: {
				A4SPEEDBold: ['A4SPEEDBold', 'sans-serif'],
				GothamBlack: ['GothamBlack', 'sans-serif'],
				GothamBold: ['GothamBold', 'sans-serif'],
				GothamBook: ['GothamBook', 'sans-serif'],
				GothamBookItalic: ['GothamBookItalic', 'sans-serif'],
				GothamMedium: ['GothamMedium', 'sans-serif'],
			},
		},
	},
	plugins: [],
}

