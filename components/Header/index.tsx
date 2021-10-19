import React from 'react';
import {Icon} from '@ui-kitten/components';
import styles from './styles';
import {View, Text} from 'react-native';


// eslint-disable-next-line require-jsdoc
function HeaderSection():JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>Xae</Text>
      </View>
      <View>
        <Icon style={{height: 40, width: 40}} name="menu-2-outline" fill="#fff" />
      </View>
    </View>
  );
}

export default HeaderSection;
