/** @format */
import { useState, createContext } from 'react'
import { Avatar, Badge, Button, IconButton, Tooltip, useMediaQuery } from '@mui/material'
import Box from '@mui/material/Box'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import GroupIcon from '@mui/icons-material/Group'
import GradingIcon from '@mui/icons-material/Grading'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import BoltIcon from '@mui/icons-material/Bolt'
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined'
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined'
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'
import LightTooltip from '~/components/LightTooltip'
import ModalShare from './ModalShare'
export const ModalContext = createContext()
function BoardBar() {
	const matches = useMediaQuery('(min-width:600px)')
	const [open, setOpen] = useState(false)
	const handleClose = () => {
		setOpen(false)
	}
	const handleOpen = () => {
		setOpen(true)
	}
	return (
		<Box
			sx={{
				paddingX: 2,
				backgroundColor: 'white',
				height: (theme) => (matches ? theme.trello.boardBarHeight : `calc(${theme.trello.boardBarHeight} + 20px)`),
				display: () => (matches ? 'flex' : 'block'),
				justifyContent: 'space-between',
				alignItems: 'center',
				borderTop: (theme) => `1px solid ${theme.palette.primary.main}`,
			}}
		>
			{/* Left part */}
			<Box sx={{ display: 'flex', gap: '4px' }}>
				<Button
					variant='text'
					sx={{ height: '32px', lineHeight: '32px', cursor: 'pointer', fontSize: '18px', fontWeight: '600', padding: '0 10px' }}
				>
					Khanh
				</Button>
				<LightTooltip
					placement='bottom-end'
					title='Click to star or unstar this board'
				>
					<IconButton sx={{ width: '32px', height: '32px', borderRadius: '4px' }}>
						<StarBorderIcon sx={{ width: '16px', height: '16px', ':hover': { width: '20px', height: '20px' }, color: 'primary.main' }} />
					</IconButton>
				</LightTooltip>
				<Tooltip title='Change visibility'>
					<IconButton sx={{ width: '32px', height: '32px', borderRadius: '4px' }}>
						<GroupIcon sx={{ width: '16px', height: '16px', color: 'primary.main' }} />
					</IconButton>
				</Tooltip>

				<Tooltip title='Board'>
					<Button
						startIcon={<GradingIcon />}
						sx={{ height: '32px', fontSize: '14px', fontWeight: '500', userSelect: 'none' }}
					>
						Board
					</Button>
				</Tooltip>
				<Tooltip title='Customize views'>
					<IconButton sx={{ width: '32px', height: '32px', borderRadius: '4px' }}>
						<ExpandMoreIcon sx={{ width: '24px', height: '24px', color: 'primary.main' }} />
					</IconButton>
				</Tooltip>
			</Box>
			{/* Right part */}
			<Box sx={{ display: 'flex', gap: '10px' }}>
				<Tooltip title='Power-ups'>
					<IconButton sx={{ width: '32px', height: '32px', borderRadius: '4px' }}>
						<RocketLaunchOutlinedIcon sx={{ width: '16px', height: '16px', color: 'primary.main' }} />
					</IconButton>
				</Tooltip>
				<Tooltip title='Automation'>
					<IconButton sx={{ width: '32px', height: '32px', borderRadius: '4px' }}>
						<BoltIcon sx={{ width: '18px', height: '18px', color: 'primary.main' }} />
					</IconButton>
				</Tooltip>
				<Button
					startIcon={<FilterListOutlinedIcon />}
					sx={{ height: '32px', padding: '6px', fontSize: '14px', lineHeight: '20px' }}
				>
					Filters
				</Button>
				<Button sx={{ display: 'inline-block', padding: 0, marginX: '3px', width: '30px', minWidth: '0', height: '30px' }}>
					<Badge
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'right',
						}}
						color='primary'
						badgeContent={<StarBorderIcon sx={{ width: '12px', height: '12px' }} />}
					>
						<Avatar
							sx={{ width: '28px', height: '28px' }}
							src='https://yt3.ggpht.com/qcdzMIdK1onYzT3P9R_8RHQ3tRuMl-n85te1HVYHhUefA0HNVyFr30-5ispdLjbCxVg1ifHuOQ=s88-c-k-c0x00ffffff-no-rj'
						/>
					</Badge>
				</Button>
				<LightTooltip
					title='Share board'
					placement='bottom-end'
				>
					<Button
						onClick={handleOpen}
						sx={{ height: '32px', padding: '6px' }}
						startIcon={<PersonAddOutlinedIcon />}
					>
						Share
					</Button>
				</LightTooltip>
				<IconButton sx={{ width: '32px', height: '32px', borderRadius: '4px' }}>
					<MoreHorizOutlinedIcon />
				</IconButton>
			</Box>
			{/* Modal */}
			<ModalContext.Provider value={{ open, handleClose }}>
				<ModalShare />
			</ModalContext.Provider>
		</Box>
	)
}

export default BoardBar
