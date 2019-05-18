/** @format */

import React from 'react'
import {Flex} from 'rebass'
import Button from '@material-ui/core/Button'
import Popover from '@material-ui/core/Popover'
import {IconButton, Badge} from '@material-ui/core'
import InfoIcon from '@material-ui/icons/Info'
import {List} from '../index'

import NotificationsIcon from '@material-ui/icons/Notifications'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'

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
        style={{marginTop: -65, minWidth: 450}}>
        <Flex alignItems="center" flexDirection={'column'}>
          <List data={notifications} divider={true} />
          <Button color="primary" size="small" variant="contained" style={{margin: 10}}>
            See all
          </Button>
        </Flex>
      </Popover>
    </React.Fragment>
  )
}

export default _notification

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
