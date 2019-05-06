import React, { Children } from 'react'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import ArrowDownWardIcon from '@material-ui/icons/ArrowDownward'
import { Flex, Box } from 'rebass'

const Kpi = (props: any) => {
  const { title, value, growth, displayGrowth } = props
  return (
    <React.Fragment>
      <Box>
        <Typography variant="h2" color="primary">
          {title}
        </Typography>
      </Box>
      <Box>
        <Typography variant="h3" color="inherit">
          {value}
        </Typography>
      </Box>

      {displayGrowth === false ? (
        ''
      ) : (
        <Box>
          <Typography variant="subtitle1" color="inherit">
            <Flex justifyContent={'center'} style={{ color: '#0AB464' }}>
              {growth > 0 ? (
                <React.Fragment>
                  <Box>
                    <ArrowUpwardIcon />
                  </Box>
                  <Box> {growth} %</Box>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Box>
                    <ArrowDownWardIcon />
                  </Box>
                  <Box> {growth} %</Box>
                </React.Fragment>
              )}
            </Flex>
          </Typography>
        </Box>
      )}
    </React.Fragment>
  )
}
export default Kpi
