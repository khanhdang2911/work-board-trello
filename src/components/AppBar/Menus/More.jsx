/** @format */

import { useState } from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Typography } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const MORE_MENU = [
	{
		title: 'Workspaces',
		children: [
			{
				workspaceArea: 'Current Workspace',
				workspaceName: 'Trello Workspace',
			},
			{
				workspaceArea: 'Your Workspace',
				workspaceName: 'Trello Workspace',
			},
		],
	},
	{
		title: 'Recent boards',
		children: [
			{
				image: '',
				roleName: 'Khanh',
				workspaceName: 'Trello Workspace',
			},
			{
				image: '',
				roleName: 'Project Management',
				workspaceName: 'Trello Workspace',
			},
			{
				image: '',
				roleName: 'Project Management',
				workspaceName: '',
			},
			{
				image: '',
				roleName: 'new Hire Onboarding',
				workspaceName: 'Trello Template',
			},
		],
	},
	{
		title: 'Starred boards',
		children: [],
	},
	{
		title: 'Templates',
		children: [
			{
				image: '',
				templateName: '1-1 Metting Agenda',
			},
			{
				image: '',
				templateName: 'Agli Board Template | Trello',
			},
			{
				image: '',
				templateName: 'Company Overview',
			},
		],
	},
]

function More() {
	// const [moreMenu, setMoreMenu] = useState([])
	const [anchorEl, setAnchorEl] = useState(null)
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
				id='basic-button-more'
				aria-controls={open ? 'basic-menu-more' : undefined}
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
				sx={{ bgcolor: '#80cbc40a' }}
			>
				More
				<ExpandMoreIcon />
			</Button>
			<Menu
				id='basic-menu-more'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button-more',
				}}
				slotProps={{ paper: { sx: { width: 304 } } }}
			>
				{MORE_MENU.map((menuItem, index) => {
					return (
						<MenuItem
							key={index}
							dense
							sx={{ dispaly: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
						>
							<Typography
								fontSize='14px'
								fontWeight={500}
							>
								{menuItem.title}
							</Typography>
							<ArrowForwardIosIcon sx={{ width: 16, height: 16 }} />
						</MenuItem>
					)
				})}
			</Menu>
		</div>
	)
}
export default More
