import { CountItem } from "@/interfaces"

export interface IItemCounterProps {
  id: string
  name: string
  icon: string
  value: number
}

export enum ItemsCounterTypes {
  SET_ITEMS,
  ADD,
  DECREASE,
}

export type SetItemsAction = {
  type: ItemsCounterTypes.SET_ITEMS,
  payload: CountItem[]
}

export type AddItemsAction = {
  type: ItemsCounterTypes.ADD,
  payload: string
}

export type RemoveItemsAction = {
  type: ItemsCounterTypes.DECREASE,
  payload: string
}

export type ItemsCounterActions = SetItemsAction | AddItemsAction | RemoveItemsAction