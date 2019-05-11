import React from 'react'
import { Flex } from 'rebass'
import { Typography } from '@material-ui/core'

const TextSnippet = (props: any) => {
  const { text, icon, type } = props
  return (
    <React.Fragment>
      <Flex> {icon}
      <Typography color={type ? type : 'inherit'} >{text}</Typography></Flex>
     
    </React.Fragment>
  )
}

export default TextSnippet
