/** @format */

import * as React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Paper from '@mui/material/Paper'
import Divider from '@mui/material/Divider'
import MenuList from '@mui/material/MenuList'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Check from '@mui/icons-material/Check'

function Template() {
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
				id='basic-button-template'
				aria-controls={open ? 'basic-menu-template' : undefined}
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
				sx={{ color: 'white' }}
			>
				Template
				<ExpandMoreIcon />
			</Button>
			<Menu
				id='basic-menu-template'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button-template',
				}}
			>
				<Paper sx={{ width: 320 }}>
					<MenuList dense>
						<MenuItem>
							<ListItemText inset>Single</ListItemText>
						</MenuItem>
						<MenuItem>
							<ListItemText inset>1.15</ListItemText>
						</MenuItem>
						<MenuItem>
							<ListItemText inset>Double</ListItemText>
						</MenuItem>
						<MenuItem>
							<ListItemIcon>
								<Check />
							</ListItemIcon>
							Custom: 1.2
						</MenuItem>
						<Divider />
						<MenuItem>
							<ListItemText>Add space before paragraph</ListItemText>
						</MenuItem>
						<MenuItem>
							<ListItemText>Add space after paragraph</ListItemText>
						</MenuItem>
						<Divider />
						<MenuItem>
							<ListItemText>Custom spacing...</ListItemText>
						</MenuItem>
					</MenuList>
				</Paper>
			</Menu>
		</div>
	)
}
export default Template
