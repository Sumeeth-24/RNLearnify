import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';

const Button = ({text, onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.whiteContainer}>
        <View style={styles.inputView}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  whiteContainer: {
    flexDirection: 'row',
    width: 350,
    height: 50,
    alignItems: 'center',
    marginTop: 30,
    borderRadius: 50,
    backgroundColor: '#F83921',
    paddingHorizontal: 10,
  },
  inputView: {
    flex: 6,
  },
  text: {
    fontSize: 27,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
export default Button;
