export class SSE {
  private eventSource: any
  constructor(url: string) {
    this.eventSource = new EventSource(url)
  }

  public state() {
    return this.eventSource.readyState
  }

  public on() {
    try {
      return (this.eventSource.onmessage = function(this: any, e: any) {
        return JSON.parse(e.data)
      })
    } catch (error) {
      throw error
    }
  }
  public close() {
    try {
      this.eventSource.close()
    } catch (error) {
      throw error
    }
  }
}
