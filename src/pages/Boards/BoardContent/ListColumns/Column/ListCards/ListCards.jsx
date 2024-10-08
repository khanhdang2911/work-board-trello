/** @format */

import Box from '@mui/material/Box'
import Card from './Card/Card'

function ListCards({ cards }) {
	return (
		<Box
			sx={{
				padding: '0 12px',
				maxHeight: (theme) =>
					`calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)} - ${theme.trello.headerBoardContentHeight} - ${theme.trello.footerBoardContentHeight})`,
				overflowX: 'hidden',
				overflowY: 'unset',
				'::-webkit-scrollbar-thumb:hover': {
					background: '#95a5a6',
				},
			}}
		>
			{cards.map((card) => {
				return (
					<Card
						key={card._id}
						card={card}
					/>
				)
			})}
		</Box>
	)
}

export default ListCards
