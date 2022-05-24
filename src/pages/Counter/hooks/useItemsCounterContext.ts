import { useContext } from "react"

import { CountItem } from "@/interfaces"
import { ItemsCounterContext } from "../context"
import { ItemsCounterTypes } from "../interfaces"

export const useItemsCounterContext = () => {
  const context = useContext(ItemsCounterContext)
  if (!context) throw Error("You should wrap thin context inside a provider")

  const [countItems, dispatch] = context

  const initItems = (items: CountItem[]) => {
    dispatch({ type: ItemsCounterTypes.SET_ITEMS, payload: items })
  }

  const addCount = (id: string) => {
    dispatch({ type: ItemsCounterTypes.ADD, payload: id })
  }

  const decreaseCount = (id: string) => {
    dispatch({ type: ItemsCounterTypes.DECREASE, payload: id })
  }

  return {
    countItems,
    initItems,
    addCount,
    decreaseCount,
  }
}