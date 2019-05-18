/** @format */

import React from 'react'
import {Box} from 'rebass'
import Typography from '@material-ui/core/Typography'
import {lightTheme as theme} from '../../../assets/theme/theme'
import {RadialChart} from 'react-vis'
const gaugeChart = (props: any) => {
  const {title, size} = props
  const value = 35
  const chartValue = [{theta: value / 100, color: theme.palette.primary.main}, {theta: 1 - value / 100, color: '#ccc'}]

  return (
    <React.Fragment>
      <Box>
        <Typography variant="h2" color="primary">
          {title}
        </Typography>
      </Box>
      <Box>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 15,
          }}>
          <RadialChart
            innerRadius={size ? size / 2 - 15 : 75}
            radius={size ? size / 2 : 90}
            getAngle={(d: any) => d.theta}
            data={chartValue}
            onValueMouseOver={(v: any) => console.log(v)}
            onSeriesMouseOut={(v: any) => console.log(v)}
            width={size ? size : 180}
            height={size ? size : 180}
            colorType="literal"
          />
          <div
            style={{
              position: 'absolute',
              padding: '5px',
            }}>
            <Typography variant="h2" color="primary">
              {value} %
            </Typography>
          </div>
        </div>

        {/* {value !== false && <Hint value={value} />} */}
      </Box>
    </React.Fragment>
  )
}

export default gaugeChart
