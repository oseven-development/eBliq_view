import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import { Flex, Box } from 'rebass'
import breakpoints from '../../assets/theme/breakpoints'

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
  console.log(props)
  return (
    <Box
      mx={mx ? mx : 10}
      my={window.innerWidth < 768 ? 2 : my ? my : 20}
      width={window.innerWidth < 768 ? 1 : ''}
    >
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
