//here stack navigator.js is a component used to navigate to the stack screens (they'll be imported), 
//allow navigation to the different screens

import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import DetailsScreen from "../Screens/DetailsScreen";
import ProductScreen from "../Screens/ProductScreen";
import CartScreen from "../Screens/CartScreen";
import OrderScreen from "../Screens/OrderScreen";
import ProfileScreen from "../Screens/ProfileScreen";


const stack = createStackNavigator();

 export const MainStackNavigator = () => { //created a function/component where latter will be called 
    //somewhere(app.js or index,js) i guess
    return (
      <stack.navigator> 
          {/* why not just <navigator/> bc we use stack nav here <nav/> can be...tab nav or any other */}
           {/* navigator then create screen to be displayed */}
    <stack.Screen name="home-screen" component={HomeScreen}/> 
    <stack.Screen name="detail-screen" component={DetailsScreen}/> 
    <stack.Screen name="product-screen" component={ProductScreen}/> 
     </stack.navigator>

    )
}

export const CartStackNavigator=()=>{ 
   return(
    <stack.navigator> 
    <stack.Screen name="cart-screen" component={CartScreen}/> 
    </stack.navigator>
   )
}

export const OrderStackNavigator=()=>{ 
    return(
     <stack.navigator> 
     <stack.Screen name="order-screen" component={OrderScreen}/> 
     </stack.navigator>
    )
 }

export const ProfileStackNavigator=()=>{ 
    return(
     <stack.navigator> 
     <stack.Screen name="profile-screen" component={ProfileScreen}/> 
     </stack.navigator>
    )
 }

