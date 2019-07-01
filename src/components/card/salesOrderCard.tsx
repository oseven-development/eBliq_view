/** @format */

import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import {Box, Flex} from 'rebass'
import {Label} from '..'
import PeopleIcon from '@material-ui/icons/People'
import MoneyIcon from '@material-ui/icons/AttachMoney'
import {QuantityIcon} from '../icons'

const styles = {
  card: {
    minWidth: 250,
    minHeigt: 150,
    borderRadius: 10,
    padding: 5,
  },
}
const SalesOrderCard = (props: any) => {
  const {classes, title, orderHead, alignItems, justifyContent, width, footContent, transform} = props
  return (
    <Box mx={10} my={window.innerWidth < 768 ? 2 : 20} width={window.innerWidth < 768 ? 1 : ''}>
      <Card
        className={classes.card}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: justifyContent ? justifyContent : 'space-between',
          alignItems: alignItems ? alignItems : 'flex-start',
          padding: 15,
          width,
          transform,
        }}>
        <Box>
          <Label title={title} color={'primary'} />
        </Box>
        <Box>
          <Flex justifyContent={'center'} alignItems={'center'}>
            <Box pr={'3px'}>
              <PeopleIcon />
            </Box>
            <Box pr={'10px'}>{orderHead.customer}</Box>
            <Box pl={'10px'} pr={'3px'}>
              <MoneyIcon />
            </Box>
            <Box pr={'10px'}>{orderHead.revenue} € </Box>
            <Box pl={'10px'} pr={'3px'}>
              <QuantityIcon />
            </Box>
            <Box pr={'10px'}>{orderHead.quantity} Stk.</Box>
          </Flex>
        </Box>
      </Card>
    </Box>
  )
}

export default withStyles(styles)(SalesOrderCard)
