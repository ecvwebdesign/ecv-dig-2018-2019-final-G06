/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Dimensions, Text, View, TouchableOpacity, Image} from 'react-native';
// import ReactNativeParallaxHeader from 'react-native-parallax-header';
import Carousel from 'react-native-snap-carousel';




const { width, height } = Dimensions.get("window");

const CARD_WIDTH = width * 80 / 100;

const images = {
    background: require('../assets/img/leio-mclaren-leiomclaren-9WlqSF_9elM-unsplash.jpg'), // Put your own image here
};

export interface State {
  entries?: any;
}

type Props = {};
export default class Home extends Component<Props, State> {
  state: State;

  constructor(props: any) {
    super(props);
    this.state = {
      entries: [
        {
          image: "../assets/img/airforce.jpg",
          title: "Nike SB - Canvas",
          price: "dès 46.90€",
          avis: '98',
          numberAvis: '34'
        },
        {
          image: "../assets/img/airforce.jpg",
          title: "Nike SB - Canvas",
          price: "dès 46.90€",
          avis: '72',
          numberAvis: '34'
        },
        {
          image: "../assets/img/airforce.jpg",
          title: "Nike SB - Canvas",
          price: "dès 46.90€",
          avis: '34',
          numberAvis: '34'
        }
      ],
    };
  }

  // renderNavBar = () => (
  //   <View style={[styles.navContainer, {zIndex: 1}]}>
  //     <View style={styles.statusBar} />
  //     <View style={styles.navBar}>
  //       <TouchableOpacity style={styles.iconLeft} onPress={() => {}}>
  //           <Text>onjon</Text>
  //       </TouchableOpacity>
  //       <TouchableOpacity style={styles.iconRight} onPress={() => {}}>
  //       <Text>onjon</Text>
  //       </TouchableOpacity>
  //     </View>
  //   </View>
  // )

  _renderItem ({item, index}) {

    // console.warn(item.avis);
    const style = [styles.card];
  
    if(item.avis < 80){
      style.push(styles.orangeBack);
    }else if(item.avis < 50){
      style.push(styles.redDislike);
    }

    
    return ( 
        <View style={styles.slide} key={index}>
          <Image source={require('../assets/img/airforce.jpg')} style={{width: '100%', height: 180, resizeMode: 'cover', borderRadius: 16}}/>
            <Text style={[styles.card, style]}>
              {item.avis}%
            </Text>

            <View style={{marginLeft: 18}}>
              <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold', marginTop: 12}}>{ item.title }</Text>
              <Text style={{color: '#E30612', fontSize: 16, fontWeight: 'bold', marginBottom: 4}}>{ item.price }</Text>

              <View style={{justifyContent: 'flex-start', flexDirection: 'row'}}> 
                <Image source={require('../assets/img/icons/avis-star.png')} style={{width: 100, height: 28, resizeMode: 'contain'}}/>
                <Text style={{color: '#FCE110', marginLeft: 12, position: 'relative', top: 4}}>{item.numberAvis} avis</Text>

              </View>
            </View>

            <View style={styles.likeOrNot}>

                <View style={{justifyContent: 'center', alignItems: 'center', marginLeft: 38}}>
                    <Image source={require('../assets/img/icons/coeur-noir-barre.png')} style={styles.imgAdd} />
                    <Text style={{color: 'black'}}>Non merci</Text>
                </View>

                <View style={{justifyContent: 'center', alignItems: 'center', marginRight: 38}}>
                  <Image source={require('../assets/img/icons/coeur-noir.png')} style={styles.imgAdd} />
                  <Text style={{color: 'black'}}>Ajouter !</Text>
                </View>

            </View>
        </View>
    );
  }
  
  render() {
    return (
        <View style={styles.container}>
              <View style={{width: '100%', height: 250, position: 'relative'}}>

                <View style={{width: '80%', position: 'absolute', top: 40, left:'10%', zIndex: 9999}}>
                  <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold', marginBottom: 20}}>Bonjour Julien</Text>
                  <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>D'humeur sportive aujourd'hui ?</Text>
                </View>

                <Image source={require('../assets/img/leio-mclaren-leiomclaren-9WlqSF_9elM-unsplash.jpg')} style={{width: '100%', height: 280, resizeMode: 'cover'}} />
              </View>

              <View style={{width: '100%', marginBottom: 30, borderTopLeftRadius: 60, borderTopRightRadius: 60, marginTop: -54, backgroundColor: 'white'}}> 
                
                <View style={{width: '80%', marginLeft: '10%',}}>

                  <Text style={styles.titleBlack}>Vos matches du jour !</Text>
                  <Text style={styles.colorGrey}>Jetez un coup d'oeuil aux produits les plus suceptibles de vous plaire.</Text>
                  
                  <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={this.state.entries}
                    renderItem={this._renderItem}
                    sliderWidth={CARD_WIDTH}
                    itemWidth={300} 
                    layout={'tinder'}
                    layoutCardOffset={'9'}
                  />

                </View>


          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      fontFamily: 'OpenSans-Regular'
    },
    contentContainer: {
      flexGrow: 1,
    },
    navContainer: {
      height: 100,
      marginHorizontal: 10,
    },
    statusBar: {
      height: 100,
      backgroundColor: 'transparent',
    },
    navBar: {
      height: 100,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: 'transparent',
    },
    titleStyle: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 18,
    },
    card:{
      position: 'absolute',
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 12,
      paddingRight: 12,
      backgroundColor: '#5ACB38',
      top: 16,
      left: 16,
      borderRadius: 24,
      color: 'white'
    },
    orangeBack: {
      backgroundColor: 'orange'
    },
    redDislike: {
      backgroundColor: '#E30612'
    },
    titleBlack: {
        fontSize: 24,
        color: "black",
        fontWeight: 'bold',
        marginTop: 24,
        marginBottom: 8,
        fontFamily: 'OpenSans-Bold'
    },
    colorGrey: {
        fontSize: 16,
        color: '#707070',
        marginBottom: 20
    },
    slide: { 
      width: '100%',
      height:'auto',
      borderRadius: 6,
      overflow: 'hidden',
      backgroundColor: 'white', 
      paddingBottom: 10,
    },
    title: {
      color: 'black',
      fontSize: 18, 
    },
    likeOrNot: {
      borderColor: 'rgba(0,0,0,0)',
      borderRadius: 10.5,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.80,
      shadowRadius: 1.41,
      elevation: 2,
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '90%',
      height:'auto',
      paddingTop: 12,
      paddingBottom: 12,
      backgroundColor: 'white',
      marginLeft: '5%',
      marginTop: 18, 
    },
    imgAdd: {
      width: 20,
      height: 20,
      resizeMode: 'contain',
      justifyContent: 'center',
      alignItems: 'center',
    }
  });