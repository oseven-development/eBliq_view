/** @format */

import React from 'react'

import {Flex, Box} from 'rebass'

const HalfContent = (props: any) => {
  const {component1, component2, justifyContent, alignItems, margin} = props
  const width = window.innerWidth < 768 ? window.innerWidth - 10 : 1 / 2
  return (
    <Flex
      flexWrap="wrap"
      style={{
        margin: margin ? margin : 'auto',
        maxWidth: 1200,
      }}
      justifyContent={justifyContent ? justifyContent : 'center'}
      alignItems={alignItems ? alignItems : 'flex-start'}>
      <Box width={width}>{component1} </Box>
      <Box width={width}>{component2}</Box>
    </Flex>
  )
}
export default HalfContent
