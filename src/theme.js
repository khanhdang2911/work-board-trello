import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

// `extendTheme` is a new API
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#333',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#fff',
        },
      },
    },
  },
  // ...other properties
})

export default theme
