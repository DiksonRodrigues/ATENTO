import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#211E1E',
    alignItems: 'center',
  },
  logoContainer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  contentBox: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 120,
  },
  titlePrimary: {
    fontSize: 20,
    marginTop: 18,
    marginBottom: 16,
    color: '#211E1E',
    letterSpacing: 0.7,
    textAlign: 'center',
    fontFamily: 'OpenSans-Bold',
  },
  titleSecondary: {
    fontSize: 16,
    color: '#211E1E',
    fontFamily: 'OpenSans-SemiBold',
    textAlign: 'center',
    marginBottom: 26,
  },
  textInputContainer: {
    borderBottomWidth: 2,
    borderBottomColor: '#342F2E',
    flexDirection: 'row',
    paddingBottom: 4,
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    fontFamily: 'OpenSans-Regular',
    textAlign: 'right',
    fontSize: 20,
    color: '#342F2E',
    padding: 0,
    margin: 0,
  },
  button: {
    marginTop: 35,
  },
});
