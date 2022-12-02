import React, { useEffect, useState } from 'react'
import type { FC } from 'react'

import {
  CounterStackScreens,
  DrawerMenuScreens,
  HomeScreenProps,
  PREVIOUS_STORED_ITEMS,
  IPreserveCount
} from '@/interfaces'
import { getStoredData, setStoreData } from '@/services'
import HomeView from './components/HomeView'

export const HomeScreen: FC<HomeScreenProps> = ({ navigation, route }) => {
  const [oldCounter, setOldCounter] = useState<IPreserveCount[]>()
  const lastCounter: IPreserveCount | undefined = route.params

  const initPreviousStoredItems = async () => {
    try {
      const items = await getStoredData<IPreserveCount[]>(PREVIOUS_STORED_ITEMS)
      let storedItems: IPreserveCount[] = Array.isArray(items) ? items : []
      let itemAlreadyExist = false

      if (lastCounter) {
        storedItems = storedItems.map(prevCount => {
          if (prevCount.id === lastCounter.id) {
            itemAlreadyExist = true
            prevCount.items = lastCounter.items
          }

          return prevCount
        })

        itemAlreadyExist || storedItems.push(lastCounter)
      }

      await setStoreData(PREVIOUS_STORED_ITEMS, JSON.stringify(storedItems))
      setOldCounter(storedItems)
    } catch (error) {
      console.error(error);
    }
  }

  const navigateToNewCounterFormScreen = () => {
    navigation.navigate(DrawerMenuScreens.COUNTER_STACK,
      { screen: CounterStackScreens.NEW_COUNTER_SCREEN }
    )
  }

  const removePreviousCount = (prevCounterId: string) => {
    if (!oldCounter) return

    const newStoredCount = oldCounter.filter(({ id }) => id !== prevCounterId)
    setOldCounter(newStoredCount)
    updatePreviousCounterStoredData(newStoredCount)
  }

  const updatePreviousCounterStoredData = async (updatedStoredCounter: IPreserveCount[]) => {
    try {
      await setStoreData(PREVIOUS_STORED_ITEMS, JSON.stringify(updatedStoredCounter))
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (
      typeof oldCounter === 'undefined' ||
      !oldCounter.some(prevCount => JSON.stringify(prevCount) === JSON.stringify(lastCounter))
    ) {
      initPreviousStoredItems()
    }
  }, [lastCounter])

  return (
    <HomeView
      navigateToToNewCounter={navigateToNewCounterFormScreen}
      oldCounter={oldCounter}
      removePreviousCount={removePreviousCount}
    />

  )
}