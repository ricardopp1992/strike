import { ViewProps } from 'react-native'
import { StyleProps } from 'react-native-reanimated'
import BottomSheetBehavior from 'reanimated-bottom-sheet'

export interface PrimaryButtonProps extends ViewProps {
  textStyle?: StyleProps,
  onPress?: () => void
}

export interface BottomSheetProps {
  sheetRef: React.LegacyRef<BottomSheetBehavior>
}