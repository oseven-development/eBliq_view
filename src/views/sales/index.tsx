import React, { Component } from 'react'
import { Card, Content, Kpi } from '../../components'
export default class Sales extends Component {
  render() {
    return (
      <Content>
        <Card
          title={`Tagesumsatz`}
          content={<Kpi title={'Tagesumsatz'} value={'4000€'} growth={16} />}
        />
      </Content>
    )
  }
}
