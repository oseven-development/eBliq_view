/** @format */

import React from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'

import Checkbox from '@material-ui/core/Checkbox'

export const _Tablehead = (props: any) => {
  const {onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, headRows, checkbox} = props
  const createSortHandler = (property: any) => (event: any) => {
    onRequestSort(event, property)
  }

  return (
    <TableHead>
      <TableRow>
        {checkbox ? (
          <TableCell padding="checkbox">
            <Checkbox
              color={'primary'}
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount}
              onChange={onSelectAllClick}
            />
          </TableCell>
        ) : null}
        {headRows.map((row: any) => (
          <TableCell
            key={row.id}
            align={row.numeric ? 'right' : 'left'}
            padding={row.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === row.id ? order : false}>
            <TableSortLabel active={orderBy === row.id} direction={order} onClick={createSortHandler(row.id)}>
              {row.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}
