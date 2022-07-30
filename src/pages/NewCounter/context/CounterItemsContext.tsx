import React, { createContext,FC, useReducer } from 'react'

import {
  CounterItemsStore,
  NewCounterSate,
  NewCounterTypes,
  PayloadNewCounterAction
} from '@/pages/NewCounter/interfaces'

export const CounterItemsContext = createContext<CounterItemsStore | null>(null)

const initialState = {
  itemsCounter: [],
  itemToEditId: ''
}

function reducerCounter(state: NewCounterSate, action: PayloadNewCounterAction): NewCounterSate {
  switch (action.type) {
    case NewCounterTypes.ADD_ITEM:
      return { ...state, itemsCounter: [...state.itemsCounter, action.payload] }
    case NewCounterTypes.REMOVE_ITEM:
      return { ...state, itemsCounter: state.itemsCounter.filter(({ id }) => id !== action.payload)}
    case NewCounterTypes.EDIT_ITEM:
      const itemsCounter = state.itemsCounter.map(item => {
        if (item.id === action.payload.id) return action.payload
        return item
      })

      return { ...state, itemsCounter }
    case NewCounterTypes.SET_ITEM_TO_EDIT_ID:
      return { ...state, itemToEditId: action.payload }
    default:
      throw new Error('reducer case not implemented')
  }
}

export const CounterItemsProvider: FC = ({ children }) => {
  const contextState = useReducer(reducerCounter, initialState)

  return (
    <CounterItemsContext.Provider value={contextState}>
      {children}
    </CounterItemsContext.Provider>
  )
}
