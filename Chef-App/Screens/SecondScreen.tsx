import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { use, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './Stysheet'







export default function Menu() {
    const [selectedValue, SetselectedValue] = useState('')
    return (
        <LinearGradient colors={['#12D936', '#CBFF83']}
            style={{ flex: 1 }}
        >
            <View style={styles.body}>
                <Text>hi</Text>

            </View>
        </LinearGradient>

    )
}











