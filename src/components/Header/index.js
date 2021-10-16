import React from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native'

import AtentoIconDescription from "../../../assets/svg/atentoIconDescription";

const Header = () => {
  return (
    <View style={styles.atentoIconContainer}>
      <AtentoIconDescription height={33} />
    </View>
  )
}

const styles = StyleSheet.create({
  atentoIconContainer: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Header;