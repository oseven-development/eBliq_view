/** @format */

import * as React from 'react'
import {useAddToHomescreenPrompt} from '../hooks/useAddToHomescreenPrompt'
import AddToHomeScreenIcon from '@material-ui/icons/AddToHomeScreen'
import {IconButton} from '@material-ui/core'

export const AddToHomescreen = () => {
  const [prompt, promptToInstall] = useAddToHomescreenPrompt()
  const [isVisible, setVisibleState] = React.useState(false)

  React.useEffect(() => {
    if (prompt) {
      setVisibleState(true)
    }
  }, [prompt])

  if (!isVisible || window.matchMedia('(display-mode: standalone)').matches) {
    return <div />
  }

  return (
    <React.Fragment>
      <IconButton onClick={promptToInstall} color={'inherit'}>
        <AddToHomeScreenIcon color="action" />
      </IconButton>
    </React.Fragment>
  )
}

export default AddToHomescreen
