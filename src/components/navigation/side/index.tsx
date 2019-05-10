import React from 'react'
import { makeStyles } from '@material-ui/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import NavigationItems from '../../../assets/routes'
import { Link } from 'react-router-dom'
import { lightTheme as theme } from '../../../assets/theme/theme'

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
    // backgroundColor: theme.palette.secondary.main,
    boxShadow: '0px 1px 3px #ccc',
    height: 40
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
    flexDirection: 'row',
    height: 40
  },

  selected: {}
})

interface IProps {
  onClick: Function
  data: any
}

const SiteNavigation = (props: IProps) => {
  const elementStyles = elementStyle()
  const desktopElementStyles = desktopElementStyle()
  const { data, onClick } = props
  const classes = useStyles()
  const desktopClasses = desktopStyle()
  const [value, setValue] = React.useState('')
  console.log('render sitenav')
  async function handleChange(event: any, newValue: any) {
    await setValue(newValue)
  }
  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={desktopClasses.root}
    >
      {data.map((e: any) => {
        return (
          <BottomNavigationAction
            onClick={params => {
              onClick(e)
            }}
            label={e}
            value={e}
            key={Math.random()}
            style={{ padding: 0 }}
            classes={desktopElementStyles}
            showLabel={true}
          />
        )
      })}
    </BottomNavigation>
  )
}

export default SiteNavigation
