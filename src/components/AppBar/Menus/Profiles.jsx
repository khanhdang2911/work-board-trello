/** @format */

import * as React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import Divider from '@mui/material/Divider'
import ListItemIcon from '@mui/material/ListItemIcon'
import PersonAdd from '@mui/icons-material/PersonAdd'
import Settings from '@mui/icons-material/Settings'
import Logout from '@mui/icons-material/Logout'
function Profiles() {
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
				id='basic-button-profiles'
				aria-controls={open ? 'basic-menu-profiles' : undefined}
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
				sx={{ padding: 0, minWidth: 0 }}
			>
				<Tooltip title='Account'>
					<Avatar
						alt='Avatar'
						src='https://yt3.ggpht.com/qcdzMIdK1onYzT3P9R_8RHQ3tRuMl-n85te1HVYHhUefA0HNVyFr30-5ispdLjbCxVg1ifHuOQ=s88-c-k-c0x00ffffff-no-rj'
						sx={{ width: 32, height: 32, padding: 0 }}
					/>
				</Tooltip>
			</Button>
			<Menu
				id='basic-menu-Profiles'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button-profiles',
				}}
			>
				<MenuItem>
					<Avatar
						alt='Avatar'
						sx={{ width: 24, height: 24, mr: 1 }}
					/>
					Profile
				</MenuItem>
				<MenuItem>
					<Avatar
						alt='Avatar'
						sx={{ width: 24, height: 24, mr: 1 }}
					/>
					My account
				</MenuItem>
				<Divider />
				<MenuItem>
					<ListItemIcon>
						<PersonAdd fontSize='small' />
					</ListItemIcon>
					Add another account
				</MenuItem>
				<MenuItem>
					<ListItemIcon>
						<Settings fontSize='small' />
					</ListItemIcon>
					Settings
				</MenuItem>
				<MenuItem>
					<ListItemIcon>
						<Logout fontSize='small' />
					</ListItemIcon>
					Logout
				</MenuItem>
			</Menu>
		</div>
	)
}
export default Profiles
