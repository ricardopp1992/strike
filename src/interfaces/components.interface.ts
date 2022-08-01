import {ModalProps, TouchableWithoutFeedbackProps, ViewProps } from 'react-native'
import { StyleProps } from 'react-native-reanimated'
import BottomSheetBehavior from 'reanimated-bottom-sheet'

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