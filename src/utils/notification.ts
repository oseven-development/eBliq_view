/** @format */

export function notification(message: any, title: string = 'eBliq View') {
  const nOptions = {
    tag: new Date().toISOString(),
    body: message,
    icon: 'http://georgeosddev.github.io/react-web-notification/example/Notifications_button_24.png',
    lang: 'de',
    // no browsers supported https://developer.mozilla.org/en/docs/Web/API/notification/sound#Browser_compatibility
  }

  new Notification(title, nOptions)
}
