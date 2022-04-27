import React, { FC } from 'react'

import NewCounterScreenView from '@/pages/NewCounter/components/NewCounterScreenView'
import { CounterItemsProvider } from '@/pages/NewCounter/context'
import { NewCounterScreenProps } from '@/interfaces/navigator'

const NewCounterScreen: FC<NewCounterScreenProps> = () => {

  return (
    <CounterItemsProvider>
      <NewCounterScreenView />
    </CounterItemsProvider>
  )
}

export default NewCounterScreen