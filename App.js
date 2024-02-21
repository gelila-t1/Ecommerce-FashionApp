// import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from './src/Navigations/TabNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Welcome to My Fashion App!</Text>
    //   <Text>Fashion App!</Text>
    //   <Text>Fashion App!</Text> 
    //   <StatusBar style="auto" />
      
    // </View>
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

