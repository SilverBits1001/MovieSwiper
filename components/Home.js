import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import SwipeScreen from './swipeComponents/SwipeScreen';


export default function Home() {
    return (
        <View style={styles.container}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{color: 'white', fontSize:20}} >Movies | TV Shows</Text>
            </View>
            <View style={{backgroundColor:'red'}}>
                <SwipeScreen />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#0d1321',

    }
})
