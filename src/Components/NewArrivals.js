import React, { Component } from 'react'
import { Text, View , Image} from 'react-native'
import shoe from "../../assets/shoe-2.jpg"
// import Pijama from "../../assets/pijama.jpg"


const NewArrivals=()=> {

    return (
      <View className="max-w-[180px] justify-center items-center overflow-hidden ml-4 mt-5">
        <Image source={shoe} className="w-48 h-36 rounded-2xl"/>
        <View className="justify-center items-center mt-2">
        <Text className="font-bold"> Ladies Heel </Text>
        <Text className="text-xs"> Black Heel </Text>
        <Text className="font-extrabold"> $100$ </Text>
        </View>
      </View>
    )
  }

  export default NewArrivals;
