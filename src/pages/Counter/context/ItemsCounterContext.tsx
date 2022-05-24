import React, { createContext, Dispatch, FC, useReducer } from 'react'

import { ICounterItemsValues } from '@/interfaces'
import { ItemsCounterActions, ItemsCounterTypes } from '../interfaces'

export const ItemsCounterContext = createContext<[InitialCounter, Dispatch<ItemsCounterActions>] | null>(null)

export type InitialCounter = { items: ICounterItemsValues[] }

const initialState: InitialCounter = {
  items: []
}

const itemsCounterReducer = (state: InitialCounter, action: ItemsCounterActions): InitialCounter => {
  switch(action.type) {
    case ItemsCounterTypes.SET_ITEMS:
      const items = action.payload.map((item): ICounterItemsValues => ({ ...item, value: 0 }))
      return { ...state, items }
    case ItemsCounterTypes.ADD: {
      const itemId = action.payload
      const updatedItems = state.items.map((item) => {
        if (item.id === itemId) item.value += 1
        return item
      })
      return {
        ...state,
        items: updatedItems
      }
    }
    case ItemsCounterTypes.DECREASE: {
      const itemId = action.payload
      const updatedItems = state.items.map((item) => {
        if (item.id === itemId && item.value > 0) item.value -= 1
        return item
      })
      return {
        ...state,
        items: updatedItems
      }
    }
    default:
      return state
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