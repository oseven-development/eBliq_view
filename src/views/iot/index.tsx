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
                <Kpi
                  title={'Durchschnittlicher Level of Use von Versand'}
                  value={machine3.avg('levelOfUse')}
                  growth={machine3.pctDif('levelOfUse')}
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
                  title={'Durchschnittlicher Level of Use'}
                  value={machine.avg('levelOfUse')}
                  growth={machine.pctDif('levelOfUse')}
                  type={'percent'}
                />
              }
              footContent={<TextSnippet text={'SAP ERP3'} icon={<TagIcon fontSize={'small'} />} />}
            />
            <Card content={<ControlLamp title={'Idle Mode'} value={machine.latest('idleMode')} />} />
            <Card
              alignItems="center"
              content={
                <Chart type={'gauge'} title={'Zustand der Maschine'} value={machine.latest('wearOfTheMachine')} />
              }
            />
            <Card
              content={
                createChartData(machine.data, 'date', 'levelOfUse').length > 1 ? (
                  <Chart
                    type={'line'}
                    title={'Level of Use in %'}
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
              content={
                <Kpi
                  title={'Summe von Trips'}
                  value={machine.count('manufacturedComponent.currentTrip')}
                  type={'absolute'}
                />
              }
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
