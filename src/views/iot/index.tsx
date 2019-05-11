import React, { Component } from 'react'
import {
  Card,
  Content,
  Kpi,
  Chart,
  MachineVis,
  SiteNavigation,
  SiteBox
} from '../../components'
import data from '../../demo/data'

const sideNav = ['Machine1', 'Machine2']
const setFilter = (filter: string) => {
  console.log(filter)
}

const machine = {
  machine1: 51,
  machine2: 71,
  machine3: 21,
  machine4: 11
}
export default class iot extends Component<any, any> {
  render() {
    return (
      <SiteBox>
        <SiteNavigation
          data={['Dashobard', 'Machine1', 'Machine2', 'Machine3']}
          onClick={setFilter}
        />

        <Content>
          <Card
            content={<Kpi title={'Tagesumsatz'} value={'4000€'} growth={16} />}
          />
          <Card
            content={
              <Chart type={'line'} title={'Stream Machine 2'} value={data} />
            }
          />
          <Card
            alignItems="center"
            content={
              <Chart
                type={'gauge'}
                title={'Auslastung Machine 2'}
                value={data}
              />
            }
          />
          <Card
            content={<MachineVis title={'Machine 7'} data={machine} />}
            width={500}
          />
        </Content>
      </SiteBox>
    )
  }
}
