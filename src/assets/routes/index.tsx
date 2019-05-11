import React from 'react'

import { Sales, IoT, Benachrichtigung, Search } from '../../views'
import DashboardIcon from '@material-ui/icons/Dashboard'
import SettingsIcon from '@material-ui/icons/Settings'
import SearchIcon from '@material-ui/icons/Search'
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
    path: '/search',
    component: Search,
    groups: '',
    displayName: 'Suche',
    position: 1,
    bottomNavigation: true,
    icon: <SearchIcon />
  },
  {
    path: '/sales',
    component: Sales,
    groups: '',
    displayName: 'Sales',
    position: 2,
    bottomNavigation: true,
    icon: <DashboardIcon />
  },
  {
    path: '/iot',
    component: IoT,
    groups: '',
    displayName: 'Produktion',
    position: 3,
    bottomNavigation: true,
    icon: <EngineIcon color={'inherit'} />
  },

  {
    path: '/benachrichtigungen',
    component: Benachrichtigung,
    groups: '',
    displayName: 'Benachrichtigungen',
    position: 4,
    bottomNavigation: true,
    icon: <NotificationsIcon color={'inherit'} />
  },
  {
    path: '/einstellungen',
    component: IoT,
    groups: '',
    displayName: 'Einstellungen',
    position: 5,
    bottomNavigation: true,
    icon: <SettingsIcon color={'inherit'} />
  }
]

export default routes
