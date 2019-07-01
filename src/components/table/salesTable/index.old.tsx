/** @format */

import React from 'react'
import {makeStyles} from '@material-ui/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import {groupBy} from '../../../utils/lib/destructure/distinctOA'
import {sum} from '../../../utils/lib/measures/calculations'
import {getAttributeArray} from '../../../utils/lib/filter/getAttributeArray'
import {formatCurrency} from '../../../assets/formats/currency'

const useStyles = makeStyles((theme: any) => ({
  root: {
    width: '100%',
    marginTop: 12,
    overflowX: 'auto',
  },
}))

export const createData = async (data: any[]) => {
  const groupedProducts = groupBy(data, 'name')
  const sumProductData: any = []
  for (const attr in groupedProducts) {
    const quantity = sum(getAttributeArray(groupedProducts[attr], 'quantity'))
    const revenue = sum(getAttributeArray(groupedProducts[attr], 'price'))
    sumProductData.push({
      name: attr,
      quantity,
      revenue,
    })
  }
  return sumProductData
}
const SalesTable = (props: any) => {
  const {products} = props
  const classes = useStyles()
  const [data, setData]: any = React.useState('')
  React.useEffect(() => {
    createData(products).then(res => {
      setData(res)
    })
  }, [products])

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Produkte</TableCell>
          <TableCell align="right">Menge in Stk.</TableCell>
          <TableCell align="right">Umsatz</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data
          ? data.map((row: any) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <TableCell align="right"> {formatCurrency(row.revenue)} € </TableCell>
              </TableRow>
            ))
          : ''}
      </TableBody>
    </Table>
  )
}
export default SalesTable
