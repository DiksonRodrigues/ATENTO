import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

export default StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    maxWidth: moderateScale(200),
  },
  square: {
    alignItems: 'center',
    justifyContent: 'center',
    width: moderateScale(40),
    margin: moderateScale(4),
    height: moderateScale(40),
    borderRadius: moderateScale(8),
  },
  squarevermelho: {
    backgroundColor: 'red',
  },
  squareverde: {
    backgroundColor: '#2cf431',
  },
  squareamarelo: {
    backgroundColor: 'yellow',
  },
  squareText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: moderateScale(18),
  },
  squareTextvermelho: {
    color: 'white',
  },
  squareTextverde: {
    color: '#342F2E',
  },
  squareTextamarelo: {
    color: '#342F2E',
  },
  clicked: {
    backgroundColor: 'rgba(44,244,49,0.2)',
  },
});
