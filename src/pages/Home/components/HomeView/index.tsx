import React, { FC } from 'react'
import { Text, View } from 'react-native'

import { PrimaryButton } from '@/components/Buttons'
import { HomeViewProps } from '@/interfaces'
import OptionsList from '../OptionsList'

import styles from './styles'

const HomeView: FC<HomeViewProps> = ({ navigatoToNewCounter, oldCounter }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to Strikpe app</Text>
      <View>
        <PrimaryButton onPress={navigatoToNewCounter}>
          Start New Count
        </PrimaryButton>
      </View>
      {
        oldCounter.length > 0 && (
          <>
            <Text style={styles.prevCountText}>Prev count:</Text>
            <OptionsList oldCounter={oldCounter} />
          </>
        )
      }
    </View>
  )
}

export default HomeView