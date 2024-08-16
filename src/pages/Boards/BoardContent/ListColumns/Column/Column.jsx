/** @format */

import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Divider, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, MenuList } from '@mui/material'
import { Cloud, ContentCopy, ContentCut, ContentPaste } from '@mui/icons-material'
import AddIcon from '@mui/icons-material/Add'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import ListCards from './ListCards/ListCards'
import mapOrder from '~/utils/mapOrder'
function Column({ column }) {
	const [anchorEl, setAnchorEl] = useState(null)
	const open = Boolean(anchorEl)
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}

	const cardOrdered = mapOrder(column?.cards, column?.cardOrderIds, '_id')

	return (
		<Box
			sx={{
				minWidth: '272px',
				maxWidth: '272px',
				height: 'fit-content',
				mt: 2,
				mr: 1,
				ml: 1,
				bgcolor: (theme) => (theme.palette.mode === 'light' ? '#f1f2f4' : '#2d3436'),
				borderRadius: '6px',
			}}
		>
			<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: (theme) => theme.trello.headerBoardContentHeight, padding: '5px 15px' }}>
				<Typography
					variant='h6'
					sx={{ fontSize: '14px', fontWeight: 'bold' }}
				>
					{column?.title}
				</Typography>
				<div>
					<ExpandMoreIcon
						id='basic-button-recent'
						aria-controls={open ? 'basic-menu-recent' : undefined}
						aria-haspopup='true'
						aria-expanded={open ? 'true' : undefined}
						onClick={handleClick}
						sx={{ cursor: 'pointer', padding: '0 1px' }}
					/>
					<Menu
						id='basic-menu-recent'
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						MenuListProps={{
							'aria-labelledby': 'basic-button-recent',
						}}
					>
						{/* Children */}
						<MenuList>
							<MenuItem>
								<ListItemIcon>
									<ContentCut fontSize='small' />
								</ListItemIcon>
								<ListItemText>Cut</ListItemText>
							</MenuItem>
							<MenuItem>
								<ListItemIcon>
									<ContentCopy fontSize='small' />
								</ListItemIcon>
								<ListItemText>Copy</ListItemText>
							</MenuItem>
							<MenuItem>
								<ListItemIcon>
									<ContentPaste fontSize='small' />
								</ListItemIcon>
								<ListItemText>Paste</ListItemText>
							</MenuItem>
							<Divider />
							<MenuItem>
								<ListItemIcon>
									<Cloud fontSize='small' />
								</ListItemIcon>
								<ListItemText>Web Clipboard</ListItemText>
							</MenuItem>
						</MenuList>
					</Menu>
				</div>
			</Box>
			{/* List card */}
			<ListCards cards={cardOrdered} />
			<Box sx={{ height: (theme) => theme.trello.footerBoardContentHeight, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4px 5px 0 9px' }}>
				<Button startIcon={<AddIcon />}>Add a card</Button>
				<IconButton>
					<DragHandleIcon />
				</IconButton>
			</Box>
		</Box>
	)
}

export default Column
