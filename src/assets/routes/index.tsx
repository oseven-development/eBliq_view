import React from 'react'

import { Sales, IoT } from '../../views'
import DashboardIcon from '@material-ui/icons/Dashboard'
import { EngineIcon } from '../../components/icons'

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
  }
]

export default routes
