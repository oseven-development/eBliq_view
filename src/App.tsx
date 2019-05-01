import React from 'react'
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries
} from 'react-vis'

const url = 'http://localhost:3555/get'

interface IState {
  data: any
  streamData: any
}

export default class App extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props)

    this.state = { data: [], streamData: [] }

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
        Math.max(this.state.data.length - 15, 1)
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

  render() {
    console.log(this.state.streamData)
    return (
      <React.Fragment>
        <h1>test</h1>
        <XYPlot width={300} height={300}>
          <HorizontalGridLines />
          <LineSeries
            // curve="curveBasis"
            // animation
            getNull={(d: any) => d.y !== null}
            data={this.state.streamData}
          />
          <XAxis tickSize={1} />
          <YAxis />
        </XYPlot>
        {/* <div>{this.state.data}</div> */}
      </React.Fragment>
    )
  }
}
