import React from 'react';
import { View, FlatList } from 'react-native';

import styles from './styles';

const CounterBar = ({ current, total }) => {
  return (
    <View style={styles.counterBarContainer}>
      <FlatList
        data={[...Array(total)]}
        horizontal
        keyExtractor={(_, i) => `counter${i}`}
        renderItem={({ _, index }) => (
          <View
            style={index === current - 1 ? styles.itemChecked : styles.item}
          />
        )}
      />
    </View>
  );
};

export default CounterBar;
