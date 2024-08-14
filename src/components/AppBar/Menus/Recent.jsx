/** @format */

import * as React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import RecentMenu from './RecentMenu'
function Recent() {
	const [anchorEl, setAnchorEl] = React.useState(null)
	const open = Boolean(anchorEl)
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}

	return (
		<div>
			<Button
				id='basic-button-recent'
				aria-controls={open ? 'basic-menu-recent' : undefined}
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
				sx={{ color: 'white' }}
			>
				Recent
				<ExpandMoreIcon />
			</Button>
			<Menu
				id='basic-menu-recent'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button-recent',
				}}
				slotProps={{ paper: { sx: { width: 304 } } }}
			>
				{/* Children */}
				<RecentMenu />
			</Menu>
		</div>
	)
}
export default Recent
