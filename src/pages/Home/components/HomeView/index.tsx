import React, { FC } from 'react'
import { View } from 'react-native'

import { PrimaryButton } from '@/components/Buttons'
import { HomeViewProps } from '@/interfaces'
import OptionsList from '../OptionsList'

import styles from './styles'
import HeadingText from '@/components/Texts/HeadingText'
import { SimpleText } from '@/components/Texts'

const HomeView: FC<HomeViewProps> = ({ navigatoToNewCounter, oldCounter }) => {
  return (
    <View style={styles.container}>
      <HeadingText style={styles.welcomeText}>Welcome to Strikpe app</HeadingText>
      <View>
        <PrimaryButton onPress={navigatoToNewCounter}>
          Start New Count
        </PrimaryButton>
      </View>
      {
        oldCounter.length > 0 && (
          <>
            <SimpleText style={styles.prevCountText}>Prev count:</SimpleText>
            <OptionsList oldCounter={oldCounter} />
          </>
        )
      }
    </View>
  )
}

export default HomeView