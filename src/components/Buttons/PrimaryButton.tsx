import React, { FC } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import { ButtonProps } from '@/interfaces/components.interface'
import { normalTheme } from '@/theme'

export const PrimaryButton: FC<ButtonProps> = ({ children, textStyle = {}, style, ...options }) => {
  return (
    <TouchableOpacity
      style={[
        primaryButtonStyles.button,
        style,
        options.disabled && primaryButtonStyles.disableButton
      ]}
      {...options}
    >
      <Text
        style={[
          primaryButtonStyles.buttonText,
          textStyle,
          options.disabled && primaryButtonStyles.disableText
        ]}
      >{children}</Text>
    </TouchableOpacity>
  )
}

const primaryButtonStyles = StyleSheet.create({
  buttonText: {
    fontSize: 20,
    fontWeight: '500',
    color: normalTheme.primaryColor,
  },
  disableButton: {
    borderColor: normalTheme.selectedBackground,
  },
  disableText: {
    color: normalTheme.selectedBackground
  },
  button: {
    borderWidth: normalTheme.borderWidth,
    borderColor: normalTheme.primaryColor,
    borderRadius: normalTheme.borderRadius,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
})