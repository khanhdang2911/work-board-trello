/** @format */

import ModeSelect from '~/components/ModeSelect'
import Box from '@mui/material/Box'
import AppsIcon from '@mui/icons-material/Apps'
import SvgIcon from '@mui/material/SvgIcon'
import { ReactComponent as TrelloLogo } from '~/assets/trello.svg'
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
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import AddIcon from '@mui/icons-material/Add'
import More from './Menus/More'

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
					sx={{ color: 'primary.main', cursor: 'pointer' }}
				/>

				<Box sx={{ display: 'flex', alignItems: 'center', color: 'primary.main', cursor: 'pointer' }}>
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

				<Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: 1 }}>
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
				{/* Button add responsive */}
				<More />
				<IconButton sx={{ width: 32, height: 32, display: { xs: 'flex', lg: 'none' }, color: 'primary.main', bgcolor: '#ecf0f1', borderRadius: '7px' }}>
					<AddIcon />
				</IconButton>
			</Box>
			{/* {phan ben phai} */}
			<Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
				<TextField
					sx={{ width: 200, height: 40, display: { xs: 'none', sm: 'flex' } }}
					variant='outlined'
					label='Search'
					id='outlined-basic'
					size='small'
				/>
				<ModeSelect />
				<IconButton sx={{ width: 32, height: 32, display: { xs: 'flex', md: 'none' } }}>
					<SearchIcon sx={{ width: 24, height: 24, color: 'primary.main' }} />
				</IconButton>
				<Tooltip title='Notifications'>
					<NotificationsNoneIcon sx={{ width: 24, height: 24, cursor: 'pointer', color: 'primary.main' }} />
				</Tooltip>
				<Tooltip title='Help'>
					<HelpOutlineIcon sx={{ width: 24, height: 24, cursor: 'pointer', color: 'primary.main', display: { xs: 'none', sm: 'block' } }} />
				</Tooltip>
				<Profiles />
			</Box>
		</Box>
	)
}

export default AppBar
