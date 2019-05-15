import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'

import { Link } from 'react-router-dom'

type Tcolors =
  | 'inherit'
  | 'default'
  | 'primary'
  | 'secondary'
  | 'textPrimary'
  | 'textSecondary'
  | 'error'
  | undefined

interface IList {
  data: any
  dense?: true
  avatar?: true
  icon?: JSX.Element
  action?: JSX.Element
  color?: { primary: Tcolors; secondary: Tcolors }
  isLink?: true
}

const styles = (theme: any) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
    color: 'white'
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`
  }
})

const standardList = (props: IList) => {
  const { data, dense, avatar, action, color, isLink } = props
  console.log(data)
  return (
    <React.Fragment>
      <List dense={dense}>
        {data.map((e: any) => {
          return isLink === true ? (
            <Link to={e.to}>
              <ListItem
                button
                onClick={() => {
                  console.log('object')
                }}
              >
                <ListItemIcon>{e.icon}</ListItemIcon>
                <ListItemText
                  primary={e.primary}
                  primaryTypographyProps={color ? { color: color.primary } : {}}
                />
              </ListItem>
            </Link>
          ) : (
            <ListItem
              button={isLink ? true : false}
              onClick={() => {
                console.log('object')
              }}
            >
              {e.icon ? (
                avatar ? (
                  <ListItemAvatar>
                    <Avatar>{e.icon}</Avatar>
                  </ListItemAvatar>
                ) : (
                  <ListItemIcon>{e.icon}</ListItemIcon>
                )
              ) : (
                ''
              )}
              <ListItemText
                primary={e.primary}
                secondary={e.secondary ? e.secondary : null}
                primaryTypographyProps={color ? { color: color.primary } : {}}
                secondaryTypographyProps={color ? { color: color.primary } : {}}
              />
              {action ? (
                <ListItemSecondaryAction>{action}</ListItemSecondaryAction>
              ) : null}
            </ListItem>
          )
        })}
      </List>
    </React.Fragment>
  )
}

// function ListItemLink(props: any) {
//   return <ListItem button component="a" {...props} />
// }

export default withStyles(styles)(standardList)
