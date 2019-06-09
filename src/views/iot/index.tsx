/** @format */

import React from 'react'
import {Card, Content, Kpi, Chart, MachineVis, SiteNavigation, SiteBox, TextSnippet} from '../../components'
import {TagIcon} from '../../components/icons'
import data from '../../demo/data'
import {Button} from '@material-ui/core'
import {useEventsource} from '../../assets/hooks'
import {notification} from '../../utils/notification'
import {cArray} from '../../utils/lib'
import {machineTemplate} from '../../assets/entities/machine'

const setFilter = (filter: string) => {
  console.log(filter)
}

const machine = {
  machine1: 51,
  machine2: 71,
  machine3: 21,
  machine4: 11,
}

const IotView = (props: any) => {
  const {setSnack, snack, source} = props
  const [toggle, setToggle] = React.useState(false)
  const [data, setData]: any = React.useState([])
  React.useEffect(() => {
    source.addEventListener('machineStream', (e: any) => {
      setData([...data, JSON.parse(e.data)])
    })
    // return () => {
    //   source.removeEventListener('machineStream')
    // }
  }, [data, source])
  console.log(data)
  // let machine1 = new machineTemplate(new cArray(data).getFilteredArray('id', '===', 'id-123'))

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
        {/* <Card
          content={
            <Kpi
              title={'Level of Use in %'}
              value={machine1.avg('levelOfUse')}
              growth={machine1.pctDif('levelOfUse')}
              type={'percent'}
            />
          }
          footContent={<TextSnippet text={'SAP ERP3'} icon={<TagIcon fontSize={'small'} />} />}
        /> */}
        {/* <Card content={<Chart type={'line'} title={'Stream Machine 2'} value={data} />} />
        <Card alignItems="center" content={<Chart type={'gauge'} title={'Auslastung Machine 2'} value={data} />} /> */}
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
