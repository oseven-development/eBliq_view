import React from 'react'
import LineChart from './types/lineChart'
import VerticalBarChart from './types/verticalBarChart'
import GaugeChart from './types/gaugeChart'

interface IChartData {
  x: number
  y: number
}

interface ICharts {
  type: 'line' | 'verticalBar' | 'gauge'
  title: string
  value: IChartData[] | IChartData[][]
  xAxis?: number[]
  yAxis?: number[]
  curve?: true
  xTickTotal?: number
  yTickTotal?: number
  stacked?: true
}

const _Chart: React.FC<ICharts> = (props: ICharts) => {
  const { type, title, value, xAxis, yAxis, stacked } = props
  switch (type) {
    case 'line':
      return (
        <LineChart title={title} value={value} xAxis={xAxis} yAxis={yAxis} />
      )
    case 'verticalBar':
      return (
        <VerticalBarChart
          title={title}
          value={value}
          xAxis={xAxis}
          yAxis={yAxis}
          stacked={stacked}
        />
      )
    case 'gauge':
      return <GaugeChart valeue={value} title={title} />
    default:
      return <div />
  }
}
export default _Chart
