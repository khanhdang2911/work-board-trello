/** @format */

import { Card as MuiCard } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'

// eslint-disable-next-line react/prop-types
function Card({ temporaryHidden }) {
	if (temporaryHidden != null) {
		return (
			<MuiCard sx={{ boxShadow: '0px 1px 1px 1px rgba(0,0,0,0.2)', mt: 1 }}>
				<CardContent sx={{ p: 1.5, cursor: 'pointer', '&:last-child': { p: 1.5 } }}>
					<Typography sx={{ fontSize: '1rem' }}>Kickoff meeting</Typography>
				</CardContent>
			</MuiCard>
		)
	}
	return (
		<MuiCard sx={{ boxShadow: '0px 1px 1px 1px rgba(0,0,0,0.2)', mt: 1 }}>
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
		</MuiCard>
	)
}

export default Card
