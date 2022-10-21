import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { CompositeNavigationProp, CompositeScreenProps, NavigatorScreenParams, ParamListBase } from '@react-navigation/native'

import { ICounterItemsValues } from '@/interfaces'

export type DrawerMenuRoot = {
  homeScreen: { items: ICounterItemsValues[] } | undefined,
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
  counterScreen: NavigatorScreenParams<ParamListBase>
}

export enum CounterStackScreens {
  NEW_COUNTER_SCREEN = 'newCounterScreen',
  COUNTER_SCREEN = 'counterScreen'
}

export interface CounterScreenProps extends NativeStackScreenProps<CounterStackRoot, CounterStackScreens.COUNTER_SCREEN> {
}

export interface NewCounterScreenProps extends NativeStackScreenProps<CounterStackRoot, CounterStackScreens.NEW_COUNTER_SCREEN> {
}

export type HomeScreenProps = CompositeScreenProps<
  DrawerScreenProps<DrawerMenuRoot, DrawerMenuScreens.HOME_SCREEN>,
  NativeStackScreenProps<DrawerMenuRoot, DrawerMenuScreens.COUNTER_STACK>
>

export type HomeNavigation = CompositeNavigationProp<
      NativeStackNavigationProp<DrawerMenuRoot, "homeScreen">,
      NativeStackNavigationProp<DrawerMenuRoot, "CounterStackNavigator">
    >

declare global {
  namespace ReactNavigation {
    interface RootParamList extends DrawerMenuRoot { }
  }
}