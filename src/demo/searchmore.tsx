/** @format */

import React from 'react'
import classNames from 'classnames'
import {withStyles} from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import {Flex, Box} from 'rebass'
import {Typography, Divider} from '@material-ui/core'

export const SearchMore = (props: any) => {
  const {classes} = props

  return (
    <Flex
      flexWrap={'wrap'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
      style={{width: '100%'}}>
      <Box width={window.innerWidth > 768 ? '90%' : '70%'} style={{margin: '5px 50px'}}>
        <Typography variant="h2">Filter</Typography>
        <Divider style={{height: 2}} />
      </Box>
      <Box>
        <Flex
          flexWrap={'wrap'}
          justifyContent={'center'}
          alignItems={'center'}
          flexDirection={'column'}
          style={{width: '100%', margin: '5px 0px 15px 0px'}}>
          <Box>
            <TextField
              id="outlined-name"
              label="Kunde"
              margin="normal"
              variant="filled"
              style={{
                margin: window.innerWidth > 768 ? '4px 50px' : '4px 50px',
                width: window.innerWidth > 768 ? 480 : 250,
              }}
            />
            <TextField
              id="outlined-name"
              label="Produkt"
              margin="normal"
              variant="filled"
              style={{
                margin: window.innerWidth > 768 ? '4px 50px' : '4px 50px',
                width: window.innerWidth > 768 ? 480 : 250,
              }}
            />
          </Box>
          <Box>
            <TextField
              id="outlined-name"
              label="Standort"
              margin="normal"
              variant="filled"
              style={{
                margin: window.innerWidth > 768 ? '4px 50px' : '4px 50px',
                width: window.innerWidth > 768 ? 480 : 250,
              }}
            />
            <TextField
              id="outlined-name"
              label="Jahr"
              margin="normal"
              variant="filled"
              style={{
                margin: window.innerWidth > 768 ? '4px 50px' : '4px 50px',
                width: window.innerWidth > 768 ? 480 : 250,
              }}
            />
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}
