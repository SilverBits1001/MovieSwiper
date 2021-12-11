import React, { Component } from 'react'
import Swiper from 'react-native-deck-swiper'
import { Button, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { movies } from '../db'
import { Image } from 'react-native'
import { useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Dimensions } from 'react-native';
import CardFlip from 'react-native-card-flip';
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { useSelector, useDispatch } from 'react-redux'
import { addMovie } from './swipeScreenSlice';
import { fonts } from 'react-native-elements/dist/config'

export default function SwipeScreen({navigation}) {

  const dispatch = useDispatch()
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;


  const [cards, setCards] = useState([])
  const [swipedAllCards, setSwipedAllCards] = useState(false)
  const [swipeDirection, setSwipeDirection] = useState('')
  const [cardIndex, setCardIndex] = useState(0)
  const [nameTitle, setnameTitle] = useState('')
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [usersMovies, setUserMovies] = useState([])
  const [cardStack, setCardStack] = useState([])

  const handleFetch = async () => {
    const url = 'https://api.themoviedb.org/3/trending/all/week?api_key=72f3e8dec55757728e250e173bc56745&page=' + page
    const response = await fetch(url)
    console.log('~~~~~~~~~~~~~~~~~~~~~the loaded screen is page ', page);
    const data = await response.json()
    setCards(cards.concat(data.results));
    console.log(cards);
    setPage(page + 1) // increments page number after each fetch request

  };


  useEffect(() => {
    handleFetch()
  }, []);

  /*   <View style={styles.container}>
      <CardFlip style={styles.cardContainer} ref={card => (this.card = card)}>
        <TouchableOpacity
          activeOpacity={1}
          style={[styles.card, styles.card1]}
          onPress={() => this.card.flip()}>
          <Text style={styles.label}>AB</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={[styles.card, styles.card2]}
          onPress={() => this.card.flip()}>
          <Text style={styles.label}>CD</Text>
        </TouchableOpacity>
      </CardFlip>
    </View> */


  const titleName = ''
  renderCard = (card, index, titleName) => {
    console.log('Movies are now loaded to cards with a length of', cards.length)
    if (card === undefined) {
      return <View></View>
    } else {
      // onsole.log('this' ,this.);
      card.name ? titleName = card.name : titleName = card.title
      return (

        <View style={styles.shadow}
          ref={view => {
            this.view = view
          }}>
          <CardFlip style={styles.cardFlipContainer} ref={(currentCard) => (this['card' + cards.indexOf(card)] = currentCard)}>
            <View
              activeOpacity={1}
            >
              <LinearGradient
                colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
                start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                style={styles.gradiantWrapper}
              >
                <LinearGradient
                  colors={['#457b9d', '#1d3557']}
                  start={{ x: 1.0, y: 1.0 }} end={{ x: 0.0, y: 1.0 }}
                  style={styles.card}
                >
                  <View style={styles.card}>
                    <Image
                      resizeMode='cover'
                      style={{
                        width: '100%',

                        flex: 3,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,

                      }}
                      source={{
                        uri: `https://image.tmdb.org/t/p/w500${card.poster_path}`,
                      }}
                    />
                    <View style={{ flex: 1, }}>
                      <Text style={styles.text}>{titleName}</Text>
                      <View>
                        <Text numberOfLines={4} style={styles.movieDescription}>{card.overview}</Text>
                      </View>
                    </View>
                  </View>
                </LinearGradient>
              </LinearGradient>
            </View>
            <LinearGradient
              colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']} 
           //   colors={['#8000FF', '#6536FF', '#4C64FF',  '#329BFF', '#17C8FF','#00FFFF',   ]}
              start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
              style={styles.gradiantWrapper}
            >
              <LinearGradient
                colors={['#457b9d', '#1d3557']}
                start={{ x: 1.0, y: 1.0 }} end={{ x: 0.0, y: 1.0 }}
                style={styles.card}
              >
                <Text style={{color:'white', fontSize: 20 }}>Backside of Card</Text>
              </LinearGradient>
            </LinearGradient>
          </CardFlip>


        </View>

      )
    }
  };

  onSwiped = (type) => {
    console.log(`on swiped ${type}`)
    setCardIndex(cardIndex + 1)
    if (type === 'right') {
      setUserMovies(usersMovies.concat(movies[cardIndex]))
      dispatch(addMovie(cards[cardIndex]))
    }
    console.log('page number is _________', page, 'this is the index you are currentyl on %%%%%', cardIndex);
    if (cardIndex === cards.length - 4) {
      handleFetch()
    }
    console.log('!!!!!!!!!The user has liked', usersMovies.length)




  }

  onSwipedAllCards = () => {
    setSwipedAllCards(true)
    console.log('all cards swiped');
  };

  swipeLeft = () => {
    this.swiper.swipeLeft()
  };


  const label = {
    backgroundColor: 'transparent',
    borderColor: 'black',
    color: 'black',
    fontSize: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.70,
    shadowRadius: 3.84,
    elevation: 1,



  }

  return (
    <View style={styles.container}>


      <View style={styles.containerShadow}>

        <Swiper
          ref={swiper => {
            this.swiper = swiper
          }}
          style={{ height: 50, }}
          backgroundColor={'#4FD0E9'}
          infinite={false}
          onSwiped={() => this.onSwiped('general')}
          onSwipedLeft={() => this.onSwiped('left')}
          onSwipedRight={() => this.onSwiped('right')}
          onSwipedTop={() => this.onSwiped('top')}
          onSwipedBottom={() => navigation.navigate('Movie Details')}
          onTapCard={() => this['card' + cardIndex].flip()}

          cards={cards}
          cardIndex={cardIndex}
          cardVerticalMargin={5}
          marginTop={0}
          renderCard={renderCard}
          onSwipedAll={onSwipedAllCards}
          stackSize={4}
          stackSeparation={15}
          key={cards.length}
          overlayLabels={{
            bottom: {
              title: 'SEEN',
              style: {
                label: label,
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'start',
                  marginTop: '20%'
                }
              }
            },
            left: {
              title: <Icon

                name='thumbs-down'
                type='font-awesome'
                iconStyle={{ color: '#e2fdff', padding: 10, }}
                size={70}
              />,
              style: {
                label: label,
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                  alignSelf: 'center',
                  marginTop: 30,
                  marginLeft: -30,
                  paddingRight: 0
                }
              }
            },
            right: {
              title:
                <Icon

                  name='thumbs-up'
                  type='font-awesome'
                  iconStyle={{ color: '#e2fdff', padding: 10, }}
                  size={70}
                />,
              style: {
                label: label,
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  alignSelf: 'center',
                  marginTop: 30,
                  paddingLeft: 20
                }
              }
            },
            top: {
              title: <Icon

                name='star'
                type='font-awesome'
                iconStyle={{ color: 'gold', padding: 10, }}
                size={70}
              />,
              style: {
                label: label,
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'start',
                  marginTop: '100%',
                  paddingTop: '10%'
                }
              }
            }
          }}
          animateOverlayLabelsOpacity
          animateCardOpacity
          swipeBackCard
        />

      </View>
    </View >
  )

}




