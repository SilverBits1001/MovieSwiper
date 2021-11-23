import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
import SwipeScreen from './swipeComponents/SwipeScreen';
import { addMovie } from './swipeComponents/swipeScreenSlice';
import { useSelector, useDispatch } from 'react-redux'



    export default function Home() {
        const count = useSelector((state) => state.usersMovies.value)
        const dispatch = useDispatch()

        return (
            <View style={styles.container}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 5 }}>
                    <Text style={{ color: 'white', fontSize: 20, padding: 5 }} >Discover {count}</Text>
                    <Button
                        style={{}}
                        onPress={() => dispatch(addMovie())}
                        icon={
                            <Icon
                                name='filter-list'
                                type='material-icons'
                                size='35'
                                color='#517fa4'
                            />
                        }
                        type='clear'
                    />
                </View>
                <View style={{ flex: 15 }} >
                    <SwipeScreen />
                </View>
            </View>
        )
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#0d132A',

        }
    })
