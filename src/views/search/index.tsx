import React, { Component } from 'react'
import {
  Card,
  Content,
  Kpi,
  Chart,
  MachineVis,
  SearchField,
  SiteBox
} from '../../components'
import data from '../../demo/data'

export default class Search extends Component<any, any> {
  render() {
    return (
      <SiteBox>
        <Content>
          <SearchField />
        </Content>
      </SiteBox>
    )
  }
}
