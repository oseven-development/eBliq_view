/** @format */

// Import Reducer type
import {Dispatch, AnyAction} from 'redux'

import {ActionCreator} from 'redux'
import {ThunkAction} from 'redux-thunk'

// Import Character Typing

export const setData: ActionCreator<ThunkAction<Promise<any>, any, null, any>> = (response: any) => {
  return async (dispatch: Dispatch<AnyAction>): Promise<any> => {
    try {
      dispatch({
        payload: response.payload,
        // characters: response.data.results,
        type: response.type,
      })
    } catch (err) {
      console.error(err)
    }
  }
}
export const setDataOrder: ActionCreator<ThunkAction<Promise<any>, any, null, any>> = (response: any) => {
  return async (dispatch: Dispatch<AnyAction>): Promise<any> => {
    try {
      dispatch({
        payload: response.payload,
        // characters: response.data.results,
        type: response.type,
      })
    } catch (err) {
      console.error(err)
    }
  }
}
