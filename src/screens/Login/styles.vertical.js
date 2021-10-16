import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#211E1E',
    alignItems: 'center',
  },
  logoContainer: {
    paddingVertical: '16%',
    alignItems: 'center',
  },
  contentBox: {
    flex: 2,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: '16%',
  },
  titlePrimary: {
    fontSize: 20,
    // marginTop: 38,
    marginTop: '12%',
    // marginBottom: 26,
    marginBottom: '10%',
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
    marginBottom: '16%',
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
    fontSize: 20,
    color: '#342F2E',
    padding: 0,
    margin: 0,
    marginTop: 15
  },
  button: {
    marginVertical: '28%',
  },
  containerButton: {
    flexDirection: 'row',
    backgroundColor: '#D5D5D5',
    justifyContent: 'space-between',
    borderRadius: 8,
    width: 260
  },
  button2: {
    padding: 10,
    backgroundColor: '#fff',
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    borderTopColor: "#000",
    borderTopWidth: 1,
    borderLeftColor: "#000",
    borderLeftWidth: 1,
    borderRightColor: "#000",
    borderRightWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: 130
  },
  buttonNone: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 130
  },
  textButton2: {
    fontWeight: 'bold'
  }
});
