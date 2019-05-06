import React from 'react'
import { makeStyles } from '@material-ui/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import NavigationItems from '../../assets/routes'
import { Link } from 'react-router-dom'
import { lightTheme as theme } from '../../assets/theme/theme'

const useStyles = makeStyles({
  root: {
    width: '100vw',
    position: 'fixed',
    bottom: 0,
    boxShadow: '0px 1px 3px #121212',
    zIndex: 10000
  }
})

const desktopStyle = makeStyles({
  root: {
    width: '100vw',
    // backgroundColor: theme.palette.primary.main,
    boxShadow: '0px 1px 3px #ccc'
  }
})
const elementStyle = makeStyles({
  root: {
    padding: '6px 2px 8px'
  },
  selected: {
    fontSize: '0.8rem!important'
  }
})
const desktopElementStyle = makeStyles({
  wrapper: {
    flexDirection: 'row'
  },
  label: {
    padding: '10px',
    fontSize: '1rem!important'
  },
  selected: {
    fontSize: '1rem!important'
  }
})

interface IProps {
  setTitle: Function
  width: number
}

const _BottomNavigation = (props: IProps) => {
  const elementStyles = elementStyle()
  const desktopElementStyles = desktopElementStyle()
  const { setTitle, width } = props
  const classes = useStyles()
  const desktopClasses = desktopStyle()
  const [value, setValue] = React.useState('Inbox')
  console.log(width)

  async function handleChange(event: any, newValue: any) {
    await setValue(newValue)
    setTitle(newValue)
  }
  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={width > 800 ? desktopClasses.root : classes.root}
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
              classes={width > 800 ? desktopElementStyles : elementStyles}
              showLabel={true}
            />
          )
        }
      })}
    </BottomNavigation>
  )
}

export default _BottomNavigation
