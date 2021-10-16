import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: 25,
  },
  iconContainer: {
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 25,
  },
  titlePrimary: {
    fontSize: 19,
    marginTop: 15,
    color: '#211E1E',
    letterSpacing: 0.67,
    fontFamily: 'OpenSans-Regular',
    textAlign: 'center',
  },
  titleSecondary: {
    fontSize: 24,
    color: '#211E1E',
    fontFamily: 'OpenSans-Bold',
    textAlign: 'center',
  },
  button: {
    marginTop: 35,
  },
  buttonVoltar: {
    marginTop: 25,
    borderColor: '#dedede',
  },
});
