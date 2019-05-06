import React, { Children } from 'react'

import { Flex } from 'rebass'

const Content = (props: any) => {
  const { children } = props
  return <Flex style={{ margin: '40px auto', maxWidth: 1000 }}>{children}</Flex>
}
export default Content
