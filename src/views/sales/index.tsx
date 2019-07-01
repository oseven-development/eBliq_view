/** @format */

import React from 'react'
import {Card, Content, Kpi, HalfContent, SiteBox, SalesTable, TextSnippet, SalesOrderCard} from '../../components'

import {sum, pctDif, latest} from '../../utils/lib/measures/calculations'
import {getAttributeArray} from '../../utils/lib/filter/getAttributeArray'
import {TagIcon} from '../../components/icons'

export default class Sales extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      data: [],
      products: [],
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

  render() {
    const {products, data} = this.state

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
                    footContent={<TextSnippet text={'SalesForce'} icon={<TagIcon fontSize={'small'} />} />}
                  />
                }
                component2={
                  <Card
                    content={
                      <Kpi title={`Gesamtumsatz`} value={sum(getAttributeArray(products, 'price'))} type={'currency'} />
                    }
                    footContent={<TextSnippet text={'SalesForce'} icon={<TagIcon fontSize={'small'} />} />}
                  />
                }
              />
              {orderHead ? <SalesOrderCard title={'letzter Auftrag'} orderHead={orderHead} /> : ''}
            </React.Fragment>
          }
          component2={<Card content={<SalesTable title={'Verkaufte Produkte '} products={products} />} />}
        />
      </SiteBox>
    )
  }
}
