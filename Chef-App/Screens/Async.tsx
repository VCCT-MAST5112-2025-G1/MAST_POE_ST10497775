import AsyncStorage from "@react-native-async-storage/async-storage"

AsyncStorage.setItem('Starter', JSON.stringify(['samosa', 'spring_rolls', 'bruschetta', 'stuffed_mushrooms', 'deviled_eggs']))
AsyncStorage.setItem('StarterPrice', JSON.stringify(["9", "12", "15", "20", "25"]))
AsyncStorage.setItem('Drinks', JSON.stringify(['coke', 'orange_juice', 'water', 'lemonade']))
AsyncStorage.setItem('DrinksPrice', JSON.stringify(["8", "10", "5", "7"]))
AsyncStorage.setItem('Meals', JSON.stringify(['pizza', 'burger', 'pasta', 'salad', 'sushi']))
AsyncStorage.setItem('MealsPrice', JSON.stringify(["50", "40", "45", "30", "60"]))
AsyncStorage.setItem('Deserts', JSON.stringify(['cake', 'ice_cream', 'brownie', 'cheesecake', 'fruit_salad']))
AsyncStorage.setItem('DesertsPrice', JSON.stringify(["20", "15", "18", "25", "12"]))