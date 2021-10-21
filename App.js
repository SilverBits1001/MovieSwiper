import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MainComponent from './components/MainComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/Home';
import ListsComponent from './components/ListsComponent';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false

      }}
      screenOptions={{
        "tabBarActiveTintColor": "#fff",
        "tabBarInactiveTintColor": "lightgray",
        "tabBarActiveBackgroundColor": "#4C64FF",
        "tabBarInactiveBackgroundColor": "#1d2d44",
        "headerShown": false,
        "tabBarStyle": [
          {
            "display": "flex",
            "backgroundColor": "red"
          },
          null
        ]
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Lists" component={ListsComponent} />
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

    <SafeAreaView style={styles.container}>
      <NavigationContainer theme={MyTheme}>
        <MyTabs />
      </NavigationContainer>
    </SafeAreaView>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d1321',

  },
});
