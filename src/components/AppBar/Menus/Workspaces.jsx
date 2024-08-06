/** @format */

import * as React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import WorkspaceMenu from './WorkspaceMenu'
function Workspaces() {
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
				id='basic-button-workspaces'
				aria-controls={open ? 'basic-menu-workspaces' : undefined}
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
			>
				Workspaces
				<ExpandMoreIcon />
			</Button>
			<Menu
				id='basic-menu-workspaces'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button-workspaces',
				}}
				slotProps={{ paper: { sx: { width: 304 } } }}
			>
				<WorkspaceMenu />
			</Menu>
		</div>
	)
}
export default Workspaces
