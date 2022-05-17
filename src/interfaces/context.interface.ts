import { Dispatch } from "react"

export enum ToastType {
  MESSAGE = 'MESSAGE',
  WARNING = 'WARNING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  HIDE = 'HIDE',
}

export interface IToast {
  type: ToastType
  text: string
}

export type IToastContext = [
  IToast,
  Dispatch<IToast>
]

export type CountItem = {
  id: string
  itemName: string
  itemIcon: string
}

export interface ICounterItemsValues extends CountItem {
  value: number;
}