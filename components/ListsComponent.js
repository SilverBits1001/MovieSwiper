import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { ScrollView } from 'react-native-gesture-handler'
import { Card, ListItem, Button, Icon } from 'react-native-elements'



export default function ListsComponent() {

    RenderCards = () => {
        console.log(users)
        return (
            users.map(user => {
                <View style={{ borderWidth: 5, borderColor: 'red' }}>
                    <Text style={{ color: 'white' }}>{user.name}</Text>
                </View>
            })
        )

    }

    const users = [
        {
            name: 'brynn',
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
        },
        {
            name: 'brynn',
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
        },
        {
            name: 'brynn',
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
        },
        {
            name: 'brynn',
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
        },
        {
            name: 'brynn',
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
        },
        {
            name: 'brynn',
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
        },
    ]




    return (
        <SafeAreaView>
            <RenderCards />
        </SafeAreaView>

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