import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
import SwipeScreen from './swipeComponents/SwipeScreen';


export default function Home() {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 5 }}>
                <Text style={{ color: 'white', fontSize: 20, padding: 5 }} >Discover</Text>
                <Button
                    style={{}}
                    onPress={this.props.navigation.navigate('Genres')}

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
