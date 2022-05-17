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

  return {
    counterState,
    addNewCounterItem
  }
}