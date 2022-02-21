import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Create from "./src/screens/Create";
import Update from "./src/screens/Update";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import { firebase } from "./src/firebase/config";

const Stack = createNativeStackNavigator();

export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  function onAuthStateChanged(user) {
    setUser(user);
    setInitializing(false);
  }

  useEffect(() => {
    const subscribe = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscribe;
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      <StatusBar translucent={false} backgroundColor="white" />
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen
              name="Home"
              options={{
                headerShown: false,
              }}
            >
              {props => <Home {...props} extraData={user} />}
            </Stack.Screen>
            <Stack.Screen name="Create" component={Create} />
            <Stack.Screen name="Update" component={Update} />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{
                headerShown: false,
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
