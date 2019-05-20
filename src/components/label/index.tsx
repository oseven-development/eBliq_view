/** @format */

import React from 'react'

// Material helpers
import {withStyles} from '@material-ui/core'
import {Flex} from 'rebass'
// Material components
import {Typography} from '@material-ui/core'

const styles = (theme: any) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    fontSize: '1.3rem',
    marginRight: theme.spacing.unit,
    color: theme.palette.text.secondary,
    alignItems: 'center',
    display: 'flex',
  },

  subtitle: {
    fontWeight: 400,
    marginLeft: theme.spacing.unit + theme.spacing.unit,
    color: theme.palette.text.secondary,
  },
})

const Label = (props: any) => {
  const {classes, icon, title, subtitle, color} = props
  return (
    <Flex alignItems="flex-end">
      {icon && <span className={classes.icon}>{icon}</span>}
      {title && (
        <Typography className={classes.title} variant="h2" color={color ? color : 'inherit'}>
          {title}
        </Typography>
      )}
      {subtitle && (
        <Typography className={classes.subtitle} variant="subtitle2">
          {subtitle}
        </Typography>
      )}
    </Flex>
  )
}

export default withStyles(styles)(Label)
