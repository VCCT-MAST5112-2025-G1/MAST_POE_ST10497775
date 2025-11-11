import { View, Text, Button, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './Stysheet';

export default function Filter({ route }: { route: any }) {
    const {
        StarterSend,
        StarterPriceSend,
        DrinksSend,
        DrinksPriceSend,
        MealsSend,
        MealsPriceSend,
        DesertsSend,
        DesertsPriceSend
    } = route.params;

    const [selectedValue, setSelectedValue] = useState('');
    const [search, setSearch] = useState('');

    // Helper function: remove an item by name
    const removeItem = (categoryArray: any[], priceArray: any[], item: string) => {
        const index = categoryArray.indexOf(item);
        if (index !== -1) {
            categoryArray.splice(index, 1);
            priceArray.splice(index, 1);
            alert(`${item} removed successfully`);
        } else {
            alert(`${item} not found`);
        }
    };

    // Helper: get category list based on selectedValue
    const getCurrentCategory = () => {
        switch (selectedValue) {
            case 'Starter':
                return [StarterSend, StarterPriceSend];
            case 'Drinks':
                return [DrinksSend, DrinksPriceSend];
            case 'Meals':
                return [MealsSend, MealsPriceSend];
            case 'Deserts':
                return [DesertsSend, DesertsPriceSend];
            default:
                return [[], []];
        }
    };

    const [items, prices] = getCurrentCategory();

    // Filtered results based on search
    const filteredItems = items.filter((item: string) =>
        item.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <LinearGradient colors={['#12D936', '#CBFF83']} style={{ flex: 1, padding: 20 }}>
            <Text style={styles.toptext}>Filter & Remove Items</Text>

            <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue) => setSelectedValue(itemValue)}
                mode="dropdown"
            >
                <Picker.Item label="Select Category" value="" />
                <Picker.Item label="Starter" value="Starter" />
                <Picker.Item label="Drinks" value="Drinks" />
                <Picker.Item label="Meals" value="Meals" />
                <Picker.Item label="Deserts" value="Deserts" />
            </Picker>

            {selectedValue !== '' && (
                <>
                    <TextInput
                        placeholder="Search item to filter"
                        value={search}
                        onChangeText={setSearch}
                        style={styles.inputholders}
                    />

                    <Text style={{ fontSize: 18, textAlign: 'center', marginVertical: 10 }}>
                        Items in {selectedValue}
                    </Text>

                    <FlatList
                        data={filteredItems}
                        keyExtractor={(item) => item}
                        renderItem={({ item }) => {
                            const index = items.indexOf(item);
                            const price = prices[index];
                            return (
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        padding: 10,
                                        borderBottomWidth: 1,
                                        borderColor: 'gray',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Text style={{ fontSize: 16 }}>{item} - R{price}</Text>
                                    <TouchableOpacity
                                        onPress={() => removeItem(items, prices, item)}
                                        style={{
                                            backgroundColor: 'red',
                                            borderRadius: 5,
                                            paddingHorizontal: 10,
                                            paddingVertical: 5,
                                        }}
                                    >
                                        <Text style={{ color: 'white' }}>Remove</Text>
                                    </TouchableOpacity>
                                </View>
                            );
                        }}
                    />
                </>
            )}
        </LinearGradient>
    );
}
