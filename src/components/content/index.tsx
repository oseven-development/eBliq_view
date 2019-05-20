/** @format */

import React from 'react'

import {Flex} from 'rebass'

const Content = (props: any) => {
  const {children, justifyContent, alignItems, margin} = props
  return (
    <Flex
      flexWrap="wrap"
      style={{
        margin: margin ? margin : 'auto',
        maxWidth: 1200,
      }}
      justifyContent={justifyContent ? justifyContent : 'center'}
      alignItems={alignItems ? alignItems : 'flex-start'}>
      {children}
    </Flex>
  )
}
export default Content
