/** @format */

import React, {Component} from 'react'
import {Content, SearchField, SiteBox, Card, Kpi} from '../../components'
import {searchBoy} from '../../utils/lib/search/index'
import data from '../../demo/search'
import {cArray} from '../../utils/lib'

const Search = (props: any) => {
  const [value, setValue] = React.useState('')
  const [sString, setSString] = React.useState('')
  const handleSearch = async (phrase: string) => {
    // console.log(phrase)
    // setValue()
    setSString(phrase)
    const res = await searchBoy(phrase, new cArray(data)).then(res => {
      return res
    })
    setValue(res)
    //call serach api
  }

  return (
    <SiteBox>
      <Content alignItems={'center'}>
        <SearchField onChange={handleSearch} />
      </Content>
      {value ? (
        <Content>
          <Card transform={'translateY(-60px)'} content={<Kpi title={sString} value={value} displayGrowth={false} />} />
        </Content>
      ) : (
        ''
      )}
    </SiteBox>
  )
}
export default Search
