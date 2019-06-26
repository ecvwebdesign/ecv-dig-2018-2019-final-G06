/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Alert, ScrollView, FlatList, Text, View, TouchableOpacity, Image} from 'react-native';
 

const coeurRed = '../assets/img/icons/coeur-rouge.png';
const coeurBlack = '../assets/img/icons/coeur-noir.png';

export interface State {
  iLoveHeart?: boolean,
}

type Props = {};
export default class Single extends Component<Props, State> {
  state: State;
  setState: any;

  constructor(props: any) {
    super(props);
    this.state = {
      iLoveHeart: false
    }

  }

  changeStateImage = () => {
    this.setState({
      iLoveHeart: !this.state.iLoveHeart
    });
    console.warn(this.state.iLoveHeart)
  }

    render() {
        

        return (

          <View style={styles.container}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', position: 'absolute', top: 0, width: '100%', zIndex:9999}}>

                <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: 16, marginLeft: 24}}>
                  <Image source={require('../assets/img/left-arrow.png')} style={{width: 20, height: 20, resizeMode: 'contain', marginRight: 8}}/>
                  <Text style={{color: 'black', fontSize: 16}}>Retour</Text>
                </View>


              <TouchableOpacity onPress={this.changeStateImage}>
                <Image
                    style={{width: 30, height: 30, resizeMode: 'contain', marginRight: 18, marginTop: 26}}
                    source={ this.state.iLoveHeart === true ?                  
                      require('../assets/img/icons/coeur-rouge.png') : 
                      require('../assets/img/icons/coeur-noir.png')}
                  />
              </TouchableOpacity>
                


              </View>

              <View style={{width: '100%', height: 320, backgroundColor: 'white', alignItems: 'center'}}>
                <Image source={require('../assets/img/Vomero.jpg')} style={{width: '100%', flex: 1, resizeMode: 'contain'}}/>
              </View>

              <View style={styles.containerContentSingle}>

                <ScrollView>
                  
