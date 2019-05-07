import React from 'react'
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries
} from 'react-vis'
import { Flex, Box } from 'rebass'
import Typography from '@material-ui/core/Typography'
import { lightTheme as theme } from '../../../assets/theme/theme'

const LineChart = (props: any) => {
  const { title, value, xAxis, yAxis, curve, xTickTotal, yTickTotal } = props
  console.log()
  return (
    <React.Fragment>
      <Box>
        <Typography variant="h2" color="primary">
          {title}
        </Typography>
      </Box>
      <Box>
        <XYPlot width={600} height={300} yDomain={yAxis ? yAxis : ''}>
          <HorizontalGridLines />
          {Array.isArray(value) ? (
            value.map((element: any) => {
              return (
                <LineSeries
                  curve={curve ? 'curveBasis' : null}
                  animation
                  getNull={(d: any) => d.y !== null}
                  data={element}
                  strokeWidth="3px"
                />
              )
            })
          ) : (
            <LineSeries
              curve={curve ? 'curveBasis' : null}
              animation
              getNull={(d: any) => d.y !== null}
              data={value[1]}
              stroke={theme.palette.primary.main}
              strokeWidth="3px"
            />
          )}

          <XAxis tickTotal={xTickTotal ? xTickTotal : null} />
          <YAxis tickTotal={yTickTotal ? yTickTotal : null} />
        </XYPlot>
      </Box>
    </React.Fragment>
  )
}
export default LineChart
