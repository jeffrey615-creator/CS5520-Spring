import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './components/Header';
import { useState } from 'react';
import Input from './components/Input';

export default function App() {
  const appName = "My awesome app";
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header name={appName} version ={2}/>
      <Input />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
