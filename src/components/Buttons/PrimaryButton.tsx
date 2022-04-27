import React, { FC } from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { PrimaryButtonProps } from '@/interfaces/components.interface'

export const PrimaryButton: FC<PrimaryButtonProps> = ({ children, ...options }) => {
  return (
    <TouchableOpacity {...options}>
      <Text>{children}</Text>
    </TouchableOpacity>
  )
}