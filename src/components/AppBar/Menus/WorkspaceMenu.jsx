/** @format */
import Box from '@mui/material/Box'
import { Divider, Typography } from '@mui/material'

function WorkspaceMenu() {
	return (
		<>
			<Box>
				<Typography sx={{ margin: '16px 20px 8px 20px', color: '#44546f', fontWeight: '600', lineHeight: '16px', fontSize: '12px' }}>Current Workspace</Typography>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						gap: '12px',
						cursor: 'pointer',
						':hover': { bgcolor: '#091e420f' },
						margin: '0 12px 4px',
						padding: '8px',
						borderRadius: '4px',
					}}
				>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							width: '40px',
							height: '40px',
							bgcolor: '#27ae60',
							color: 'white',
							borderRadius: '4px',
							fontWeight: '600',
							userSelect: 'none',
						}}
					>
						T
					</Box>
					<Typography sx={{ fontSize: '14px', fontWeight: '500', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>Trello Workspace</Typography>
				</Box>
			</Box>
			<Divider />
			<Box>
				<Typography sx={{ margin: '16px 20px 8px 20px', color: '#44546f', fontWeight: '600', lineHeight: '16px', fontSize: '12px' }}>Current Workspace</Typography>
				<Box sx={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', margin: '0 12px 4px', padding: '4px 8px 8px', borderRadius: '4px' }}>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							width: '40px',
							height: '40px',
							bgcolor: '#27ae60',
							color: 'white',
							borderRadius: '4px',
							fontWeight: '600',
						}}
					>
						T
					</Box>
					<Typography sx={{ fontSize: '14px', fontWeight: '500', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>Trello Workspace</Typography>
				</Box>
			</Box>
		</>
	)
}

export default WorkspaceMenu
