import React, { useEffect }  from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Pressable, StyleSheet, Text, View, Image, ScrollView } from 'react-native' 
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import userImage from "../../assets/userImage.png"
import { TextInput } from 'react-native-gesture-handler'
import fashionGirl from "../../assets/fashionGirl.png"
import NewArrivals from '../Components/NewArrivals'

const HomeScreen=({navigation})=>{
  useEffect(()=>{
    navigation.setOptions({
      headerShown: false
    })
  },[])
  return (
    <View>
<SafeAreaView>

        <View className="flex-row justify-between mt-2 p-5">
      <View className="w-10 h-10 ">
      <MaterialIcons name='menu' size={24} color={"black"}/>
      </View>
      <View>
        <Pressable className="flex-row justify-center px-5 py-2 items-center border border-slate-400 rounded-full">
          <Image source={userImage} className="h-10 w-10"/>
           <Text className="font-semibold px-2">
            Login
          </Text>
        </Pressable>
      </View>
      </View>
      <View className="ml-4">
        <Text className="font-bold text-2xl">Welcome ,User</Text>
        <Text className="font-bold text-2xl text-grey-400"> to Our Fashion App</Text>
      </View>
      

      <View className="mt-4">
      <View className="flex-row bg-gray-200 rounded-2xl px-2 py-2 mx-4">
        <View>
        <MaterialIcons name='search' size={24} color={'#111'}/>
        </View>     
        <TextInput
        placeholder='search....'
        placeholderTextColor={'#666666'}
        className="px-2"/>
      </View>
      </View>


      <View className=" flex-row ml-3 max-w-[320px] h-[200px] mt-6  overflow-hidden  bg-gray-500 rounded-2xl">
        <View className="pl-4 pt-6">
          <Text className="pl-4 font-bold text-3xl">50% Off</Text>
          <Text className="text-lg pl-4">On Everything Today</Text>
          <Text className="text-xs pl-4">With Code: AVVIMALDEV</Text>
          <Pressable className="bg-black w-20 rounded-2xl ml-4 mt-4 p-2">
        <Text className="text-white text-center">Get Now</Text>
        </Pressable>
        </View>
      
        <View>
          <Image source={fashionGirl} className="h-48 w-24"/>
          </View>
      </View>


      <View>

        <View className="flex-row justify-between items-center mx-4 mt-6">
        <Text className="text-lg font-extrabold">New Arrivals</Text>
        <Pressable>
          <Text className="text-gray-500">View All</Text>
        </Pressable>
        </View>
        <ScrollView horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <Pressable>
        <NewArrivals/>
        </Pressable>
        <Pressable>
        <NewArrivals/>
        </Pressable>
        <Pressable>
        <NewArrivals/>
        </Pressable>
        </ScrollView>
      </View>
</SafeAreaView>
     
   
    </View>
  )}


export default HomeScreen
//rnce
const styles = StyleSheet.create({})