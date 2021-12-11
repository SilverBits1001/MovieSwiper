import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
import SwipeScreen from './swipeComponents/SwipeScreen';
import { addMovie } from './swipeComponents/swipeScreenSlice';
import { useSelector, useDispatch } from 'react-redux'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GenreComponent from './ListComponent';




export default function Home({navigation}) {
    const count = useSelector((state) => state.usersMovies.value)
    const dispatch = useDispatch()

    return (
        <View style={styles.container}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',  paddingHorizontal: 15 }}>
                <Text style={{ color: 'white', fontSize: 21, }} >Discover </Text>
                <Button
                    style={{}}
                    onPress={() => navigation.navigate('Genre')}
                    icon={
                        <Icon
                            name='filter-outline'
                            type='ionicon'
                            size={30}
                            color='#517fa4'
                        />
                    }
                    type='clear'
                />
            </View>
            <View style={{ flex: 15, }} >
                <SwipeScreen navigation={navigation} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0d132A',
        paddingTop:50

    }
})
