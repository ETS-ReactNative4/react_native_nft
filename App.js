import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import AppLoading from 'expo-app-loading';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

import Home from "./screens/Home";
import Details from "./screens/Details";
import Profile from "./screens/Profile";
import {
  useFonts,
  Inter_900Black,
  Inter_600SemiBold,
  Inter_500Medium,
  Inter_400Regular,
  Inter_300Light,
} from '@expo-google-fonts/inter';

const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent"
  }
}
const App = () => {
  const [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_600SemiBold,
    Inter_500Medium,
    Inter_400Regular,
    Inter_300Light,
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
          <ActivityIndicator size="large" color="red" />
        <AppLoading />
      </View>
    );
  } else {
    return (
      <NavigationContainer theme={theme}>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  main: {
    justifyContent: 'center',
    flex: 1,
  }
});

export default App;