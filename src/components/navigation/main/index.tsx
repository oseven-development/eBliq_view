/** @format */

import React from 'react'
import {makeStyles} from '@material-ui/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import NavigationItems from '../../../assets/routes'
import MenuIcon from '@material-ui/icons/Menu'
import {Link} from 'react-router-dom'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import {Drawer} from '../../index'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

const useStyles = makeStyles({
  root: {
    width: '100vw',
    position: 'fixed',
    bottom: 0,
    boxShadow: '0px 1px 3px #121212',
    zIndex: 10000,
  },
})

const desktopStyle = makeStyles({
  root: {
    // backgroundColor: theme.palette.primary.main,
    // boxShadow: '0px 1px 3px #ccc',
    position: 'absolute',
    width: '100vw',
    top: '64px',
    zIndex: 100,
  },
})
const elementStyle = makeStyles({
  root: {
    padding: '6px 2px 8px',
  },
  selected: {
    fontSize: '0.8rem!important',
  },
})
const desktopElementStyle = makeStyles({
  wrapper: {
    flexDirection: 'row',
  },
  label: {
    padding: '10px',
    fontSize: '1rem!important',
  },
  selected: {
    fontSize: '1rem!important',
  },
})

interface IProps {
  setTitle: Function
  width: number
}

const _BottomNavigation = (props: IProps) => {
  const {setTitle, width} = props
  const elementStyles = elementStyle()
  const desktopElementStyles = desktopElementStyle()
  const classes = useStyles()
  const desktopClasses = desktopStyle()
  const [value, setValue] = React.useState('Suche')
  const [toggle, setToggle] = React.useState(false)
  async function handleChange(newValue: any) {
    // if (newValue === 'Mehr') {
    // } else {
    await setValue(newValue)
    setTitle(newValue)
    // }
  }
  const Limit = window.innerWidth < 800 ? 4 : 8
  return (
    <BottomNavigation
      value={value}
      // onChange={handleChange}
      style={{boxShadow: value !== 'Produktion' ? '0px 1px 3px #ccc' : ''}}
      className={width > 800 ? desktopClasses.root : classes.root}>
      {NavigationItems.map((e: any) => {
        if (e.displayName && e.position && e.position < Limit) {
          return (
            <BottomNavigationAction
              // @ts-ignore: Wait fix from material-UI
              component={Link}
              to={e.path}
              label={e.displayName}
              value={e.displayName}
              icon={e.icon}
              key={e.path}
              style={{minWidth: 'auto'}}
              classes={width > 800 ? desktopElementStyles : elementStyles}
              showLabel={true}
              onClick={() => {
                handleChange(e.displayName)
              }}
            />
          )
        }
      })}
      {window.innerWidth < 800 ? (
        <React.Fragment>
          <BottomNavigationAction
            onClick={() => {
              setToggle(!toggle)
            }}
            label={'Mehr'}
            value={'Mehr'}
            icon={<MenuIcon />}
            classes={width > 800 ? desktopElementStyles : elementStyles}
            showLabel={true}
          />
          <Drawer
            setToggle={() => {
              setToggle(!toggle)
            }}
            openState={toggle}
            Component={
              <List>
                {NavigationItems.map((e: any) => {
                  if (e.displayName && e.position && e.position >= Limit) {
                    return (
                      <Link
                        to={e.path}
                        onClick={() => {
                          handleChange(e.displayName)
                        }}>
                        <ListItem>
                          <ListItemIcon>{e.icon}</ListItemIcon>
                          <ListItemText primary={e.displayName} />{' '}
                        </ListItem>
                      </Link>
                    )
                  }
                })}
              </List>
            }
            anchor={'bottom'}
            style={{marginBottom: 55}}
          />
        </React.Fragment>
      ) : (
        ''
      )}
    </BottomNavigation>
  )
}

export default _BottomNavigation
