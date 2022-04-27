import React, { FC } from 'react'
import { Text, View } from 'react-native'

import { useCounterContext } from '@/pages/NewCounter/hooks'

const CounterItemList: FC = () => {
  const { counterState } = useCounterContext()

  return (
    <View>
      {counterState.itemsCounter.map((_, i) => <Text>{i}</Text>)}
    </View>
  )
}

export default CounterItemList