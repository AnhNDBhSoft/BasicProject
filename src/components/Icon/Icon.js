import React from 'react';
import {View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Icon.Styles';

function Icon({
  name,
  backgroundColor = 'black',
  colorIcon = 'white',
  size = 20,
}) {
  return (
    <View
      style={styles.icon}>
      <MaterialCommunityIcons
        name={name}
        color={colorIcon}
        size={size * 0.5}></MaterialCommunityIcons>
    </View>
  );
}

export default Icon;
