import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

export default function ListsComponent() {
    return (
        <View style={styles.container}>
            <Text style={{ backgroundColor: 'red' }}>This is the list page</Text>
     
            <LinearGradient
                colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
                start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                style={styles.grediant}
            >
                <View>
                    <Text style={styles.buttonText}>
                        Sign in with Facebook
                    </Text>
                </View>
            </LinearGradient>
     
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    linearGradient: {
      padding: 1,
      borderRadius: 5,
    },
    buttonText: {
      fontSize: 18,
      fontFamily: 'Gill Sans',
      textAlign: 'center',
      margin: 2,
      color: '#ffffff',
      backgroundColor: '#3a506b',
      padding: 15,
      borderRadius: 20,
    },
    grediant: {
      width: '100%',
      justifyContent: 'center',
      alignSelf: 'center',
    },
  })