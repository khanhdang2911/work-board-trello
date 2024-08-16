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

function Card({ card }) {
	const memberLength = card?.memberIds.length
	const commentLength = card?.comments.length
	const attachmentLength = card?.attachments.length
	return (
		<MuiCard sx={{ boxShadow: '0px 1px 1px 1px rgba(0,0,0,0.2)', mt: 1 }}>
			{card?.cover && (
				<CardMedia
					sx={{ height: 140 }}
					image={card?.cover}
					title='green iguana'
				/>
			)}
			<CardContent sx={{ p: 1.5, cursor: 'pointer', '&:last-child': { p: 1.5 } }}>
				<Typography sx={{ fontSize: '1rem' }}>{card?.title}</Typography>
			</CardContent>
			{(!!memberLength || !!commentLength || !!attachmentLength) && (
				<CardActions>
					{!!memberLength && (
						<Button
							size='small'
							startIcon={<GroupIcon />}
						>
							{memberLength}
						</Button>
					)}
					{!!commentLength && (
						<Button
							size='small'
							startIcon={<CommentIcon />}
						>
							{commentLength}
						</Button>
					)}
					{!!attachmentLength && (
						<Button
							size='small'
							startIcon={<AttachmentIcon />}
						>
							{attachmentLength}
						</Button>
					)}
				</CardActions>
			)}
		</MuiCard>
	)
}

export default Card
