import React, { FC } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

import { ButtonProps } from '@/interfaces/components.interface'
import { normalTheme } from '@/theme'
import { SimpleText } from '../Texts'

export const SecondaryButton: FC<ButtonProps> = ({ children, textStyle = {}, style, ...options }) => {
  return (
    <TouchableOpacity
      style={[
        primaryButtonStyles.button,
        style,
        options.disabled && primaryButtonStyles.disableButton
      ]}
      {...options}
    >
      <SimpleText
        style={[
          primaryButtonStyles.buttonText,
          textStyle,
          options.disabled && primaryButtonStyles.disableText
        ]}
      >{children}</SimpleText>
    </TouchableOpacity>
  )
}

const primaryButtonStyles = StyleSheet.create({
  buttonText: {
    fontSize: 20,
    fontWeight: '500',
  },
  disableButton: {
    borderColor: normalTheme.disableColor,
  },
  disableText: {
    color: normalTheme.disableColor
  },
  button: {
    borderWidth: normalTheme.borderWidth,
    borderColor: normalTheme.borderColor,
    borderRadius: normalTheme.borderRadius,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
})