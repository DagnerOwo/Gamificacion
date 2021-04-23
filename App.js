import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as Provider } from 'react-native-paper';

export default function App() {
  return (
    <Provier>
      <View style={styles.container}>
        <StatusBar style="auto" />
      </View>
    </Provier>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
