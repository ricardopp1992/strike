import React from 'react'
import type { FC } from 'react'
import { StyleSheet, Text, TextProps } from 'react-native'
import { normalTheme } from '@/theme'

export interface SimpleTextProps extends TextProps {}

export const SimpleText: FC<SimpleTextProps> = ({ children, style, ...props }) => {
  return (
    <Text style={[styles.textBase, style]} {...props}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  textBase: {
    color: normalTheme.primaryColor
  }
})
