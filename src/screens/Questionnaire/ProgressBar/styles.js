

import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    marginTop: 25,
  },
  counterContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 15
  },
  goBackIcon: {
    flexGrow: 1,
    width: 20,
  },
  counter: {
    flexDirection: 'row',
    flexGrow: 1,
    alignItems: 'baseline',
    marginLeft: -20
  },
  currentNumber: {
    fontSize: 25,
    color: '#342F2E',
    letterSpacing: 0.88,
    fontFamily: 'Montserrat-Medium',
  },
  totalNumber: {
    fontSize: 18,
    color: '#969A9E',
    letterSpacing: 0.63,
    paddingBottom: 1,
    fontFamily: 'OpenSans-Regular',
  },
  barContainer: {
    backgroundColor: '#F1F9FF',
    height: 10,
    borderRadius: 100,
    overflow: 'hidden'
  },
  barContent: {
    backgroundColor: '#FCBE1B',
    height: '100%',
    borderRadius: 100,
  },
})