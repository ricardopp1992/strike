import React, { FC } from 'react'

import NewCounterScreenView from '@/pages/NewCounter/components/NewCounterScreenView'
import { CounterItemsProvider } from '@/pages/NewCounter/context'
import { NewCounterScreenProps } from '@/interfaces/navigator.interface'
import ScreenWrapper from '@/components/ScreenWrapper'

const NewCounterScreen: FC<NewCounterScreenProps> = (props) => {

  return (
    <ScreenWrapper>
      <CounterItemsProvider>
        <NewCounterScreenView {...props} />
      </CounterItemsProvider>
    </ScreenWrapper>
  )
}

export default NewCounterScreen