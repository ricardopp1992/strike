import React, { FC } from 'react'
import { View } from 'react-native'

import { PrimaryButton } from '@/components/Buttons'
import HeadingText from '@/components/Texts/HeadingText'
import { SimpleText } from '@/components/Texts'
import { HomeViewProps } from '@/interfaces'
import OptionsList from '../OptionsList'

import styles from './styles'
import { ScrollView } from 'react-native-gesture-handler'

const HomeView: FC<HomeViewProps> = ({ navigateToToNewCounter, oldCounter, removePreviousCount }) => {
  return (
    <View style={styles.container}>
      <HeadingText style={styles.welcomeText}>Welcome to Easy Counter App</HeadingText>
      <View>
        <PrimaryButton onPress={navigateToToNewCounter}>
          Start New Count
        </PrimaryButton>
      </View>
      {
        oldCounter && oldCounter?.length > 0 && (
          <>
            <SimpleText style={styles.prevCountText}>Prev count:</SimpleText>
            <ScrollView style={{ height: '40%' }}>
            {
              oldCounter?.map((oldCount, i) =>
                <OptionsList
                  key={`${oldCount.id}-${i}`}
                  preservedId={oldCount.id}
                  oldCounter={oldCount.items}
                  removePreviousCount={removePreviousCount}
                />)
            }
            </ScrollView>
          </>
        )
      }
    </View>
  )
}

export default HomeView