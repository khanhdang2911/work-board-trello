/** @format */

import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'

import mapOrder from '~/utils/mapOrder'
function BoardContent({ board }) {
	const columnOrdered = mapOrder(board.columns, board.columnOrderIds, '_id')
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
			<ListColumns columns={columnOrdered} />
		</Box>
	)
}

export default BoardContent
