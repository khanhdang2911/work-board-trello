/** @format */

import ModeSelect from '../ModeSelect'
import Box from '@mui/material/Box'
import AppsIcon from '@mui/icons-material/Apps'
import SvgIcon from '@mui/material/SvgIcon'
import { ReactComponent as TrelloLogo } from '../../assets/trello.svg'
import Typography from '@mui/material/Typography'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Template from './Menus/Template'
import Profiles from './Menus/Profiles'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Tooltip from '@mui/material/Tooltip'
function AppBar() {
	return (
		<Box
			sx={{
				height: (theme) => theme.trello.appBarHeight,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				px: 2,
			}}
		>
			<Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
				<AppsIcon
					fontSize='small'
					sx={{ color: 'primary.main' }}
				/>

				<Box sx={{ display: 'flex', alignItems: 'center', color: 'primary.main' }}>
					<SvgIcon
						fontSize='small'
						component={TrelloLogo}
						inheritViewBox
					/>
					<Typography
						variant='span'
						fontSize='1.2rem'
						fontWeight='bold'
						ml='3px'
					>
						Trello
					</Typography>
				</Box>

				<Workspaces />
				<Recent />
				<Starred />
				<Template />
				<Button
					sx={{ width: 65 }}
					variant='outlined'
				>
					Create
				</Button>
			</Box>
			{/* {phan ben phai} */}
			<Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
				<TextField
					sx={{ width: 200, height: 40 }}
					variant='outlined'
					label='Search'
					id='outlined-basic'
					size='small'
				/>
				<ModeSelect />
				<Tooltip title='Notifications'>
					<NotificationsNoneIcon sx={{ width: 24, height: 24, cursor: 'pointer', color: 'primary.main' }} />
				</Tooltip>
				<Tooltip title='Help'>
					<HelpOutlineIcon sx={{ width: 24, height: 24, cursor: 'pointer', color: 'primary.main' }} />
				</Tooltip>
				<Profiles />
			</Box>
		</Box>
	)
}

export default AppBar
