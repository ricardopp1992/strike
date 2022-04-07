import { useState } from 'react'

import { CountItem } from '../interfaces'

export const useCounterSetUp = () => {
  const [counterList, setCounterList] = useState<CountItem[]>([])

  const addNewItem = (item: CountItem) => {
    setCounterList(prevList => [...prevList, item])
  }

  const removeItem = (itemId: string) => {
    const updatedCounterList: CountItem[] = counterList.filter(({ id }) => id === itemId)
    setCounterList(updatedCounterList)
  }

  return {
    counterList,
    addNewItem,
    removeItem,
  }
}