const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    borderRadius: 20,
    height: '100%',
    width: '100%',
    borderColor: '#1d3557',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    margin: 2,
    paddingLeft: 1,
    paddingTop: 1,
    paddingBottom: 5
  },
  text: {
    textAlign: 'left',
    paddingLeft: 15,
    paddingTop: 15,
    fontSize: 30,
    backgroundColor: 'transparent',
    color: 'white'
  },
  done: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    backgroundColor: 'transparent'
  },
  label: {
    backgroundColor: 'white',
    borderColor: 'black',
    color: 'black',
    borderWidth: 1,
    fontSize: 20
  },
  gradiantWrapper: {
    height: '100%', //Controls the height of the actual cards
    width: '100%',  //Contols width of the actual cards
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 22,
    paddingRight: 2,
    paddingBottom: 2,

  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: -10,
      height: 5,
    },
    shadowOpacity: 0.50,
    shadowRadius: 3.84,

    elevation: 3,
    height: '100%',
    width: '100%',
  },

  movieDescription: {

    alignSelf: 'flex-start',
    paddingLeft: 15,
    paddingTop: 0,
    color: 'white',
    fontWeight: '300' 
  },


  cardFlipContainer: {
    height: '73%', //Controls the height of the actual cards
    width: '93%',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 100
  },

  card1: {
    backgroundColor: '#FE474C',
  },
  card2: {
    backgroundColor: '#FEB12C',
  },
  label: {
    lineHeight: 470,
    textAlign: 'center',
    fontSize: 55,
    fontFamily: 'System',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },



})
