/** @format */

import React from 'react'

import Typography from '@material-ui/core/Typography'

import {Flex, Box} from 'rebass'
import {Label} from '../../index'
import {color} from '../../../assets/theme/color'
const controlLamp = (props: any) => {
  const {title, value} = props
  return (
    <React.Fragment>
      <Box>
        <Label title={title} color={'primary'} />
      </Box>
      <Box mt={'10px'} mb={'20px'} alignSelf={'center'}>
        <svg height="100" width="100">
          <circle cx="50" cy="50" r="40" fill={value ? color.success : color.error} />
        </svg>
      </Box>
    </React.Fragment>
  )
}
export default controlLamp
