import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ImageBackground, ScrollView, FlatList, SectionList, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'


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





const genreList = [

    {
        "id": 10759,
        "name": "Action & Adventure"
    },
    {
        "id": 16,
        "name": "Animation"
    },
    {
        "id": 35,
        "name": "Comedy"
    },
    {
        "id": 80,
        "name": "Crime"
    },
    {
        "id": 99,
        "name": "Documentary"
    },
    {
        "id": 18,
        "name": "Drama"
    },
    {
        "id": 10751,
        "name": "Family"
    },
    {
        "id": 10762,
        "name": "Kids"
    },
    {
        "id": 9648,
        "name": "Mystery"
    },
    {
        "id": 10763,
        "name": "News"
    },
    {
        "id": 10764,
        "name": "Reality"
    },
    {
        "id": 10765,
        "name": "Sci-Fi & Fantasy"
    },
    {
        "id": 10766,
        "name": "Soap"
    },
    {
        "id": 10767,
        "name": "Talk"
    },
    {
        "id": 10768,
        "name": "War & Politics"
    },
    {
        "id": 37,
        "name": "Western"
    },


    {
        "id": 28,
        "name": "Action"
    },
    {
        "id": 12,
        "name": "Adventure"
    },
    {
        "id": 16,
        "name": "Animation"
    },
    {
        "id": 35,
        "name": "Comedy"
    },
    {
        "id": 80,
        "name": "Crime"
    },
    {
        "id": 99,
        "name": "Documentary"
    },
    {
        "id": 18,
        "name": "Drama"
    },
    {
        "id": 10751,
        "name": "Family"
    },
    {
        "id": 14,
        "name": "Fantasy"
    },
    {
        "id": 36,
        "name": "History"
    },
    {
        "id": 27,
        "name": "Horror"
    },
    {
        "id": 10402,
        "name": "Music"
    },
    {
        "id": 9648,
        "name": "Mystery"
    },
    {
        "id": 10749,
        "name": "Romance"
    },
    {
        "id": 878,
        "name": "Science Fiction"
    },
    {
        "id": 10770,
        "name": "TV Movie"
    },
    {
        "id": 53,
        "name": "Thriller"
    },
    {
        "id": 10752,
        "name": "War"
    },
    {
        "id": 37,
        "name": "Western"
    }
]



const RenderAllMovies = ({ title, usersMovies }) => {



    return (

        <View style={styles.container}>
            <Text style={{ color: 'white', fontSize: 21, paddingHorizontal: 15, }} >{title}</Text>

            <FlatList
                horizontal={false}

                ListFooterComponent={<RenderAllMovieGenres />}
                contentContainerStyle={{ alignItems: 'flex-start', justifyContent: 'flex-start', paddingBottom: '100%' }}
                data={usersMovies}
                numColumns={3}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.button}
                    >
                        <View
                            style={{ margin: 7 }}
                        >
                            <View style={styles.card}>
                                <View>
                                    {/*                                     <Text style={styles.cardText}>
                                        {item.title}{item.name}
                                    </Text> */}
                                </View>
                                <Image
                                    resizeMode='cover'
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        margin: 0,
                                        borderRadius: 5

                                    }}
                                    source={{
                                        uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                                    }}

                                />


                            </View>

                        </View>
                    </TouchableOpacity>

                )}
            />
        </View>


    )
}

const RenderMovieGenre = ({ title, usersMovies, genreId }) => {

    // const filteredGenres = genres.filter(movie => movie.genre_ids === genre_id)
    if (Object.keys(usersMovies[0]).length === 0) {

        return <View></View>
    }
    const filteredUsersMovies = usersMovies.filter(movie => movie.genre_ids.includes(genreId))


    console.log('this is the current genre is', genreId);
    console.log(filteredUsersMovies);
    if (usersMovies.length < 10) {
        return <View></View>
    }
    if (filteredUsersMovies.length === 0) {
        return <View></View>
    }
    return (

        <View style={styles.container}>
            <Text style={{ color: 'white', fontSize: 21, padding: 5 }} >{title}</Text>

            <FlatList
                horizontal={true}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{ alignItems: 'flex-start', justifyContent: 'flex-start', margin: 5, padding: 5 }}
                data={filteredUsersMovies}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        style={styles.button}


                    >
                        <View
                            style={{ margin: 7 }}
                        >
                            <View style={styles.card}>
                                <View>
                                    {/*                                     <Text style={styles.cardText}>
                                        {item.title}{item.name}
                                    </Text> */}
                                </View>
                                <Image
                                    resizeMode='cover'
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        margin: 0,
                                        borderRadius: 5

                                    }}
                                    source={{
                                        uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                                    }}

                                />


                            </View>

                        </View>
                    </TouchableOpacity>

                )}
            />
        </View>


    )
}

const RenderAllMovieGenres = () => {
    const usersMovies = useSelector((state) => state.usersMovies.value)


    return (
        <ScrollView >
            {genreList.map((genre, index) => (

                <RenderMovieGenre
                    key={index}
                    style={{ padding: 600 }}
                    usersMovies={usersMovies}
                    title={genre.name}
                    genreId={genre.id} />
            ))}
        </ScrollView>

    )
}

export default function GenreComponent() {
    const [loadedGenreCategories, setLoadedGenreCategories] = useState([])

    const handleGenreFetch = async (mediaType) => {
        const url = `https://api.themoviedb.org/3/genre/${mediaType}/list?api_key=72f3e8dec55757728e250e173bc56745&language=en-US`
        const response = await fetch(url)
        const data = await response.json()
        data.genres.map(genre => {
            setLoadedGenreCategories(loadedGenreCategories.push({ id: genre.id, name: genre.name }))
        })
    };



    useEffect(() => {
        handleGenreFetch('movie')
        handleGenreFetch('tv')
    }, []);


    const usersMovies = useSelector((state) => state.usersMovies.value)



    return (

        <View >

            <RenderAllMovies

                usersMovies={usersMovies}
                title={'All Movies'} />



        </View>
    )
}

const styles = StyleSheet.create({
    container: {

        justifyContent: 'flex-start',
        paddingTop:50


    },
    img: {
        flex: 1,
        borderRadius: 30
    },
    parentCard: {




    },
    text: {
        color: 'white',
        marginHorizontal: 0,
        marginTop: 0,
        marginBottom: 0,
        fontSize: 12,
        fontWeight: 'bold'
    },
    card: {
        height: 190,
        width: 115,
        backgroundColor: "#1d2d44",
        borderRadius: 10,
        padding: 3,
        flexDirection: 'row',
        marginHorizontal: 0

    },
    cardText: {
        color: 'white',
        marginTop: 7,
        marginLeft: 7,
        fontWeight: 'bold',
        fontSize: 18
    }

})

