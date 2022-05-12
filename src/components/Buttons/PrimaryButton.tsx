import React, { FC } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import { PrimaryButtonProps } from '@/interfaces/components.interface'
import { normalTheme } from '@/theme'

export const PrimaryButton: FC<PrimaryButtonProps> = ({ children, textStyle = {}, style, ...options }) => {
  return (
    <TouchableOpacity style={[primaryButtonStyles.button, style]} {...options}>
      <Text style={[primaryButtonStyles.buttonText, textStyle]}>{children}</Text>
    </TouchableOpacity>
  )
}

const primaryButtonStyles = StyleSheet.create({
  buttonText: {
    fontSize: 20,
    fontWeight: '500',
  },
  button: {
    borderWidth: normalTheme.borderWidth,
    borderColor: normalTheme.borderColor,
    borderRadius: normalTheme.borderRadius,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: '10%',
  },
})