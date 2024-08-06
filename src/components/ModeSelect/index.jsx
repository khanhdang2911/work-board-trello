/** @format */

import Box from '@mui/material/Box'
import { useColorScheme } from '@mui/material/styles'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import LightMode from '@mui/icons-material/LightMode'
import DarkMode from '@mui/icons-material/DarkMode'
import SettingsBrightness from '@mui/icons-material/SettingsBrightness'
function ModeSelect() {
	const { mode, setMode } = useColorScheme()

	const handleChange = (event) => {
		const selectedMode = event.target.value
		//Set Mode
		setMode(selectedMode)
	}

	return (
		<FormControl size='small'>
			<InputLabel id='demo-select-small-label'>Mode</InputLabel>
			<Select
				sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: '8px' }}
				labelId='demo-select-small-label'
				id='demo-select-small'
				value={mode}
				label='Mode'
				onChange={handleChange}
			>
				<MenuItem value='dark'>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
						<DarkMode fontSize='small' />
						Dark
					</Box>
				</MenuItem>
				<MenuItem value='light'>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
						<LightMode fontSize='small' />
						Light
					</Box>
				</MenuItem>
				<MenuItem value='system'>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
						<SettingsBrightness fontSize='small' />
						System
					</Box>
				</MenuItem>
			</Select>
		</FormControl>
	)
}

export default ModeSelect
