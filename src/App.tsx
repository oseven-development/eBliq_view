import React from 'react'
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries
} from 'react-vis'
import { MuiThemeProvider } from '@material-ui/core'
import { lightTheme as theme } from './assets/theme/theme'
import { Navigation, Header } from './components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import routes from './assets/routes'

const url = 'http://localhost:3555/get'

interface IState {
  data: any
  streamData: any
  title: string
}

export default class App extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props)

    this.state = { data: [], streamData: [], title: 'Sales Dashboard' }
    this.setTitle = this.setTitle.bind(this)

    // connect to the realtime database stream
    let eventSource = new EventSource(url)

    eventSource.onmessage = function(this: any, e: any) {
      let parsedData: any = JSON.parse(e.data)
      updateState(parsedData)
    }

    const updateState = (newData: any) => {
      this.setState({
        data: [...this.state.data, newData]
      })
      updateStream()
      // console.log(this.state)
    }

    const updateStream = () => {
      let lastFive = this.state.data.slice(
        Math.max(this.state.data.length - 100, 1)
      )
      // let lastFive = this.state.data
      let streamData: any = []
      let e: any
      for (e in lastFive) {
        streamData.push({ x: lastFive[e].orderId, y: lastFive[e].value })
      }
      this.setState({
        streamData
      })
    }
  }

  setTitle(title: string) {
    this.setState({ title })
  }

  render() {
    // console.log(this.state.streamData)
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <Header title={this.state.title} />
          <Navigation setTitle={this.setTitle} width={window.innerWidth} />
          <React.Fragment>
            {routes.map((e: any) => (
              <Route path={e.path} component={e.component} />
            ))}

            {/* <div>{this.state.data}</div> */}
          </React.Fragment>
        </Router>
      </MuiThemeProvider>
    )
  }
}
