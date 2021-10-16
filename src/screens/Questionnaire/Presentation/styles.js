import { StyleSheet } from "react-native";
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  title: {
    fontFamily: "OpenSans-Bold",
    fontSize: RFPercentage(3.5),
    color: '#211E1E',
    textAlign: 'center'
  },
  subtitle: {
    fontFamily: "OpenSans-Regular",
    fontSize: 16,
    lineHeight: 30,
    color: '#211E1E',
    letterSpacing: 0.81
  },
});