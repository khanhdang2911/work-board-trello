/** @format */

import { teal } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

// `extendTheme` is a new API
const theme = extendTheme({
	trello: {
		appBarHeight: '58px',
		boardBarHeight: '60px',
	},
	colorSchemes: {
		light: {
			palette: {
				primary: {
					main: teal[200],
				},
			},
		},
		dark: {
			palette: {
				primary: {
					main: teal[200],
				},
			},
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: 'none',
				},
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: ({ theme }) => {
					return {
						color: theme.palette.primary.main,
						fontSize: '0.875rem',
						'.MuiOutlinedInput-notchedOutline': {
							borderColor: theme.palette.primary.main,
						},
						'&:hover': {
							'.MuiOutlinedInput-notchedOutline': {
								borderColor: theme.palette.primary.main,
							},
						},
						'& fieldset': {
							borderWidth: '1px !important',
						},
					}
				},
			},
		},
		MuiInputLabel: {
			styleOverrides: {
				root: ({ theme }) => {
					return {
						color: theme.palette.primary.main,
						fontSize: '0.875rem',
					}
				},
			},
		},
		MuiSelect: {
			styleOverrides: {
				root: ({ theme }) => {
					return {
						'.MuiSvgIcon-root': {
							color: theme.palette.primary.main,
						},
					}
				},
			},
		},
	},
})

export default theme
