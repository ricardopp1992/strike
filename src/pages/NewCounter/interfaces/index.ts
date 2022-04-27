export type CountItem = {
  id: string
  itemName: string
  itemIcon: string
}

export type CounterItemsStore = [NewCounterSate, React.Dispatch<PayloadNewCounterAction>]

export type NewItemFromProps = {
  snapTo: ((index: number) => void)
}

export type NewCounterSate = {
  itemsCounter: CountItem[]
}

export enum NewCounterTypes {
  ADD_ITEM,
  REMOVE_ITEM
}

export type AddItemAction = {
  type: NewCounterTypes.ADD_ITEM
  payload: CountItem
}

export type RemoveItemAction = {
  type: NewCounterTypes.REMOVE_ITEM
  payload: string
}

export type PayloadNewCounterAction = AddItemAction | RemoveItemAction