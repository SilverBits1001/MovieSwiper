import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainComponent from './features/MainComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './features/Home';
import ListComponent from './features/ListComponent';
import GenreComponent from './features/GenresComponent'
import Store from './app/store'
import { Provider } from 'react-redux'
import { useSelector } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MovieDetails from './features/MovieDetails';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      
      screenOptions={{
        marginTop: 100,
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
          backgroundColor: "#1d2d44",
          position: 'absolute',
          bottom: 30,
          paddingBottom: 0,



        },

        headerShown: false,
        headerTintColor: 'white',
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#888",
/*         tabBarActiveBackgroundColor: "#4C64FF",
        tabBarInactiveBackgroundColor: "#1d2d44",
 */        tabBarIconStyle: {
          display: 'none',
        },

        tabBarLabelStyle: {
          alignSelf: 'center',
          flex: 1,
          backgroundColor: 'transparent',
          padding: 0,
          fontSize: 18,
          textAlignVertical: 'center'
        }

      }}
    >


      <Tab.Screen
        name="Discover"
        component={Home} />
      <Tab.Screen
        name="My Movies"
        component={ListComponent}
      />

    </Tab.Navigator >
  );
}

const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: '#0d1321',
    notification: 'rgb(255, 69, 58)',
  },
};

export default function App() {
  return (
    <Provider store={Store}>
      <SafeAreaView
        style={styles.container}
        edges={['left', 'right']}>
     
          <NavigationContainer theme={MyTheme}>
            <Stack.Navigator 
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
           
            }}
            >
              <Stack.Screen name='Home' component={MyTabs} />
              <Stack.Screen name="Genre" component={GenreComponent} />
              <Stack.Screen name="Movie Details" component={MovieDetails} />
            </Stack.Navigator>
          </NavigationContainer>

      </SafeAreaView>
    </Provider>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d132A',
     // paddingTop: 50, //need to fix so overflow is visible
    overflow:'visible'
  },
});
