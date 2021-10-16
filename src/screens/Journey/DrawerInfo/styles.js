import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  iconCloseContainer: {
    padding: 15,
    alignItems: 'flex-end',
  },
  innerContainer: {
    marginTop: 30,
  },
  drawerIcon: {
    margin: 15,
    alignSelf: 'center',
  },
  drawerName: {
    fontSize: 20,
    lineHeight: 27,
    color: '#342F2E',
    textAlign: 'center',
    fontFamily: 'OpenSans-Bold',
  },
  drawerLabel: {
    fontSize: 20,
    lineHeight: 27,
    color: '#342F2E',
    alignSelf: 'center',
    fontFamily: 'OpenSans-SemiBold',
  },
  drawerDescriptionContainer: {
    width: '100%',
    marginTop: 5,
    marginBottom: 15,
    borderRadius: 15,
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: '#FCBE1B1A',
  },
  drawerDescription: {
    fontSize: 18,
    lineHeight: 24,
    color: '#C89206',
    textAlign: 'center',
    fontFamily: 'OpenSans-Regular',
  },
  button: {
    width: 170,
    marginTop: 30,
    borderWidth: 2,
    borderRadius: 15,
    paddingVertical: 7,
    alignSelf: 'center',
    alignItems: 'center',
    borderColor: '#FCBE1B',
  },
  buttonText: {
    fontSize: 16,
    color: '#342F2E',
    fontFamily: 'OpenSans-SemiBold',
  },
});
