import React, { Component } from 'react'
import { Content, SearchField, SiteBox } from '../../components'

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
