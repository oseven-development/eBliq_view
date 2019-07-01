/** @format */

import React, {Component} from 'react'
import {Card, Content, Kpi, Chart, MachineVis, SiteNavigation, SiteBox, Table} from '../../components'

const headRows = [
  {id: 'type', numeric: false, disablePadding: true, label: 'Typ'},
  {id: 'name', numeric: false, disablePadding: true, label: 'Benachrichtigung'},
  {id: 'date', numeric: false, disablePadding: true, label: 'Datum'},
  {id: 'time', numeric: false, disablePadding: true, label: 'Uhrzeit'},
]

const rows = [
  {type: 'info', name: 'Machine 1 kaputt', date: '12.12.2019', time: '12:25'},
  {type: 'error', name: 'Machine 1 kaputt', date: '12.12.2019', time: '12:25'},
  {type: 'info', name: 'Machine 1 kaputt', date: '12.12.2019', time: '12:25'},
  {type: 'warning', name: 'Machine 1 kaputt', date: '12.12.2019', time: '12:25'},
  {type: 'success', name: 'Machine 1 kaputt', date: '12.12.2019', time: '12:25'},
  {type: 'info', name: 'Machine 1 kaputt', date: '12.12.2019', time: '12:25'},
  {type: 'info', name: 'Machine 1 kaputt', date: '12.12.2019', time: '12:25'},
  {type: 'warning', name: 'Machine 1 kaputt', date: '12.12.2019', time: '12:25'},
  {type: 'info', name: 'Machine 1 kaputt', date: '12.12.2019', time: '12:25'},
  {type: 'info', name: 'Machine 1 kaputt', date: '12.12.2019', time: '12:25'},
  {type: 'info', name: 'Machine 1 kaputt', date: '12.12.2019', time: '12:25'},
  {type: 'success', name: 'Machine 1 kaputt', date: '12.12.2019', time: '12:25'},
  {type: 'info', name: 'Machine 1 kaputt', date: '12.12.2019', time: '12:25'},
  {type: 'error', name: 'Machine 1 kaputt', date: '12.12.2019', time: '12:25'},
  {type: 'info', name: 'Machine 1 kaputt', date: '12.12.2019', time: '12:25'},
  {type: 'warning', name: 'Machine 1 kaputt', date: '12.12.2019', time: '12:25'},
  {type: 'warning', name: 'Machine 1 kaputt', date: '12.12.2019', time: '12:25'},
  {type: 'warning', name: 'Machine 1 kaputt', date: '12.12.2019', time: '12:25'},
  {type: 'success', name: 'Machine 1 kaputt', date: '12.12.2019', time: '12:25'},
  {type: 'info', name: 'Machine 1 kaputt', date: '12.12.2019', time: '12:25'},
  {type: 'info', name: 'Machine 1 kaputt', date: '12.12.2019', time: '12:25'},
  {type: 'error', name: 'Machine 1 kaputt', date: '12.12.2019', time: '12:25'},
  {type: 'info', name: 'Machine 1 kaputt', date: '12.12.2019', time: '12:25'},
]

export default class Benachrichtigung extends Component<any, any> {
  render() {
    return (
      <SiteBox>
        <Content>
          <Table title={'Benachrichtigungen'} rows={rows} headRows={headRows} checkbox={true} />
        </Content>
      </SiteBox>
    )
  }
}
