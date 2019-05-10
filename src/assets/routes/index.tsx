import React from 'react'

import { Sales, IoT, Benachrichtigung } from '../../views'
import DashboardIcon from '@material-ui/icons/Dashboard'
import SettingsIcon from '@material-ui/icons/Settings'
import { EngineIcon } from '../../components/icons'
import NotificationsIcon from '@material-ui/icons/Notifications'

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
    path: '/sales',
    component: Sales,
    groups: '',
    displayName: 'Sales Dashboard',
    position: 1,
    bottomNavigation: true,
    icon: <DashboardIcon />
  },
  {
    path: '/iot',
    component: IoT,
    groups: '',
    displayName: 'IoT Dashboard',
    position: 2,
    bottomNavigation: true,
    icon: <EngineIcon color={'inherit'} />
  },

  {
    path: '/benachrichtigungen',
    component: Benachrichtigung,
    groups: '',
    displayName: 'Benachrichtigungen',
    position: 3,
    bottomNavigation: true,
    icon: <NotificationsIcon color={'inherit'} />
  },
  {
    path: '/einstellungen',
    component: IoT,
    groups: '',
    displayName: 'Einstellungen',
    position: 4,
    bottomNavigation: true,
    icon: <SettingsIcon color={'inherit'} />
  }
]

export default routes
