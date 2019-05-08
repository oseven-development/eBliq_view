import React, { Component } from 'react'
import { Card, Content, Kpi, Chart } from '../../components'
import data from '../../demo/data2'
export default class Sales extends Component {
  render() {
    return (
      <Content>
        <Card
          title={`Tagesumsatz`}
          content={<Kpi title={'Tagesumsatz'} value={'4000€'} growth={16} />}
        />
        <Card
          content={
            <Chart type={'line'} title={'Verkäufe Produkt B'} value={data} />
          }
        />
      </Content>
    )
  }
}