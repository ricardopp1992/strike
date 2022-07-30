import { CountItem } from "@/interfaces"

export type CounterItemsStore = [NewCounterSate, React.Dispatch<PayloadNewCounterAction>]

export type NewItemFromProps = {
  snapTo: ((index: number) => void)
}

export interface ICounterItemProps {
  openNewEntryForm: () => void
}

export type NewCounterSate = {
  itemsCounter: CountItem[],
  itemToEditId: string | undefined,
}

export enum NewCounterTypes {
  ADD_ITEM,
  REMOVE_ITEM,
  EDIT_ITEM,
  SET_ITEM_TO_EDIT,
  SET_ITEM_TO_EDIT_ID,
}

export type AddItemAction = {
  type: NewCounterTypes.ADD_ITEM
  payload: CountItem
}

export type RemoveItemAction = {
  type: NewCounterTypes.REMOVE_ITEM
  payload: string
}

export type EditItemAction = {
  type: NewCounterTypes.EDIT_ITEM
  payload: CountItem
}

export type SetEditItemAction = {
  type: NewCounterTypes.SET_ITEM_TO_EDIT,
  payload: string;
}

export type SetEditItemIdAction = {
  type: NewCounterTypes.SET_ITEM_TO_EDIT_ID,
  payload: string | undefined;
}

export type PayloadNewCounterAction = AddItemAction | RemoveItemAction | EditItemAction | SetEditItemAction | SetEditItemIdAction