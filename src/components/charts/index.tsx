/** @format */

import React from 'react'
import LineChart from './types/lineChart'
import VerticalBarChart from './types/verticalBarChart'
import GaugeChart from './types/gaugeChart'

interface IChartData {
  x: number
  y: number
}

interface ICharts {
  type: 'line' | 'bar' | 'gauge'
  title: string
  value: IChartData[] | IChartData[][] | number
  xAxis?: boolean
  yAxis?: boolean
  curve?: true
  xTickTotal?: number
  yTickTotal?: number
  stacked?: true
  xType?: string
}

const _Chart: React.FC<ICharts> = (props: ICharts) => {
  const {type, title, value, xAxis, yAxis, stacked, curve, xTickTotal, yTickTotal, xType} = props
  switch (type) {
    case 'line':
      return (
        <LineChart
          title={title}
          value={value}
          xAxis={xAxis}
          yAxis={yAxis}
          xTickTotal={xTickTotal}
          yTickTotal={yTickTotal}
          curve={curve}
          xType={xType}
        />
      )
    case 'bar':
      return <VerticalBarChart title={title} value={value} xAxis={xAxis} yAxis={yAxis} stacked={stacked} />
    case 'gauge':
      return <GaugeChart value={value} title={title} />
    default:
      return <div />
  }
}
export default _Chart
