import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { colors } from '../utils/colors';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';
import Icon from '../components/Icon';


export const Focus = ({ addSubject }) => {
  
  const [subject, setSubject] = useState(null);
  
  
  return (
    <View style={styles.container}>
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.textInput}
        onChangeText={setSubject}
        label='What are you going to focus on?'/>
      <View style={styles.buttonPosition}>
          <Icon
            name="add"
            color="#fff"
            size={42}
            onPress={() => addSubject(subject)}
          />
      
      </View>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  textInput: {
    flex: 1,
    marginRight: 10
  },
  inputContainer: {
    padding: 25,
    justifyContent: 'top',
    flexDirection: 'row'
  },
  buttonPosition: {
    justifyContent: 'center',
    marginLeft: 1,
    marginRight: -10
  },
});