                  <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 22, fontWeight: 'bold', marginTop: 24, color: 'black'}}>Nike SB Stefan Janoski</Text>
                    <Text style={{color: '#707070', fontSize: 14, marginTop: 8}}>Chaussures de skate</Text>
                  </View>


                  <View style={styles.containerThreeColumns}>

                    <View style={{alignItems: 'center', width: '32%', height: 80}}>
                      <Image source={require('../assets/img/icons/note.png')} style={{width: 80, resizeMode: 'contain', marginTop: 10}} />
                      <Text style={{position: 'absolute', bottom: 0}}>42 avis</Text>
                    </View>

                    <View style={{alignItems: 'center', width: '32%', height: 80}}>
                      <Text style={{paddingLeft: 12, paddingRight: 12, paddingTop: 8, paddingBottom: 8, backgroundColor:'#5ACB38',  marginTop: 12, borderRadius: 24, color: 'white'}}>78%</Text>
                      <Text style={{position: 'absolute', bottom: 0}}>Compatibilité</Text>
                    </View>

                    <View style={{alignItems: 'center', width: '32%', height: 80}}>
                      <Image source={require('../assets/img/icons/People.png')} style={{width: 80, resizeMode: 'contain'}} />
                      <Text style={{position: 'absolute', bottom: 0}}>Intéressés</Text>
                    </View>

                  </View>


                  <View style={styles.cardText}>
                    <Text style={{fontSize: 18, color: 'black', fontWeight:'bold', marginTop: 24}}>Description</Text>
                    <Text style={{fontSize: 14, color: '#707070', marginTop: 4}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Text>
                  </View>

                  <View style={styles.cardText}>
                    <Text style={{fontSize: 18, color: 'black', fontWeight:'bold', marginTop: 24}}>Détails</Text>
                    <Text style={{fontSize: 14, color: '#707070', marginTop: 4}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Text>
                  </View>

                  <View style={styles.cardText}>
                    <Text style={{fontSize: 18, color: 'black', fontWeight:'bold', marginTop: 24}}>Entretien</Text>
                    <Text style={{fontSize: 14, color: '#707070', marginTop: 4}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Text>
                  </View>




                  <Text style={{fontSize: 18, color: 'black', fontWeight:'bold', marginTop: 24, marginLeft: '5%'}}>Pourquoi choisir ce produit ?</Text>

                  <View style={[styles.containerThreeColumns]}>

                    <View style={{alignItems: 'center', width: '32%', height: 80}}>
                      <Image source={require('../assets/img/icons/10.png')} style={{width: 80, resizeMode: 'contain', marginTop: 10, borderRadius: 50}} />
                      <Text style={{marginTop: 12}}>Skate</Text>
                    </View>

                    <View style={{alignItems: 'center', width: '32%', height: 80}}>
                      <Image source={require('../assets/img/icons/11.png')} style={{width: 80, resizeMode: 'contain', marginTop: 10, borderRadius: 50}} />
                      <Text style={{marginTop: 12}}>Trotinette</Text>
                    </View>

                    <View style={{alignItems: 'center', width: '32%', height: 80}}>
                      <Image source={require('../assets/img/icons/12.png')} style={{width: 80, resizeMode: 'contain', marginTop: 10, borderRadius: 50}} />
                      <Text style={{marginTop: 12}}>Prêt-à-porter</Text>
                    </View>

                  </View>


                  <Text style={{fontSize: 18, color: 'black', fontWeight:'bold', marginTop: 24, marginLeft: '5%', paddingTop: 40 }}>La communauté vous conseille</Text>

                  <View style={[styles.containerThreeColumns, styles.marginBottomContainer]}>

                    <View style={{alignItems: 'center', width: '49%', height: 80}}>
                      <Image source={require('../assets/img/icons/note.png')} style={{width: 80, resizeMode: 'contain', marginTop: 10, borderRadius: 50}} />
                      <Text style={{marginTop: 12}}>Basé sur 42 avis</Text>
                    </View>


                    <View style={{width: '49%', height: 80, alignItems: 'center'}}>
                      <Text style={styles.boxShadowP}>+ Confort</Text>
                      <Text style={[styles.boxShadowP, styles.marginP]}>+ Style</Text>
                    </View>


                  </View>

                  <View style={styles.avisCtn}>
                      <Text style={{width: '90%', marginLeft: '5%', fontSize: 16, color: '#164194'}}>Super confortable, à imperméabiliser avant. Je ne les quitte plus !</Text>
                  </View>

                  <View style={{width: '90%', marginLeft: '5%', marginTop:12, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                      
                      <View style={{justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../assets/img/icons/image-1.png')} style={{width: 40, height: 40, resizeMode: 'cover', borderRadius: 24}} />
                        <Text style={{fontSize: 14, color: '#707070', marginLeft: 12}}>Charlie</Text>
                      </View>

                      <Text style={{fontSize: 14, color: '#707070', marginLeft: 12, fontStyle: 'italic'}}>le 28/04/2019</Text>

                  </View>

                  
                  <View style={{marginBottom: 400, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', marginLeft: '5%', marginTop: 16}}>
                    <Text style={{fontSize: 14, color: '#164194', fontWeight: 'bold',}}>Lire tous les avis</Text>
                    <Image source={require('../assets/img/icons/arrow-r.png')} style={{width: 10, height: 10, resizeMode:'contain', marginLeft: 6}}/>
                  </View>


                  <View>
                    <Text style={{fontSize: 18, color: 'black', fontWeight:'bold', marginTop: 24, marginLeft: '5%', paddingTop: 40 }}>Où trouver ce produit ?</Text>
                  </View>





                  </ScrollView>
              </View>
          </View>
        );
      }
    }   

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
      },
      containerContentSingle: {
        width: '100%',
        height: 'auto',
        backgroundColor: '#F2F2F2',
        marginTop: -50,
        borderTopLeftRadius: 36,
        borderTopRightRadius: 36,
      },
      containerThreeColumns: {
        width: '90%',
        marginLeft: '5%',
        marginTop: 24,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
      },
      cardText: {
        width: '90%',
        marginLeft: '5%',
      },
      marginBottomContainer: {
        paddingBottom: 40,
      },
      boxShadowP: {
        width: 100,
        backgroundColor: 'white',
        paddingTop:10,
        paddingBottom: 10,
        paddingLeft: 14,
        paddingRight: 14,
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
      },
      marginP:{
        marginTop: 8
      },
      avisCtn: {
        width: '90%',
        backgroundColor: '#d1e2ff',
        marginLeft: '5%',
        borderRadius: 24,
        paddingTop: 14,
        paddingBottom: 14
        
      }
});
