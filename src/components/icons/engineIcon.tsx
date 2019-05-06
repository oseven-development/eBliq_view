import SvgIcon from '@material-ui/core/SvgIcon'
import { IIcon, EStandardColor, defColor } from './iconTypes.d'
import React from 'react'

export default ({ color, fontSize }: IIcon) => {
  let defColor: defColor = undefined
  let custColor: string = ''
  color && color in EStandardColor ? (defColor = color) : (custColor = color)
  return (
    <SvgIcon fontSize={fontSize || 'default'} color={defColor}>
      <path
        fill={custColor}
        d="M7,4V6H10V8H7L5,10V13H3V10H1V18H3V15H5V18H8L10,20H18V16H20V19H23V9H20V12H18V8H12V6H15V4H7Z"
      />
    </SvgIcon>
  )
}
