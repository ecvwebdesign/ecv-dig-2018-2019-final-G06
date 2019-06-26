/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import ViewPager from './src/pager/Pager';


export interface State {
  onDoneBoarding?: boolean;
}

type Props = {};
export default class App extends Component<Props, State> {
  state: State;

  constructor(props: any) {
    super(props);
    this.state = {
      onDoneBoarding: false
    };
  }


  render() {
    if(this.state.onDoneBoarding){
    return (
      <View style={styles.container}>

        <ViewPager/>

      </View>
    );
    }else{
      return (
        <Onboarding
          onDone={() => this.setState({onDoneBoarding: true})}
          titleStyles={{ color: 'blue' }} // set default color for the title
          subTitleStyle={{color: 'blue'}}
          pages={[
            {
              backgroundColor: '#fff',
              image: <Image source={require('./src/assets/img/boarding/pattern-yuno-page-bienvenue.png')} style={{position: 'absolute', top: -200, left:0, zIndex: -1, flex: 1, width: '100%', resizeMode: 'cover'}} />,
              title: <View>
                      <View style={{marginTop: -160, alignItems: 'center'}}>
                        <Image source={require('./src/assets/img/boarding/yuno-cercle-bleu.png')} style={{width: 260, resizeMode: 'contain'}}/>
                      </View>
                      <View style={{marginTop: -100, alignItems: 'center'}}>
                        <Text style={{fontWeight: 'bold', color: 'black', fontSize: 36, fontFamily: 'OpenSans-Bold'}}>Bienvenue</Text>
                        <Text style={{color:'black', fontSize: 16}}>Avec Yuno trouvez le produit qu'il vous faut</Text>
                      </View>
                     </View>, 
            },
            {
              backgroundColor: '#fff',
              image: <Image source={require('./src/assets/img/boarding/pattern-yuno-page-scan.png')} style={{position: 'absolute', top: -124, left:0, zIndex: -1, flex: 1, width: '100%', resizeMode: 'cover'}} />,
              title: <View>
                      <View style={{marginTop: -160, alignItems: 'center'}}>
                        <Image source={require('./src/assets/img/boarding/Scan2.png')} style={{width: 140, resizeMode: 'contain'}}/>
                      </View>
                      <View style={{marginTop: -200, alignItems: 'center'}}> 
                        <Text style={{fontWeight: 'bold', color: 'black', fontSize: 36, fontFamily: 'OpenSans-Bold'}}>Scannez</Text>
                        <Text style={{color:'black', fontSize: 16, textAlign: 'center'}}>Un produit pour comprendre son utilisation et ses caractéristiques</Text>
                      </View>
                     </View>, 
            },
            {
              backgroundColor: '#fff',
              image: <Image source={require('./src/assets/img/boarding/pattern-yuno-page-scan.png')} style={{position: 'absolute', top: -150, left:0, zIndex: -1, flex: 1, width: '100%', resizeMode: 'cover'}} />,
              title: <View>
                      <View style={{marginTop: -240, alignItems: 'center'}}>
                        <Image source={require('./src/assets/img/boarding/Decouvrez2.png')} style={{width: 220, resizeMode: 'contain'}}/>
                      </View>
                      <View style={{marginTop: -200, alignItems: 'center', width: '90%', marginLeft: '5%'}}>
                        <Text style={{fontWeight: 'bold', color: 'black', fontSize: 36, fontFamily: 'OpenSans-Bold'}}>Découvrez</Text>
                        <Text style={{color:'black', fontSize: 16, textAlign: 'center'}}>Des recommandations adaptées à votre profil sportif</Text>
                      </View>
                     </View>, 
            },
          ]}
        />
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    width: "100%",
  },
});
