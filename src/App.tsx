/* eslint-disable no-restricted-globals */

import React from 'react'

import { MuiThemeProvider } from '@material-ui/core'
import { lightTheme as theme } from './assets/theme/theme'
import { Navigation, Header } from './components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import routes from './assets/routes'

interface IState {
  data: any
  streamData: any
  title: string
}
// ? Ts wirft sonst Error für promted
declare const window: any

export default class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props)

    this.state = {
      data: [],
      streamData: [],
      title: 'Sales Dashboard',
      readyToAdd: false,
      successfullyInstalled: false,
      acceptedInstall: false,
      declinedInstall: false
    }
    this.setTitle = this.setTitle.bind(this)

    // connect to the realtime database stream
    // let eventSource = new EventSource(url)

    // eventSource.onmessage = function(this: any, e: any) {
    //   let parsedData: any = JSON.parse(e.data)
    //   updateState(parsedData)
    // }

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
    this.shouldShowAddButton = this.shouldShowAddButton.bind(this)
  }
  componentDidMount() {
    // check if user is already running app from home screen
    if (window.matchMedia('(display-mode: standalone)').matches) {
      console.log('App is already installed and running in standalone')
      this.setState({
        successfullyInstalled: true
      })
    } else {
      window.addEventListener('beforeinstallprompt', (e: any) => {
        console.log('beforeinstallprompt has fired', e)
        // Prevent Chrome 67 and earlier from automatically showing the prompt
        e.preventDefault()
        // Stash the event so it can be triggered later.
        window.deferredPrompt = e
        this.setState({
          readyToAdd: true
        })
      })
      // this event fires only when app is installed
      window.addEventListener('appinstalled', (evt: any) => {
        console.log('App was successfully installed')
        this.setState({
          successfullyInstalled: true
        })
      })
    }
  }
  addToHome() {
    // Show the prompt
    let { deferredPrompt }: { deferredPrompt: any } = window
    if (deferredPrompt) {
      deferredPrompt.prompt()
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt')
          this.setState({
            acceptedInstall: true
          })
        } else {
          console.log('User dismissed the A2HS prompt')
          this.setState({
            declinedInstall: true
          })
        }
        deferredPrompt = null
      })
    }
  }
  shouldShowAddButton() {
    let shouldShow =
      this.state.readyToAdd &&
      !this.state.successfullyInstalled &&
      !this.state.acceptedInstall &&
      !this.state.declinedInstall
    console.log('Should show add button', shouldShow)
    return shouldShow
  }

  setTitle(title: string) {
    this.setState({ title })
  }

  render() {
    // console.log(this.state.streamData)
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <Header title={this.state.title} notifications={1} />
          <Navigation setTitle={this.setTitle} width={window.innerWidth} />
          <React.Fragment>
            {routes.map((e: any) => (
              <Route path={e.path} component={e.component} />
            ))}
          </React.Fragment>
        </Router>
        {this.shouldShowAddButton() ? (
          <button onClick={this.addToHome}>Add to Home Screen</button>
        ) : null}
      </MuiThemeProvider>
    )
  }
}
