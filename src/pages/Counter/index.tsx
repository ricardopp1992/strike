import React, { FC } from 'react'

import CounterScreenView from './components/CounterScreenView'
import { CounterScreenProps } from '@/interfaces'

const CounterScreen: FC<CounterScreenProps> = (props) => {

  return (
    <CounterScreenView {...props} />
  )
}

export default CounterScreen