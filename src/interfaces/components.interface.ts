import {TextProps, TouchableWithoutFeedbackProps, ViewProps } from 'react-native'
import { StyleProps } from 'react-native-reanimated'
import BottomSheetBehavior from 'reanimated-bottom-sheet'

import { ICounterItemsValues } from '@/interfaces'

export interface ButtonProps extends ViewProps, TouchableWithoutFeedbackProps {
  textStyle?: StyleProps,
  onPress?: () => void
}

export interface BottomSheetProps {
  sheetRef: React.LegacyRef<BottomSheetBehavior>
}

export interface IConformationAlertProps {
  customStyles?: StyleProps
  headerText: string
  alertMessage: string
  confirmText?: string
  cancelText?: string
  visible: boolean
  onConfirm: () => void
  onDismiss?: () => void
}

export interface HomeViewProps {
  navigateToToNewCounter: () => void
  oldCounter: ICounterItemsValues[]
}

export interface OptionListProps {
  oldCounter: ICounterItemsValues[]
}

export interface HeadingProps extends TextProps {

}