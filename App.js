import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './components/Header';
import { useState } from 'react';
import Input from './components/Input';

export default function App() {
  const appName = "My awesome app";
  const [text, setText] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  function receiveInput(data){
    console.log("receive input", data);
    setText(data);
    setIsModalVisible(false);
  }
  
  function dismissModal(){
    setIsModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header name={appName} version ={2}/>
      <Button title="Add a goal" onPress={() => setIsModalVisible(true)} />
      <Input inputHandler={receiveInput} modalVisible = {isModalVisible} dismissModal={dismissModal}/>
      <Text>{text}</Text>
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
