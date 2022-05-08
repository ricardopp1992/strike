import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type DrawerMenuRoot = {
  homeScreen: undefined,
  historyScreen: undefined,
  newCounterScreen: undefined,
}

export enum DrawerMenuScreens {
  HOME_SCREEN = 'homeScreen',
  HISTORY_SCREEN = 'historyScreen',
  NEW_COUNTER_SCREEN = 'newCounterScreen'
}

export interface NewCounterScreenProps extends NativeStackNavigationProp<DrawerMenuRoot, DrawerMenuScreens.NEW_COUNTER_SCREEN> {
}