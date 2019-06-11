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

const setFilter = (filter: string) => {
  console.log(filter)
}

const machine = {
  machine1: 51,
  machine2: 71,
  machine3: 21,
  machine4: 11,
}
class IotView extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      data: [],
    }
    this.props.source.addEventListener('machineStream', (e: any) => {
      this.update(e)
    })
    notification('Simulation gestartet')
  }
  update = (e: any) => {
    this.setState({data: [...this.state.data, flatten(JSON.parse(e.data))]})
  }

  render() {
    const machine1 = new machineTemplate(new cArray(this.state.data).getFilteredArray('id', '===', 'id-123'))
    return (
      <SiteBox>
        <SiteNavigation data={['Dashobard', 'Machine1', 'Machine2', 'Machine3']} onClick={setFilter} />
        <Content>
          <Card
            content={
              <Kpi
                title={'Durchschnittlicher Level of Use'}
                value={machine1.avg('levelOfUse')}
                growth={machine1.pctDif('levelOfUse')}
                type={'percent'}
              />
            }
            footContent={<TextSnippet text={'SAP ERP3'} icon={<TagIcon fontSize={'small'} />} />}
          />
          <Card content={<ControlLamp title={'Idle Mode'} value={machine1.latest('idleMode')} />} />
          <Card
            alignItems="center"
            content={
              <Chart type={'gauge'} title={'Zustand der Maschine'} value={machine1.latest('wearOfTheMachine')} />
            }
          />
          <Card
            content={
              createChartData(machine1.data, 'date', 'levelOfUse').length > 1 ? (
                <Chart
                  type={'line'}
                  title={'Level of Use in %'}
                  value={createChartData(machine1.data, 'date', 'levelOfUse', 10)}
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
                value={machine1.count('manufacturedComponent.currentTrip')}
                type={'absolute'}
              />
            }
            footContent={<TextSnippet text={'SAP ERP3'} icon={<TagIcon fontSize={'small'} />} />}
          />

          {/* <Card content={<MachineVis title={'Machine 7'} data={machine} />} width={500} /> */}
          {/* <button
            onClick={() => {
              // setSnack({...snack, open: true})
            }}>
            snackbar
          </button> */}
        </Content>
      </SiteBox>
    )
  }
}

// const IotView = (props: any) => {
//   const {setSnack, snack, source} = props
//   const [toggle, setToggle] = React.useState(false)
//   const [data, setData]: any = React.useState([])
//   React.useEffect(() => {

//     return () => {
//       source.removeEventListener('machineStream', true)
//     }
//   }, [data, source])
//   console.log(data)
//   // let machine1 = new machineTemplate(new cArray(data).getFilteredArray('id', '===', 'id-123'))

//   return (
//     <SiteBox>
//       <SiteNavigation data={['Dashobard', 'Machine1', 'Machine2', 'Machine3']} onClick={setFilter} />
//       <Button
//         onClick={() => {
//           setToggle(!toggle)
//           notification('Simulation gestartet')
//         }}>
//         Start Stream
//       </Button>
//       <Content>
//         {/* <Card
//           content={
//             <Kpi
//               title={'Level of Use in %'}
//               value={machine1.avg('levelOfUse')}
//               growth={machine1.pctDif('levelOfUse')}
//               type={'percent'}
//             />
//           }
//           footContent={<TextSnippet text={'SAP ERP3'} icon={<TagIcon fontSize={'small'} />} />}
//         /> */}
//         {/* <Card content={<Chart type={'line'} title={'Stream Machine 2'} value={data} />} />
//         <Card alignItems="center" content={<Chart type={'gauge'} title={'Auslastung Machine 2'} value={data} />} /> */}
//         <Card content={<MachineVis title={'Machine 7'} data={machine} />} width={500} />
//         <button
//           onClick={() => {
//             setSnack({...snack, open: true})
//           }}>
//           snackbar
//         </button>
//       </Content>
//     </SiteBox>
//   )
// }

export default IotView
