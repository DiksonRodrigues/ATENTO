import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    paddingTop: 0,
    paddingHorizontal: 25,
    justifyContent: "flex-start"
  },
  innerContainer: {
    // paddingHorizontal: 350,
  },
  text: {
    fontFamily: "OpenSans-Regular",
    fontSize: 23,
    lineHeight: 32,
    textAlign: "center",
    color: '#211E1E',
    letterSpacing: 0.81,
    marginVertical: 15,
    paddingHorizontal: 15,
  },
  optionContainer: {
    padding: 13,
    borderWidth: 2,
    borderRadius: 15,
    alignItems: 'center',
    marginVertical: 7,
    borderColor: '#B0B5B9',
    justifyContent: 'center',
  },
  optionText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 18,
    color: '#969A9E'
  }
});