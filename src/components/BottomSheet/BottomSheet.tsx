import React, { FC } from 'react'
import BottomSheetBehavior from 'reanimated-bottom-sheet'

import { BottomSheetProps } from '@/interfaces/components.interface'

export const BottomSheet: FC<BottomSheetProps> = ({ children, sheetRef }) => {

  return <BottomSheetBehavior
    ref={sheetRef}
    initialSnap={0}
    snapPoints={['0%', '70%']}
    renderContent={() => children}
  />
}