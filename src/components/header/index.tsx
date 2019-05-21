/** @format */

import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {NotificationBar} from '../index'
import {AddToHomescreen} from '../../pwa'
import LogoutIcon from '@material-ui/icons/Input'
import {IconButton} from '@material-ui/core'

const styles = {
  root: {
    flexGrow: 1,
    zIndex: 1500,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
}

const Header: React.FC<any> = (props: any) => {
  const {classes, title} = props
  console.log(title)
  return (
    <div className={classes.root}>
      <AppBar className={classes.root} position="fixed" elevation={0}>
        <Toolbar>
          <Typography variant="h1" color="inherit" className={classes.grow}>
            {title}
          </Typography>

          <AddToHomescreen />
          <NotificationBar />
          <IconButton color={'inherit'}>
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withStyles(styles)(Header)
