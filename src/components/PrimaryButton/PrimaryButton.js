import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './PrimaryButton.style';

const PrimaryButton = props => {
  const {title, onPress} = props;

  return (
    <TouchableOpacity onPress={() => onPress()} style={styles.primaryButton}>
      <Text style={styles.primaryButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
