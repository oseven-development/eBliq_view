/** @format */

import React from 'react'
import {
  Card,
  Content,
  Kpi,
  Chart,
  MachineVis,
  SiteNavigation,
  SiteBox,
  TextSnippet,
  ControlLamp,
} from '../../components'
import {TagIcon} from '../../components/icons'
import {Button} from '@material-ui/core'
import {useEventsource} from '../../assets/hooks'
import {notification} from '../../utils/notification'
import {cArray} from '../../utils/lib'
import {machineTemplate} from '../../assets/entities/machine'
import {createChartData} from '../../utils/lib/createChartdata'
import {useSelector} from 'react-redux'

// import * as flatten from 'flat'

const machineSet: any = {
  Druck: 'id-123',
  Pack: 'id-456',
  Versand: 'id-789',
}
const IotView = (props: any) => {
  const [subsite, setSubsite] = React.useState('Dashboard')
  const data = useSelector((state: any) => state.machineData.machineData)
  let machine: any
  let machine1: any
  let machine2: any
  let machine3: any
  if (subsite === 'Dashboard') {
    machine = new machineTemplate(new cArray(data))
    machine1 = new machineTemplate(new cArray(data).getFilteredArray('id', '===', 'id-123'))
    machine2 = new machineTemplate(new cArray(data).getFilteredArray('id', '===', 'id-456'))
    machine3 = new machineTemplate(new cArray(data).getFilteredArray('id', '===', 'id-789'))
  } else {
    machine = new machineTemplate(new cArray(data).getFilteredArray('id', '===', machineSet[subsite]))
  }

  return (
    <SiteBox>
      <SiteNavigation
        startValue={'Dashboard'}
        data={['Dashboard', 'Druck', 'Pack', 'Versand']}
        onClick={setSubsite}
        Limit={4}
      />
      {subsite === 'Dashboard' ? (
        <Content>
          <Card
            content={
              <Kpi
                title={`Auslastung Druck`}
                value={machine1.latest('levelOfUse')}
                growth={machine1.pctDif('levelOfUse')}
                type={'percent'}
              />
            }
            footContent={<TextSnippet text={'SAP ERP3'} icon={<TagIcon fontSize={'small'} />} />}
          />
          <Card
            content={
              <Kpi
                title={'Auslastung Pack'}
                value={machine2.latest('levelOfUse')}
                growth={machine2.pctDif('levelOfUse')}
                type={'percent'}
              />
            }
            footContent={<TextSnippet text={'SAP ERP3'} icon={<TagIcon fontSize={'small'} />} />}
          />
          <Card
            content={
              <Kpi
                title={'Auslastung Versand'}
                value={machine3.latest('levelOfUse')}
                growth={machine3.pctDif('levelOfUse')}
                type={'percent'}
              />
            }
            footContent={<TextSnippet text={'SAP ERP3'} icon={<TagIcon fontSize={'small'} />} />}
          />

          <Card content={<ControlLamp title={'Druck Wartung notwendig'} value={machine1.latest('fault.isFault')} />} />
          <Card content={<ControlLamp title={'Pack Wartung notwendig'} value={machine2.latest('fault.isFault')} />} />
          <Card
            content={<ControlLamp title={'Versand Wartung notwendig'} value={machine3.latest('fault.isFault')} />}
          />

          <Card
            content={
              createChartData(machine1.data, 'date', 'levelOfUse').length > 1 ? (
                <Chart
                  type={'line'}
                  title={'Level of Use in %'}
                  value={[
                    createChartData(machine1.data, 'date', 'levelOfUse', 10),
                    createChartData(machine2.data, 'date', 'levelOfUse', 10),
                    createChartData(machine3.data, 'date', 'levelOfUse', 10),
                  ]}
                  // yTickTotal={5}
                  // xAxis={true}
                  // yType={'percent'}
                  xType={'time'}
                />
              ) : (
                ''
              )
            }
          />
        </Content>
      ) : (
        <Content>
          <Card
            content={
              <Kpi
                title={'aktuelle Auslastung'}
                value={machine.latest('levelOfUse')}
                growth={machine.pctDif('levelOfUse')}
                type={'percent'}
              />
            }
            footContent={<TextSnippet text={'SIEMENS ACR'} icon={<TagIcon fontSize={'small'} />} />}
          />
          <Card
            content={
              <Kpi
                title={'Temperatur'}
                value={machine.latest('temperature')}
                type={'temperature'}
                growth={machine.pctDif('temperature')}
              />
            }
            footContent={<TextSnippet text={'Raspberry PI Werk 2'} icon={<TagIcon fontSize={'small'} />} />}
          />
          <Card
            content={
              <Kpi title={'erstelle Komponenten'} value={machine.sum('manufacturedParts.TeilA')} type={'absolute'} />
            }
            footContent={<TextSnippet text={'SAP ERP3'} icon={<TagIcon fontSize={'small'} />} />}
          />
          <Card
            content={
              createChartData(machine.data, 'date', 'levelOfUse').length > 1 ? (
                <Chart
                  type={'line'}
                  title={'Auslastung in %'}
                  value={createChartData(machine.data, 'date', 'levelOfUse', 10)}
                  // yTickTotal={5}
                  // xAxis={true}
                  // yType={'percent'}
                  xType={'time'}
                />
              ) : (
                ''
              )
            }
          />
          <Card
            alignItems="center"
            content={<Chart type={'gauge'} title={'Zustand der Maschine'} value={machine.latest('wearOfTheMachine')} />}
          />

          {/* <Card content={<MachineVis title={'Machine 7'} data={machine} />} width={500} /> */}
        </Content>
      )}
    </SiteBox>
  )
}
// }

export default IotView
