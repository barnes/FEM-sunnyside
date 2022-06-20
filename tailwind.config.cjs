const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		screens: {
			lg: '1200px'
		},
		colors: {
			softred: 'hsl(7,99%,70%)',
			yellow: 'hsl(51, 100%, 49%)',
			decyan: 'hsl(167,40%, 24%)',
			darkblue: 'hsl(198, 62%, 26%)',
			modcyan: 'hsl(168, 34%, 41%)',
			deblue: 'hsl(212, 27%, 19%)',
			verygreyblue: 'hsl(213, 9%, 39%)',
			greyblue: 'hsl(210, 4%, 67%)',
			white: 'hsl(0,0%,100%)'
		},
		fontFamily: {
			sans: ['Barlow', 'sans-serif'],
			serif: ['Fraunces', 'serif']
		},
		extend: {
			backgroundImage: {
				'desktop-image-header': "url('/images/desktop/image-header.jpg')"
			},
			letterSpacing: {
				extrawide: '0.25em'
			}
		}
	},

	plugins: []
};

module.exports = config;
