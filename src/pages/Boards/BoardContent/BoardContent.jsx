/** @format */

import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
function BoardContent() {
	
	return (
		<Box
			sx={{
				borderTop: '1px solid white',
				bgcolor: (theme) => (theme.palette.mode === 'light' ? '#3498db' : '#576574'),
				height: (theme) => theme.trello.boardContentHeight,
				paddingBottom: '5px',
				overflowX: 'auto',
			}}
		>
			<ListColumns/>	
		</Box>
	)
}

export default BoardContent
