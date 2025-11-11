import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { use, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';




export default function Menu() {
    const [selectedValue, SetselectedValue] = useState('')

    return (
        <LinearGradient colors={['#12D936', '#CBFF83']}
            style={{ flex: 1 }}
        >
            <View style={styles.body}>


            </View>
        </LinearGradient>

    )
}









const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    body: {


    },
})

