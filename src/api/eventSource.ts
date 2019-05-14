export const eventSource = (url: string) => {
  let eventSource = new EventSource(url)
  return (eventSource.onmessage = function(this: any, e: any) {
    return JSON.parse(e.data)
  })
}
