import React from 'react'

import { Sales, IoT } from '../../views'
import RestoreIcon from '@material-ui/icons/Restore'
import MenuIcon from '@material-ui/icons/Menu'
import DashboardIcon from '@material-ui/icons/Dashboard'
import FolderIcon from '@material-ui/icons/Folder'
import InboxIcon from '@material-ui/icons/Inbox'

export interface IRoute {
  path: string
  displayName: string
  component: any | React.ReactNode
  position?: number
  groups: any | string | string[]
  bottomNavigation: boolean
  icon?: JSX.Element
}

const routes: IRoute[] = [
  {
    path: '/',
    component: Sales,
    groups: '',
    displayName: 'Sales Dashboard',
    position: 1,
    bottomNavigation: true,
    icon: <InboxIcon />
  },
  {
    path: '/iot',
    component: IoT,
    groups: '',
    displayName: 'Produktionsdisplay',
    position: 2,
    bottomNavigation: true,
    icon: <FolderIcon />
  }
]

export default routes
