/** @format */

import React from 'react'
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, Hint} from 'react-vis'
import {Box} from 'rebass'
import Typography from '@material-ui/core/Typography'
import {lightTheme as theme} from '../../../assets/theme/theme'

const LineChart = (props: any) => {
  const {title, value, xAxis, yAxis, curve, xTickTotal, yTickTotal, xType} = props
  const [hint, setHint] = React.useState(false)
  const changeHint = (value: any) => {
    if (hint !== value) {
      setHint(value)
    }
  }
  return (
    <React.Fragment>
      <Box>
        <Typography variant="h2" color="primary">
          {title}
        </Typography>
      </Box>
      <Box>
        <XYPlot
          width={window.innerWidth < 768 ? window.innerWidth - 50 : 600}
          height={300}
          yDomain={yAxis ? yAxis : ''}
          // xDomain={xAxis ? [value[0].x, value[value.length - 1].x] : ''}
          // xType={typeof value[0].x === 'string' ? 'ordinal' : ''}
        >
          <HorizontalGridLines />
          {Array.isArray(value[0]) ? (
            value.map((element: any) => {
              return (
                <LineSeries
                  onNearestXY={(datapoint: any, event: any) => {
                    changeHint(datapoint)
                  }}
                  curve={curve ? 'curveBasis' : null}
                  animation
                  getNull={(d: any) => d.y !== null}
                  data={element}
                  strokeWidth="3px"
                  key={Math.random()}
                />
              )
            })
          ) : (
            <LineSeries
              onNearestX={(datapoint: any, event: any) => {
                changeHint(datapoint)
              }}
              curve={curve ? 'curveBasis' : null}
              animation
              getNull={(d: any) => d.y !== null}
              data={value}
              stroke={theme.palette.primary.main}
              strokeWidth="3px"
            />
          )}
          {/* //! wirft viele Fehler */}
          {/* {hint !== false ? <Hint value={hint} /> : <div />} */}
          <XAxis
            tickTotal={xTickTotal ? xTickTotal : null}
            tickLabelAngle={xType ? -30 : 0}
            tickFormat={
              xType === 'time'
                ? (d: any) => {
                    // return new Date(d).getHours
                    return `${new Date(d).getHours()}:${new Date(d).getMinutes()}:${
                      Number(new Date(d).getSeconds()) < 9 ? `0` : ''
                    }${new Date(d).getSeconds()}
                    `
                  }
                : ''
            }
          />
          <YAxis tickTotal={yTickTotal ? yTickTotal : null} />
        </XYPlot>
      </Box>
    </React.Fragment>
  )
}
export default LineChart
