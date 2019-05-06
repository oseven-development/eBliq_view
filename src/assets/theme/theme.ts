import { createMuiTheme } from '@material-ui/core/styles'

const defaultTheme = {
  typography: {
    useNextVariants: true,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto'
    ].join(','),
    h1: {
      fontSize: '2.25rem',
      fontWeight: 600
    },
    h3: {
      fontSize: '1.2rem'
    },
    h6: {
      fontSize: '1rem'
    },
    subtitle1: {
      fontSize: '0.7rem'
    },
    subtitle2: {
      fontSize: '0.66rem'
    }
  }
}

export const lightTheme = createMuiTheme({
  ...defaultTheme,
  palette: {
    primary: {
      main: '#0158c8'
    },
    secondary: {
      main: '#ef6c00'
    }
  }
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
