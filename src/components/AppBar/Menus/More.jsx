/** @format */

import { useRef, useState } from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import CloseIcon from '@mui/icons-material/Close'
import WorkspaceMenu from './WorkspaceMenu'
import RecentMenu from './RecentMenu'
import { IconButton } from '@mui/material'
const MORE_MENU = [
	{
		title: 'Workspaces',
		children: WorkspaceMenu,
	},
	{
		title: 'Recent boards',
		children: RecentMenu,
	},
	{
		title: 'Starred boards',
		children: null,
	},
	{
		title: 'Templates',
		children: null,
	},
]

function More() {
	const [anchorEl, setAnchorEl] = useState(null)
	const [subOpen, setSubOpen] = useState(false)
	const [selectedItem, setSelectedItem] = useState(null)
	const buttonRef = useRef()
	let open = Boolean(anchorEl)
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
		setSubOpen(false)
	}
	const handleSubAnchorEl = (menuItem) => {
		setSubOpen(true)
		open = false
		setSelectedItem(menuItem)
	}
	const handleBack = () => {
		setAnchorEl(buttonRef.current)
		open = true
		setSubOpen(false)
	}
	return (
		<>
			<Button
				ref={buttonRef}
				id='basic-button-more'
				aria-controls={open ? 'basic-menu-more' : undefined}
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
				sx={{ display: { xs: 'flex', lg: 'none' }, color: 'white' }}
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
							onClick={() => {
								handleSubAnchorEl(menuItem)
							}}
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

			{/* Menu Workspace */}
			<Menu
				id='basic-menu-more'
				anchorEl={anchorEl}
				open={subOpen}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button-more',
				}}
				slotProps={{ paper: { sx: { width: 304 } } }}
			>
				<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 18px' }}>
					<IconButton
						onClick={handleBack}
						style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '3px', ':hover': { bgcolor: '#091e4224' } }}
					>
						<ArrowBackIosIcon sx={{ width: '16px', height: '16px', cursor: 'pointer', paddingLeft: '3px' }} />
					</IconButton>
					<Typography
						fontSize='14px'
						fontWeight='600'
						lineHeight='40px'
						textOverflow='ellipsis'
						whiteSpace='nowrap'
						sx={{ padding: '0 32px' }}
					>
						{selectedItem && selectedItem.title}
					</Typography>
					<IconButton
						onClick={handleClose}
						style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '3px', ':hover': { back: '#091e4224' } }}
					>
						<CloseIcon sx={{ width: '16px', height: '16px', cursor: 'pointer' }} />
					</IconButton>
				</Box>
				{selectedItem && selectedItem.children && <selectedItem.children />}
			</Menu>
		</>
	)
}
export default More
