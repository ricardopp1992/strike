import React, { FC } from 'react'

import CounterScreenView from './components/CounterScreenView'
import { CounterScreenProps } from '@/interfaces'
import { ItemsCounterProvider } from './context'

const CounterScreen: FC<CounterScreenProps> = (props) => {

  return (
    <ItemsCounterProvider>
      <CounterScreenView {...props} />
    </ItemsCounterProvider>
  )
}

export default CounterScreen