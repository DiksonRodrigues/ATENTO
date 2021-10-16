import { StyleSheet } from "react-native";
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  Text: {
    fontFamily: "OpenSans-Regular",
    fontSize: RFPercentage(2.2),
    lineHeight: 30,
    color: '#211E1E',
    letterSpacing: 0.81,
    textAlign: 'center'
  },
});