import React from 'react'
import { Flex, Box } from 'rebass'
import { Typography } from '@material-ui/core'
import { color } from '../../assets/theme/color'

const TextSnippet = (props: any) => {
  const { text, icon, type } = props
  return (
    <React.Fragment>
      <Flex
        justifyContent={'flex-start'}
        alignItems={'center'}
        width={1}
        style={{ color: type ? type : color.grey }}
      >
        {icon}
        <Box ml={'7px'}>
          <Typography
            variant="subtitle2"
            style={{ color: type ? type : color.grey }}
          >
            {text}
          </Typography>
        </Box>
      </Flex>
    </React.Fragment>
  )
}

export default TextSnippet
