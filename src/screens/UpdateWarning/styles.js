import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    paddingVertical: '10%',
    paddingHorizontal: '15%',
    justifyContent: 'space-around',
  },
  content: {
    flexGrow: 1,
    backgroundColor: 'purple',
    justifyContent: 'space-between',
  },
  pageTitle: {
    fontSize: 26,
    color: '#342F2E',
    fontFamily: 'OpenSans-Bold',
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    color: '#707070',
    fontFamily: 'OpenSans-Regular',
    textAlign: 'center',
  },
  button: {},
});
