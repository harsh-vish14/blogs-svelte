/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'league-spartan': ['League Spartan', 'sans-serif'],
				'libre-baskerville': ['Libre Baskerville', 'serif']
			},
			colors: {
				'primary-dark': '#252831',
				white: '#E3E3E4',
				pink: '#E54EFE',
				border: '#EBEBEB',
				animation: {
					'accordion-down': 'accordion-down 0.2s ease-out',
					'accordion-up': 'accordion-up 0.2s ease-out'
				}
			}
		}
	},
	plugins: []
};
