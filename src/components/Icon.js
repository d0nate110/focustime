import React from "react";
import { Platform, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { colors } from '../utils/colors';

export default ({ name, ...props }) => {
  return(
<TouchableOpacity onPress={props.onPress}>
 <Icon
    
    name={Platform.OS === "ios" ? `ios-${name}` : `md-${name}`}
    {...props}
  />
</TouchableOpacity>
 

  );

}



