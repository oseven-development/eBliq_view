/** @format */

import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Popover from '@material-ui/core/Popover'
import {IconButton, Badge} from '@material-ui/core'
import {ToolTip as TPcust} from './tooltip'
import InfoIcon from '@material-ui/icons/Info'

import NotificationsIcon from '@material-ui/icons/Notifications'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
const styles = (theme: any) => ({
  typography: {
    margin: theme.spacing.unit * 2,
  },
})

const _notification = (props: any) => {
  const {classes, button} = props
  const [anchor, setAnchor] = React.useState(false)
  const notifications = notes
  let anchorEl: any
  const handleClick = (event: any) => {
    anchorEl = event.currentTarget
    console.log(anchorEl)
    setAnchor(!anchor)
  }

  return (
    <React.Fragment>
      <IconButton
        color="inherit"
        onClick={handleClick}
        aria-owns={anchor ? 'simple-popper' : undefined}
        aria-haspopup="true">
        {notifications ? (
          <Badge badgeContent={notifications.length} color="secondary">
            <NotificationsActiveIcon />
          </Badge>
        ) : (
          <NotificationsIcon />
        )}
      </IconButton>
      <Popover
        open={anchor}
        anchorEl={anchorEl}
        onClose={() => {
          setAnchor(!anchor)
        }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        style={{marginTop: -65}}>
        <TPcust notifications={notifications} />
      </Popover>
    </React.Fragment>
  )
}

export default withStyles(styles)(_notification)

const notes = [
  {
    primary: 'Machine 1 läuft unruhig',
    secondary: '01.01.1970 10:25',
    icon: <InfoIcon color={'primary'} />,
  },
  {
    primary: 'Machine 2 läuft unruhig',
    secondary: '01.01.1970 11:25',
    icon: <InfoIcon color={'primary'} />,
  },
  {
    primary: 'Machine 3 läuft unruhig',
    secondary: '01.01.1970 12:25',
    icon: <InfoIcon color={'primary'} />,
  },
  {
    primary: 'Machine 1 läuft wieder',
    secondary: '01.01.1970 13:25',
    icon: <InfoIcon color={'primary'} />,
  },
]
