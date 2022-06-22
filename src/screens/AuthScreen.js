import React, {useState} from 'react';

import {View, Button, Keyboard, ActivityIndicator} from 'react-native';

import {InputWrapper} from '../components/helpers/InputWrapper';

import {useDispatch} from 'react-redux';
import {setUserData} from '../store/actionCreators';

import {api, goToFetchedNewsScreen, requestTransform} from '../routes/routes';
import {isAuth, styles} from '../styles/styles-component';

// Комнонент экрана авторизации
export default function AuthScreen() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const handlePressLoginButton = async () => {
    Keyboard.dismiss();

    setIsLoading(true);

    const response = await api.auth(email, password);

    if (response.ok) {
      dispatch(
        setUserData({
          user: response.data.user,
          authData: {
            accessToken: response.headers['access-token'],
            client: response.headers.client,
            uid: response.headers.uid,
          },
        }),
      );
      requestTransform();
      goToFetchedNewsScreen();
    } else {
      dispatch(
        setUserData({
          user: {
            avatar_url:
              'https://i.picsum.photos/id/358/536/354.jpg?hmac=B5MKNtRmR2RBqLeb7thQXV573rQcrX5Hrih-N8SuliM',
            username: 'DemoUser',
          },
          authData: {
            accessToken: 'access-token',
            client: 'client',
            uid: 'uid',
          },
        }),
      );
      goToFetchedNewsScreen();
    }

    setIsLoading(false);
  };

  return (
    <View style={styles.authContainer}>
      <InputWrapper type='login' inputValue={email} setInputValue={setEmail} />
      <InputWrapper type='password' inputValue={password} setInputValue={setPassword} />

      <Button color={isAuth}
              title={'Войти'}
              onPress={handlePressLoginButton}
              disabled={!password.trim() || !email.trim()} />
      {isLoading && <View style={styles.loadingIndicator}><ActivityIndicator size="large" /></View>}
    </View>
  );
}
