import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'

const styles = {}

const _SwipeableDrawer = (props: IProps) => {
  const { setToggle, openState, Component, anchor, style } = props

  return (
    <React.Fragment>
      <SwipeableDrawer
        anchor={anchor}
        open={openState}
        onOpen={() => {
          setToggle()
        }}
        onClose={() => {
          setToggle()
        }}
      >
        <div
          tabIndex={0}
          role="button"
          onClick={() => {
            setToggle()
          }}
          onKeyDown={() => {
            setToggle()
          }}
          style={style}
        >
          {Component}
        </div>
      </SwipeableDrawer>
    </React.Fragment>
  )
}

export default withStyles(styles)(_SwipeableDrawer)

interface IProps {
  setToggle?: any
  Component: JSX.Element
  openState: boolean
  anchor: 'bottom' | 'top'
  style?: any
}
