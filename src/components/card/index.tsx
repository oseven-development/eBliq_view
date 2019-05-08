import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import { Flex, Box } from 'rebass'

const styles = {
  card: {
    minWidth: 200,
    minHeight: 125,
    borderRadius: 10,
    padding: 5
  }
}
const _Card = (props: any) => {
  const { classes, content, title, my, mx, alignItems } = props

  return (
    <Box mx={mx ? mx : 10} my={my ? my : 20}>
      <Card
        className={classes.card}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: alignItems ? alignItems : 'flex-start',
          padding: 15
        }}
      >
        {content}
      </Card>
    </Box>
  )
}

export default withStyles(styles)(_Card)
