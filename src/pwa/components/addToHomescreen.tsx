import * as React from 'react'
import { useAddToHomescreenPrompt } from '../../assets/hooks/useAddToHomescreenPrompt'
import AddToHomeScreenIcon from '@material-ui/icons/AddToHomeScreen'
import { IconButton } from '@material-ui/core'

export const AddToHomescreen = () => {
  const [prompt, promptToInstall] = useAddToHomescreenPrompt()
  const [isVisible, setVisibleState] = React.useState(false)

  const hide = () => setVisibleState(false)
  console.log(prompt)
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
      <IconButton onClick={promptToInstall}>
        <AddToHomeScreenIcon />
      </IconButton>
    </React.Fragment>
  )
}

export default AddToHomescreen
