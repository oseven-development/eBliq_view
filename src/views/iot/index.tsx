/** @format */

import React from 'react'
import {Card, Content, Kpi, Chart, MachineVis, SiteNavigation, SiteBox, TextSnippet} from '../../components'
import {TagIcon} from '../../components/icons'
import data from '../../demo/data'
import {Button} from '@material-ui/core'
import {useEventsource} from '../../assets/hooks'
import {notification} from '../../utils/notification'

const setFilter = (filter: string) => {
  console.log(filter)
}

const machine = {
  machine1: 51,
  machine2: 71,
  machine3: 21,
  machine4: 11,
}
const url = 'http://localhost:3555/get'

const IotView = (props: any) => {
  const {setSnack, snack} = props
  const [toggle, setToggle] = React.useState(false)
  const data = useEventsource(url, toggle)

  return (
    <SiteBox>
      <SiteNavigation data={['Dashobard', 'Machine1', 'Machine2', 'Machine3']} onClick={setFilter} />
      <Button
        onClick={() => {
          setToggle(!toggle)
          notification('Simulation gestartet')
        }}>
        Start Stream
      </Button>
      <Content>
        <Card
          content={<Kpi title={'Tagesumsatz'} value={'4000€'} growth={16} />}
          footContent={<TextSnippet text={'SAP ERP3'} icon={<TagIcon fontSize={'small'} />} />}
        />
        <Card content={<Chart type={'line'} title={'Stream Machine 2'} value={data} />} />
        <Card alignItems="center" content={<Chart type={'gauge'} title={'Auslastung Machine 2'} value={data} />} />
        <Card content={<MachineVis title={'Machine 7'} data={machine} />} width={500} />
        <button
          onClick={() => {
            setSnack({...snack, open: true})
          }}>
          snackbar
        </button>
      </Content>
    </SiteBox>
  )
}

export default IotView
