/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Alert, ScrollView, FlatList, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';

export interface State {
  text?: string,
}

type Props = {};
export default class Favoris extends Component<Props, State> {
  state: State;
  setState: any;

  constructor(props: any) {
    super(props);
    this.state = {
      text: 'Vélo, t-shirt, Nike, ballon...'
    }
  }

    _renderTitleIndicator() {
        return <PagerTitleIndicator                 
                style={styles.indicatorContainer}
                titles={['one', 'two', 'three']} 
                />;
    }

   
    render() {
        

        return (
            <View style={styles.container}>
            <Text style={{fontSize: 28, color: "black", fontWeight: 'bold', marginTop: 24}}>Favoris</Text>

            <View style={styles.containerTitle}>
              <View style={{alignItems: 'center'}}>
                <Text style={styles.textTitle}>Voir tout</Text>
                <View style={{width: 8, height: 8, backgroundColor: 'black', borderRadius: 24, marginTop: 8}}></View>
              </View>
              <View>
                <Text style={styles.textTitle}>En stock</Text>
                <View style={{width: 8, height: 8, backgroundColor: 'transparent', borderRadius: 24, marginTop: 8}}></View>
              </View>
              <View>
                <Text style={styles.textTitle}>En promo</Text>
                <View style={{width: 8, height: 8, backgroundColor: 'transparent', borderRadius: 24, marginTop: 8}}></View>
              </View>
      
            </View>

            <IndicatorViewPager
            style={{flex:1, paddingTop:20, backgroundColor:'white'}}
            indicator={this._renderTitleIndicator()}
        >
            <View style={{backgroundColor:'cadetblue'}}>
             <Text>pinpin</Text>   
             </View>
            <View style={{backgroundColor:'cornflowerblue'}}>
                <Text>page two</Text>
            </View>
   
        </IndicatorViewPager>

 

           


          </View>
        );
      }

      
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '90%',
        marginLeft: '5%'
      },
      indicatorContainer: {
        height: 50,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        },
      inputSearch: {
        marginTop: 24,
        backgroundColor:'white',
        borderRadius: 24,
        height: 40,
        borderColor: 'rgba(0,0,0,0)',
        shadowColor: "#cfcfcf",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.9,
        shadowRadius: 1.41,
        elevation: 2,
        paddingLeft: 18,
        color:'#cfcfcf'
      },
      containerTitle: {
        width: '110%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 40,
        paddingBottom: 30, 
      },
      textTitle: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        textTransform: 'uppercase',
      },
      containerItem: {
        width: '100%',
        height: 'auto',
        marginTop: 6, 
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
      item: {
        width: '48%',
        height: 'auto',
        borderRadius: 24,
        overflow: 'hidden',
        marginBottom: 16,
        paddingBottom: 22,
      },
      imageItem: {
        width: '100%',
        height: 180,
        resizeMode: 'cover',
        borderBottomRightRadius: 24,
        borderBottomLeftRadius: 24,
      },
      imageCoeur: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
        position: 'absolute',
        top: 16,
        right:16
      },
      promoItem: {
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
      promoOrangeItem: {
        backgroundColor: '#F5B335'
      },
      titleItem: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        marginTop: 8
      },
      priceItem: {
        color: '#E30612',
        fontWeight: 'bold',
        fontSize: 14,
      },  
      recallMe: {
        width: '97%',
        marginLeft: '1.5%',
        paddingLeft: 4,
        paddingRight: 4,
        paddingTop: 4,
        paddingBottom: 4,
        borderRadius: 24,
        alignItems: 'center',
        flexDirection: 'column',
        shadowColor: "#000",
        backgroundColor: 'white',
        marginTop: 6,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        }   
});
