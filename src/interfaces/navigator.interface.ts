import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { CompositeNavigationProp, CompositeScreenProps, NavigatorScreenParams, ParamListBase } from '@react-navigation/native'

import { IPreserveCount } from '@/interfaces'

export type DrawerMenuRoot = {
  homeScreen: IPreserveCount | undefined,
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

export type CounterScreenProps = CompositeScreenProps<
  NativeStackScreenProps<CounterStackRoot, "counterScreen">,
  DrawerScreenProps<DrawerMenuRoot, "homeScreen">
>

export type NewCounterScreenProps = CompositeScreenProps<
  NativeStackScreenProps<CounterStackRoot, "newCounterScreen">,
  DrawerScreenProps<DrawerMenuRoot, "homeScreen">
>

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