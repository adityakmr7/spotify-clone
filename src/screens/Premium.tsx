import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Premium = () => {
    return (
        <View style={styles.container}>
            <Text>Premium</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
export default Premium;

