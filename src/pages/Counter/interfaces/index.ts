import { CountItem, ICounterItemsValues } from "@/interfaces"

export interface IItemCounterProps {
  name: string
  icon: string
  value: number
}

export enum ItemsCounterTypes {
  SET_ITEMS,
}

export type SetItemsAction = {
  type: ItemsCounterTypes.SET_ITEMS,
  payload: CountItem[]
}

export type ItemsCounterActions = SetItemsAction