import { Button, StyleSheet, TextInput, View } from 'react-native'
import React, { useState } from 'react';

export default function Input({inputHandler}) {
  const [text, setText] = useState("");
      //call back handler
  function changeTextHandler(changedText) {
    console.log("user is typing", changedText);
    setText(changedText)
  }

  function confirmHandler(){
    inputHandler(text);
  }
  return (
    <View>
        <TextInput 
        placeholder="type something"
        style={styles.input} 
        value={text} 
        onChangeText={changeTextHandler}
      />
      <Button title="Confirm" onPress={confirmHandler} />
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 2,
        borderBottomColor:"purple",
        width:"50%",
      }
})