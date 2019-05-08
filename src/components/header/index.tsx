import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { IconButton, Badge } from '@material-ui/core'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Tooltip from '@material-ui/core/Tooltip'
import { NotificationBar } from '../index'
const styles = {
  root: {
    flexGrow: 1
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
  const [tooltip, setTooltip] = React.useState(false)

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h1" color="inherit" className={classes.grow}>
            {title}
          </Typography>
          <Tooltip
            PopperProps={{
              disablePortal: true
            }}
            onClose={() => {
              setTooltip(false)
            }}
            open={tooltip}
            disableFocusListener
            disableHoverListener
            title={<NotificationBar />}
          >
            <IconButton
              color="inherit"
              onClick={() => {
                setTooltip(!tooltip)
              }}
            >
              {notifications ? (
                <Badge badgeContent={notifications} color="secondary">
                  <NotificationsIcon />
                </Badge>
              ) : (
                <NotificationsIcon />
              )}
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withStyles(styles)(Header)
