/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#202c39',
				secondary: '#6096ba',
				white: '#ffffff',
				darkBlue: '#0f306a',
				blueGray: '#283845',
				// Add more custom colors here
			},
		},
	},
	plugins: [],
}
