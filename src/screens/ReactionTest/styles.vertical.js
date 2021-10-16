import { StyleSheet } from "react-native";
import { moderateScale } from 'react-native-size-matters';

export default StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  square: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: moderateScale(5),
    width: moderateScale(60),
    height: moderateScale(60),
    borderRadius: moderateScale(15)
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
    fontSize: moderateScale(18)
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
    backgroundColor: 'rgba(44,244,49,0.2)'
  }
});