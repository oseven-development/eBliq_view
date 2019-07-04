/** @format */

import React from 'react'
import {Content, SearchField, SiteBox, Card, Kpi, SalesOrderCard} from '../../components'
import {searchBoy} from '../../utils/lib/search/index'
import {useSelector} from 'react-redux'
const Search = (props: any) => {
  const [value, setValue]: any = React.useState([])
  const data = useSelector((state: any) => state.orderData)

  React.useEffect(() => {}, [])
  const handleSearch = async (phrase: string) => {
    // console.log(phrase)
    // setValue()
    if (data !== {}) {
      const res = await searchBoy(phrase, data).then(res => {
        return res
        console.log(res)
      })
      setValue(res)
      //call serach api}
    }
  }

  return (
    <SiteBox>
      <Content alignItems={'center'}>
        <SearchField onChange={handleSearch} />
        {value
          ? value.map((e: any) => {
              if (e.company) {
                return (
                  <SalesOrderCard
                    title={`Auftrag ${value.indexOf(e) + 1}`}
                    orderHead={{customer: e.company.companyname}}
                    details={true}
                    width={300}
                  />
                )
              } else {
                return <Card content={<Kpi title={e.name} value={e.value} displayGrowth={false} />} />
              }
            })
          : ''}
      </Content>
    </SiteBox>
  )
}
export default Search
