import React from 'react'
import LineChart from './types/lineChart'

interface IChartData {
  x: number
  y: number
}

interface ICharts {
  type: 'line' | 'bar'
  title: string
  value: IChartData[] | IChartData[][]
  xAxis?: number[]
  yAxis?: number[]
  curve?: true
  xTickTotal?: number
  yTickTotal?: number
}

const _Chart: React.FC<ICharts> = (props: ICharts) => {
  const { type, title, value, xAxis, yAxis } = props
  switch (type) {
    case 'line':
      return (
        <LineChart title={title} value={value} xAxis={xAxis} yAxis={yAxis} />
      )
    case 'bar':
      return <div />
    default:
      return <div />
  }
}
export default _Chart
