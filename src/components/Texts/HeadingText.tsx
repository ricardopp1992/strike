import React from 'react'
import type { FC } from 'react'
import { StyleSheet, Text } from 'react-native'

import { HeadingProps } from '@/interfaces'
import { normalTheme } from '@/theme'

const HeadingText: FC<HeadingProps> = ({ children, style, ...props }) => {
  return (
    <Text
      style={[styles.baseText, style]}
      {...props}
    >
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  baseText: {
    color: normalTheme.primaryColor,
    fontSize: 20,
    fontWeight: '500',
  }
})

export default HeadingText