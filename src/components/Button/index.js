import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const Button = ({ text, IconBefore, IconAfter, style, disabled, ...props }) => {
  const touchableStyle = {
    ...styles.button,
    ...style,
    ...(disabled ? styles.touchDisabled : {}),
  };
  const textStyle = {
    ...styles.buttonText,
    ...(disabled ? styles.textDisabled : {}),
  };

  return (
    <TouchableOpacity style={touchableStyle} {...props}>
      {IconBefore && <IconBefore color={disabled ? '#969A9E' : '#342F2E'} />}
      <Text style={textStyle}>{text}</Text>
      {IconAfter && <IconAfter color={disabled ? '#969A9E' : '#342F2E'} />}
    </TouchableOpacity>
  );
};

export default Button;
