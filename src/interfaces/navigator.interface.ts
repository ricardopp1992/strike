import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { CountItem } from '@/interfaces'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { NavigatorScreenParams, ParamListBase } from '@react-navigation/native'

export type DrawerMenuRoot = {
  homeScreen: { items: CountItem[] } | undefined,
  historyScreen: undefined,
  CounterStackNavigator: NavigatorScreenParams<ParamListBase>,
}

export enum DrawerMenuScreens {
  HOME_SCREEN = 'homeScreen',
  HISTORY_SCREEN = 'historyScreen',
  COUNTER_STACK = 'CounterStackNavigator',
}

export type CounterStackRoot = {
  newCounterScreen: undefined,
  counterScreen: CountItem[]
}

export enum CounterStackScreens {
  NEW_COUNTER_SCREEN = 'newCounterScreen',
  COUNTER_SCREEN = 'counterScreen'
}

export interface CounterScreenProps extends NativeStackScreenProps<CounterStackRoot, CounterStackScreens.COUNTER_SCREEN> {
}

export interface NewCounterScreenProps extends NativeStackScreenProps<CounterStackRoot, CounterStackScreens.NEW_COUNTER_SCREEN> {
}

export interface HomeScreenProps extends DrawerScreenProps<DrawerMenuRoot, DrawerMenuScreens.HOME_SCREEN> {
}