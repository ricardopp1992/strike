import React, { createContext, Dispatch, FC, useReducer } from 'react'

import { ICounterItemsValues } from '@/interfaces'
import { ItemsCounterActions, ItemsCounterTypes } from '../interfaces'

export const ItemsCounterContext = createContext<[InitialCounter, Dispatch<ItemsCounterActions>] | null>(null)

export type InitialCounter = { items: ICounterItemsValues[] }

const initialState: InitialCounter = {
  items: []
}

const itemsCounterReducer = (initialState: InitialCounter, action: ItemsCounterActions): InitialCounter => {
  switch(action.type) {
    case ItemsCounterTypes.SET_ITEMS:
      const items = action.payload.map((item): ICounterItemsValues => ({ ...item, value: 0 }))
      return { ...initialState, items }
    default:
      return initialState
  }
}

export const ItemsCounterProvider: FC = ({ children }) => {
  const counterStore = useReducer(itemsCounterReducer, initialState)

  return (
    <ItemsCounterContext.Provider value={counterStore}>
      { children }
    </ItemsCounterContext.Provider>
  )
}