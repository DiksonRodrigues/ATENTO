import { StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#211E1E',
  },
  iconContainer: {
    padding: 20,
    paddingBottom: 0,
    alignItems: 'flex-end',
  },
  atentoIconContainer: {
    alignItems: 'center',
    padding: 15,
  },
  optionsContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingVertical: 20,
    paddingHorizontal: 50,
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
    marginBottom: 10,
  },
  optionContainer: {
    marginVertical: 10,
    borderWidth: 3,
    borderColor: '#FCBE1B',
    borderRadius: 15,
    paddingHorizontal: 65,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionTitle: {
    fontFamily: 'OpenSans-Bold',
    fontSize: RFPercentage(3.3),
    marginLeft: 10,
    margin: 0,
    padding: 0,
    color: '#342F2E',
    textAlign: 'center',
  },
});
