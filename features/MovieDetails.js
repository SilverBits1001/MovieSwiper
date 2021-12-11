import React from 'react'
import { Image, ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements/dist/buttons/Button';
import Video from 'react-native-video';

const example = {
    "adult": false,
    "backdrop_path": "/lNyLSOKMMeUPr1RsL4KcRuIXwHt.jpg",
    "belongs_to_collection": {
        "id": 558216,
        "name": "Venom Collection",
        "poster_path": "/670x9sf0Ru8y6ezBggmYudx61yB.jpg",
        "backdrop_path": "/rhLspFB1B8ZCkWEHFYmc3NKagzq.jpg"
    },
    "budget": 110000000,
    "genres": [
        {
            "id": 878,
            "name": "Science Fiction"
        },
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 12,
            "name": "Adventure"
        }
    ],
    "homepage": "https://www.venom.movie",
    "id": 580489,
    "imdb_id": "tt7097896",
    "original_language": "en",
    "original_title": "Venom: Let There Be Carnage",
    "overview": "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.",
    "popularity": 8364.759,
    "poster_path": "/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
    "production_companies": [
        {
            "id": 7505,
            "logo_path": "/837VMM4wOkODc1idNxGT0KQJlej.png",
            "name": "Marvel Entertainment",
            "origin_country": "US"
        },
        {
            "id": 5,
            "logo_path": "/71BqEFAF4V3qjjMPCpLuyJFB9A.png",
            "name": "Columbia Pictures",
            "origin_country": "US"
        },
        {
            "id": 84041,
            "logo_path": "/nw4kyc29QRpNtFbdsBHkRSFavvt.png",
            "name": "Pascal Pictures",
            "origin_country": "US"
        },
        {
            "id": 31828,
            "logo_path": null,
            "name": "Avi Arad Productions",
            "origin_country": "US"
        },
        {
            "id": 53462,
            "logo_path": null,
            "name": "Matt Tolmach Productions",
            "origin_country": "US"
        }
    ],
    "production_countries": [
        {
            "iso_3166_1": "US",
            "name": "United States of America"
        }
    ],
    "release_date": "2021-09-30",
    "revenue": 482000000,
    "runtime": 97,
    "spoken_languages": [
        {
            "english_name": "English",
            "iso_639_1": "en",
            "name": "English"
        },
        {
            "english_name": "Spanish",
            "iso_639_1": "es",
            "name": "Español"
        }
    ],
    "status": "Released",
    "tagline": "",
    "title": "Venom: Let There Be Carnage",
    "video": false,
    "vote_average": 7.2,
    "vote_count": 4192
}

let mainColor = '#0d132A'


export default function MovieDetails({navigation}) {

    useFocusEffect(() => {
        // This will run when component is `focused` or mounted.
        StatusBar.setHidden(true, 'fade');

        // This will run when component is `blured` or unmounted.
        return () => {
            StatusBar.setHidden(false, 'fade');
        }
    });
    StatusBar
    const win = Dimensions.get('window');
    const ratio = win.width / 500; //541 is actual image width

    return (
        <ScrollView style={{ flex: 1, backgroundColor: mainColor }} >

            <ImageBackground
                style={{

                    height: (win.height * .70),
                    alignItems: 'flex-Start',
                    justifyContent: 'space-between',
                }}
                source={{
                    uri: `https://image.tmdb.org/t/p/original${example.poster_path}`,
                }}

            >

                <Button
                    icon={
                        <Icon
                            name='arrow-back-outline'
                            type='ionicon'
                            size={35}
                            color='white'
                        />
                    }
                    onPress={() => navigation.goBack()}
                    style={{ alignSelf: 'flex-start', paddingLeft: 10, paddingTop: 10 }}

                />
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    colors={['transparent', mainColor]}
                    style={{
                        width: '100%',
                        height: 200,
                        overflow: 'hidden',
                        justifyContent: 'flex-end'
                    }} >

                    <Button
                        title='Watch Trailer'
                        icon={
                            <Icon
                                name='play-circle-outline'
                                type='ionicon'
                                size={50}
                                color='white'
                                ioniconStrokeWidth={30}
                                alignSelf='flex-start'

                            />
                        }
                        onPress={() => console.log('pressed')}
                        style={{
                            alignSelf: 'flex-start', ppaddingBottom: 20,
                            paddingLeft: 10
                        }}

                    />

                </LinearGradient>
            </ImageBackground>

            <View style={{ backgroundColor: mainColor, height: 400 }}>

                <View
                >

                    <Text style={{ color: 'white', fontSize: 35, alignSelf: 'flex-start', paddingRight: 10, paddingLeft: 15 }}>{example.title}</Text>
                    <View style={{ flexDirection: 'row', paddingVertical: 10, }}>
                        <Text style={{ color: 'white', fontSize: 14, paddingLeft: 20, fontWeight: '300' }}>{example.release_date.slice(0, 4)}</Text>
                        <Text style={{ color: 'white', fontSize: 14, paddingLeft: 20, fontWeight: '300' }}>{example.runtime} Minutes</Text>
                        <Icon
                            name='star'
                            type='ionicon'
                            size={14}
                            color='orange'
                            paddingLeft={20}
                        />
                        <Text style={{ color: 'white', fontSize: 14, paddingLeft: 5, fontWeight: '300' }}>{example.vote_average}</Text>

                    </View>
                    <Text style={{ color: 'white', fontSize: 14, alignSelf: 'flex-start', paddingHorizontal: 15, paddingVertical: 10, fontWeight: '300' }}>{example.overview}</Text>
                    <Text style={{ color: 'white', fontSize: 14, alignSelf: 'flex-start', paddingHorizontal: 15, paddingVertical: 10, fontWeight: '300' }}>{example.overview}</Text>

                </View>


            </View>


        </ScrollView>

    )
}

const styles = StyleSheet.create({


})

/*
        <View style={{ flex: 1 }} >
            <ImageBackground
                style={{

                    height: 326,
                    alignItems: 'flex-Start',
                    justifyContent: 'flex-end',
                }}
                source={{
                    uri: `https://image.tmdb.org/t/p/original${example.backdrop_path}`,
                }}
            >
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    colors={['transparent', '#000']}
                    style={{
                        width: '100%',
                        height: 200,
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'visible'
                    }}>
                        <Icon
                            name='play-circle-outline'
                            type='ionicon'
                            size={50}
                            color='white'
                            marginBottom={150}
                        />

                </LinearGradient>
            </ImageBackground>
            <LinearGradient
                colors={['#457b9d', '#1d3557']}
                start={{ x: 1.0, y: 1.0 }} end={{ x: 0.0, y: 1.0 }}
                style={{ backgroundColor: '#0d123a', bottom: 75, borderRadius: 20, height: 700, alignItems: 'flex-end' }}
            >



            </LinearGradient>
            <View style={{
                position: 'absolute',
                top:225,
                flexDirection: 'row',
                alignItems:'flex-start',


                }}
                >
                <Image
                    resizeMode='cover'
                    style={{
                        height: 200,
                        width: 125,
                        borderRadius: 10,
                        marginLeft: 20,
                        borderRadius: 10,
                    }}
                    source={{
                        uri: `https://image.tmdb.org/t/p/original${example.poster_path}`,
                    }}
                />
                <Text style={{ color: 'white', fontSize: 30 }}>Title</Text>
            </View>
            <View style={{

                backgroundColor: 'red'
            }}>

            </View>
        </View>
    )
}
 */