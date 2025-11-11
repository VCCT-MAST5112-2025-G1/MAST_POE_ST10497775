import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { use, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './Stysheet'


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
                <Text style={styles.toptext}>Restaurant</Text>
                <Text style={styles.bottomtext}>Current Menu</Text>
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
                {selectedValue === `Starter` && <Text style={styles.descriptionText}>{Starter.join(", ")}</Text>}
                {selectedValue === `Starter` && <Text style={styles.descriptionText}>Prices(Rand)</Text>}
                {selectedValue === `Starter` && <Text style={styles.descriptionText}>{StarterPrice.join(", ")}</Text>}
                {selectedValue === `Starter` && <Text style={styles.textpop}>Number of Items: {Starter.length}</Text>}
                {selectedValue === `Drinks` && <Text style={styles.descriptionText}>{Drinks.join(", ")}</Text>}
                {selectedValue === `Drinks` && <Text style={styles.descriptionText}>Prices(Rand)</Text>}
                {selectedValue === `Drinks` && <Text style={styles.descriptionText}>{DrinksPrice.join(", ")}</Text>}
                {selectedValue === `Drinks` && <Text style={styles.textpop}>Number of Items: {Drinks.length}</Text>}
                {selectedValue === `Meals` && <Text style={styles.descriptionText}>{Meals.join(", ")}</Text>}
                {selectedValue === `Meals` && <Text style={styles.descriptionText}>Prices(Rand)</Text>}
                {selectedValue === `Meals` && <Text style={styles.descriptionText}>{MealsPrice.join(", ")}</Text>}
                {selectedValue === `Meals` && <Text style={styles.textpop}>Number of Items: {Meals.length}</Text>}
                {selectedValue === `Deserts` && <Text style={styles.descriptionText}>{Deserts.join(", ")}</Text>}
                {selectedValue === `Deserts` && <Text style={styles.descriptionText}>Prices(Rand)</Text>}
                {selectedValue === `Deserts` && <Text style={styles.descriptionText}>{DesertsPrice.join(", ")}</Text>}
                {selectedValue === `Deserts` && <Text style={styles.textpop}>Number of Items: {Deserts.length}</Text>}
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



















