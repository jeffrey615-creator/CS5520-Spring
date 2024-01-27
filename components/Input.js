import { Button, Modal, StyleSheet, TextInput, View } from 'react-native'
import React, { useState } from 'react';

export default function Input({inputHandler, modalVisible, dismissModal}) {
  const [text, setText] = useState("");
      //call back handler
  function changeTextHandler(changedText) {
    console.log("user is typing", changedText);
    setText(changedText)
  }

  function confirmHandler(){
    inputHandler(text);
  }

  function cancelHandler(){
    dismissModal();
  }

  return (
    <Modal visible={modalVisible}>
    <View style={styles.container}>
        <TextInput 
        placeholder="type something"
        style={styles.input} 
        value={text} 
        onChangeText={changeTextHandler}
      />
      <Button title="Cancel" onPress={cancelHandler} />
      <Button title="Confirm" onPress={confirmHandler} />
    </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 2,
        borderBottomColor:"purple",
        width:"50%",
      },
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }
})