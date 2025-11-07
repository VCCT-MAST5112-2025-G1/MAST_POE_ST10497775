import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './Stysheet';

export default function Welcome({ navigation }: { navigation: any }) {
  const [Name, setName] = useState('')
  const handle = () => {
    if (Name.length === 0) {
      alert("Please enter your name")
    } else {
      alert("Welcome Back Chef " + Name)
      navigation.navigate("Menu", { Namesend: Name })
    }
  }
  return (
    <LinearGradient colors={['#12D936', '#CBFF83']}
      style={{ flex: 1, }}
    >
      <View style={styles.body}>
        <Text style={styles.text}>Welcome Back Chef</Text>
        <TextInput
          placeholder="Please state your name, Chef"
          onChangeText={(text) => setName(text)}
          value={Name}
          style={styles.border}
          autoCapitalize="characters"
        />

        <Text style={{ fontSize: 20 }}>Ready To Change The Menu?</Text>
        <Button title='Enter' color="#000000ff" onPress={handle} />


      </View>
    </LinearGradient>

  )
}






