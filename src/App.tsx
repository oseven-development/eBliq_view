/**
 * /* eslint-disable no-restricted-globals
 *
 * @format
 */

import React from 'react'

import {MuiThemeProvider} from '@material-ui/core'
import {lightTheme as theme} from './assets/theme/theme'
import {Navigation, Header, SnackBar} from './components'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import routes from './assets/routes'
interface IState {
  data: any
  streamData: any
  title: string
}
// ? Ts wirft sonst Error für promted
declare const window: any

// connect to the realtime database stream
// let eventSource = new EventSource(url)

// eventSource.onmessage = function(this: any, e: any) {
//   let parsedData: any = JSON.parse(e.data)
//   updateState(parsedData)
// }
// const updateState = (newData: any) => {
//   this.setState({
//     data: [...this.state.data, newData]
//   })
//   updateStream()
//   // console.log(this.state)
// }
// const updateStream = () => {
//   let lastFive = this.state.data.slice(
//     Math.max(this.state.data.length - 100, 1)
//   )
//   // let lastFive = this.state.data
//   let streamData: any = []
//   let e: any
//   for (e in lastFive) {
//     streamData.push({ x: lastFive[e].orderId, y: lastFive[e].value })
//   }
//   this.setState({
//     streamData
//   })
// }

const App = () => {
  const [title, setTitle] = React.useState('Suche')
  const [snack, setSnack] = React.useState({open: false, variant: 'info', message: 'das ist ein Test'})

  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Header title={title} notifications={1} />
        <Navigation setTitle={setTitle} width={window.innerWidth} />
        <React.Fragment>
          {routes.map((e: any) => {
            const Component = e.component
            return (
              <Route
                path={e.path}
                component={(props: any) => <Component {...props} setSnack={setSnack} snack={snack} />}
                key={e.path}
              />
            )
          })}
        </React.Fragment>
      </Router>
      <SnackBar open={snack.open} snack={snack} setSnack={setSnack} variant={snack.variant} message={snack.message} />
    </MuiThemeProvider>
  )
}

export default App
