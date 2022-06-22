import React from 'react';

import FetchedNewsScreen from '../screens/FetchedNewsScreen';
import NewsItemScreen from '../screens/NewsItemScreen';
import AuthScreen from '../screens/AuthScreen';

import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import {withNavigationProvider} from 'react-native-navigation-hooks';

import {PersistGate} from 'redux-persist/integration/react';
import {persistor} from '../store/configureStore';

import {SideMenu} from '../components/SideMenu';

// Оболочка экранов в провайдер
const WrapScreen = (Screen, store) => props =>
  (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Screen {...props} />
      </PersistGate>
    </Provider>
  );

// Функция регистрации экранов
export const registerScreens = store => {
  //=========================Auth================================//
  Navigation.registerComponent(
    'AuthScreen',
    () => withNavigationProvider(WrapScreen(AuthScreen, store)),
    () => AuthScreen,
  );
  //=========================News===============================//
  Navigation.registerComponent(
    'FetchedNewsScreen',
    () => withNavigationProvider(WrapScreen(FetchedNewsScreen, store)),
    () => FetchedNewsScreen,
  );
  //=========================NewsItem===========================//
  Navigation.registerComponent(
    'NewsItemScreen',
    () => withNavigationProvider(WrapScreen(NewsItemScreen, store)),
    () => NewsItemScreen,
  );
  //=========================SideMenu===========================//
  Navigation.registerComponent(
    'SideMenu',
    () => withNavigationProvider(WrapScreen(SideMenu, store)),
    () => SideMenu,
  );
};
