/** @format */

import Box from '@mui/material/Box'

function BoardContent() {
	return (
		<Box
			sx={{
				borderTop: '1px solid white',
				bgcolor: (theme) => (theme.palette.mode === 'light' ? '#3498db' : '#576574'),
				height: (theme) => `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
				display: 'flex',
				alignItems: 'center',
			}}
		>
			Board Content
		</Box>
	)
}

export default BoardContent
