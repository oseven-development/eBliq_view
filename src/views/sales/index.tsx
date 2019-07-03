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
import {useSelector} from 'react-redux'

import {sum, pctDif, latest} from '../../utils/lib/measures/calculations'
import {getAttributeArray} from '../../utils/lib/filter/getAttributeArray'
import {TagIcon} from '../../components/icons'
import {createChartData} from '../../utils/lib/createChartdata'
import {sortArray} from '../../utils/lib/sortArray'

export default (props: any) => {
  const data = useSelector((state: any) => state.orderData.orderData)
  const products = useSelector((state: any) => state.orderData.products)
  const revenue = useSelector((state: any) => state.orderData.revenue)

  React.useEffect(() => {}, [data])
  const orderHead = (order: any) => {
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

  const orderHead_ = orderHead(latest(data))
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
            {orderHead_ ? <SalesOrderCard title={'letzter Auftrag'} orderHead={orderHead_} /> : ''}
            <Card
              content={
                revenue.length > 1 ? (
                  <Chart
                    type={'bar'}
                    title={'Top 10 Kunden nach Umsatz'}
                    value={createChartData(revenue, 'companyname', 'revenue', 10, 'begin')}
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
            content={products.length > 1 ? <SalesTable title={'Verkaufte Produkte '} products={products} /> : <div />}
          />
        }
      />
    </SiteBox>
  )
}
// }
