/** @format */

import React from 'react'
import {
  Card,
  Content,
  Kpi,
  HalfContent,
  SiteBox,
  SalesTable,
  TextSnippet,
  SalesOrderCard,
  Chart,
} from '../../components'

import {sum, pctDif, latest} from '../../utils/lib/measures/calculations'
import {getAttributeArray} from '../../utils/lib/filter/getAttributeArray'
import {TagIcon} from '../../components/icons'
import {createChartData} from '../../utils/lib/createChartdata'
import {sortArray} from '../../utils/lib/sortArray'

export default class Sales extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      data: [],
      products: [],
      customer: {},
    }
    this.props.source.addEventListener('order', (e: any) => {
      this.update(e)
    })
  }
  update = (e: any) => {
    const newData = [...this.state.data, JSON.parse(e.data)]
    this.setState({data: newData.flat()}, () => {
      this.setState({products: this.state.data.map((e: any) => e.products).flat()})
    })
  }
  orderHead = (order: any) => {
    if (order) {
      return {
        customer: order.company.companyname,
        revenue: sum(getAttributeArray(order.products, 'price')),
        quantity: sum(getAttributeArray(order.products, 'quantity')),
      }
    } else {
      return undefined
    }
  }
  calculateCustomerRevenue = () => {
    return this.state.data
      .map((order: any) => {
        const revenue = sum(getAttributeArray(order.products, 'price'))
        return {companyname: order.company.companyname, revenue}
      })
      .reduce(
        (map => (r: any, a: any) => {
          map.set(a.companyname, map.get(a.companyname) || r[r.push({companyname: a.companyname, revenue: 0}) - 1])
          map.get(a.companyname).revenue += a.revenue
          return r
        })(new Map()),
        [],
      )
  }

  render() {
    const {products, data} = this.state
    const customerRevenue = createChartData(
      sortArray(this.calculateCustomerRevenue(), 'revenue'),
      'companyname',
      'revenue',
      10,
      'begin',
    )
    const orderHead = this.orderHead(latest(data))
    return (
      <SiteBox>
        <HalfContent
          component1={
            <React.Fragment>
              <HalfContent
                component1={
                  <Card
                    content={
                      <Kpi
                        title={`verkaufte Menge`}
                        value={sum(getAttributeArray(products, 'quantity'))}
                        type={'absolute'}
                      />
                    }
                    footContent={<TextSnippet text={'Shopify'} icon={<TagIcon fontSize={'small'} />} />}
                  />
                }
                component2={
                  <Card
                    content={
                      <Kpi title={`Gesamtumsatz`} value={sum(getAttributeArray(products, 'price'))} type={'currency'} />
                    }
                    footContent={<TextSnippet text={'Shopify'} icon={<TagIcon fontSize={'small'} />} />}
                  />
                }
              />
              {orderHead ? <SalesOrderCard title={'letzter Auftrag'} orderHead={orderHead} /> : ''}
              <Card
                content={
                  customerRevenue.length > 1 ? (
                    <Chart
                      type={'bar'}
                      title={'Top 10 Kunden nach Umsatz'}
                      value={customerRevenue}
                      // yTickTotal={5}
                      // xAxis={true}
                      // yType={'percent'}
                    />
                  ) : (
                    ''
                  )
                }
              />
            </React.Fragment>
          }
          component2={
            <Card
              content={
                this.state.products.length > 1 ? (
                  <SalesTable title={'Verkaufte Produkte '} products={products} />
                ) : (
                  <div />
                )
              }
            />
          }
        />
      </SiteBox>
    )
  }
}
