import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Avatar from '@material-ui/core/Avatar'
import { Flex, Box } from 'rebass'
import { Typography } from '@material-ui/core'
import InfoIcon from '@material-ui/icons/Info'

import { IconButton, Badge } from '@material-ui/core'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Tooltip from '@material-ui/core/Tooltip'
import { ToolTip as TPcust } from './tooltip'

const notes = [
  {
    primary: 'Machine 1 läuft unruhig',
    secondary: '01.01.1970 10:25'
  },
  {
    primary: 'Machine 2 läuft unruhig',
    secondary: '01.01.1970 11:25'
  },
  {
    primary: 'Machine 3 läuft unruhig',
    secondary: '01.01.1970 12:25'
  },
  {
    primary: 'Machine 1 läuft wieder',
    secondary: '01.01.1970 13:25'
  }
]

const NotificationBar = (props: any) => {
  const notifications = notes
  //   const { notifications } = props
  const [tooltip, setTooltip] = React.useState(false)

  return (
    <React.Fragment>
      <div>
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
          title={<TPcust />}
        >
          <IconButton
            color="inherit"
            onClick={() => {
              setTooltip(!tooltip)
            }}
          >
            {notifications ? (
              <Badge badgeContent={notifications.length} color="secondary">
                <NotificationsIcon />
              </Badge>
            ) : (
              <NotificationsIcon />
            )}
          </IconButton>
        </Tooltip>
      </div>
    </React.Fragment>
  )
}

export default NotificationBar
