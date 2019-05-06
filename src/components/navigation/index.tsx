import React from 'react'
import { makeStyles } from '@material-ui/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import NavigationItems from '../../assets/routes'
import { Link } from 'react-router-dom'
const useStyles = makeStyles({
  root: {
    width: '100vw',
    position: 'fixed',
    bottom: 0,
    boxShadow: '0px 1px 3px #121212',
    zIndex: 10000
  }
})
const useStyles2 = makeStyles({
  root: {
    padding: '6px 2px 8px'
  },
  selected: {
    fontSize: '0.8rem!important'
  }
})

interface IProps {
  setTitle: Function
}

const _BottomNavigation = (props: IProps) => {
  const classes = useStyles()
  const cl = useStyles2()
  const { setTitle } = props
  const [value, setValue] = React.useState('Inbox')

  async function handleChange(event: any, newValue: any) {
    setTitle(newValue)
    await setValue(newValue)
  }
  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      {NavigationItems.map(e => {
        if (e.displayName) {
          return (
            <BottomNavigationAction
              // @ts-ignore: Wait fix from material-UI
              component={Link}
              to={e.path}
              label={e.displayName}
              value={e.displayName}
              icon={e.icon}
              key={e.path}
              style={{ minWidth: 'auto' }}
              classes={cl}
            />
          )
        }
      })}
    </BottomNavigation>
  )
}

export default _BottomNavigation
