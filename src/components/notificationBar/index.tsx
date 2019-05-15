import React from 'react'

import InfoIcon from '@material-ui/icons/Info'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

import { IconButton, Badge } from '@material-ui/core'
import NotificationsIcon from '@material-ui/icons/Notifications'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import Tooltip from '@material-ui/core/Tooltip'
import { ToolTip as TPcust } from './tooltip'

const notes = [
  {
    primary: 'Machine 1 läuft unruhig',
    secondary: '01.01.1970 10:25',
    icon: <InfoIcon color={'secondary'} />
  },
  {
    primary: 'Machine 2 läuft unruhig',
    secondary: '01.01.1970 11:25',
    icon: <InfoIcon color={'secondary'} />
  },
  {
    primary: 'Machine 3 läuft unruhig',
    secondary: '01.01.1970 12:25',
    icon: <InfoIcon color={'secondary'} />
  },
  {
    primary: 'Machine 1 läuft wieder',
    secondary: '01.01.1970 13:25',
    icon: <InfoIcon color={'secondary'} />
  }
]

const NotificationBar = (props: any) => {
  const notifications = notes
  //   const { notifications } = props
  const [tooltip, setTooltip] = React.useState(false)

  return (
    <React.Fragment>
      <ClickAwayListener
        onClickAway={() => {
          setTooltip(false)
        }}
      >
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
          title={<TPcust notifications={notifications} />}
          interactive={true}
        >
          <IconButton
            color="inherit"
            onClick={() => {
              setTooltip(!tooltip)
            }}
          >
            {notifications ? (
              <Badge badgeContent={notifications.length} color="secondary">
                <NotificationsActiveIcon />
              </Badge>
            ) : (
              <NotificationsIcon />
            )}
          </IconButton>
        </Tooltip>
      </ClickAwayListener>
    </React.Fragment>
  )
}

export default NotificationBar
