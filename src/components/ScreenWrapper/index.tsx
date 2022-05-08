import React, { FC } from 'react'
import { View } from 'react-native'

import ToastNotifications from '@/components/ToastNotifications'

const ScreenWrapper: FC = ({ children }) => {
  return (
    <View style={{ width: '100%', height: '100%' }}>
      { children }
      <ToastNotifications />
    </View>
  )
}

export default ScreenWrapper