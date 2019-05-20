/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import {Flex, Box} from 'rebass'
import {Label} from '../index'
import {color} from '../../assets/theme/color'
const styles = (theme: any) => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
})

const _paper = (props: any) => {
  const {classes, title, body, footer, subtitle} = props

  return (
    <Paper
      className={classes.root}
      elevation={0}
      style={{padding: 0, border: `1px solid ${color.lightgrey}`, margin: '20px 10px'}}>
      <Flex flexDirection={'column'} justifyContent="center">
        <Box
          style={{
            borderBottom: `1px solid ${color.lightgrey}`,
            height: 64,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            flexDirection: 'row',
          }}
          px={'24px'}>
          <Label title={title} subtitle={subtitle} />
        </Box>
        <Box px={'24px'}>{body}</Box>
        <Box
          style={{
            borderTop: `1px solid ${color.lightgrey}`,
            height: 64,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            flexDirection: 'row',
          }}
          px={'24px'}>
          {footer}
        </Box>
      </Flex>
    </Paper>
  )
}

export default withStyles(styles)(_paper)
