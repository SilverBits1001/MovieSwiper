import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Card } from 'react-native-elements'
import { Icon } from 'react-native-elements/dist/icons/Icon'

const example = {
    "backdrop_path": "/oaGvjB0DvdhXhOAuADfHb261ZHa.jpg",
    "origin_country": [
        "KR"
    ],
    "genre_ids": [
        10759,
        9648,
        18
    ],
    "original_language": "ko",
    "first_air_date": "2021-09-17",
    "poster_path": "/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
    "vote_average": 7.9,
    "name": "Squid Game",
    "vote_count": 6598,
    "overview": "Hundreds of cash-strapped players accept a strange invitation to compete in children's games—with high stakes. But, a tempting prize awaits the victor.",
    "id": 93405,
    "original_name": "오징어 게임",
    "popularity": 10219.887,
    "media_type": "tv"
}



export default function ListComponent() {
    return (
        <View>

            <Card containerStyle={styles.card}>
                <Card.Title
                    h4
                    style={{ textAlign: 'left', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.text}>
                        Movies you're interested in
                    </Text>
                    <Icon
                        name='angle-right'
                        type='font-awesome'
                        size={30}
                        color='white'
                    />
                </Card.Title>
                <Card.Divider />
                <View style={styles.cardContent}>
                    <View>
                       
                    </View>

                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({

    card: {
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderRadius: 20,

    },
    cardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        margin: 20

    },
    text: {
        color: 'white'
    }

})

