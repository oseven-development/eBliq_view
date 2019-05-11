import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import FilterListIcon from '@material-ui/icons/FilterList'
import SearchIcon from '@material-ui/icons/Search'
import { Flex, Box } from 'rebass'
import { Button } from '@material-ui/core'
const styles = {
  root: {
    padding: '4px 7px',
    margin: '0px 5px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    borderRadius: 40
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  }
}

const SearchField = (props: any) => {
  const { classes } = props
  const [more, setMore] = React.useState(false)
  return (
    <React.Fragment>
      <Paper
        elevation={1}
        className={classes.root}
        style={{ flexDirection: 'column' }}
      >
        <Paper className={classes.root} elevation={0}>
          <IconButton className={classes.iconButton} aria-label="Search">
            <SearchIcon />
          </IconButton>
          <Divider className={classes.divider} />
          <InputBase
            className={classes.input}
            placeholder="Suche in deinem Unternehmen"
          />
          <IconButton className={classes.iconButton} aria-label="Search">
            <ArrowForwardIcon />
          </IconButton>
          <IconButton
            className={classes.iconButton}
            aria-label="Search"
            onClick={() => {
              setMore(!more)
            }}
          >
            <FilterListIcon color={more ? 'primary' : 'default'} />
          </IconButton>
        </Paper>
        {more ? <Button /> : ''}
      </Paper>
    </React.Fragment>
  )
}
export default withStyles(styles)(SearchField)
