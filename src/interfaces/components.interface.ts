import { ViewProps } from 'react-native'
import BottomSheetBehavior from 'reanimated-bottom-sheet'

export interface PrimaryButtonProps extends ViewProps {
  onPress?: () => void
}

export interface BottomSheetProps {
  sheetRef: React.LegacyRef<BottomSheetBehavior>
}