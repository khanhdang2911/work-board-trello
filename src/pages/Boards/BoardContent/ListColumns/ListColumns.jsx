/** @format */

import Box from '@mui/material/Box'
import Column from './Column/Column'
import AddIcon from '@mui/icons-material/Add'
import Button from '@mui/material/Button'

function ListColumns({ columns }) {
	return (
		<Box sx={{ display: 'flex', height: '100%', maxWidth: '100%', overflowX: 'auto' }}>
			{columns.map((column) => {
				return (
					<Column
						key={column._id}
						column={column}
					/>
				)
			})}
			<Box
				sx={{
					minWidth: '272px',
					maxWidth: '272px',
					height: 'fit-content',
					mt: 2,
					mr: 1,
					ml: 1,
					padding: '6px 12px',
					borderRadius: '12px',
					bgcolor: (theme) => (theme.palette.mode === 'light' ? '#ffffff3d' : '#2d3436'),
				}}
			>
				<Button
					startIcon={<AddIcon />}
					sx={{
						width: '100%',
						justifyContent: 'flex-start',
						color: 'white',
					}}
				>
					Add another list
				</Button>
			</Box>
		</Box>
	)
}

export default ListColumns
