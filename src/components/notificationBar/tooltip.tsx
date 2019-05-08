import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Avatar from '@material-ui/core/Avatar'
import { Flex, Box } from 'rebass'
import { Typography } from '@material-ui/core'
import InfoIcon from '@material-ui/icons/Info'

export const ToolTip = (props: any) => {
  const { notifications } = props

  return (
    <React.Fragment>
      <Flex
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'flex-start'}
        style={{ minWidth: 340 }}
      >
        {notifications.map((note: any) => {
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
