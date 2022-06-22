import { StyleSheet } from 'react-native';

export const primary = '#FF696B',
             authBackground = '#D0A4A4',
             isAuth = '#2E7544',
             newsBackground = '#CEDFCE',
             black = '#191919',
             white = '#E3E9E2'

export const styles = StyleSheet.create({
  authContainer: {
    paddingHorizontal: 10,
    backgroundColor: authBackground,
    alignItems: 'center',
    marginBottom: 15,
    height: '100%'
  },
  newsContainer: {
    paddingHorizontal: 10,
    backgroundColor: newsBackground,
    height: '100%'
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: 20
  },
  input: {
    width: '70%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: black,
    marginBottom: 15
  },
  newsImage: {
    height: 50,
    width: 50,
    borderRadius: 10,
    marginRight: 10
  },
  newsImageFull: {
    height: 400,
    width: '100%',
    marginBottom: 20
  },
  pagination: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  page: {
    marginRight: 15,
  },
  currentPage: {
    marginRight: 20,
    fontSize: 25,
    fontWeight: '800',
    color: 'blue',
  },
  sideMenu: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
  sideMenuUserSection: {
    height: '25%',
    justifyContent: 'center',
    backgroundColor: isAuth,
    alignItems: 'center',
    fontWeight: 'bold',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  sideMenuText: {
    color: white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  sideMenuButton: {
    backgroundColor: primary,
    alignSelf: 'center',
    width: '25%',
    marginTop: 20,
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
  },
  newsCard: {
    paddingVertical: 10,
    flexDirection: 'row',
    borderBottomColor: isAuth,
    borderBottomWidth: 1,
  }
});
