import {defineConfig} from '@pandacss/dev'

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

	// Files to exclude
	exclude: [],
	globalCss: {
		body: {
			p: 30
		},
		code: {
			bg: '#ededed',
			border: '1px solid #9E9E9E',
			borderRadius: 4,
			p: '0 4px',
			display: 'inline-block'
		}
	},
	// Useful for theme customization
	theme: {
		extend: {}
	},

	// The output directory for your css system
	outdir: 'src/styled-system'
	// importMap: 'src/styled-system'
})
