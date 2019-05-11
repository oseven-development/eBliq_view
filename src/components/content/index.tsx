import React, { Children } from 'react'

import { Flex } from 'rebass'

const Content = (props: any) => {
  const { children } = props
  return (
    <Flex
      flexWrap="wrap"
      style={{
        margin: 'auto',
        maxWidth: 1000
      }}
    >
      {children}
    </Flex>
  )
}
export default Content
