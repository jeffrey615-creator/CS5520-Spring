import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Header(prop) {
  return (
    <View>
      <Text> Welcome to {prop.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})