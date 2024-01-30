import { Button, Modal, StyleSheet, TextInput, View, Image } from 'react-native'
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
        <Image source= {{uri:"https://cdn-icons-png.flaticon.com/512/2617/2617812.png"}} 
        style = {styles.image}
        />
        <TextInput 
        placeholder="type something"
        style={styles.input} 
        value={text} 
        onChangeText={changeTextHandler}
      />
      <View style={styles.buttonsContainer}>
      <Button title="Cancel" onPress={cancelHandler} />
      <Button title="Confirm" onPress={confirmHandler} />
      </View>
    </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    buttonsContainer:{
        flexDirection:"row"
      },
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
      },
    image:{
        width: 100,
        height:100,
    }
})