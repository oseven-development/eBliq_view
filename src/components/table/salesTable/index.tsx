/** @format */
import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'

import Paper from '@material-ui/core/Paper'
import Checkbox from '@material-ui/core/Checkbox'

import ErrorIcon from '@material-ui/icons/Error'
import InfoIcon from '@material-ui/icons/Info'
import WarningIcon from '@material-ui/icons/Warning'
import CheckIcon from '@material-ui/icons/Check'

import {makeStyles} from '@material-ui/styles'

import {stableSort, getSorting} from '../sortTable'
import {_Tablehead} from '../tableHead'
import {formatCurrency} from '../../../assets/formats/currency'
import {groupBy} from '../../../utils/lib/distinctOA'
import {sum} from '../../../utils/lib/measures/calculations'
import {getAttributeArray} from '../../../utils/lib/filter/getAttributeArray'
import {TableToolbar} from '../toolbar'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: 3,
  },
  table: {
    minWidth: window.innerWidth < 768 ? 0 : 450,
  },
  tableWrapper: {
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

const headRows = [
  {id: 'name', numeric: false, disablePadding: true, label: 'Produkt'},
  {id: 'quantity', numeric: true, disablePadding: true, label: 'Menge in Stk.'},
  {id: 'revenue', numeric: true, disablePadding: true, label: 'Umsatz'},
]

const SalesTable = (props: any) => {
  const {products, title} = props
  const classes = useStyles()
  const [order, setOrder] = React.useState('desc')
  const [orderBy, setOrderBy] = React.useState('revenue')
  const [rows, setRows] = React.useState('')
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  React.useEffect(() => {
    createData(products).then(res => {
      setRows(res)
    })
  }, [products])
  function handleRequestSort(event: any, property: any) {
    const isDesc = orderBy === property && order === 'desc'
    setOrder(isDesc ? 'asc' : 'desc')
    setOrderBy(property)
  }

  function handleChangePage(event: any, newPage: any) {
    setPage(newPage)
  }

  function handleChangeRowsPerPage(event: any) {
    setRowsPerPage(+event.target.value)
  }

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)

  return (
    <div className={classes.root}>
      <TableToolbar title={title} />
      <div className={classes.tableWrapper}>
        <Table className={classes.table} aria-labelledby="tableTitle">
          <_Tablehead
            headRows={headRows}
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            rowCount={rows.length}
          />
          <TableBody>
            {rows
              ? stableSort(rows, getSorting(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row: any) => {
                    return (
                      <TableRow hover tabIndex={-1} key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.quantity}</TableCell>
                        <TableCell align="right"> {formatCurrency(row.revenue)}€ </TableCell>
                      </TableRow>
                    )
                  })
              : ''}
            {emptyRows > 0 && (
              <TableRow style={{height: 49 * emptyRows}}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <TablePagination
        rowsPerPageOptions={[10, 20, 50]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          'aria-label': 'Previous Page',
        }}
        nextIconButtonProps={{
          'aria-label': 'Next Page',
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  )
}

export default SalesTable
