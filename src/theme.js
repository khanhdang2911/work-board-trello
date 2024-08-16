/** @format */

import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
const APP_BAR_HEIGHT = '58px'
const BOARD_BAR_HEIGHT = '60px'

// `extendTheme` is a new API
const theme = extendTheme({
	trello: {
		appBarHeight: APP_BAR_HEIGHT,
		boardBarHeight: BOARD_BAR_HEIGHT,
		boardContentHeight: `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`,
		headerBoardContentHeight: '45px',
		footerBoardContentHeight: '55px',
	},
	// colorSchemes: {
	// 	light: {
	// 		palette: {
	// 			primary: {
	// 				main: teal[200],
	// 			},
	// 		},
	// 	},
	// 	dark: {
	// 		palette: {
	// 			primary: {
	// 				main: teal[200],
	// 			},
	// 		},
	// 	},
	// },
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					'*::-webkit-scrollbar': {
						width: '6px',
						height: '6px',
					},
					'*::-webkit-scrollbar-track ': {
						margin: '8px',
					},
					'*::-webkit-scrollbar-thumb': {
						background: '#bdc3c7',
						borderRadius: '10px',
					},
					'*::-webkit-scrollbar-thumb:hover': {
						background: '#7f8c8d',
					},
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: 'none',
				},
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					fontSize: '0.875rem',
					'& fieldset': {
						borderWidth: '1px !important',
					},
				},
			},
		},
		MuiInputLabel: {
			styleOverrides: {
				root: {
					fontSize: '0.875rem',
				},
			},
		},
		// MuiSelect: {
		// 	styleOverrides: {
		// 		root: ({ theme }) => {
		// 			return {
		// 				'.MuiSvgIcon-root': {
		// 					color: theme.palette.primary.main,
		// 				},
		// 			}
		// 		},
		// 	},
		// },
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 790,
			md: 900,
			lg: 1200,
			xl: 1536,
		},
	},
})

export default theme
