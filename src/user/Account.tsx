/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Alert, ScrollView, FlatList, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';

export interface State {
}

type Props = {};
export default class Account extends Component<Props, State> {
  state: State;
  setState: any;

  constructor(props: any) {
    super(props);
    this.state = {
    }
  }

   
    render() {
        

        return (
          <View style={styles.container}>

            <View style={styles.topCtn}>

                <View style={styles.flexBetween}>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                        <Image source={require('../assets/img/icons/settings.png')} style={{width: 12, height:12, resizeMode: 'contain', position: 'relative', top: 4}}/>
                        <Text style={{color:'white', fontWeight: 'bold', fontSize: 14, marginLeft: 8}}>Paramètres</Text>
                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                        <Image source={require('../assets/img/icons/notification.png')} style={{width: 12,height:12, resizeMode: 'contain', position: 'relative', top: 4}}/>
                        <Text style={{color:'white', fontWeight: 'bold', fontSize: 14, marginLeft: 8}}>Notifications</Text>
                    </View>

                </View>

            </View>


            <View style={styles.contentAccount}>
                <View style={{flexDirection: 'column', alignItems:'center'}}>
                    <Image source={require('../assets/img/julien.png')} style={{borderRadius: 120, width: 140, height: 140, resizeMode: 'cover'}} />
                    <Text style={{fontSize: 24, fontWeight: 'bold', color: 'black', marginTop: 12}}>Julien Macé</Text>
                    <Text style={{fontSize: 14, color: '#D6D6D6', paddingBottom: 24}}>Inscrit depuis 10/02/2019</Text>
                </View>
            </View>

            <ScrollView>

            <View style={styles.ctnProfil}>
                <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold', marginTop: 36}}>PROFIL SPORTIF</Text>

                <View style={styles.card}>
                    <Text style={{fontSize: 14, position: 'absolute', top: 15, right: 18, color: '#14448d', fontWeight: 'bold'}}>Modifier</Text>

                    <Text style={{paddingLeft: 18, color:'black', fontSize: 18, fontWeight: 'bold', marginBottom: 8}}>Infos perso</Text>
                    <Text style={{paddingLeft: 18, color:'D6D6D6', fontSize: 14}}>Julien Macé, 22 ans</Text>
                    <Text style={{paddingLeft: 18, color:'D6D6D6', fontSize: 14}}>Bordeaux 33000, FRANCE</Text>
                </View>

                <View style={[styles.card, styles.cardColumn]}>
                    <Text style={{fontSize: 14, position: 'absolute', top: 15, right: 18, color: '#14448d', fontWeight: 'bold'}}>Modifier</Text>
                    <Text style={{paddingLeft: 18, color:'black', fontSize: 18, fontWeight: 'bold', marginBottom: 8, position: 'absolute', top: 18, left: 0}}>Mes tailles</Text>

                  <View style={{width: '90%', flexDirection: 'row', justifyContent:'flex-start'}}>
                    <View style={{alignItems: 'center', marginLeft: 12}}>
                          <View style={{width: 50, height: 50, borderRadius: 50, backgroundColor: '#5ACB38', alignItems: 'center'}}><Text style={{color:'white', fontWeight: 'bold',fontSize: 18, marginTop: 12}}>M</Text></View>    
                          <Text style={{color: 'black', fontWeight: 'bold', marginTop: 4}}>Haut</Text>
                      </View> 
                      <View style={{alignItems: 'center', marginLeft: 12}}>
                          <View style={{width: 50, height: 50, borderRadius: 50, backgroundColor: '#6ce348', alignItems: 'center'}}><Text style={{color:'white', fontWeight: 'bold',fontSize: 18, marginTop: 12}}>B</Text></View>    
                          <Text style={{color: 'black', fontWeight: 'bold', marginTop: 4}}>Bas</Text>
                      </View> 
                      <View style={{alignItems: 'center', marginLeft: 2}}>
                          <View style={{width: 50, height: 50, borderRadius: 50, backgroundColor: '#5ACB38', alignItems: 'center'}}><Text style={{color:'white', fontWeight: 'bold',fontSize: 18, marginTop: 12}}>43</Text></View>    
                          <Text style={{color: 'black', fontWeight: 'bold', marginTop: 4}}>Chaussures</Text>
                      </View> 
                  </View>
                 
                </View>


                <View style={[styles.card, styles.cardColumn]}>
                    <Text style={{fontSize: 14, position: 'absolute', top: 15, right: 18, color: '#14448d', fontWeight: 'bold'}}>Modifier</Text>
                    <Text style={{paddingLeft: 18, color:'black', fontSize: 18, fontWeight: 'bold', marginBottom: 8, position: 'absolute', top: 18, left: 0}}>Ce qui m'intéresse</Text>

                  <View style={{width: '90%', flexDirection: 'row', justifyContent:'flex-start', flexWrap: 'wrap'}}>
                    <View style={{alignItems: 'center', marginBottom: 12, marginLeft: 12, backgroundColor: '#F2F2F2', width: 90, height: 90, borderRadius: 24}}>
                      <Image source={require('../assets/img/icons/nike.png')} style={{width: 70, height: 70, resizeMode: 'contain', marginTop: 10}}/>
                    </View> 

                    <View style={{alignItems: 'center', marginBottom: 12, marginLeft: 12, backgroundColor: '#F2F2F2', width: 90, height: 90, borderRadius: 24}}>
                      <Image source={require('../assets/img/icons/babolat.png')} style={{width: 70, height: 70, resizeMode: 'contain', marginTop: 10}}/>
                    </View> 

                    <View style={{alignItems: 'center', marginBottom: 12, marginLeft: 12, backgroundColor: '#F2F2F2', width: 90, height: 90, borderRadius: 24}}>
                      <Image source={require('../assets/img/icons/Puma.png')} style={{width: 70, height: 70, resizeMode: 'contain', marginTop: 10}}/>
                    </View> 

                    <View style={{alignItems: 'center', marginBottom: 12, marginLeft: 12, backgroundColor: '#F2F2F2', width: 90, height: 90, borderRadius: 24}}>
                      <Image source={require('../assets/img/icons/Reebok.png')} style={{width: 70, height: 70, resizeMode: 'contain', marginTop: 10}}/>
                    </View> 

                    <View style={{alignItems: 'center', marginBottom: 12, marginLeft: 12, backgroundColor: '#F2F2F2', width: 90, height: 90, borderRadius: 24}}>
                      <Image source={require('../assets/img/icons/nike.png')} style={{width: 70, height: 70, resizeMode: 'contain', marginTop: 10}}/>
                    </View> 

                  </View>
                 
                </View>

            </View>
            </ScrollView>


          </View>

        );
      }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: 'white'
      },
      topCtn: {
        width: '100%',
        height: 160,
        backgroundColor: '#14448d',
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24
      },
      flexBetween: {
        width: '90%',
        marginLeft: '5%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 12
      },
      contentAccount: {
          width: '90%',
          height: 'auto',
          marginLeft: '5%',
          backgroundColor: 'transparent',
          marginTop: -76
      },
      ctnProfil: {
        width: '90%',
        marginLeft: '5%',
        paddingBottom: 30
      },
      card: {
          marginTop: 24,
          width: '98%',
          paddingTop: 12,
          paddingBottom: 12,
          marginLeft: '1%',
          backgroundColor: 'white',
          shadowColor: "#000",
          shadowOffset: {
              width: 0,
              height: 1,
          },
          shadowOpacity: 0.20,
          shadowRadius: 1.41,  
          elevation: 3,
          borderRadius: 24, 
      },
      cardColumn: {
          flexDirection: 'row',
          justifyContent:'space-between',
          paddingTop: 60,
          paddingBottom: 24,
      }
 
});
