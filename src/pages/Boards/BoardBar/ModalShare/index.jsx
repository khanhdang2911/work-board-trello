/** @format */
import { useState, useContext } from 'react'
import Modal from '@mui/material/Modal'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import CloseIcon from '@mui/icons-material/Close'
import { Button, Divider, IconButton, TextField, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import { ModalContext } from '..'
import ModalStyle from '~/components/ModalStyle'
function ModalShare() {
	const [activeInModal, setActiveInModal] = useState(true)
	const modalContextValue = useContext(ModalContext)
	return (
		<Modal
			open={modalContextValue.open}
			onClose={modalContextValue.handleClose}
			aria-labelledby='modal-modal-share'
			aria-describedby='modal-modal-share'
		>
			<Box sx={ModalStyle}>
				<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '24px' }}>
					<Typography sx={{ fontSize: '20px', lineHeight: '20px', fontWeight: '400' }}>Share board</Typography>
					<IconButton
						onClick={modalContextValue.handleClose}
						sx={{ width: '32px', height: '32px', borderRadius: '6px' }}
					>
						<CloseIcon sx={{ width: '24px', height: '24px' }} />
					</IconButton>
				</Box>
				<Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: '0px', md: '12px' }, mb: '24px' }}>
					<TextField
						id='outlined-basic'
						label='Email address or name'
						variant='outlined'
						size='small'
						sx={{ width: '358px', height: '40px' }}
					/>
					<Button
						variant='container'
						endIcon={<ExpandMoreIcon sx={{ width: '24px', height: '24px', padding: '2px' }} />}
						sx={{ bgcolor: '#f1f2f4', color: 'black', height: '40px', padding: '4px 10px', fontSize: '14px', lineHeight: '20px', ':hover': { bgcolor: '#dcdfe4' } }}
					>
						Member
					</Button>
					<Button
						variant='container'
						sx={{ bgcolor: 'primary.main', color: 'white', height: '40px', minWidth: '0', padding: '2px 10px', ':hover': { bgcolor: 'primary.dark' } }}
					>
						Share
					</Button>
				</Box>
				<Box sx={{ display: 'flex', height: '40px', gap: '12px', mb: '12px' }}>
					<IconButton sx={{ bgcolor: '#091e420f', borderRadius: '4px', height: '32px', width: '32px', cursor: 'default' }}>
						<AttachFileIcon sx={{ width: '16px', height: '16px' }} />
					</IconButton>
					<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
						<Typography sx={{ fontSize: '14px', fontWeight: '400' }}>Share this board with a link</Typography>
						<Button sx={{ color: '#0c66e4', fontSize: '12px', padding: 0, minWidth: 0, lineHeight: '1', ':hover': { bgcolor: 'transparent', textDecoration: 'underline' } }}>
							Create link
						</Button>
					</Box>
				</Box>
				<Box
					sx={{
						display: 'flex',
						'.active': {
							borderBottom: '2px solid',
						},
					}}
				>
					<Button
						variant='text'
						className={activeInModal ? 'active' : ''}
						onClick={() => {
							setActiveInModal(true)
						}}
						sx={{ padding: 0, minWidth: 0, borderRadius: '0', ':hover': { bgcolor: 'white' }, '&:hover': { bgcolor: 'transparent' } }}
					>
						<Typography sx={{ borderRadius: '0', fontWeight: '500', fontSize: '14px' }}>Board members</Typography>
						<Typography
							sx={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								width: '19px',
								height: '19px',
								borderRadius: '50%',
								padding: '3px',
								bgcolor: '#f1f2f4',

								fontSize: '12px',
								ml: '5px',
							}}
						>
							1
						</Typography>
					</Button>
					<Button
						variant='text'
						className={activeInModal ? '' : 'active'}
						onClick={() => {
							setActiveInModal(false)
						}}
						sx={{ padding: 0, borderRadius: '0', ml: '12px', ':hover': { bgcolor: 'white' }, '&:hover': { bgcolor: 'transparent' } }}
					>
						<Typography sx={{ fontWeight: '500', fontSize: '14px' }}>Join request</Typography>
					</Button>
				</Box>
				<Divider />
			</Box>
		</Modal>
	)
}

export default ModalShare
