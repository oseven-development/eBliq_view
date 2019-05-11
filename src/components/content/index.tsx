import React, { Children } from 'react'

import { Flex } from 'rebass'

const Content = (props: any) => {
  const { children } = props
  return (
    <Flex
      flexWrap="wrap"
      style={{
        margin: 'auto',
        maxWidth: 1000,
        height: `calc(100vh - 240px)`
      }}
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Flex>
  )
}
export default Content
