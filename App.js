import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Create from './src/screens/Create';
import Update from './src/screens/Update';
import Login from './src/screens/Login';
import Register from './src/screens/Register';

const Stack = createNativeStackNavigator();


export default function App() {
  const [user, setUser] = useState(null);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? <>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Create' component={Create} />
          <Stack.Screen name='Update' component={Update} />
        </> : <>
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Register' component={Register} />

        </>}

      </Stack.Navigator>

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
