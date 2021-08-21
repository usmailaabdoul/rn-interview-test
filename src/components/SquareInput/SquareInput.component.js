import React from 'react';
import {View, Text, TextInput} from 'react-native';

import theme from '../../styles';
import styles from './SquareInput.style';

const SquareInput = props => {
  const {
    lable,
    placeholder,
    securedText,
    onChangeText,
    value,
    hasError,
    keyboardType,
    autoCapitalize,
    onFocus,
  } = props;

  return (
    <View style={styles.mainInputContainer}>
      <Text style={styles.lableText}>{lable}</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={hasError ? theme.DANGER_COLOR : 'gray'}
          value={value}
          onChangeText={onChangeText}
          style={[styles.input, hasError && {color: theme.DANGER_COLOR}]}
          secureTextEntry={securedText}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          onFocus={() => onFocus()}
        />
      </View>
    </View>
  );
};

export default SquareInput;
