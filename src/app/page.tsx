import {css} from '@/styled-system/css'

export default function Home() {
	return (
		<div className={css({
			'&::after': {
				content: '"Styles are working!!"',
				display: 'block',
				maxWidth: 'max-content',
				p: '4px 8px',
				fontWeight: 'bold',
				borderRadius: 4,
				marginTop: 5,
				color: 'white',
				bg: 'red',
				w: '100%',
				h: '100%'
			}
		})}>
			Open <code>panda.config.ts</code> and remove <code>src/</code> from <u>outdir</u>
		</div>
	)
}
