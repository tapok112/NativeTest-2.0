import {Navigation} from 'react-native-navigation';
import {registerScreens} from './src/routes/Navigation';
import {store} from './src/store/configureStore';

Navigation.events().registerAppLaunchedListener(async () => {
  registerScreens(store);
});
