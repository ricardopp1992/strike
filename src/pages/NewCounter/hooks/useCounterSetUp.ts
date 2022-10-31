import { useContext } from 'react'

import { CounterItemsContext } from '../context'
import { NewCounterTypes } from '../interfaces'
import { CountItem } from '@/interfaces'

export const useCounterContext = () => {
  const context = useContext(CounterItemsContext)
  if (context === null) throw new Error('useCounterContext must be used within a CounterItemsProvider')

  const [counterState, dispatch] = context

  const addNewCounterItem = (counterItem: CountItem) => {
    dispatch({ type: NewCounterTypes.ADD_ITEM, payload: counterItem })
  }

  const editCounterItem = (updatedItem: CountItem) => {
    dispatch({ type: NewCounterTypes.EDIT_ITEM, payload: updatedItem })
  }

  const setCounterItemToEdit = (itemId: string) => {
    dispatch({ type: NewCounterTypes.SET_ITEM_TO_EDIT, payload: itemId })
  }

  const setCounterItemId = (id: string | undefined) => {
    dispatch({ type: NewCounterTypes.SET_ITEM_TO_EDIT_ID, payload: id })
  }

  const clearItems = () => {
    dispatch({ type: NewCounterTypes.CLEAR_COUNTER_ITEMS })
  }

  const removeItem = (itemId: string) => {
    dispatch({ type: NewCounterTypes.REMOVE_ITEM, payload: itemId })
  }

  return {
    counterState,
    addNewCounterItem,
    editCounterItem,
    setCounterItemToEdit,
    setCounterItemId,
    clearItems,
    removeItem,
  }
}