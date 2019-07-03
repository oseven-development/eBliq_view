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
import {connect} from 'react-redux'
import {setData} from './redux/action'
interface IState {
  data: any
  streamData: any
  title: string
}
// ? Ts wirft sonst Error für promted
declare const window: any
const url = 'http://localhost:8080/connect'
// const url = 'https://11852507.ngrok.io/start'
const source = new EventSource(url)

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

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      title: 'Suche',
      snack: {open: false, variant: 'info', message: 'das ist ein Test'},
      data: [],
    }
    source.addEventListener('machineStream', (e: any) => {
      this.props.setDataMachine({
        payload: e.data,
        type: 'ADDM',
      })
    })
    source.addEventListener('AI', (e: any) => {
      this.props.setDataAI({
        payload: e.data,
        type: 'ADDA',
      })
    })
    source.addEventListener('order', (e: any) => {
      this.props.setDataOrder({
        payload: e.data,
        type: 'ADDO',
      })
    })
    // notification('Simulation gestartet')
  }

  setTitle = (title: String) => {
    this.setState({title})
  }
  setSnack = (snack: String) => {
    this.setState({snack})
  }

  render() {
    const {title, snack} = this.state
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <Header title={title} notifications={1} />
          <Navigation setTitle={this.setTitle} width={window.innerWidth} />
          <React.Fragment>
            {routes.map((e: any) => {
              const Component = e.component
              return (
                <Route
                  path={e.path}
                  component={(props: any) => (
                    <Component {...props} setSnack={this.setSnack} snack={snack} source={source} />
                  )}
                  key={e.path}
                />
              )
            })}
          </React.Fragment>
        </Router>
        <SnackBar
          open={snack.open}
          snack={snack}
          setSnack={this.setSnack}
          variant={snack.variant}
          message={snack.message}
        />
      </MuiThemeProvider>
    )
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setDataMachine: (transfer: any) => {
      dispatch(
        setData({
          payload: transfer.payload || {},
          type: transfer.type,
        }),
      )
    },
    setDataAI: (transfer: any) => {
      dispatch(
        setData({
          payload: transfer.payload || {},
          type: transfer.type,
        }),
      )
    },
    setDataOrder: (transfer: any) => {
      dispatch(
        setData({
          payload: transfer.payload || {},
          type: transfer.type,
        }),
      )
    },
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(App)
