import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Avatar from '@material-ui/core/Avatar'
import { Flex, Box } from 'rebass'
import { Typography } from '@material-ui/core'
import InfoIcon from '@material-ui/icons/Info'

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
  //   const { notifcations } = props
  const notifcations = notes
  return (
    <React.Fragment>
      <Flex
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'flex-start'}
        style={{ minWidth: 340 }}
      >
        {notifcations.map((note: any) => {
          return (
            <Box mx={'10px'} my={'5px'}>
              <Flex
                flexDirection={'row'}
                justifyContent={'center'}
                alignItems={'center'}
              >
                <Box mr={'7px'}>
                  {note.icon ? note.icon : <InfoIcon color="secondary" />}
                </Box>
                <Box>
                  <Typography variant="h4" color="inherit">
                    {note.primary}
                  </Typography>
                  <Typography variant="h6" color="inherit">
                    {note.secondary}
                  </Typography>
                </Box>
              </Flex>
            </Box>
          )
        })}
      </Flex>
    </React.Fragment>
  )
}

export default NotificationBar
