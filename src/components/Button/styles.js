import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  button: {
    width: '100%',
    padding: 14,
    borderWidth: 2,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: '#FCBE1B',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    marginRight: 15,
    color: '#342F2E',
    fontFamily: 'OpenSans-Bold',
  },
  touchDisabled: {
    borderColor: '#969A9E',
  },
  textDisabled: {
    color: '#969A9E',
  },
});
