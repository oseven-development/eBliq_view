/** @format */

import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import {Box} from 'rebass'
import {Divider} from '@material-ui/core'

const styles = {
  card: {
    minWidth: 250,
    minHeight: 150,
    borderRadius: 10,
    padding: 5,
  },
}
const _Card = (props: any) => {
  const {classes, content, my, mx, alignItems, justifyContent, width, footContent, transform} = props
  return (
    <Box mx={mx ? mx : 10} my={window.innerWidth < 768 ? 2 : my ? my : 20}>
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
        {content}
        {footContent ? (
          <React.Fragment>
            <Divider style={{width: '100%'}} />
            {footContent}
          </React.Fragment>
        ) : (
          ''
        )}
      </Card>
    </Box>
  )
}

export default withStyles(styles)(_Card)
