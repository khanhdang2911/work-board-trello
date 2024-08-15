/** @format */

import { useState } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Divider, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, MenuList } from '@mui/material'
import { Cloud, ContentCopy, ContentCut, ContentPaste } from '@mui/icons-material'
import AddIcon from '@mui/icons-material/Add'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'
const HEADER_HEIGHT = '45px'
const FOOTER_HEIGHT = '55px'
function BoardContent() {
	const [anchorEl, setAnchorEl] = useState(null)
	const open = Boolean(anchorEl)
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}
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
			<Box sx={{ display: 'flex', height: '100%', maxWidth: '100%', overflowX: 'auto' }}>
				<Box
					sx={{
						width: '272px',
						height: 'fit-content',
						mt: 2,
						mr: 1,
						ml: 1,
						bgcolor: (theme) => (theme.palette.mode === 'light' ? '#f1f2f4' : '#2d3436'),
						borderRadius: '6px',
					}}
				>
					<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: HEADER_HEIGHT, padding: '5px 15px' }}>
						<Typography
							variant='h6'
							sx={{ fontSize: '14px', fontWeight: 'bold' }}
						>
							Home work
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
					<Box
						sx={{
							padding: '0 12px',
							maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)} - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT})`,
							overflowX: 'hidden',
							overflowY: 'unset',
							'::-webkit-scrollbar-thumb:hover': {
								background: '#95a5a6',
							},
						}}
					>
						<Card sx={{ boxShadow: '0px 1px 1px 1px rgba(0,0,0,0.2)', mt: 1 }}>
							<CardMedia
								sx={{ height: 140 }}
								image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF-2MUiIoA7QjqpPUFROFgtRqGlfkMOxQteQ&s'
								title='green iguana'
							/>
							<CardContent sx={{ p: 1.5, cursor: 'pointer', '&:last-child': { p: 1.5 } }}>
								<Typography sx={{ fontSize: '1rem' }}>Kickoff meeting</Typography>
							</CardContent>
							<CardActions>
								<Button
									size='small'
									startIcon={<GroupIcon />}
								>
									20
								</Button>
								<Button
									size='small'
									startIcon={<CommentIcon />}
								>
									15
								</Button>
								<Button
									size='small'
									startIcon={<AttachmentIcon />}
								>
									20
								</Button>
							</CardActions>
						</Card>
						<Card
							sx={{
								boxShadow: '0px 1px 1px 1px rgba(0,0,0,0.2)',
								mt: 1,
							}}
						>
							<CardContent sx={{ p: 1.5, cursor: 'pointer', '&:last-child': { p: 1.5 } }}>
								<Typography sx={{ fontSize: '1rem' }}>Kickoff meeting</Typography>
							</CardContent>
						</Card>
						<Card
							sx={{
								boxShadow: '0px 1px 1px 1px rgba(0,0,0,0.2)',
								mt: 1,
							}}
						>
							<CardContent sx={{ p: 1.5, cursor: 'pointer', '&:last-child': { p: 1.5 } }}>
								<Typography sx={{ fontSize: '1rem' }}>Kickoff meeting</Typography>
							</CardContent>
						</Card>
						<Card
							sx={{
								boxShadow: '0px 1px 1px 1px rgba(0,0,0,0.2)',
								mt: 1,
							}}
						>
							<CardContent sx={{ p: 1.5, cursor: 'pointer', '&:last-child': { p: 1.5 } }}>
								<Typography sx={{ fontSize: '1rem' }}>Kickoff meeting</Typography>
							</CardContent>
						</Card>
						<Card
							sx={{
								boxShadow: '0px 1px 1px 1px rgba(0,0,0,0.2)',
								mt: 1,
							}}
						>
							<CardContent sx={{ p: 1.5, cursor: 'pointer', '&:last-child': { p: 1.5 } }}>
								<Typography sx={{ fontSize: '1rem' }}>Kickoff meeting</Typography>
							</CardContent>
						</Card>
						<Card
							sx={{
								boxShadow: '0px 1px 1px 1px rgba(0,0,0,0.2)',
								mt: 1,
							}}
						>
							<CardContent sx={{ p: 1.5, cursor: 'pointer', '&:last-child': { p: 1.5 } }}>
								<Typography sx={{ fontSize: '1rem' }}>Kickoff meeting</Typography>
							</CardContent>
						</Card>
						<Card
							sx={{
								boxShadow: '0px 1px 1px 1px rgba(0,0,0,0.2)',
								mt: 1,
							}}
						>
							<CardContent sx={{ p: 1.5, cursor: 'pointer', '&:last-child': { p: 1.5 } }}>
								<Typography sx={{ fontSize: '1rem' }}>Kickoff meeting</Typography>
							</CardContent>
						</Card>
						<Card
							sx={{
								boxShadow: '0px 1px 1px 1px rgba(0,0,0,0.2)',
								mt: 1,
							}}
						>
							<CardContent sx={{ p: 1.5, cursor: 'pointer', '&:last-child': { p: 1.5 } }}>
								<Typography sx={{ fontSize: '1rem' }}>Kickoff meeting</Typography>
							</CardContent>
						</Card>
						<Card
							sx={{
								boxShadow: '0px 1px 1px 1px rgba(0,0,0,0.2)',
								mt: 1,
							}}
						>
							<CardContent sx={{ p: 1.5, cursor: 'pointer', '&:last-child': { p: 1.5 } }}>
								<Typography sx={{ fontSize: '1rem' }}>Kickoff meeting</Typography>
							</CardContent>
						</Card>
					</Box>
					<Box sx={{ height: FOOTER_HEIGHT, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4px 5px 0 9px' }}>
						<Button startIcon={<AddIcon />}>Add a card</Button>
						<IconButton>
							<DragHandleIcon />
						</IconButton>
					</Box>
				</Box>

				<Box
					sx={{
						width: '272px',
						height: 'fit-content',
						mt: 2,
						mr: 1,
						ml: 1,
						bgcolor: (theme) => (theme.palette.mode === 'light' ? '#f1f2f4' : '#2d3436'),
						borderRadius: '6px',
					}}
				>
					<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: HEADER_HEIGHT, padding: '5px 15px' }}>
						<Typography
							variant='h6'
							sx={{ fontSize: '14px', fontWeight: 'bold' }}
						>
							Home work
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
					<Box
						sx={{
							padding: '0 12px',
							maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)} - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT})`,
							overflowX: 'hidden',
							overflowY: 'unset',
							'::-webkit-scrollbar-thumb:hover': {
								background: '#95a5a6',
							},
						}}
					>
						<Card sx={{ boxShadow: '0px 1px 1px 1px rgba(0,0,0,0.2)', mt: 1 }}>
							<CardMedia
								sx={{ height: 140 }}
								image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF-2MUiIoA7QjqpPUFROFgtRqGlfkMOxQteQ&s'
								title='green iguana'
							/>
							<CardContent sx={{ p: 1.5, cursor: 'pointer', '&:last-child': { p: 1.5 } }}>
								<Typography sx={{ fontSize: '1rem' }}>Kickoff meeting</Typography>
							</CardContent>
							<CardActions>
								<Button
									size='small'
									startIcon={<GroupIcon />}
								>
									20
								</Button>
								<Button
									size='small'
									startIcon={<CommentIcon />}
								>
									15
								</Button>
								<Button
									size='small'
									startIcon={<AttachmentIcon />}
								>
									20
								</Button>
							</CardActions>
						</Card>
						<Card
							sx={{
								boxShadow: '0px 1px 1px 1px rgba(0,0,0,0.2)',
								mt: 1,
							}}
						>
							<CardContent sx={{ p: 1.5, cursor: 'pointer', '&:last-child': { p: 1.5 } }}>
								<Typography sx={{ fontSize: '1rem' }}>Kickoff meeting</Typography>
							</CardContent>
						</Card>
					</Box>
					<Box sx={{ height: FOOTER_HEIGHT, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4px 5px 0 9px' }}>
						<Button startIcon={<AddIcon />}>Add a card</Button>
						<IconButton>
							<DragHandleIcon />
						</IconButton>
					</Box>
				</Box>

				<Box
					sx={{
						width: '272px',
						height: 'fit-content',
						mt: 2,
						mr: 1,
						ml: 1,
						bgcolor: (theme) => (theme.palette.mode === 'light' ? '#f1f2f4' : '#2d3436'),
						borderRadius: '6px',
					}}
				>
					<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: HEADER_HEIGHT, padding: '5px 15px' }}>
						<Typography
							variant='h6'
							sx={{ fontSize: '14px', fontWeight: 'bold' }}
						>
							Home work
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
					<Box
						sx={{
							padding: '0 12px',
							maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)} - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT})`,
							overflowX: 'hidden',
							overflowY: 'unset',
							'::-webkit-scrollbar-thumb:hover': {
								background: '#95a5a6',
							},
						}}
					>
						<Card sx={{ boxShadow: '0px 1px 1px 1px rgba(0,0,0,0.2)', mt: 1 }}>
							<CardMedia
								sx={{ height: 140 }}
								image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF-2MUiIoA7QjqpPUFROFgtRqGlfkMOxQteQ&s'
								title='green iguana'
							/>
							<CardContent sx={{ p: 1.5, cursor: 'pointer', '&:last-child': { p: 1.5 } }}>
								<Typography sx={{ fontSize: '1rem' }}>Kickoff meeting</Typography>
							</CardContent>
							<CardActions>
								<Button
									size='small'
									startIcon={<GroupIcon />}
								>
									20
								</Button>
								<Button
									size='small'
									startIcon={<CommentIcon />}
								>
									15
								</Button>
								<Button
									size='small'
									startIcon={<AttachmentIcon />}
								>
									20
								</Button>
							</CardActions>
						</Card>
						<Card
							sx={{
								boxShadow: '0px 1px 1px 1px rgba(0,0,0,0.2)',
								mt: 1,
							}}
						>
							<CardContent sx={{ p: 1.5, cursor: 'pointer', '&:last-child': { p: 1.5 } }}>
								<Typography sx={{ fontSize: '1rem' }}>Kickoff meeting</Typography>
							</CardContent>
						</Card>
					</Box>
					<Box sx={{ height: FOOTER_HEIGHT, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4px 5px 0 9px' }}>
						<Button startIcon={<AddIcon />}>Add a card</Button>
						<IconButton>
							<DragHandleIcon />
						</IconButton>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}

export default BoardContent
