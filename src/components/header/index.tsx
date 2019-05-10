import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import { NotificationBar } from '../index'
const styles = {
  root: {
    flexGrow: 1,
    zIndex: 10000
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}

const Header: React.FC<any> = (props: any) => {
  const { classes, title, notifications } = props

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h1" color="inherit" className={classes.grow}>
            {title}
          </Typography>
          <NotificationBar />
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withStyles(styles)(Header)
