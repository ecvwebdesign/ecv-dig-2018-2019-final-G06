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
export default class SearchAndExplore extends Component<Props, State> {
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
            itemTextStyle={styles.textTitle}
            selectedItemTextStyle={[styles.textTitle, styles.strong]}
            selectedBorderStyle={styles.borderSmall}
            titles={['VOIR TOUT', 'EN STOCK', 'EN PROMOTION']} 
            />;
}


   
    render() {
        

        return (
          <View style={styles.container}>
            <Text style={{fontSize: 28, color: "black", fontWeight: 'bold', marginTop: 24}}>Rechercher</Text>

            <TextInput
              style={styles.inputSearch}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
            />
            <View style={{width: '100%', height: 40}}></View>
            <IndicatorViewPager
            style={{flex:1, paddingTop:20, backgroundColor:'white'}}
            indicator={this._renderTitleIndicator()}
             >

    
<View>
                <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.containerItem}>

                    <View style={styles.item}>
                    <Image source={require('./assets/img/product/stefan.jpg')} style={styles.imageItem}/>
                    <Image source={require('./assets/img/icons/coeur-noir.png')} style={styles.imageCoeur}/>

                    <Text style={styles.titleItem}>Nike SB - Canvas</Text>
                    <Text style={styles.priceItem}>dès 46.90€</Text>

                    </View>

                    <View style={styles.item}>
                    <Image source={require('./assets/img/product/Kappa.jpeg')} style={styles.imageItem}/>
                    <Image source={require('./assets/img/icons/coeur-noir.png')} style={styles.imageCoeur}/>

                    <Text style={[styles.promoItem, styles.promoOrangeItem]}>52%</Text>

                    <Text style={styles.titleItem}>Nike SB - Canvas</Text>
                    <Text style={styles.priceItem}>dès 46.90€</Text>
                    </View>


                    <View style={styles.item}>
                    <Image source={require('./assets/img/product/Kappa.jpeg')} style={styles.imageItem}/>
                    <Image source={require('./assets/img/icons/coeur-noir.png')} style={styles.imageCoeur}/>

                    <Text style={[styles.promoItem]}>92%</Text>

                    <Text style={styles.titleItem}>Nike SB - Canvas</Text>
                    <Text style={styles.priceItem}>dès 46.90€</Text>
                    </View>

                    <View style={styles.item}>
                    <Image source={require('./assets/img/product/stefan.jpg')} style={styles.imageItem}/>
                    <Image source={require('./assets/img/icons/coeur-noir.png')} style={styles.imageCoeur}/>

                    <Text style={styles.titleItem}>Nike SB - Canvas</Text>
                    <Text style={styles.priceItem}>dès 46.90€</Text>
   
                    </View>

                    <View style={styles.item}>
                    <Image source={require('./assets/img/product/stefan.jpg')} style={styles.imageItem}/>
                    <Image source={require('./assets/img/icons/coeur-noir.png')} style={styles.imageCoeur}/>

                    <Text style={styles.titleItem}>Nike SB - Canvas</Text>
                    <Text style={styles.priceItem}>dès 46.90€</Text>
  
                    </View>

                    <View style={styles.item}>
                    <Image source={require('./assets/img/product/Kappa.jpeg')} style={styles.imageItem}/>
                    <Image source={require('./assets/img/icons/coeur-noir.png')} style={styles.imageCoeur}/>

                    <Text style={[styles.promoItem, styles.promoOrangeItem]}>69%</Text>

                    <Text style={styles.titleItem}>Nike SB - Canvas</Text>
                    <Text style={styles.priceItem}>dès 46.90€</Text>


                    </View>


                    </View>

                    </ScrollView> 
            </View>


            <View>
                <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.containerItem}>

                    <View style={styles.item}>
                    <Image source={require('./assets/img/product/stefan.jpg')} style={styles.imageItem}/>
                    <Image source={require('./assets/img/icons/coeur-noir.png')} style={styles.imageCoeur}/>

                    <Text style={styles.titleItem}>Nike SB - Canvas</Text>
                    <Text style={styles.priceItem}>dès 46.90€</Text>

                    </View>

                    <View style={styles.item}>
                    <Image source={require('./assets/img/product/Kappa.jpeg')} style={styles.imageItem}/>
                    <Image source={require('./assets/img/icons/coeur-noir.png')} style={styles.imageCoeur}/>

                    <Text style={[styles.promoItem, styles.promoOrangeItem]}>52%</Text>

                    <Text style={styles.titleItem}>Nike SB - Canvas</Text>
                    <Text style={styles.priceItem}>dès 46.90€</Text>
                    </View>


                    <View style={styles.item}>
                    <Image source={require('./assets/img/product/Kappa.jpeg')} style={styles.imageItem}/>
                    <Image source={require('./assets/img/icons/coeur-noir.png')} style={styles.imageCoeur}/>

                    <Text style={[styles.promoItem]}>92%</Text>

                    <Text style={styles.titleItem}>Nike SB - Canvas</Text>
                    <Text style={styles.priceItem}>dès 46.90€</Text>
                    </View>

                    <View style={styles.item}>
                    <Image source={require('./assets/img/product/stefan.jpg')} style={styles.imageItem}/>
                    <Image source={require('./assets/img/icons/coeur-noir.png')} style={styles.imageCoeur}/>

                    <Text style={styles.titleItem}>Nike SB - Canvas</Text>
                    <Text style={styles.priceItem}>dès 46.90€</Text>
   
                    </View>

                    <View style={styles.item}>
                    <Image source={require('./assets/img/product/stefan.jpg')} style={styles.imageItem}/>
                    <Image source={require('./assets/img/icons/coeur-noir.png')} style={styles.imageCoeur}/>

                    <Text style={styles.titleItem}>Nike SB - Canvas</Text>
                    <Text style={styles.priceItem}>dès 46.90€</Text>
  
                    </View>

                    <View style={styles.item}>
                    <Image source={require('./assets/img/product/Kappa.jpeg')} style={styles.imageItem}/>
                    <Image source={require('./assets/img/icons/coeur-noir.png')} style={styles.imageCoeur}/>

                    <Text style={[styles.promoItem, styles.promoOrangeItem]}>69%</Text>

                    <Text style={styles.titleItem}>Nike SB - Canvas</Text>
                    <Text style={styles.priceItem}>dès 46.90€</Text>


                    </View>


                    </View>

                    </ScrollView> 
            </View>



            <View>
                <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.containerItem}>

                    <View style={styles.item}>
                    <Image source={require('./assets/img/product/stefan.jpg')} style={styles.imageItem}/>
                    <Image source={require('./assets/img/icons/coeur-noir.png')} style={styles.imageCoeur}/>

                    <Text style={styles.titleItem}>Nike SB - Canvas</Text>
                    <Text style={styles.priceItem}>dès 46.90€</Text>

                    </View>

                    <View style={styles.item}>
                    <Image source={require('./assets/img/product/Kappa.jpeg')} style={styles.imageItem}/>
                    <Image source={require('./assets/img/icons/coeur-noir.png')} style={styles.imageCoeur}/>

                    <Text style={[styles.promoItem, styles.promoOrangeItem]}>52%</Text>

                    <Text style={styles.titleItem}>Nike SB - Canvas</Text>
                    <Text style={styles.priceItem}>dès 46.90€</Text>
                    </View>


                    <View style={styles.item}>
                    <Image source={require('./assets/img/product/Kappa.jpeg')} style={styles.imageItem}/>
                    <Image source={require('./assets/img/icons/coeur-noir.png')} style={styles.imageCoeur}/>

                    <Text style={[styles.promoItem]}>92%</Text>

                    <Text style={styles.titleItem}>Nike SB - Canvas</Text>
                    <Text style={styles.priceItem}>dès 46.90€</Text>
                    </View>

                    <View style={styles.item}>
                    <Image source={require('./assets/img/product/stefan.jpg')} style={styles.imageItem}/>
                    <Image source={require('./assets/img/icons/coeur-noir.png')} style={styles.imageCoeur}/>

                    <Text style={styles.titleItem}>Nike SB - Canvas</Text>
                    <Text style={styles.priceItem}>dès 46.90€</Text>
   
                    </View>

                    <View style={styles.item}>
                    <Image source={require('./assets/img/product/stefan.jpg')} style={styles.imageItem}/>
                    <Image source={require('./assets/img/icons/coeur-noir.png')} style={styles.imageCoeur}/>

                    <Text style={styles.titleItem}>Nike SB - Canvas</Text>
                    <Text style={styles.priceItem}>dès 46.90€</Text>
  
                    </View>

                    <View style={styles.item}>
                    <Image source={require('./assets/img/product/Kappa.jpeg')} style={styles.imageItem}/>
                    <Image source={require('./assets/img/icons/coeur-noir.png')} style={styles.imageCoeur}/>

                    <Text style={[styles.promoItem, styles.promoOrangeItem]}>69%</Text>

                    <Text style={styles.titleItem}>Nike SB - Canvas</Text>
                    <Text style={styles.priceItem}>dès 46.90€</Text>


                    </View>


                    </View>

                    </ScrollView> 
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
        backgroundColor: 'white'
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
      borderSmall: {
        width: 8,
        height:8,
        backgroundColor: 'black',
        borderRadius: 24,
        position: 'absolute',
        bottom:0,
        left:'50%',
        marginLeft:-4,
      },
      textTitle: {
        fontSize: 16,
        color: 'black',
        textTransform: 'uppercase',
      },
      strong: {
        fontWeight: 'bold'
      },
      containerItem: {
        width: '100%',
        height: 'auto',
        marginTop: 60, 
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
