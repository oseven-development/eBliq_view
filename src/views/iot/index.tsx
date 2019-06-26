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
import {createChartData} from '../../utils/lib/filter/createChartdata'
// import * as flatten from 'flat'
var flatten = require('flat')

const machineSet: any = {
  Druck: 'id-123',
  Pack: 'id-456',
  Versand: 'id-789',
}
class IotView extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      data: [],
      subsite: 'Dashboard',
    }
    this.props.source.addEventListener('machineStream', (e: any) => {
      this.update(e)
    })
    // notification('Simulation gestartet')
  }

  update = (e: any) => {
    this.setState({data: [...this.state.data, flatten(JSON.parse(e.data))]})
  }
  setSubsite = (subsite: string) => {
    this.setState({subsite})
  }
  render() {
    const {subsite} = this.state
    let machine: any
    let machine1: any
    let machine2: any
    let machine3: any
    if (subsite === 'Dashboard') {
      machine = new machineTemplate(new cArray(this.state.data))
      machine1 = new machineTemplate(new cArray(this.state.data).getFilteredArray('id', '===', 'id-123'))
      machine2 = new machineTemplate(new cArray(this.state.data).getFilteredArray('id', '===', 'id-456'))
      machine3 = new machineTemplate(new cArray(this.state.data).getFilteredArray('id', '===', 'id-789'))
    } else {
      machine = new machineTemplate(new cArray(this.state.data).getFilteredArray('id', '===', machineSet[subsite]))
    }

    return (
      <SiteBox>
        <SiteNavigation
          startValue={'Dashboard'}
          data={['Dashboard', 'Druck', 'Pack', 'Versand']}
          onClick={this.setSubsite}
          Limit={4}
        />
        {subsite === 'Dashboard' ? (
          <Content>
            <Card
              content={
                <Kpi
                  title={`Durchschnittlicher Level of Use von Druck`}
                  value={machine1.avg('levelOfUse')}
                  growth={machine1.pctDif('levelOfUse')}
                  type={'percent'}
                />
              }
              footContent={<TextSnippet text={'SAP ERP3'} icon={<TagIcon fontSize={'small'} />} />}
            />
            <Card
              content={
                <Kpi
                  title={'Durchschnittlicher Level of Use von Pack'}
                  value={machine2.avg('levelOfUse')}
                  growth={machine2.pctDif('levelOfUse')}
                  type={'percent'}
                />
              }
              footContent={<TextSnippet text={'SAP ERP3'} icon={<TagIcon fontSize={'small'} />} />}
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
                  title={'Durchschnittlicher Auslastung'}
                  value={machine.avg('levelOfUse')}
                  growth={machine.pctDif('levelOfUse')}
                  type={'percent'}
                />
              }
              footContent={<TextSnippet text={'SAP ERP3'} icon={<TagIcon fontSize={'small'} />} />}
            />
            <Card content={<ControlLamp title={'Standby'} value={machine.latest('idleMode')} />} />
            <Card content={<ControlLamp title={'Wartung notwendig'} value={machine.latest('fault.isFault')} />} />

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
              content={
                <Chart type={'gauge'} title={'Zustand der Maschine'} value={machine.latest('wearOfTheMachine')} />
              }
            />
            <Card
              content={
                <Kpi
                  title={'verbleibende Dauer der Wartung'}
                  value={
                    machine.latest('fault.currenTick') !== 0
                      ? machine.latest('fault.ticksToRemain') - machine.latest('fault.currenTick')
                      : 0
                  }
                  type={'absolute'}
                />
              }
              footContent={<TextSnippet text={'SAP ERP3'} icon={<TagIcon fontSize={'small'} />} />}
            />

            <Card
              content={<Kpi title={'aktuelle Auslastung'} value={machine.latest('levelOfUse')} type={'percent'} />}
              footContent={<TextSnippet text={'SAP ERP3'} icon={<TagIcon fontSize={'small'} />} />}
            />
            <Card
              content={<Kpi title={'erwarteter Output'} value={machine.latest('levelOfUse')} type={'percent'} />}
              footContent={<TextSnippet text={'SAP ERP3'} icon={<TagIcon fontSize={'small'} />} />}
            />
            {/* <Card content={<MachineVis title={'Machine 7'} data={machine} />} width={500} /> */}
          </Content>
        )}
      </SiteBox>
    )
  }
}

export default IotView
