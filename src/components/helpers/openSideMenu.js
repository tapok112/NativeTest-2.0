import {useNavigationButtonPress} from 'react-native-navigation-hooks';
import {Navigation} from 'react-native-navigation';

// Слушатель событий, отрабатывает при нажатии на иконку сайд-меню
export const openSideMenu = (componentId) => {
  useNavigationButtonPress(
    e => {
      if (e.buttonId === 'SIDE_MENU_BUTTON') {
        Navigation.mergeOptions(e.componentId, {
          sideMenu: {
            right: {
              visible: true,
            },
          },
        });
      }
    },
    {componentId},
  );
};
