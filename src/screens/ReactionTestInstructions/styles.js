import { StyleSheet } from "react-native";
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  title: {
    fontFamily: "OpenSans-Bold",
    fontSize: RFPercentage(5),
    // lineHeight: 49,
    color: '#211E1E',
    textAlign: 'center'
  },
  body: {
    fontFamily: "OpenSans-Regular",
    fontSize: 20,
    lineHeight: 30,
    color: '#211E1E',
    letterSpacing: 0.81,
    textAlign: 'center'
  },
  bodyBold: {
    fontFamily: "OpenSans-SemiBold",
    fontSize: 20,
    lineHeight: 30,
    color: '#211E1E',
    letterSpacing: 0.7,
    textAlign: 'center'
  },
  reactionTestIntructionsSVG: {
    alignSelf: 'center',
    marginVertical: 30
  }
});