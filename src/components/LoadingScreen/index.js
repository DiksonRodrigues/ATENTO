import React from 'react';
import { View, StatusBar, ActivityIndicator } from 'react-native';
import styles from './styles';

const LoadingScreen = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View />
      <View style={styles.spinnerContainer}>
        <ActivityIndicator size={70} color="#FCBE1B" />
      </View>
    </>
  );
};

export default LoadingScreen;
