/** @format */

import React from 'react'
import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalBarSeries} from 'react-vis'
import {Flex, Box} from 'rebass'
import Typography from '@material-ui/core/Typography'
import {lightTheme as theme} from '../../../assets/theme/theme'

const VerticalBarChart = (props: any) => {
  const {title, value, xAxis, yAxis, curve, xTickTotal, yTickTotal, stacked} = props
  return (
    <React.Fragment>
      <Box>
        <Typography variant="h2" color="primary">
          {title}
        </Typography>
      </Box>
      <Box>
        <XYPlot
          width={window.innerWidth < 768 ? window.innerWidth - 50 : 500}
          margin={{left: 80, bottom: 200}}
          height={500}
          yDomain={yAxis ? yAxis : ''}
          xType="ordinal">
          <HorizontalGridLines />
          {/* {Array.isArray(value) ? (
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
          ) : ( */}
          <VerticalBarSeries
            // curve={curve ? 'curveBasis' : null}
            // animation
            // getNull={(d: any) => d.y !== null}
            data={value}
            // barWidth={1}
            color={theme.palette.primary.main}
            // strokeWidth="3px"
          />
          {/* )} */}

          <XAxis tickTotal={xTickTotal ? xTickTotal : null} tickLabelAngle={-45} />
          <YAxis tickTotal={yTickTotal ? yTickTotal : null} tickFormat={(v: number) => `${v}€`} />
        </XYPlot>
      </Box>
    </React.Fragment>
  )
}

export default VerticalBarChart
