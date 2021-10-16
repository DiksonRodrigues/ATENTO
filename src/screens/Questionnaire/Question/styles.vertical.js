import { StyleSheet } from "react-native";
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  container: {
    paddingTop: 0,
  },
  text: {
    fontSize: RFPercentage(3),
    // lineHeight: 32,
    color: '#211E1E',
    marginTop: 5,
    textAlign: "center",
    letterSpacing: 0.80,
    fontFamily: "OpenSans-Regular",
  },
  optionContainer: {
    padding: 13,
    borderWidth: 2,
    borderRadius: 15,
    alignItems: 'center',
    marginVertical: 4,
    borderColor: '#B0B5B9',
    justifyContent: 'center',
  },
  optionText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 18,
    color: '#969A9E'
  },
});