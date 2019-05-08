import React from 'react'
import { Flex, Box } from 'rebass'
import Typography from '@material-ui/core/Typography'
import { lightTheme as theme } from '../../../assets/theme/theme'

const MachineVis = (props: any) => {
  const { data, title } = props

  const setColor = (machine: any) => {
    if (machine < 50) {
      return 'green'
    } else {
      return 'red'
    }
  }

  return (
    <React.Fragment>
      <Box>
        <Typography variant="h2" color="primary">
          {title}
        </Typography>
      </Box>
      <svg x="0px" y="0px" viewBox="0 0 600 300">
        <rect x="206.2" y="28.9" fill={'black'} width="193.8" height="242.2" />
        <rect x="40" y="131.1" fill={'black'} width="166.2" height="40" />
        <rect x="78.3" y="171.1" fill={'black'} width="13.4" height="100" />
        <rect x="154.7" y="171.1" fill={'black'} width="13.4" height="100" />
        <rect x="400" y="131.1" fill={'black'} width="166.2" height="40" />
        <rect x="438.3" y="171.1" fill={'black'} width="13.4" height="100" />
        <rect x="514.7" y="171.1" fill={'black'} width="13.4" height="100" />
        <rect x="228.1" y="51.1" fill={'black'} width="150" height="60" />
        <rect
          x="228.1"
          y="131.1"
          fill={setColor(data.machine1)}
          width="29.7"
          height="60"
        />
        <rect
          x="348"
          y="131.1"
          fill={setColor(data.machine2)}
          width="29.7"
          height="60"
        />
        <rect
          x="276.6"
          y="131.1"
          fill={setColor(data.machine3)}
          width="52.6"
          height="60"
        />
        <rect
          x="228.2"
          y="239"
          fill={setColor(data.machine4)}
          width="150"
          height="19.6"
        />
      </svg>
    </React.Fragment>
  )
}

export default MachineVis
