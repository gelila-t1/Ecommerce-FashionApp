import React, { useEffect }  from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Pressable, StyleSheet, Text, View, Image } from 'react-native' 
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import userImage from "../../assets/userImage.png"
import { TextInput } from 'react-native-gesture-handler'

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
</SafeAreaView>
     
   
    </View>
  )}


export default HomeScreen
//rnce
const styles = StyleSheet.create({})