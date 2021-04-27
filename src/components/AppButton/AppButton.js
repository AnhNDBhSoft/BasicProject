import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import styles from './AppButton.Style'

function AppButton({title, onPress, color = 'black', style}) {
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: color, style}]}
      onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

export default AppButton;
