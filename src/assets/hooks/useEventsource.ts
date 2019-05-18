/**
 * /* eslint-disable no-restricted-globals
 *
 * @format
 */

import {useState, useEffect} from 'react'
export function useEventsource(url: string, bool: boolean = true) {
  const [data, setData]: any = useState([])
  const con = new EventSource(url)
  useEffect(() => {
    bool
      ? (con.onmessage = (event: any) => {
          setData([...data, event])
        })
      : con.close()
    return () => {
      con.close()
    }
  }, [bool, con, data])

  return data
}
