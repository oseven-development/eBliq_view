/** @format */

import React from 'react'
import Typography from '@material-ui/core/Typography'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import ArrowDownWardIcon from '@material-ui/icons/ArrowDownward'
import {Flex, Box} from 'rebass'
import {Label} from '../index'
import {color} from '../../assets/theme/color'
import {formatCurrency} from '../../assets/formats/currency'
const Kpi = (props: any) => {
  const {title, value, growth, displayGrowth} = props
  return (
    <React.Fragment>
      <Box>
        <Label title={title} color={'primary'} />
      </Box>
      <Box mt={'10px'} mb={'20px'}>
        <Typography variant="h3" color="inherit">
          {formatCurrency(value)}
        </Typography>
      </Box>

      {displayGrowth === false ? (
        ''
      ) : (
        <Box>
          <Typography variant="subtitle1" color="inherit">
            <Flex
              justifyContent={'center'}
              alignItems={'center'}
              style={{
                color: growth > 0 ? color.success : growth === 0 ? 'default' : color.error,
              }}>
              {growth > 0 ? <ArrowUpwardIcon /> : growth < 0 ? <ArrowDownWardIcon /> : ''}
              {growth} %
            </Flex>
          </Typography>
        </Box>
      )}
    </React.Fragment>
  )
}
export default Kpi
