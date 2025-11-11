import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { use, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './Stysheet'


export default function List({ route }: { route: any }) {
    const [Add, Setadded] = useState('')
    const [Add2, Setadded2] = useState('')
    const Starter2 = route.params.StarterSend
    const Starter2Price = route.params.StarterPriceSend
    const Drinks2 = route.params.DrinksSend
    const Drinks2Price = route.params.DrinksPriceSend
    const Meals2 = route.params.MealsSend
    const Meals2Price = route.params.MealsPriceSend
    const Deserts2 = route.params.DesertsSend
    const Deserts2Price = route.params.DesertsPriceSend
    const [selectedValue, SetselectedValue] = useState('')
    const AddStarter2 = () => {
        if (Add === `` || Add2 === ``) {
            alert("Please Make sure All fields are complete :(")
        }
        else {
            alert("Added Successfully")
            Starter2.push(Add)
            Starter2Price.push(Add2)
        }
    }
    const AddDrinks2 = () => {
        if (Add === `` || Add2 === ``) {
            alert("Please Make sure All fields are complete :(")
        }
        else {
            alert("Added Successfully")
            Drinks2.push(Add)
            Drinks2Price(Add2)

        }
    }

    const AddMeals2 = () => {
        if (Add === `` || Add2 === ``) {
            alert("Please Make sure All fields are complete :(")
        }
        else {
            alert("Added Successfully")
            Meals2.push(Add)
            Meals2Price.push(Add2)

        }
    }
    const AddDeserts2 = () => {
        if (Add === `` || Add2 === ``) {
            alert("Please Make sure All fields are complete :(")
        }
        else {
            alert("Added Successfully")
            Deserts2.push(Add)
            Deserts2Price.push(Add2)

        }
    }
    return (
        <LinearGradient colors={['#12D936', '#CBFF83']}
            style={{ flex: 1 }}
        >
            <View>
                <Text style={{ fontSize: 20, borderColor: 'black', borderWidth: 1, borderRadius: 5, marginTop: 100, alignContent: 'center', justifyContent: 'center', textAlign: 'center' }}>List</Text>
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
                {selectedValue === `Starter` && <Text>{Starter2.join(",")}</Text>}
                {selectedValue === `Starter` && <Text style={styles.descriptionText}>Prices(Rand)</Text>}
                {selectedValue === `Starter` && <Text style={styles.descriptionText}>{Starter2Price.join(",")}</Text>}
                {selectedValue === `Starter` && <Text style={styles.textpop}> Average Price: {(
                    Starter2Price.map(Number).reduce((a: number, b: number) => a + b, 0) / Starter2Price.length
                ).toFixed(2)}{' '}
                    R</Text>}
                {selectedValue === `Starter` && <TextInput placeholder='Enter The Starter'
                    onChangeText={(text) => Setadded(text)}
                    value={Add}
                    style={styles.inputholders}
                ></TextInput>}
                {selectedValue === `Starter` && <TextInput placeholder='Enter The Price'
                    onChangeText={(text) => Setadded2(text)}
                    value={Add2}
                    keyboardType='numeric'
                    style={styles.inputholders}
                ></TextInput>}
                {selectedValue === `Starter` && <Text style={styles.textpop}> Number of Items: {Starter2.length}</Text>}
                {selectedValue === `Starter` && <Button title='Add' color="blue" onPress={AddStarter2} />}
                {selectedValue === `Starter` && <Button title='Remove' color="red" onPress={() => { Starter2.pop(), Starter2Price.pop(); alert("Removed Successfully") }} />}
                {selectedValue === `Drinks` && <Text>{Drinks2.join(", ")}</Text>}
                {selectedValue === `Drinks` && <Text style={styles.descriptionText}>Prices(Rand)</Text>}
                {selectedValue === `Drinks` && <Text style={styles.descriptionText}>{Drinks2Price.join(", ")}</Text>}
                {selectedValue === `Drinks` && <Text style={styles.textpop}> Average Price: {(
                    Drinks2Price.map(Number).reduce((a: number, b: number) => a + b, 0) / Drinks2Price.length
                ).toFixed(2)}{' '}
                    R</Text>}

                {selectedValue === `Drinks` && <TextInput placeholder='Enter The Drink'
                    onChangeText={(text) => Setadded(text)}
                    value={Add}
                    style={styles.inputholders}
                ></TextInput>}
                {selectedValue === `Drinks` && <TextInput placeholder='Enter The Price'
                    onChangeText={(text) => Setadded2(text)}
                    value={Add2}
                    keyboardType='numeric'
                    style={styles.inputholders}
                ></TextInput>}
                {selectedValue === `Drinks` && <Text style={styles.textpop}> Number of Items: {Drinks2.length}</Text>}
                {selectedValue === `Drinks` && <Button title='Add' color="blue" onPress={AddDrinks2} />}
                {selectedValue === `Drinks` && <Button title='Remove' color="red" onPress={() => { Drinks2.pop(), Drinks2Price.pop(); alert("Removed Successfully") }} />}
                {selectedValue === `Meals` && <Text>{Meals2.join(", ")}</Text>}
                {selectedValue === `Meals` && <Text style={styles.descriptionText}>Prices(Rand)</Text>}
                {selectedValue === `Meals` && <Text style={styles.descriptionText}>{Meals2Price.join(", ")}</Text>}
                {selectedValue === `Meals` && <Text style={styles.textpop}> Average Price: {(
                    Meals2Price.map(Number).reduce((a: number, b: number) => a + b, 0) / Meals2Price.length
                ).toFixed(2)}{' '}
                    R</Text>}
                {selectedValue === `Meals` && <TextInput placeholder='Enter The Meal'
                    onChangeText={(text) => Setadded(text)}
                    value={Add}
                    style={styles.inputholders}
                ></TextInput>}
                {selectedValue === `Meals` && <TextInput placeholder='Enter The Price'
                    onChangeText={(text) => Setadded2(text)}
                    value={Add2}
                    keyboardType='numeric'
                    style={styles.inputholders}
                ></TextInput>}
                {selectedValue === `Meals` && <Text style={styles.textpop}> Number of Items: {Meals2.length}</Text>}
                {selectedValue === `Meals` && <Button title='Add' color="blue" onPress={AddMeals2} />}
                {selectedValue === `Meals` && <Button title='Remove' color="red" onPress={() => { Meals2.pop(), Meals2Price.pop(); alert("Removed Successfully") }} />}
                {selectedValue === `Deserts` && <Text>{Deserts2.join(", ")}</Text>}
                {selectedValue === `Deserts` && <Text style={styles.descriptionText}>Prices(Rand)</Text>}
                {selectedValue === `Deserts` && <Text style={styles.descriptionText}>{Deserts2Price.join(", ")}</Text>}
                {selectedValue === `Deserts` && <Text style={styles.textpop}> Average Price: {(
                    Deserts2Price.map(Number).reduce((a: number, b: number) => a + b, 0) / Deserts2Price.length
                ).toFixed(2)}{' '}
                    R</Text>}
                {selectedValue === `Deserts` && <TextInput placeholder='Enter The Desert'
                    onChangeText={(text) => Setadded(text)}
                    value={Add}
                    style={styles.inputholders}
                ></TextInput>}

                {selectedValue === `Deserts` && <TextInput placeholder='Enter The Price'
                    onChangeText={(text) => Setadded2(text)}
                    value={Add2}
                    keyboardType='numeric'
                    style={styles.inputholders}
                ></TextInput>}
                {selectedValue === `Deserts` && <Text style={styles.textpop}> Number of Items: {Deserts2.length}</Text>}
                {selectedValue === `Deserts` && <Button title='Add' color="blue" onPress={AddDeserts2} />}
                {selectedValue === `Deserts` && <Button title='Remove' color="red" onPress={() => {
                    Deserts2.pop() && Deserts2Price.pop(); alert("Removed Successfully")
                }} />}

            </View>
        </LinearGradient>


    )
}
