import React, { Component } from 'react'
import { Card, Content, Kpi, Chart } from '../../components'
import data from '../../demo/data'

export default class iot extends Component {
  render() {
    return (
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
            <Chart type={'gauge'} title={'Auslastung Machine 2'} value={data} />
          }
        />
      </Content>
    )
  }
}
