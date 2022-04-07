import React, { FC } from 'react'
import { View } from 'react-native'

import CounterItemList from './components/ItemsList'
import { useCounterSetUp } from './hooks'
import { NewCounterScreenProps } from '@/interfaces/navigator'

const NewCounterScreen: FC<NewCounterScreenProps> = () => {
  const { counterList } = useCounterSetUp()

  return (
    <View>
      <CounterItemList counterItemsList={counterList} />
    </View>
  )
}

export default NewCounterScreen