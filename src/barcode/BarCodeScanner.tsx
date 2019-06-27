/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Alert, Vibration, ScrollView, FlatList, Text, View, TouchableOpacity, Image} from 'react-native';
import { RNCamera } from 'react-native-camera';
import ImagePicker from 'react-native-image-picker';
import SwitchToggle from 'react-native-switch-toggle';
import MapTest from '../map/MapShop';



const backgroundImageShop = require('../assets/img/shop.jpg');
const backgroundProduct = require('../assets/img/airforce.jpg');
const imageBackground = require('../assets/img/background_empty.jpg');
const flashImage = require('../assets/img/barcode.png');


const coeurRed = '../assets/img/icons/coeur-rouge.png';
const coeurBlack = '../assets/img/icons/coeur-noir.png';



const backgroundImage = require('../assets/img/background_empty.jpg');

const options = {
  title: 'Sélectionner une photo',
  quality: 0.3,
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export interface State {
    setHome?: boolean;
    haveData?: boolean;
    takeBarCode?: boolean;
    goToSingle?: boolean;
    avatarSourceTwo?: any;
    showButton?: boolean;
    goToBarCode?: boolean;
    showReinitialize?: boolean;
    iLoveHeart?: boolean;
    switchOn1?: boolean;
    showMapNow?: boolean;
    colorGreen?: boolean;
}

type Props = {};
export default class BarCodeScanner extends Component<Props, State> {
  state: State;
  setState: any;

  constructor(props: any) {
    super(props);
    this.state = {
        setHome: true,
        haveData: false,
        takeBarCode: false,
        goToSingle: false,
        avatarSourceTwo: '',
        showButton: true,
        goToBarCode: false,
        showReinitialize: false,
        iLoveHeart: false,
        switchOn1: false,
        showMapNow: false,
        colorGreen: false,
    }

    // this.handleTourch = this.handleTourch.bind(this);
  }

    onBarCodeRead = (e) => {
        // console.warn("Barcode value is" + e.data, "Barcode type is" + e.type);
    }

    onPress1 = () => {
      this.setState({ switchOn1: !this.state.switchOn1 });
    }
  
    getButtonText() {
      return this.state.switchOn1 ? 'En ligne' : 'En magasin';
    }

    closeSingleResult = () => {
      this.setState({
        goToSingle: false,
        setHome: true,
        haveData: false,
      });
  }
  
    takeBarCode = () => {
        this.setState({
            takeBarCode: true,
        });
        // console.warn('show');
    }

    goSingle = () => {
      this.setState({
        goToSingle: true,
        setHome: false
      });
      // console.warn(this.state.goToSingle)

    }

    removeData = () => {
      this.setState({
        haveData: false,
        goToSingle: false,
        setHome: true,
        avatarSourceTwo: '',
        showButton: true,
        takeBarCode: false
      });
      // console.warn(this.state.goToSingle)

    }

    uplaudPicture = () => {
      ImagePicker.showImagePicker(options, (response) => {
        console.warn('Response = ', response);
  
        if (response.didCancel) {
          console.warn('User cancelled photo picker');
        } else if (response.error) {
          console.warn('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.warn('User tapped custom button: ', response.customButton);
        } else {
          let source = { uri: response.uri };
          console.warn(source);
          // You can also display the image using data:
          // let source = { uri: 'data:image/jpeg;base64,' + response.data };
          this.setState({
            avatarSourceTwo: source,
            haveData: true,
            showButton: false
          });
          Vibration.vibrate(450, false);
  
        }
      });
    }

    goBarCode = () => {
      this.setState({
        takeBarCode: true,
        showReinitialize: true
      });
    }

    showMapNow = () =>{
      this.setState({
        showMapNow: !this.state.showMapNow
      });
    }

    changeStateImage = () => {
      this.setState({
        iLoveHeart: !this.state.iLoveHeart
      });
      // console.warn(this.state.iLoveHeart);
    }

    textStyle = () => {
      this.setState({
        colorGreen: !this.state.colorGreen
      })
    }

    render() {
        
        let iconTwo = this.state.avatarSourceTwo ? this.state.avatarSourceTwo : backgroundImage;

        return (

          <>

          {
            this.state.setHome ? (

              <View style={styles.container}>
              
                <View style={styles.containerTitleTop}>
                    <Text style={{marginLeft: '5%', fontSize: 24, color: 'black', fontWeight: 'bold'}}>Scan</Text>
                    <Text style={{marginLeft: '5%', fontSize: 16, color: '#b7b7b7', fontWeight: 'regular'}}>Scannez un article de sport ou prendre une photo</Text>
                </View>
                {/* <View style={styles.ctnFlash}>
                    <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
                      <Image style={styles.imageFlash} source={flashImage} />
                    </TouchableOpacity>
                </View> */}
  
                <View style={{width: '100%', height: '100%'}}> 

                  <Image source={iconTwo} style={{width: '100%', height: '100%', resizeMode:'cover'}} />

                {
                  this.state.showButton &&
                  <View style={{width: '80%', height: 200, marginTop: 300, marginLeft: '10%', position: 'absolute', top:0}}>
                    <TouchableOpacity onPress={this.uplaudPicture}><Text style={{paddingTop: 10, paddingBottom: 10, textAlign: 'center', color: 'white', backgroundColor: '#14448d', borderRadius: 24}}>Prendre une photo</Text></TouchableOpacity>
                    <TouchableOpacity onPress={this.goBarCode}><Text style={{paddingTop: 10, paddingBottom: 10, textAlign: 'center', color: 'white', backgroundColor: '#14448d', marginTop: 30, borderRadius: 24}}>Scanner un code barre</Text></TouchableOpacity>
                  </View>
                }


                {
                  this.state.takeBarCode && 
                  <View style={[styles.container, styles.containerTwo]}>
                  <View style={styles.containerTitleTop}>
                    <Text style={{marginLeft: '5%', fontSize: 24, color: 'black', fontWeight: 'bold'}}>Scan</Text>
                    <Text style={{marginLeft: '5%', fontSize: 16, color: '#b7b7b7', fontWeight: 'regular'}}>Scanez un article de sport</Text>
                </View>
                  <RNCamera
                      ref={ref => {
                      this.camera = ref;
                      }}
                      style={styles.preview}
                      type={RNCamera.Constants.Type.back}
                      flashMode={RNCamera.Constants.FlashMode.on}
                      androidCameraPermissionOptions={{
                      title: 'Permission to use camera',
                      message: 'We need your permission to use your camera',
                      buttonPositive: 'Ok',
                      buttonNegative: 'Cancel',
                      }}
                      androidRecordAudioPermissionOptions={{
                      title: 'Permission to use audio recording',
                      message: 'We need your permission to use your audio',
                      buttonPositive: 'Ok',
                      buttonNegative: 'Cancel',
                      }}
                      onGoogleVisionBarcodesDetected={({ barcodes }) => {
                      console.warn('Data received : ', barcodes);
                      this.setState({
                          haveData: true,
                          showReinitialize: false
                      });
                      }}
                  />

                  {
                    this.state.showReinitialize &&
                    <View style={{position: 'absolute', bottom: 25, alignItems: 'center', left:0, width: '100%'}}>
                      <TouchableOpacity onPress={this.removeData}>
                        <Text style={{color: 'white', textDecoration: 'underline'}}>Annuler</Text>
                      </TouchableOpacity>
                    </View>
                  }
                  


                   {
                  this.state.haveData &&
                  <View>
                  
                    <View style={{position: 'absolute', backgroundColor: 'red', top: 300, left: 100, width: '60%', alignItems: 'center', flex: 1}}>

                      <Image source={require('../assets/img/icons/match.png')} style={{width: 60, height: 60, resizeMode: 'contain', marginBottom: 16}}/>
                      <Text style={{width: '100%', textAlign: 'center', color: 'white', fontSize: 18, fontWeight: 'bold'}}>Match trouvé</Text>
                    
                    </View>


                    <View style={{position: 'absolute', bottom: 25, alignItems: 'center', left:0, width: '100%'}}>
                    <TouchableOpacity onPress={this.removeData}>
                      <Text style={{color: 'white', textDecoration: 'underline'}}>Recommencer</Text>
                    </TouchableOpacity>
                    </View>

                    <View style={styles.containerSliderItem}>

                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                    <View style={styles.itemSlider}>

                        <View style={{width: 140}}>
                          <Image source={require('../assets/img/feed.jpg')} style={styles.imageItem}/>
                          <Image source={require('../assets/img/icons/coeur-noir.png')} style={styles.imageCoeur}/>

                          <Text style={[styles.promoItem]}>52%</Text>
                        </View>

                        <View style={{marginLeft: 12}}>
                          <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>Vomero Nike</Text>
                          <Text style={{fontSize: 13, color: '#E30612', fontWeight: 'bold'}}>dès 76.86€</Text>


                          <TouchableOpacity style={{marginTop: 24}} onPress={this.goSingle}>
                            <Text style={{color:'#14448d', fontSize: 13, fontWeight: 'bold'}}>Voir le produit</Text>
                          </TouchableOpacity>
                        </View>

                    </View>


                    <View style={styles.itemSlider}>

                        <View style={{width: 140}}>
                          <Image source={require('../assets/img/feed.jpg')} style={styles.imageItem}/>
                          <Image source={require('../assets/img/icons/coeur-noir.png')} style={styles.imageCoeur}/>

                          <Text style={[styles.promoItem]}>52%</Text>
                        </View>

                        <View style={{marginLeft: 12}}>
                          <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>Vomero Nike</Text>
                          <Text style={{fontSize: 13, color: '#E30612', fontWeight: 'bold'}}>dès 76.86€</Text>


                          <TouchableOpacity style={{marginTop: 24}} onPress={this.goSingle}>
                            <Text style={{color:'#14448d', fontSize: 13, fontWeight: 'bold'}}>Voir le produit</Text>
                          </TouchableOpacity>
                        </View>

                    </View>


                    <View style={styles.itemSlider}>

                        <View style={{width: 140}}>
                          <Image source={require('../assets/img/feed.jpg')} style={styles.imageItem}/>
                          <Image source={require('../assets/img/icons/coeur-noir.png')} style={styles.imageCoeur}/>

                          <Text style={[styles.promoItem]}>52%</Text>
                        </View>

                        <View style={{marginLeft: 12}}>
                          <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>Vomero Nike</Text>
                          <Text style={{fontSize: 13, color: '#E30612', fontWeight: 'bold'}}>dès 76.86€</Text>


                          <TouchableOpacity style={{marginTop: 24}} onPress={this.goSingle}>
                            <Text style={{color:'#14448d', fontSize: 13, fontWeight: 'bold'}}>Voir le produit</Text>
                          </TouchableOpacity>
                        </View>

                    </View>


                    <View style={styles.itemSlider}>

                        <View style={{width: 140}}>
                          <Image source={require('../assets/img/feed.jpg')} style={styles.imageItem}/>
                          <Image source={require('../assets/img/icons/coeur-noir.png')} style={styles.imageCoeur}/>

                          <Text style={[styles.promoItem]}>52%</Text>
                        </View>

                        <View style={{marginLeft: 12}}>
                          <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>Vomero Nike</Text>
                          <Text style={{fontSize: 13, color: '#E30612', fontWeight: 'bold'}}>dès 76.86€</Text>


                          <TouchableOpacity style={{marginTop: 24}} onPress={this.goSingle}>
                            <Text style={{color:'#14448d', fontSize: 13, fontWeight: 'bold'}}>Voir le produit</Text>
                          </TouchableOpacity>
                        </View>

                    </View>


                  </ScrollView>

                </View>
                  
                  </View>
                }
                  </View>
                }
                
  
                </View>

                {
                  this.state.haveData &&
                  <View>
                  
                  <View style={{position: 'absolute', top: '47%', left: '20%', width: '60%', alignItems: 'center'}}>

                    <Image source={require('../assets/img/icons/match.png')} style={{width: 60, height: 60, resizeMode: 'contain', marginBottom: 16}}/>

                    <Text style={{width: '100%', textAlign: 'center', color: 'white', fontSize: 18, fontWeight: 'bold'}}>Match trouvé</Text>
                    </View>


                    <View style={{position: 'absolute', bottom: 25, alignItems: 'center', left:0, width: '100%'}}>
                    <TouchableOpacity onPress={this.removeData}>
                      <Text style={{color: 'white', textDecoration: 'underline'}}>Recommencer</Text>
                    </TouchableOpacity>
                    </View>

                    <View style={styles.containerSliderItem}>

                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                    <View style={styles.itemSlider}>

                      <View style={{width: 140}}>
                        <Image source={require('../assets/img/feed.jpg')} style={styles.imageItem}/>
                        <Image source={require('../assets/img/icons/coeur-noir.png')} style={styles.imageCoeur}/>

                        <Text style={[styles.promoItem]}>52%</Text>
                      </View>

                      <View style={{marginLeft: 12}}>
                        <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>Vomero Nike</Text>
                        <Text style={{fontSize: 13, color: '#E30612', fontWeight: 'bold'}}>dès 76.86€</Text>


                        <TouchableOpacity style={{marginTop: 24}} onPress={this.goSingle}>
                          <Text style={{color:'#14448d', fontSize: 13, fontWeight: 'bold'}}>Voir le produit</Text>
                        </TouchableOpacity>
                      </View>

                    </View>


                    <View style={styles.itemSlider}>

                      <View style={{width: 140}}>
                        <Image source={require('../assets/img/feed.jpg')} style={styles.imageItem}/>
                        <Image source={require('../assets/img/icons/coeur-noir.png')} style={styles.imageCoeur}/>

                        <Text style={[styles.promoItem]}>52%</Text>
                      </View>

                      <View style={{marginLeft: 12}}>
                        <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>Vomero Nike</Text>
                        <Text style={{fontSize: 13, color: '#E30612', fontWeight: 'bold'}}>dès 76.86€</Text>


                        <TouchableOpacity style={{marginTop: 24}} onPress={this.goSingle}>
                          <Text style={{color:'#14448d', fontSize: 13, fontWeight: 'bold'}}>Voir le produit</Text>
                        </TouchableOpacity>
                      </View>

                    </View>


                    <View style={styles.itemSlider}>

                      <View style={{width: 140}}>
                        <Image source={require('../assets/img/feed.jpg')} style={styles.imageItem}/>
                        <Image source={require('../assets/img/icons/coeur-noir.png')} style={styles.imageCoeur}/>

                        <Text style={[styles.promoItem]}>52%</Text>
                      </View>

                      <View style={{marginLeft: 12}}>
                        <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>Vomero Nike</Text>
                        <Text style={{fontSize: 13, color: '#E30612', fontWeight: 'bold'}}>dès 76.86€</Text>


                        <TouchableOpacity style={{marginTop: 24}} onPress={this.goSingle}>
                          <Text style={{color:'#14448d', fontSize: 13, fontWeight: 'bold'}}>Voir le produit</Text>
                        </TouchableOpacity>
                      </View>

                    </View>


                    <View style={styles.itemSlider}>

                      <View style={{width: 140}}>
                        <Image source={require('../assets/img/feed.jpg')} style={styles.imageItem}/>
                        <Image source={require('../assets/img/icons/coeur-noir.png')} style={styles.imageCoeur}/>

                        <Text style={[styles.promoItem]}>52%</Text>
                      </View>

                      <View style={{marginLeft: 12}}>
                        <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>Vomero Nike</Text>
                        <Text style={{fontSize: 13, color: '#E30612', fontWeight: 'bold'}}>dès 76.86€</Text>


                        <TouchableOpacity style={{marginTop: 24}} onPress={this.goSingle}>
                          <Text style={{color:'#14448d', fontSize: 13, fontWeight: 'bold'}}>Voir le produit</Text>
                        </TouchableOpacity>
                      </View>

                    </View>


                    <View style={styles.itemSlider}>

                      <View style={{width: 140}}>
                        <Image source={require('../assets/img/feed.jpg')} style={styles.imageItem}/>
                        <Image source={require('../assets/img/icons/coeur-noir.png')} style={styles.imageCoeur}/>

                        <Text style={[styles.promoItem]}>52%</Text>
                      </View>

                      <View style={{marginLeft: 12}}>
                        <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>Vomero Nike</Text>
                        <Text style={{fontSize: 13, color: '#E30612', fontWeight: 'bold'}}>dès 76.86€</Text>


                        <TouchableOpacity style={{marginTop: 24}} onPress={this.goSingle}>
                          <Text style={{color:'#14448d', fontSize: 13, fontWeight: 'bold'}}>Voir le produit</Text>
                        </TouchableOpacity>
                      </View>

                    </View>


                    <View style={styles.itemSlider}>

                      <View style={{width: 140}}>
                        <Image source={require('../assets/img/feed.jpg')} style={styles.imageItem}/>
                        <Image source={require('../assets/img/icons/coeur-noir.png')} style={styles.imageCoeur}/>

                        <Text style={[styles.promoItem]}>52%</Text>
                      </View>

                      <View style={{marginLeft: 12}}>
                        <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>Vomero Nike</Text>
                        <Text style={{fontSize: 13, color: '#E30612', fontWeight: 'bold'}}>dès 76.86€</Text>


                        <TouchableOpacity style={{marginTop: 24}} onPress={this.goSingle}>
                          <Text style={{color:'#14448d', fontSize: 13, fontWeight: 'bold'}}>Voir le produit</Text>
                        </TouchableOpacity>
                      </View>

                    </View>



                  </ScrollView>

                </View>
                  
                  </View>
                }

            </View>

   
            ) : (

           
               
              <View style={styles.container}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', position: 'absolute', top: 0, width: '100%', zIndex:9999}}>
  
            
                <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: 16, marginLeft: 24}}>
                  <TouchableOpacity onPress={this.removeData} style={{flexDirection: 'row', justifyContent: 'flex-start',}}>
                    <Image source={require('../assets/img/left-arrow.png')} style={{width: 20, height: 20, resizeMode: 'contain', marginRight: 8}}/>
                    <Text style={{color: 'black', fontSize: 16}}>Retour</Text>
                  </TouchableOpacity>
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
  
              <View style={{width: '100%', height: 280, backgroundColor: '#F2F2F2', alignItems: 'center'}}>
                <Image source={require('../assets/img/Vomero-detoure.png')} style={{width: '100%', flex: 1, resizeMode: 'contain'}}/>
              </View>
  
              <View style={styles.containerContentSingle}>
  
                <ScrollView>
                  
                  <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 22, fontWeight: 'bold', marginTop: 24, color: 'black'}}>Nike Vomero</Text>
                    <Text style={{color: '#707070', fontSize: 14, marginTop: 8}}>Chaussures de runnning</Text>
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

                  <View style={[styles.avisCtn, styles.marginAvisTop]}>
                      <Text style={{width: '90%', marginLeft: '5%', fontSize: 16, color: '#164194'}}>Niveau confirmé</Text>
                  </View>
  
                  <View style={styles.cardText}>
                    <Text style={{fontSize: 18, color: 'black', fontWeight:'bold', marginTop: 24}}>Entretien</Text>
                    <Text style={{fontSize: 14, color: '#707070', marginTop: 4}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Text>
                  </View>

                  <View style={[styles.avisCtn, styles.marginAvisTop]}>
                      <Text style={{width: '90%', marginLeft: '5%', fontSize: 16, color: '#164194'}}>À usage régulier, il est conseillé de changer ses chaussures de Running tous les 6-12mois.</Text>
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
                      <TouchableOpacity onPress={this.textStyle}>
                        <Text style={this.state.colorGreen ? styles.textSelectedS : styles.boxShadowP}>+ Confort</Text>
                      </TouchableOpacity>
                      <Text style={[styles.boxShadowP, styles.marginP]}>+ Style</Text>
                    </View>
  

                  </View>
  
                  <View style={styles.avisCtn}>
                      <Text style={{width: '90%', marginLeft: '5%', fontSize: 16, color: '#164194'}}>Super confortable, à imperméabiliser avant. Je ne les quitte plus !</Text>
                  </View>
  
                  <View style={{width: '90%', marginLeft: '5%', marginTop:12, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                      
                      <View style={{justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../assets/img/julien.png')} style={{width: 40, height: 40, resizeMode: 'cover', borderRadius: 24}} />
                        <Text style={{fontSize: 14, color: '#707070', marginLeft: 12}}>Charlie</Text>
                      </View>
  
                      <Text style={{fontSize: 14, color: '#707070', marginLeft: 12, fontStyle: 'italic'}}>le 28/04/2019</Text>
  
                  </View>
  
                  
                  <View style={{justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', marginLeft: '5%', marginTop: 16}}>
                    <Text style={{fontSize: 14, color: '#164194', fontWeight: 'bold',}}>Lire tous les avis</Text>
                    <Image source={require('../assets/img/icons/arrow-r.png')} style={{width: 10, height: 10, resizeMode:'contain', marginLeft: 6}}/>
                  </View>
  
  
                  <View style={{width: '90%', marginLeft: '5%', marginBottom: 400,}}>
                    <Text style={{fontSize: 18, color: 'black', fontWeight:'bold', marginTop: 24, paddingTop: 40 }}>Où trouver ce produit ?</Text>
  
                    <View style={{marginTop: 24}}>
                    <SwitchToggle
                      switchOn={this.state.switchOn1}
                      onPress={this.onPress1}
                      buttonText={this.getButtonText()}
                      containerStyle={{
                        marginTop: 16,
                        width: 160,
                        height: 40,
                        borderRadius: 30,
                        padding: 5,
                      }} 
                      buttonStyle={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'absolute'
                      }}
                      circleStyle={{
                        width: 120,
                        height: 40,
                        borderRadius: 27.5,
                        backgroundColor: 'blue', // rgb(102,134,205)
                      }}
                    />
  
                    <TouchableOpacity onPress={this.showMapNow}>
                      <Text style={{color: 14, marginTop: 6, color: 'black'}}>Voir sur map</Text>
                    </TouchableOpacity>
  
                    </View>
  
                    {
                      this.state.showMapNow ? (
                      <View style={{width: '100%', height: 380, overflow: 'hidden', marginTop: 30}}>
                        <MapTest />
                      </View>
                      ) : (
  
                        this.state.switchOn1 ? (
                          <>
                          <View style={styles.cardItemResult}>
  
                            <View style={{width: 30, height: 30, backgroundColor: '#EDEDED', borderRadius: 50, position: 'absolute', top: 50, right: 24, alignItems: 'center',}}>
                              <Image source={require('../assets/img/icons/right-arrow-b.png')}  style={{width: 14, height: 14, resizeMode: 'contain', marginTop: 8}}/>
                            </View>
  
                            <Text style={{marginLeft: 24, fontSize: 18, color: '#164194', fontWeight: 'bold'}}>Nike</Text>
                            <Text style={{marginLeft: 24, fontSize: 16, color: '#164194'}}>https://nike.com/fr/t/chat...</Text>
                            <View style={{marginLeft: 24, marginTop: 24, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                              <Text style={{color: '#164194', fontSize: 16, fontWeight: 'bold'}}>89.99€</Text>
                              <Text style={{color: '#E30612', fontSize: 16, fontWeight: 'bold', marginLeft: 12,}}>63.99€</Text>
                            </View>
                          </View>

                          <View style={styles.cardItemResult}>
                            
                            <View style={{width: 30, height: 30, backgroundColor: '#EDEDED', borderRadius: 50, position: 'absolute', top: 50, right: 24, alignItems: 'center',}}>
                              <Image source={require('../assets/img/icons/right-arrow-b.png')}  style={{width: 14, height: 14, resizeMode: 'contain', marginTop: 8}}/>
                            </View>

                            <Text style={{marginLeft: 24, fontSize: 18, color: '#164194', fontWeight: 'bold'}}>Intersport</Text>
                            <Text style={{marginLeft: 24, fontSize: 16, color: '#164194'}}>https://intersport.fr/chauss...</Text>
                            <View style={{marginLeft: 24, marginTop: 24, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                              <Text style={{color: '#164194', fontSize: 16, fontWeight: 'bold'}}>89.99€</Text>
                              <Text style={{color: '#E30612', fontSize: 16, fontWeight: 'bold', marginLeft: 12,}}>63.99€</Text>
                            </View>

                          </View>
                          </>
                          ) : (
                            <>
                            <View style={styles.cardItemResult}>
  
                              <View style={{width: 30, height: 30, backgroundColor: '#EDEDED', borderRadius: 50, position: 'absolute', top: 50, right: 24, alignItems: 'center',}}>
                                <Image source={require('../assets/img/icons/right-arrow-b.png')}  style={{width: 14, height: 14, resizeMode: 'contain', marginTop: 8}}/>
                              </View>
  
                              <Text style={{marginLeft: 24, fontSize: 18, color: '#164194', fontWeight: 'bold'}}>Intersport</Text>
                              <Text style={{marginLeft: 24, fontSize: 16, color: '#164194'}}>Pessac</Text>
                              <View style={{marginLeft: 24, marginTop: 24, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                                <Text style={{color: '#164194', fontSize: 16, fontWeight: 'bold'}}>89.99€</Text>
                                <Text style={{color: '#E30612', fontSize: 16, fontWeight: 'bold', marginLeft: 12,}}>63.99€</Text>
                              </View>
  
                            </View>
  
                            <View style={styles.cardItemResult}>
  
                              <View style={{width: 30, height: 30, backgroundColor: '#EDEDED', borderRadius: 50, position: 'absolute', top: 50, right: 24, alignItems: 'center',}}>
                                <Image source={require('../assets/img/icons/right-arrow-b.png')}  style={{width: 14, height: 14, resizeMode: 'contain', marginTop: 8}}/>
                              </View>
  
                              <Text style={{marginLeft: 24, fontSize: 18, color: '#164194', fontWeight: 'bold'}}>Intersport</Text>
                              <Text style={{marginLeft: 24, fontSize: 16, color: '#164194'}}>Pessac</Text>
                              <View style={{marginLeft: 24, marginTop: 24, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                                <Text style={{color: '#164194', fontSize: 16, fontWeight: 'bold'}}>89.99€</Text>
                                <Text style={{color: '#E30612', fontSize: 16, fontWeight: 'bold', marginLeft: 12,}}>63.99€</Text>
                              </View>
  
                            </View>
  
                            <View style={styles.cardItemResult}>
  
                              <View style={{width: 30, height: 30, backgroundColor: '#EDEDED', borderRadius: 50, position: 'absolute', top: 50, right: 24, alignItems: 'center',}}>
                                <Image source={require('../assets/img/icons/right-arrow-b.png')}  style={{width: 14, height: 14, resizeMode: 'contain', marginTop: 8}}/>
                              </View>
  
                              <Text style={{marginLeft: 24, fontSize: 18, color: '#164194', fontWeight: 'bold'}}>Intersport</Text>
                              <Text style={{marginLeft: 24, fontSize: 16, color: '#164194'}}>Pessac</Text>
                              <View style={{marginLeft: 24, marginTop: 24, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                                <Text style={{color: '#164194', fontSize: 16, fontWeight: 'bold'}}>89.99€</Text>
                                <Text style={{color: '#E30612', fontSize: 16, fontWeight: 'bold', marginLeft: 12,}}>63.99€</Text>
                              </View>
  
                            </View>
  
                            <View style={styles.cardItemResult}>
  
                              <View style={{width: 30, height: 30, backgroundColor: '#EDEDED', borderRadius: 50, position: 'absolute', top: 50, right: 24, alignItems: 'center',}}>
                                <Image source={require('../assets/img/icons/right-arrow-b.png')}  style={{width: 14, height: 14, resizeMode: 'contain', marginTop: 8}}/>
                              </View>
  
                              <Text style={{marginLeft: 24, fontSize: 18, color: '#164194', fontWeight: 'bold'}}>Intersport</Text>
                              <Text style={{marginLeft: 24, fontSize: 16, color: '#164194'}}>Pessac</Text>
                              <View style={{marginLeft: 24, marginTop: 24, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                                <Text style={{color: '#164194', fontSize: 16, fontWeight: 'bold'}}>89.99€</Text>
                                <Text style={{color: '#E30612', fontSize: 16, fontWeight: 'bold', marginLeft: 12,}}>63.99€</Text>
                              </View>
  
                            </View>                         
  
                            
                          
                            </>
                          )
                        
                      )
                    }
  
                 
  
                    <Text style={{fontSize: 18, color: 'black', fontWeight:'bold', marginTop: 24, paddingTop: 40, paddingBottom: 12 }}>Les produits similaires</Text>
                    <Text style={{color: 'black'}}>Cette paire n'est pas faite pour vous ? Découvrez les produits de la même catégorie.</Text>
  
  
                      <View style={{width:'180%', marginTop: 24, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
  
                      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
  
                        <View style={styles.releatedItemProduct}>
                          <Image source={require('../assets/img/nikeorange.jpeg')}  style={{width:'100%', height: 100, resizeMode: 'cover', borderRadius: 24}} />
                          <Text style={{fontSize: 16, color: 'black', marginTop: 12}}>Nike</Text>
                          <Text style={{fontSize: 16, color: 'black', fontWeight: 'bold'}}>Vaporfly</Text>
                        </View>
  
                        <View style={styles.releatedItemProduct}>
                          <Image source={require('../assets/img/product/stefan.jpg')}  style={{width:'100%', height: 100, resizeMode: 'cover', borderRadius: 24}} />
                          <Text style={{fontSize: 16, color: 'black', marginTop: 12}}>Nike SB</Text>
                          <Text style={{fontSize: 16, color: 'black', fontWeight: 'bold'}}>Stefan Janoski 2</Text>
                        </View>

                        <View style={styles.releatedItemProduct}>
                          <Image source={require('../assets/img/nikeorange.jpeg')}  style={{width:'100%', height: 100, resizeMode: 'cover', borderRadius: 24}} />
                          <Text style={{fontSize: 16, color: 'black', marginTop: 12}}>Nike</Text>
                          <Text style={{fontSize: 16, color: 'black', fontWeight: 'bold'}}>Vaporfly</Text>
                        </View>
  
                        <View style={styles.releatedItemProduct}>
                          <Image source={require('../assets/img/product/stefan.jpg')}  style={{width:'100%', height: 100, resizeMode: 'cover', borderRadius: 24}} />
                          <Text style={{fontSize: 16, color: 'black', marginTop: 12}}>Nike SB</Text>
                          <Text style={{fontSize: 16, color: 'black', fontWeight: 'bold'}}>Stefan Janoski 2</Text>
                        </View>

                        <View style={styles.releatedItemProduct}>
                          <Image source={require('../assets/img/nikeorange.jpeg')}  style={{width:'100%', height: 100, resizeMode: 'cover', borderRadius: 24}} />
                          <Text style={{fontSize: 16, color: 'black', marginTop: 12}}>Nike</Text>
                          <Text style={{fontSize: 16, color: 'black', fontWeight: 'bold'}}>Vaporfly</Text>
                        </View>
  
                        <View style={styles.releatedItemProduct}>
                          <Image source={require('../assets/img/product/stefan.jpg')}  style={{width:'100%', height: 100, resizeMode: 'cover', borderRadius: 24}} />
                          <Text style={{fontSize: 16, color: 'black', marginTop: 12}}>Nike SB</Text>
                          <Text style={{fontSize: 16, color: 'black', fontWeight: 'bold'}}>Stefan Janoski 2</Text>
                        </View>

                        <View style={styles.releatedItemProduct}>
                          <Image source={require('../assets/img/nikeorange.jpeg')}  style={{width:'100%', height: 100, resizeMode: 'cover', borderRadius: 24}} />
                          <Text style={{fontSize: 16, color: 'black', marginTop: 12}}>Nike</Text>
                          <Text style={{fontSize: 16, color: 'black', fontWeight: 'bold'}}>Vaporfly</Text>
                        </View>
  
                        <View style={styles.releatedItemProduct}>
                          <Image source={require('../assets/img/product/stefan.jpg')}  style={{width:'100%', height: 100, resizeMode: 'cover', borderRadius: 24}} />
                          <Text style={{fontSize: 16, color: 'black', marginTop: 12}}>Nike SB</Text>
                          <Text style={{fontSize: 16, color: 'black', fontWeight: 'bold'}}>Stefan Janoski 2</Text>
                        </View>

                        
                        </ScrollView>
  
                      </View>
  
                    </View>
  
                  </ScrollView>
              </View>
          </View>
  
  
            )
          }
 
          </>
        );
      }
    
      takePicture = async() => {
        if (this.camera) {
          const options = { quality: 0.5, base64: true };
          const data = await this.camera.takePictureAsync(options);
          // console.log(data.uri);
        }
      };
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
      },
      containerTwo: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        width: '100%',
        height: '100%',
        position: 'absolute',
        left:0,
        top:0,
        zIndex:9999
      },
      containerAfter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
      },
      ctnFlash: {
        width: 60,
        height: 60,
        position: 'absolute',
        bottom: 30,
        backgroundColor: '#004492',
        borderRadius: 50,
        left: '43%',
        flexDirection: 'row',
        alignItems: 'center',
      },
      containerTitleTop: {
        backgroundColor: 'white',
        width: '100%',
        paddingTop: 30,
        paddingBottom: 30,
        position: 'absolute',
        top:0,
        left:0,
        zIndex:9999,
      },  
      imageFlash: {
        width: 28,
        height: 28,
        marginLeft: 16,
        resizeMode: 'contain',
      },
      avatarImage:{
        width: '100%',
        height: '100%',
        flex:1,
        resizeMode: 'cover',
        zIndex: 1,
        position:'absolute',
        top:0, 
        left:0,
      },
      centerMiddle: {
        zIndex: 2,
        width: '75%',
      },
      backgroundImageUplaud: {
        position: 'relative',
      },
      colorBlack: {
        color:'black',
        fontSize: 13,
        paddingBottom: 16,
        lineHeight: 20,
      },
      colorWhite: {
        color: 'white',
      },
      buttonBlue: {
        width: 154, 
        paddingLeft:24, 
        paddingRight:24,
        paddingTop:12,
        paddingBottom:12,
        backgroundColor: '#004492',
        borderRadius: 24,
        color: 'white'
      },
      buttonBlueTwo: {
        width: 170, 
        paddingLeft:24, 
        paddingRight:24,
        paddingTop:12,
        paddingBottom:12,
        backgroundColor: '#004492',
        borderRadius: 24,
        color: 'white',
        marginTop: 16, 
      },
      imageTopAfter: {
        flex: 1,
        width: '100%',
        height: 240,
        resizeMode: 'cover',
        backgroundColor: '#F8F8F8'
      },
       ctnImageAfter: {
         width: '100%',
         height: 260,
         backgroundColor:'#F6F6F6', 
       },
       imageTopCloseComponent: {
         position: 'absolute',
         width: 40,
         height: 40,
         resizeMode: 'contain',
         zIndex: 10,
         right: 14,
         top: 14,
         backgroundColor: 'white',
         flexDirection: 'row',
         alignItems: 'center',
         borderRadius: 60 
       },
       marginAvisTop: {
         marginTop: 12,
       }, 
       textSelectedS: {
        width: 100,
        paddingTop:10,
        paddingBottom: 10,
        paddingLeft: 14,
        paddingRight: 14,
         color: 'white',
         backgroundColor: '#5ACB38',
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
       titleImageAfter: {
         color:'black',
         marginLeft: 20,
         fontSize: 20,
         marginTop: 12,
         fontWeight: 'bold'
       },
       descriptionImageAfter: {
         fontSize: 13,
         lineHeight: 20,
         paddingLeft: 20,
         paddingRight: 20,
         marginTop: 12,
         color: 'black'
       },
       titleMatche: {
         color: 'black',
         fontSize: 18,
         fontWeight: 'bold',
         paddingLeft: 16,
         marginTop: 24,
         marginBottom: 12,
       },
       resultCtnMatches: {
        marginTop: 12,
       },
       card: {
        width: '90%',
        height: 100,
        backgroundColor: '#F4F4F4', 
        marginLeft: 14,
        marginRight:14,
        marginBottom: 16,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
       },
       imageListShop: {
        width: 100,
        height: '100%',
        resizeMode: 'cover',
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
       },
        preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
        },
        cameraIcon: {
        margin: 5,
        height: 40,
        width: 40
        },
        bottomOverlay: {
        position: "absolute",
        width: "100%",
        flex: 20,
        flexDirection: "row",
        justifyContent: "space-between"
        },
        containerSliderItem: {
          width: '140%',
          height: 140,
          position: 'absolute',
          bottom: 60,
          left: '10%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
        itemSlider: {
          width: 280,
          height: 140,
          backgroundColor: 'white',
          marginRight: 30,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          borderRadius: 24,
          overflow: 'hidden',
          alignItems: 'center'
        },
        imageItem: {
          width: '100%',
          height: 220,
          resizeMode: 'cover',
          position: 'relative'
        },
        imageCoeur: {
          width: 24,
          height: 24,
          resizeMode: 'contain',
          position: 'absolute',
          top: 48,
          right:12
        },
        promoItem: {
          position: 'absolute',
          paddingTop: 4,
          paddingBottom: 4,
          paddingLeft: 12,
          paddingRight: 12,
          backgroundColor: '#5ACB38',
          top: 44,
          left: 16,
          borderRadius: 24,
          color: 'white'
        },
        containerContentSingle: {
          width: '100%',
          height: 'auto',
          backgroundColor: 'white',
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
        },
        cardItemResult: {
          width: '100%',
          paddingTop: 16,
          paddingBottom: 16,
          backgroundColor: '#F2F2F2',
          borderRadius: 24,
          marginTop: 24,
        },
        releatedItemProduct: {
          width: 160,
          height: 'auto',
          marginRight: 12,
          alignItems: 'center'
        }
});
