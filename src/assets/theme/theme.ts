/** @format */

import {createMuiTheme} from '@material-ui/core/styles'
import {color} from './color'
const defaultTheme = {
  typography: {
    useNextVariants: true,
    fontFamily: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto'].join(','),
    h1: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: '1rem',
    },
    h4: {
      fontSize: '1rem',
    },
    h6: {
      fontSize: '0.8rem',
    },
  },
}

export const lightTheme = createMuiTheme({
  ...defaultTheme,
  palette: {
    type: 'light',
    primary: {
      main: color.primary,
    },
    secondary: {
      main: color.secondary,
    },
    // background: {
    //   paper: color.backgroundPaper
    // }
  },
})
// console.log(lightTheme)
// export const darkTheme = createMuiTheme({
//   ...defaultTheme,
//   palette: {
//     type: 'dark',
//     background: {
//       paper: '#2d2d2d'
//       // paper: '#1e1e1e'
//     },
//     primary: {
//       main: '#0d84ff'
//     },
//     secondary: {
//       main: '#1e1e1e'
//     }
//   },
//   overrides: {
//     MuiInput: {
//       root: {
//         backgroundColor: 'black !important'
//       }
//     }
//   }
// })
