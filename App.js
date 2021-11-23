import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MainComponent from './features/MainComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './features/Home';
import ListComponent from './features/ListComponent';
import GenreComponent from './features/GenresComponent'
import Store from './app/store'
import { Provider } from 'react-redux'

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Discover"
      screenOptions={{
        display: "flex",
        fontSize: 20,
        borderRadius: 20,
        tabBarStyle: {
          elevation: 0,
          marginLeft: 10,
          marginRight: 10,
          borderRadius: 15,
          height: 50,
          borderRadius: 30,
          backgroundColor: "#1d2d44"
        },
        headerShown: false,
        headerTintColor: 'white',
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#888",
/*         tabBarActiveBackgroundColor: "#4C64FF",
        tabBarInactiveBackgroundColor: "#1d2d44",
 */        tabBarIconStyle: {
          display: 'none'
        },
        tabBarLabelStyle: {
          flex: 1,
          backgroundColor: 'transparent',
          padding: 12,
          fontSize: 18
        }

      }}
    >
      <Tab.Screen
        name="Genres"
        component={GenreComponent} />

      <Tab.Screen
        name="Discover"
        component={Home} />
      <Tab.Screen
        name="Your Movies"
        component={ListComponent} />
    </Tab.Navigator >
  );
}

const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: '#0d1321',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: '#0d1321',
    notification: 'rgb(255, 69, 58)',
  },
};

export default function App() {
  return (
    <Provider store={Store}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer theme={MyTheme}>
          <MyTabs />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d132A',

  },
});
