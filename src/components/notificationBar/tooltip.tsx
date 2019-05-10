import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Avatar from '@material-ui/core/Avatar'
import { Flex, Box } from 'rebass'
import { Typography, Button } from '@material-ui/core'
import InfoIcon from '@material-ui/icons/Info'
import { List } from '../index'
import { Link } from 'react-router-dom'
import Divider from '@material-ui/core/Divider'

export const ToolTip = (props: any) => {
  const { notifications } = props
  return (
    <React.Fragment>
      <Flex
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'flex-start'}
        // style={{ minWidth: 340 }}
      >
        <Box mx={'10px'}>
          <List
            data={notifications}
            color={{ primary: 'inherit', secondary: 'inherit' }}
          />
        </Box>
        <Box width={1}>
          <Divider style={{ background: '#bbb' }} />
        </Box>
        <Box mx={'10px'} my={'5px'} alignSelf="center">
          <Button
            color="secondary"
            // @ts-ignore: Wait fix from material-UI
            component={Link}
            to={'/sales'}
          >
            Show More
          </Button>
        </Box>
      </Flex>
    </React.Fragment>
  )
}
