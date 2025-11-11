import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { use, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Starter = await AsyncStorage.getItem('Starter');
const Startervalue1 = Starter ? await AsyncStorage.getItem(Starter) : null






export default function Menu({ navigation }: { navigation: any }) {
    const [selectedValue, SetselectedValue] = useState('')
    const Starter = ['samosa', 'spring_rolls', 'bruschetta', 'stuffed_mushrooms', 'deviled_eggs']
    const StarterPrice = ["9", "12", "15", "20", "25"]
    const Drinks = ['coke', 'orange_juice', 'water', 'lemonade']
    const DrinksPrice = ["8", "10", "5", "7"]
    const Meals = ['pizza', 'burger', 'pasta', 'salad', 'sushi']
    const MealsPrice = ["50", "40", "45", "30", "60"]
    const Deserts = ['cake', 'ice_cream', 'brownie', 'cheesecake', 'fruit_salad']
    const DesertsPrice = ["20", "15", "18", "25", "12"]
    return (
        <LinearGradient colors={['#12D936', '#CBFF83']}
            style={{ flex: 1 }}
        >
            <View style={styles.body}>
                <Text style={{ fontSize: 20, borderColor: 'black', borderWidth: 1, borderRadius: 5, marginTop: 100, alignContent: 'center', justifyContent: 'center', textAlign: 'center' }}>Restaurant</Text>
                <Text style={{ fontSize: 20, textAlign: 'center' }}>Current Menu</Text>
                <Picker
                    selectedValue={selectedValue}
                    onValueChange={(itemValue) => SetselectedValue(itemValue)}
                    mode="dropdown"
                >
                    <Picker.Item label='Select' value='' />
                    <Picker.Item label='Starter' value='Starter' />
                    <Picker.Item label='Drinks' value='Drinks' />
                    <Picker.Item label='Meals' value='Meals' />
                    <Picker.Item label='Deserts' value='Deserts' />
                </Picker>
                <Text style={{ textAlign: 'center', fontSize: 20 }}>Descriptions</Text>
                {selectedValue === `Starter` && <Text style={{ textAlign: 'center', fontSize: 16 }}>{Starter.join(", ")}</Text>}
                {selectedValue === `Starter` && <Text style={{ textAlign: 'center', fontSize: 16 }}>Prices(Rand)</Text>}
                {selectedValue === `Starter` && <Text style={{ textAlign: 'center', fontSize: 16 }}>{StarterPrice.join(", ")}</Text>}
                {selectedValue === `Starter` && <Text style={{ textAlign: 'center', fontSize: 16, borderColor: 'black', borderWidth: 1, borderRadius: 5, marginBottom: 10, marginTop: 10 }}>Number of Items: {Starter.length}</Text>}
                {selectedValue === `Drinks` && <Text style={{ textAlign: 'center', fontSize: 16 }}>{Drinks.join(", ")}</Text>}
                {selectedValue === `Drinks` && <Text style={{ textAlign: 'center', fontSize: 16 }}>Prices(Rand)</Text>}
                {selectedValue === `Drinks` && <Text style={{ textAlign: 'center', fontSize: 16 }}>{DrinksPrice.join(", ")}</Text>}
                {selectedValue === `Drinks` && <Text style={{ textAlign: 'center', fontSize: 16, borderColor: 'black', borderWidth: 1, borderRadius: 5, marginBottom: 10, marginTop: 10 }}>Number of Items: {Drinks.length}</Text>}
                {selectedValue === `Meals` && <Text style={{ textAlign: 'center', fontSize: 16 }}>{Meals.join(", ")}</Text>}
                {selectedValue === `Meals` && <Text style={{ textAlign: 'center', fontSize: 16 }}>Prices(Rand)</Text>}
                {selectedValue === `Meals` && <Text style={{ textAlign: 'center', fontSize: 16 }}>{MealsPrice.join(", ")}</Text>}
                {selectedValue === `Meals` && <Text style={{ textAlign: 'center', fontSize: 16, borderColor: 'black', borderWidth: 1, borderRadius: 5, marginBottom: 10, marginTop: 10 }}>Number of Items: {Meals.length}</Text>}
                {selectedValue === `Deserts` && <Text style={{ textAlign: 'center', fontSize: 16 }}>{Deserts.join(", ")}</Text>}
                {selectedValue === `Deserts` && <Text style={{ textAlign: 'center', fontSize: 16 }}>Prices(Rand)</Text>}
                {selectedValue === `Deserts` && <Text style={{ textAlign: 'center', fontSize: 16 }}>{DesertsPrice.join(", ")}</Text>}
                {selectedValue === `Deserts` && <Text style={{ textAlign: 'center', fontSize: 16, borderColor: 'black', borderWidth: 1, borderRadius: 5, marginBottom: 10, marginTop: 10 }}>Number of Items: {Deserts.length}</Text>}
                <Button title='Add More' color="#000000ff" onPress={() => {
                    navigation.navigate("List", {
                        StarterSend: Starter,
                        DrinksSend: Drinks,
                        MealsSend: Meals,
                        DesertsSend: Deserts,
                        StarterPriceSend: StarterPrice,
                        DrinksPriceSend: DrinksPrice,
                        MealsPriceSend: MealsPrice,
                        DesertsPriceSend: DesertsPrice
                    })
                }} />
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










