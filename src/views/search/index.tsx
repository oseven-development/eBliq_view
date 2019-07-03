/** @format */

import React from 'react'
import {Content, SearchField, SiteBox, Card, Kpi, SalesOrderCard, Paper} from '../../components'
import {searchBoy} from '../../utils/lib/search/index'
import searchdata from '../../demo/search'
import {useSelector} from 'react-redux'
import {Flex, Box} from 'rebass'
const data: any = searchdata.orderData
const Search = (props: any) => {
  const [value, setValue]: any = React.useState([])
  // const data = useSelector((state: any) => state.orderData)

  React.useEffect(() => {}, [])
  const handleSearch = async (phrase: string) => {
    // console.log(phrase)
    // setValue()
    if (data !== {}) {
      const res = await searchBoy(phrase, data).then(res => {
        return res
      })
      setValue(res)
      //call serach api}
    }
  }

  return (
    <SiteBox>
      <Content alignItems={'center'}>
        <SearchField onChange={handleSearch} />
      </Content>
      {value
        ? value.map((e: any) => {
            if (e.company) {
              return (
                <Content>
                  <Paper
                    title={`Auftrag ${value.indexOf(e) + 1} ${e.company.companyname}`}
                    Body={
                      <React.Fragment>
                        {e.products.map((product: any) => {
                          console.log(product)
                          return (
                            <React.Fragment>
                              <div>{product.name}</div>
                              <div>{product.quantity}</div>
                              <div>{product.price}</div>
                            </React.Fragment>
                          )
                        })}
                      </React.Fragment>
                    }
                  />
                </Content>
              )
            } else {
              return (
                <Content>
                  <Card content={<Kpi title={e.name} value={e.value} displayGrowth={false} />} />
                </Content>
              )
            }
          })
        : ''}
    </SiteBox>
  )
}
export default Search
