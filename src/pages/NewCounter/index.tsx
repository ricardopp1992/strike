import React, { FC } from 'react'

import NewCounterScreenView from '@/pages/NewCounter/components/NewCounterScreenView'
import { CounterItemsProvider } from '@/pages/NewCounter/context'
import { NewCounterScreenProps } from '@/interfaces/navigator.interface'
import ScreenWrapper from '@/components/ScreenWrapper'

const NewCounterScreen: FC<NewCounterScreenProps> = () => {

  return (
    <ScreenWrapper>
      <CounterItemsProvider>
        <NewCounterScreenView />
      </CounterItemsProvider>
    </ScreenWrapper>
  )
}

export default NewCounterScreen