import React, { Component } from 'react'
import {
  Card,
  Content,
  Kpi,
  Chart,
  MachineVis,
  SiteNavigation,
  SiteBox,
  TextSnippet
} from '../../components'
import { TagIcon } from '../../components/icons'
import data from '../../demo/data'
import { Button } from '@material-ui/core'
import { SSE } from '../../api/eventSource'
const sideNav = ['Machine1', 'Machine2']
const setFilter = (filter: string) => {
  console.log(filter)
}

const machine = {
  machine1: 51,
  machine2: 71,
  machine3: 21,
  machine4: 11
}
const url = 'http://localhost:3555/get'

const IotView = (props: any) => {
  const con = new SSE(url)
  React.useEffect(() => {
    if (toggle) {
      con.on()
      console.log('on')
    } else {
      console.log('nicht on')
      con.close()
    }
    return () => {
      con.close()
    }
  })
  const [toggle, setToggle] = React.useState(false)

  return (
    <SiteBox>
      <SiteNavigation
        data={['Dashobard', 'Machine1', 'Machine2', 'Machine3']}
        onClick={setFilter}
      />
      <Button
        onClick={() => {
          setToggle(!toggle)
        }}
      >
        Start Stream
      </Button>
      <Content>
        <Card
          content={<Kpi title={'Tagesumsatz'} value={'4000€'} growth={16} />}
          footContent={
            <TextSnippet text={'getrackt von SAP ERP3'} icon={<TagIcon />} />
          }
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
        <Card
          content={<MachineVis title={'Machine 7'} data={machine} />}
          width={500}
        />
      </Content>
    </SiteBox>
  )
}

export default IotView
