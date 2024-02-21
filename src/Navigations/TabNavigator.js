import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CartStackNavigator, MainStackNavigator, OrderStackNavigator, ProfileStackNavigator } from "./StackNavigator";


const Tab = createBottomTabNavigator();

 export const TabNavigator=()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="home" component={MainStackNavigator}/>
            <Tab.Screen name="cart" component={CartStackNavigator}/>
            <Tab.Screen name="order" component={OrderStackNavigator}/>
            <Tab.Screen name="profile" component={ProfileStackNavigator}/>

            {/* why not just 
            <Tab.Screen name="" component={HomeScreen}/>
            <Tab.Screen name="" component={CartScreen}/>.......*/}
            </Tab.Navigator>
    )
}
