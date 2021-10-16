import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#211E1E',
  },
  iconContainer: {
    paddingHorizontal: 30,
    paddingTop: 10,
    alignItems: 'flex-end',
  },
  atentoIconContainer: {
    alignItems: 'center',
    padding: 15,
    marginBottom: 15,
  },
  optionsContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingVertical: 38,
    paddingHorizontal: moderateScale(100),
  },
  optionsTitle: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
    lineHeight: 27,
    color: '#342F2E',
  },
  optionsSubtitle: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    lineHeight: 22,
    color: '#707070',
    marginTop: 5,
    marginBottom: 15,
  },
  optionContainer: {
    marginVertical: 15,
    borderWidth: 3,
    borderColor: '#FCBE1B',
    borderRadius: 15,
    padding: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionTitle: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 22,
    lineHeight: 30,
    marginTop: -30,
    marginLeft: 25,
    margin: 0,
    padding: 0,
    color: '#342F2E',
    // width: 106,
    textAlign: 'center',
  },
});
