import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./assets/screens/LoginScreen";
import WelcomeScreen from "./assets/screens/WelcomeScreen.jsx";
import RegisterScreen from "./assets/screens/RegisterScreen";
import HomeScreen from "./assets/screens/HomeScreen";
import CreateScreen from "./assets/screens/CreateScreen";
import ProfileScreen from "./assets/screens/ProfileScreen";
import PostsScreen from "./assets/screens/PostsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { UserContext } from "./assets/context/UserContext";
const App = () => {
  const [userCredentials, setUserCredentials] = useState();
  const [postSent, setPostSent] = useState(false);

  const setAvatarInitials = (str) => {
    let first = str.charAt(0) + str.charAt(str.length - 1).toUpperCase();
    return first;
  };

  const setUserLoggedInUserAvatarInitials = () => {
    return userCredentials
      ? setAvatarInitials(userCredentials.userName)
      : setAvatarInitials("NAA");
  };

  const handleDate = (date) => {
    let year = date.slice(0, 4);
    let month = date.slice(5, 7);
    let day = date.slice(8, 10);
    return `${month}-${day}-${year}`;
  };

  const Stack = createStackNavigator();
  const MaterialBottomTabs = createBottomTabNavigator();
  const createHomeStack = () => {
    return (
      <UserContext.Provider
        value={{
          userCredentials,
          setUserCredentials,
          setAvatarInitials,
          setUserLoggedInUserAvatarInitials,
          handleDate,
          postSent,
          setPostSent,
        }}
      >
        <MaterialBottomTabs.Navigator>
          <MaterialBottomTabs.Screen name="Home" component={HomeScreen} />
          <MaterialBottomTabs.Screen name="Create" component={CreateScreen} />
          <MaterialBottomTabs.Screen name="Profile" component={ProfileScreen} />
          <MaterialBottomTabs.Screen name="Posts" component={PostsScreen} />
        </MaterialBottomTabs.Navigator>
      </UserContext.Provider>
    );
  };

  return (
    <NavigationContainer>
      <UserContext.Provider
        value={{
          userCredentials,
          setUserCredentials,
          setUserLoggedInUserAvatarInitials,
          setAvatarInitials,
          postSent,
          setPostSent,
        }}
      >
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen
            name="Log In"
            options={{
              title: "Log In",
              headerStyle: { backgroundColor: "#e9d4b7" },
              headerTintColor: "white",
            }}
            component={LoginScreen}
          />
          <Stack.Screen
            name="Register"
            options={{
              title: "Register",
              headerStyle: { backgroundColor: "#e9d4b7" },
              headerTintColor: "white",
            }}
            component={RegisterScreen}
          />
          <Stack.Screen name="Home" children={createHomeStack} />
        </Stack.Navigator>
      </UserContext.Provider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
