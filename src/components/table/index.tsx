/** @format */
import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'

import Paper from '@material-ui/core/Paper'
import Checkbox from '@material-ui/core/Checkbox'
import Avatar from '@material-ui/core/Avatar'

import ErrorIcon from '@material-ui/icons/Error'
import InfoIcon from '@material-ui/icons/Info'
import WarningIcon from '@material-ui/icons/Warning'
import CheckIcon from '@material-ui/icons/Check'

import {makeStyles} from '@material-ui/styles'

import {stableSort, getSorting} from './sortTable'
import {TableToolbar} from './toolbar'
import {_Tablehead} from './tableHead'
import {color} from '../../assets/theme/color'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: 20,
  },
  paper: {
    width: '100%',
    marginBottom: 3,
  },
  table: {
    minWidth: window.innerWidth < 768 ? 0 : 750,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
}))

const _Table = (props: any) => {
  const {rows, headRows, title, tableRow} = props
  const classes = useStyles()
  const [order, setOrder] = React.useState('asc')
  const [orderBy, setOrderBy] = React.useState('calories')
  const [selected, setSelected]: any = React.useState([])
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  function handleRequestSort(event: any, property: any) {
    const isDesc = orderBy === property && order === 'desc'
    setOrder(isDesc ? 'asc' : 'desc')
    setOrderBy(property)
  }

  function handleSelectAllClick(event: any) {
    if (event.target.checked) {
      const newSelecteds = rows.map((n: any) => n.name)
      setSelected(newSelecteds)
      return
    }
    setSelected([])
  }

  function handleClick(event: any, name: any) {
    const selectedIndex = selected.indexOf(name)
    let newSelected: any[] = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1))
    }

    setSelected(newSelected)
  }

  function handleChangePage(event: any, newPage: any) {
    setPage(newPage)
  }

  function handleChangeRowsPerPage(event: any) {
    setRowsPerPage(+event.target.value)
  }

  const isSelected = (name: any) => selected.indexOf(name) !== -1

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableToolbar numSelected={selected.length} title={title} />
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <_Tablehead
              headRows={headRows}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row: any) => {
                  const isItemSelected = isSelected(row.name)

                  return (
                    <TableRow
                      hover
                      onClick={event => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}>
                      <TableCell padding="checkbox">
                        <Checkbox checked={isItemSelected} color={'primary'} />
                      </TableCell>
                      <TableCell padding="none">
                        {row.type === 'info' ? (
                          <InfoIcon style={{color: color.primary}} />
                        ) : row.type === 'warning' ? (
                          <WarningIcon style={{color: color.secondary}} />
                        ) : row.type === 'error' ? (
                          <ErrorIcon style={{color: color.error}} />
                        ) : (
                          <CheckIcon style={{color: color.success}} />
                        )}
                      </TableCell>

                      <TableCell component="th" scope="row" padding="none">
                        {row.name}
                      </TableCell>
                      <TableCell padding="none">{row.date}</TableCell>
                      <TableCell padding="none">{row.time}</TableCell>
                    </TableRow>
                  )
                })}
              {emptyRows > 0 && (
                <TableRow style={{height: 49 * emptyRows}}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
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
      </Paper>
    </div>
  )
}

export default _Table
