import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import IconAD from 'react-native-vector-icons/AntDesign';

import styles from './styles';

const ProgressBar = ({ current = 0, total = 0, handleNextQuestion }) => {
  const percent = (100 * current) / total;
  return (
    <View style={styles.container}>
      <View style={styles.counterContainer}>
        <View style={styles.goBackIcon}>
          {current > 1 && (
            <TouchableOpacity onPress={() => handleNextQuestion('previous')}>
              <IconAD
                size={20}
                name="arrowleft"
                color="#B0B5B9"
                style={styles.textInputIcon}
              />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.counter}>
          <Text style={styles.currentNumber}>{`${String(current).padStart(
            2,
            '0',
          )}`}</Text>
          <Text style={styles.totalNumber}>{` / ${String(total).padStart(
            2,
            '0',
          )}`}</Text>
        </View>
      </View>
      <View style={styles.barContainer}>
        <View style={{ ...styles.barContent, width: `${percent}%` }} />
      </View>
    </View>
  );
};

export default ProgressBar;
