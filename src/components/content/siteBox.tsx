import React, { Children } from 'react'

import { Flex } from 'rebass'

const SiteBox = (props: any) => {
  const { children } = props
  return (
    <div
      style={{
        margin: window.innerWidth < 768 ? '56px 0px 55px 0px' : '120px auto'
      }}
    >
      {children}
    </div>
  )
}
export default SiteBox
