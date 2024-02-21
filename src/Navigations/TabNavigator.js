import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CartStackNavigator, MainStackNavigator, OrderStackNavigator, ProfileStackNavigator } from "./StackNavigator";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

const Tab = createBottomTabNavigator();

 export const TabNavigator=()=>{
    return(
        <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "gray"
        }}>
            <Tab.Screen name="home" component={MainStackNavigator} 
            options={{tabBarIcon:({size,color})=>(<MaterialIcons name="home" size={size} color={color}/>)}}/>
            <Tab.Screen name="cart" component={CartStackNavigator}
             options={{tabBarIcon:({size,color})=>(<MaterialIcons name="shopping-cart" size={size} color={color}/>)}}/>
            <Tab.Screen name="order" component={OrderStackNavigator}
             options={{tabBarIcon:({size,color})=>(<MaterialIcons name="list-alt" size={size} color={color}/>)}}/>
            <Tab.Screen name="profile" component={ProfileStackNavigator}
             options={{tabBarIcon:({size,color})=>(<MaterialIcons name="account-circle" size={size} color={color}/>)}}/>

            {/* why not just 
            <Tab.Screen name="" component={HomeScreen}/>
            <Tab.Screen name="" component={CartScreen}/>.......*/}
            </Tab.Navigator>
    )
}
