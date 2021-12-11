import React from 'react'
import { StyleSheet, Text, View, ImageBackground, ScrollView, FlatList, SectionList, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Button } from 'react-native-elements/dist/buttons/Button'
import { NavigationContainer } from '@react-navigation/native'
import { Icon } from 'react-native-elements/dist/icons/Icon'


/* Action, Adventure, Animation, Comedy, Crime, Documentary, Drama, Family, Fantasy, History, Horror, Music, Mystery, Romance, Science Fiction, Thriller, TV Movie, War, and Western. */
/* const genres =['Comedy', 'Action', 'Romance', 'Drama', 'Sci-Fi', 'Thriller', 'Animation', 'Adventure', 'Family', 'Documentary', 'Mystery', 'Musical', ] */
const genres = [
    { genre: 'Comedy', src: require('../Assets/001-theatre.png') },
    { genre: 'Drama', src: require('../Assets/002-drama.png') },
    { genre: 'Crime', src: require('../Assets/003-burglar.png') },
    { genre: 'Action', src: require('../Assets/004-gun.png') },
    { genre: 'Sci-Fi', src: require('../Assets/005-scifi.png') },
    { genre: 'Adventure', src: require('../Assets/006-treasure-map.png') },
    { genre: 'Family', src: require('../Assets/007-family.png') },
    { genre: 'Romance', src: require('../Assets/008-love.png') },
    { genre: 'Fantasy', src: require('../Assets/009-swords.png') },
    { genre: 'Mystery', src: require('../Assets/010-detective.png') },
]

const RenderCard = ({ genres }) => {

    return (

        <View style={styles.container}>
            <FlatList
                contentContainerStyle={{ alignItems: 'center' }}
                data={genres}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.button}

                    >
                        <LinearGradient
                            colors={['#457b9d', '#1d3557']}
                            start={{ x: 1.0, y: 1.0 }} end={{ x: 0.0, y: 1.0 }}
                            style={{ margin: 10, borderRadius: 20 }}

                        >

                            <View style={styles.card}>

                                <Image
                                    style={{
                                        width: 50,
                                        height: 50,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        margin: 5,
                                        tintColor: 'white',
                                    }}
                                    source={item.src}

                                />
                                <View>
                                    <Text style={styles.cardText}>
                                        {item.genre}
                                    </Text>
                                </View>

                            </View>

                        </LinearGradient>
                    </TouchableOpacity>

                )}
            />
        </View>


    )
}

export default function GenreComponent({ navigation }) {
    return (

        <View>
            <Button
                icon={
                    <Icon
                        name='arrow-back-outline'
                        type='ionicon'
                        size={35}
                        color='#517fa4'
                    />
                }
                onPress={() => navigation.goBack()}
                style={{ alignSelf: 'flex-start', paddingLeft: 10 }}

            />
            <RenderCard
                style={{ flex: 1 }}
                genres={genres} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    img: {
        flex: 1,
        borderRadius: 30
    },
    parentCard: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',

    },
    text: {
        color: 'white',
        marginHorizontal: 10,
        marginTop: 20,
        marginBottom: 30,
        fontSize: 12,
        fontWeight: 'bold'
    },
    card: {
        height: 120,
        width: 175,
        backgroundColor: "#1d2d44",
        borderRadius: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 20,

    },
    cardText: {
        color: 'white',
        marginTop: 7,
        marginLeft: 7,
        fontWeight: 'bold',
        fontSize: 18
    }

})

