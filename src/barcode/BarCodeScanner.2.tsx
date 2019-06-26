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

                  <View style={[styles.containerThreeColumns, styles.marginBottomContainer]}>

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
        height:500,
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
        paddingBottom: 200,
      }
});
