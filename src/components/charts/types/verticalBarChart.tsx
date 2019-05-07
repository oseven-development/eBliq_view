import React from 'react'
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalBarSeries
} from 'react-vis'
import { Flex, Box } from 'rebass'
import Typography from '@material-ui/core/Typography'
import { lightTheme as theme } from '../../../assets/theme/theme'

const VerticalBarChart = (props: any) => {
  const {
    title,
    value,
    xAxis,
    yAxis,
    curve,
    xTickTotal,
    yTickTotal,
    stacked
  } = props
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
                <VerticalBarSeries
                  cluster={stacked ? 'stack 1' : null}
                  curve={curve ? 'curveBasis' : null}
                  animation
                  getNull={(d: any) => d.y !== null}
                  data={element}
                  strokeWidth="3px"
                />
              )
            })
          ) : (
            <VerticalBarSeries
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

export default VerticalBarChart
