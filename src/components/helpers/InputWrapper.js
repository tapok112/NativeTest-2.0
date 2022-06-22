import React from 'react';
import {TextInput} from 'react-native';
import {styles} from '../../styles/styles-component';

export const InputWrapper = ({type, inputValue, setInputValue}) => {
  return (
    <TextInput style={styles.input}
               secureTextEntry={type === 'password'}
               autoCorrect={false}
               placeholder={type === 'login' ? 'Введите логин' : 'Введите пароль'}
               value={inputValue}
               onChangeText={text => setInputValue(text)} />
  )
}