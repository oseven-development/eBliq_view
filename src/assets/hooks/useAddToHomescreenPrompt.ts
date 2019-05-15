import * as React from 'react'

interface IBeforeInstallPromptEvent extends Event {
  readonly platforms: string[]
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed'
    platform: string
  }>
  prompt(): Promise<void>
}
declare const window: any

export function useAddToHomescreenPrompt(): [
  IBeforeInstallPromptEvent | null,
  () => void
] {
  const [prompt, setState] = React.useState<IBeforeInstallPromptEvent | null>(
    null
  )
  //   const [install, setInstall] = React.useState('not installed')

  const promptToInstall = () => {
    if (prompt) {
      return prompt.prompt()
    }
    return Promise.reject(
      new Error(
        'Tried installing before browser sent "beforeinstallprompt" event'
      )
    )
  }
  React.useEffect(() => {
    const ready = (e: IBeforeInstallPromptEvent) => {
      e.preventDefault()

      setState(e)
    }
    // if (window.matchMedia('(display-mode: standalone)').matches) {
    //   console.log('App is already installed and running in standalone')
    //   setInstall('already installed')
    // } else {
    //   window.addEventListener('beforeinstallprompt', (e: any) => {
    //     console.log('fired')
    //     console.log('beforeinstallprompt has fired', e)
    //     // Prevent Chrome 67 and earlier from automatically showing the prompt
    //     e.preventDefault()
    //     // Stash the event so it can be triggered later.
    //     window.deferredPrompt = e
    //     setInstall('ready to install')
    //   })
    //   // this event fires only when app is installed
    //   window.addEventListener('appinstalled', (evt: any) => {
    //     console.log('App was successfully installed')
    //     setInstall('installed')
    //   })
    // }
    window.addEventListener('beforeinstallprompt', ready as any)

    return () => {
      window.removeEventListener('beforeinstallprompt', ready as any)
    }
  }, [prompt])

  return [prompt, promptToInstall]
}
