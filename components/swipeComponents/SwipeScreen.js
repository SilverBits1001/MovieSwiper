import React, { Component } from 'react'
import Swiper from 'react-native-deck-swiper'
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { movies } from './db'
import { Image } from 'react-native'
import { useState, useEffect } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'
import { Dimensions } from 'react-native';


export default function SwipeScreen() {


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

console.log('window dimension', windowHeight*.80);

  const [cards, setCards] = useState(movies)
  const [swipedAllCards, setSwipedAllCards] = useState(false)
  const [swipeDirection, setSwipeDirection] = useState('')
  const [cardIndex, setCardIndex] = useState(0)
  const [nameTitle, setnameTitle] = useState('')
  const [numberSwiped, setNumberSwiped] = useState(0)

  /*   useEffect(() => {
      fetch(
        'https://api.themoviedb.org/3/trending/all/week?api_key=72f3e8dec55757728e250e173bc56745&page=2'
      )
        .then((response) => response.json())
        .then((data) => {
          setCards(data.results);
          console.log('API was fetched again');
        });
    }, []); */




  const titleName = ''
  renderCard = (card, index, titleName) => {
    console.log('Movies are now loaded to cards with a length of', cards.length)
    if (card === undefined) {
      return <View></View>
    } else {

      card.name ? titleName = card.name : titleName = card.title
      return (
        <LinearGradient
          colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
          start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
          style={styles.grediant}
        >
          <View style={styles.card}>
            <Image
              resizeMode='cover'
              style={{
                width: '100%',
                height: '100%',
                flex: 3,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20
              }}
              source={{
                uri: `https://image.tmdb.org/t/p/w500${card.poster_path}`,
              }}
            />
            <View style={{ flex: 1 }}>
              <Text style={styles.text}>{titleName}</Text>
              <ScrollView>
                <Text style={{ padding: 10, color: 'white' }}>{card.overview}</Text>
              </ScrollView>
            </View>
          </View>
        </LinearGradient>

      )
    }


  };

  onSwiped = (type) => {
    console.log(`on swiped ${type}`)
    if (numberSwiped <= cards.length) {
      setNumberSwiped(numberSwiped + 1)
      console.log('swipe updated ', numberSwiped);
    } else {
      setNumberSwiped(0)
      console.log('reset swiped');
    }

    console.log('final', numberSwiped);

  }

  onSwipedAllCards = () => {
    setSwipedAllCards(true)
  };

  swipeLeft = () => {
    this.swiper.swipeLeft()
  };

  const label = {
    backgroundColor: 'white',
    borderColor: 'black',
    color: 'black',
    fontSize: 20,

  }
  return (
    <View style={styles.container}>
      <View >
        <Swiper
          ref={swiper => {
            this.swiper = swiper
          }}
          style={{ height: 50 }}
          backgroundColor={'#4FD0E9'}
          infinite
          onSwiped={() => this.onSwiped('general')}
          onSwipedLeft={() => this.onSwiped('left')}
          onSwipedRight={() => this.onSwiped('right')}
          onSwipedTop={() => this.onSwiped('top')}
          onSwipedBottom={() => this.onSwiped('bottom')}
          onTapCard={this.swipeLeft}
          cards={cards}
          cardIndex={cardIndex}
          cardVerticalMargin={20}
          marginTop={0}
          renderCard={renderCard}
          onSwipedAll={onSwipedAllCards}
          stackSize={3}
          stackSeparation={15}
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
              title: 'UNINETERESTED',
              style: {
                label: label,
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  marginTop: 30,
                  marginLeft: -30
                }
              }
            },
            right: {
              title: 'INTERESTED',
              style: {
                label: label,
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  marginTop: 30,
                  marginLeft: 30
                }
              }
            },
            top: {
              title: 'RECCOMEND',
              style: {
                label: label,
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'start',
                  marginTop: '100%'
                }
              }
            }
          }}
          animateOverlayLabelsOpacity
          animateCardOpacity
          swipeBackCard
        >
          <Button onPress={() => this.swiper.swipeBack()} title='Swipe Back' />
        </Swiper>
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3a506b'
  },
  card: {
    borderRadius: 20,
    height: '100%',
    width: '100%',
    borderColor: '#272640',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3a506b',
    margin: 2,
  },
  text: {
    textAlign: 'center',
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
  grediant: {
    height: '80%',
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems:'center',
    borderRadius: 22,
    paddingRight: 2,
    paddingBottom:2
  }

})

