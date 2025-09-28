import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/Components/*.tsx", "./src/app/**/*.tsx"],
  theme: {
  	screens: {
  		ms: '320px',
  		mm: '375px',
  		ml: '420px',
  		break: '550px',
  		md: '765px',
  		lg: '1024px',
  		xl: '1280px',
  		'2xl': '1440px'
  	},
  	extend: {
  		colors: {
  			fontColor: '#EEEEEE',
  			black: '#0E0E10',
  			background: '#0C1A3B',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			textFont: [
  				'Nanum Myeongjo',
  				'serif'
  			]
  		},
  		backgroundImage: {
  			hero: 'url(https://utfs.io/f/af9f2fdb-cae0-4888-87bf-18ad9a67710b-1d.jpeg)'
  		},
  		keyframes: {
  			scroll: {
  				'0%': {
  					transform: 'translateX(0)'
  				},
  				'100%': {
  					transform: 'translateX(-100%)'
  				}
  			},
  			fadeIn: {
  				from: {
  					opacity: '0.5'
  				},
  				to: {
  					opacity: '1'
  				}
  			}
  		},
  		animation: {
  			scroll: 'scroll 30s linear infinite',
  			fade: 'fadeIn 1s ease-in-out',
  			fadeHome: 'fadeIn 1.5s ease-in-out'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
