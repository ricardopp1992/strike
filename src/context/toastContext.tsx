import { IToast, IToastContext, ToastType } from '@/interfaces'
import React, { createContext, FC, useContext, useState } from 'react'

const ToastContext = createContext<IToastContext | null>(null)

export const ToastProvider: FC = ({ children }) => {
  const toastState = useState<IToast>({ text: '', type: ToastType.MESSAGE })

  return (
    <ToastContext.Provider value={toastState}>
      { children }
    </ToastContext.Provider>
  )
}

export const useToastContext = () => {
  const toast = useContext(ToastContext)

  if (toast === null) throw Error('ToastContext should be wrapped inside a Provider')
  const [toastState, setToast] = toast

  const setErrorToast = (toastText: string) => {
    setToast({ type: ToastType.ERROR, text: toastText })
  }

  const setMessageToast = (toastText: string) => {
    setToast({ type: ToastType.MESSAGE, text: toastText })
  }

  const setWarningToast = (toastText: string) => {
    setToast({ type: ToastType.WARNING, text: toastText })
  }

  const setSuccessToast = (toastText: string) => {
    setToast({ type: ToastType.SUCCESS, text: toastText })
  }

  const closeToast = () => setToast({ text: '', type: ToastType.HIDE })

  return {
    toastState,
    setErrorToast,
    setMessageToast,
    setWarningToast,
    setSuccessToast,
    closeToast,
  }
}