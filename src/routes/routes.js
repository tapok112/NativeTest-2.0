import {create} from 'apisauce';
import {Navigation} from 'react-native-navigation';
import {store} from '../store/configureStore';
import {isAuth, primary} from '../styles/styles-component';

const authData = store.getState().authData;

export const mainURL = create({
  baseURL: 'http://lzone.secret-agents.ru/api/v2',
});

export const api = {
  auth(email, password) {
    return mainURL.post('/auth/sign_in', {email, password});
  },
  news: mainURL.get('/news'),
  selectedNews(newsId) {
    return mainURL.get(`/news/${newsId}`);
  },
};

// Изменение заголовков запроса если пользователь авторизован
export const requestTransform = () => {
  mainURL.addRequestTransform(request => {
    request.headers['access-token'] = authData.accessToken;
    request.headers.client = authData.client;
    request.headers.uid = authData.uid;
  });
};

// Перемещающение на экран авторизации
export const goToAuthScreen = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'AuthScreen',
              options: {
                topBar: {
                  background: {
                    color: primary,
                  },
                  title: {
                    text: 'Авторизация',
                  },
                },
              },
            },
          },
        ],
      },
    },
  });
};

// Перемещающение на главный экран
export const goToFetchedNewsScreen = () => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        right: {
          component: {
            id: 'SIDE_MENU',
            name: 'SideMenu',
          },
        },
        center: {
          stack: {
            id: 'NEWS_STACK',
            options: {
              topBar: {
                title: {
                  text: 'Новости',
                  color: 'white',
                },
                rightButtons: [
                  {
                    id: 'SIDE_MENU_BUTTON',
                    icon: require('../assets/img/menu.png'),
                  },
                ],
                background: {
                  color: isAuth,
                },
                animate: true,
              },
            },
            children: [
              {
                component: {
                  name: 'FetchedNewsScreen',
                },
              },
            ],
          },
        },
      },
    },
  });
};
