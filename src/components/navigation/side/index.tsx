/** @format */

import React from 'react'
import {makeStyles} from '@material-ui/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'

import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import ListItemText from '@material-ui/core/ListItemText'
import {Drawer} from '../../index'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

const desktopStyle = makeStyles({
  root: {
    width: '100vw',
    // backgroundColor: theme.palette.secondary.main,
    boxShadow: '0px 1px 3px #ccc',
    height: 40,
  },
})

const desktopElementStyle = makeStyles({
  wrapper: {
    flexDirection: 'row',
    height: 40,
  },

  selected: {},
})

interface IProps {
  onClick: Function
  data: any
  Limit: number
  startValue: string
}

const SiteNavigation = (props: IProps) => {
  const desktopElementStyles = desktopElementStyle()
  const {data, onClick, Limit, startValue} = props
  const desktopClasses = desktopStyle()
  const [toggle, setToggle] = React.useState(false)
  const [value, setValue] = React.useState(startValue)
  async function handleChange(newValue: any) {
    await setValue(newValue)
  }
  return (
    <BottomNavigation value={value} className={desktopClasses.root}>
      {data.map((e: any) => {
        if (window.innerWidth > 800) {
          return (
            <BottomNavigationAction
              onClick={params => {
                onClick(e)
                handleChange(e)
              }}
              label={e}
              value={e}
              key={Math.random()}
              style={{padding: 0}}
              classes={desktopElementStyles}
              showLabel={true}
            />
          )
        } else {
          if (data.indexOf(e) < Limit - 1) {
            return (
              <BottomNavigationAction
                onClick={params => {
                  onClick(e)
                  handleChange(e)
                }}
                label={e}
                value={e}
                key={Math.random()}
                style={{padding: 0}}
                classes={desktopElementStyles}
                showLabel={true}
              />
            )
          }
        }
      })}
      {window.innerWidth < 800 && data.length > 1 ? (
        <React.Fragment>
          <BottomNavigationAction
            onClick={() => {
              setToggle(!toggle)
            }}
            label={''}
            value={'Mehr'}
            icon={<MoreHorizIcon />}
            classes={desktopElementStyles}
            showLabel={true}
            style={{padding: 0}}
          />
          <Drawer
            setToggle={() => {
              setToggle(!toggle)
            }}
            openState={toggle}
            Component={
              <List>
                {data.map((e: any) => {
                  if (data.indexOf(e) >= Limit - 1) {
                    return (
                      <ListItem
                        onClick={() => {
                          onClick(e)
                        }}>
                        <ListItemText primary={e} />
                      </ListItem>
                    )
                  }
                })}
              </List>
            }
            anchor={'top'}
            style={{marginTop: 55}}
          />
        </React.Fragment>
      ) : (
        ''
      )}
    </BottomNavigation>
  )
}

export default SiteNavigation
