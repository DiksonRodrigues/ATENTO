import { StyleSheet } from "react-native";
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  title: {
    fontFamily: "OpenSans-Regular",
    fontSize: RFPercentage(3.5),
    // lineHeight: 30,
    color: '#211E1E',
    letterSpacing: 0.81,
    textAlign: 'center'
  },
  subtitle: {
    fontFamily: "OpenSans-Bold",
    fontSize: RFPercentage(5),
    color: '#03AD3D',
    letterSpacing: 1.05,
    textAlign: 'center'
  },
  body: {
    fontFamily: "OpenSans-Regular",
    fontSize: 20,
    // lineHeight: 30,
    color: '#211E1E',
    letterSpacing: 0.81,
    textAlign: 'center',
    marginBottom: 15
  },
  bodyBold: {
    fontFamily: "OpenSans-SemiBold",
    fontSize: 20,
    lineHeight: 30,
    color: '#211E1E',
    letterSpacing: 0.7,
    textAlign: 'center'
  },
  questionnaireStatusSVG: {
    alignSelf: 'center',
    marginVertical: 20
  }
});