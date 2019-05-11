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

export default class Search extends Component<any, any> {
  render() {
    return (
      <SiteBox>
        <Content>
          <Card
            content={<Kpi title={'Tagesumsatz'} value={'4000€'} growth={16} />}
          />
        </Content>
      </SiteBox>
    )
  }
}
