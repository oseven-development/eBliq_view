import React, { Children } from 'react'

import { Flex } from 'rebass'

const Content = (props: any) => {
  const { children } = props
  return (
    <Flex
      flexWrap="wrap"
      style={{
        margin: window.innerWidth < 768 ? '0px 0px 55px 0px' : '40px auto',
        maxWidth: 1000
      }}
    >
      {children}
    </Flex>
  )
}
export default Content
