/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';
import Home from '../home/Home';
import UploadPicture from '../uplaud/UplaodPicture';
import MapShops from '../map/MapShop';
import BarCode  from '../barcode/BarCode';

export interface State {
}

type Props = {};
export default class ViewPager extends Component<Props, State> {
  state: State;

  constructor(props: any) {
    super(props);
    this.state = {
    };
  }


  _renderTabIndicator() {
    const style = {
      width: 28,
      height: 28,
      color: '#004492',
    };

    let tabs = [{
            text: 'Accueil',
            iconSource: require('../assets/img/icons/home-gris.png'),
            selectedIconSource: require('../assets/img/icons/home-bleu.png')
        },{
            text: 'Recherche',
            iconSource: require('../assets/img/icons/search-gris.png'),
            selectedIconSource: require('../assets/img/icons/search-bleu.png')
        },{
            text: 'Code barre',
            iconSource: require('../assets/img/icons/home-gris.png'),
            selectedIconSource: require('../assets/img/icons/home-bleu.png')
        },
        {
          text: 'Favoris',
          iconSource: require('../assets/img/icons/home-gris.png'),
          selectedIconSource: require('../assets/img/icons/home-bleu.png')
        },
        {
          text: 'Profil',
          iconSource: require('../assets/img/icons/home-gris.png'),
          selectedIconSource: require('../assets/img/icons/home-bleu.png')
        }
      ];
    return <PagerTabIndicator tabs={tabs} selectedIconStyle={style} iconStyle={style} />;
}

  render() {
    return (
      <View style={styles.container}>

            {/* <View style={styles.ctnHeader}>

             <Image style={styles.burgerMenu} source={require('../assets/img/menu-burger.png')} />

              <Image style={styles.logoImage} source={require('../assets/img/logo.png')} />

              <Image style={styles.profilImage} source={require('../assets/img/avatar.png')} />

            </View> */}

            <IndicatorViewPager
                style={{flex:1, paddingTop:0, backgroundColor:'white'}}
                indicator={this._renderTabIndicator()}
              >
                 <View style={styles.centerCtn}>
                    <Home/>
                  </View>

                  <View style={styles.centerCtn}>
                    <MapShops />
                  </View>
   
                  <View style={styles.centerCtn}>  
                
                    <UploadPicture/>
                  </View>

                  <View style={styles.centerCtn}> 
                    <BarCode />        
                  </View>

              </IndicatorViewPager>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    width: "100%",
  },
  containerWidth: {
    width: '100%',
  },
  ctnHeader: {
    width: '100%',
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#F8F8F8',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logoImage: {
    width: 200,
    height: 35,
    resizeMode: 'contain',
  },
  burgerMenu: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginLeft: 16
  },
  profilImage: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    marginRight: 16
  }
});
