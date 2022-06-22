import React from 'react';

import {Text, TouchableOpacity, View} from 'react-native';
import {Avatar, NativeBaseProvider} from 'native-base';

import {useDispatch, useSelector} from 'react-redux';
import {goToAuthScreen} from '../routes/routes';
import {setUserData} from '../store/actionCreators';

import {styles} from '../styles/styles-component';

// Компонент всплывающего экрана сайд-меню
export function SideMenu() {
  const dispatch = useDispatch();

  const user = useSelector(state => state.user);

  const onLogOutClick = () => {
    dispatch(setUserData({user: null, authData: null}));
    goToAuthScreen();
  };

  return (
    <NativeBaseProvider>
      {user && <View style={styles.sideMenu}>
        <View style={styles.sideMenuUserSection}>
          <Avatar source={{uri: user.avatar_url}} size='lg' />
          <Text style={styles.sideMenuText}>{user.username}</Text>
        </View>

        <TouchableOpacity style={styles.sideMenuButton} onPress={onLogOutClick}>
          <Text style={styles.sideMenuText}>Выйти</Text>
        </TouchableOpacity>
      </View>}
    </NativeBaseProvider>
  );
}
