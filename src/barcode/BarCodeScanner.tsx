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


const backgroundImageShop = require('../assets/img/shop.jpg');
const backgroundProduct = require('../assets/img/airforce.jpg');
const imageBackground = require('../assets/img/background_empty.jpg');
const flashImage = require('../assets/img/barcode.png');


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
    }

    // this.handleTourch = this.handleTourch.bind(this);
  }

    onBarCodeRead = (e) => {
        // console.warn("Barcode value is" + e.data, "Barcode type is" + e.type);
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

    render() {
        
        let iconTwo = this.state.avatarSourceTwo ? this.state.avatarSourceTwo : backgroundImage;

        return (

          <>

          {
            this.state.setHome ? (

              <View style={styles.container}>
              
                <View style={styles.containerTitleTop}>
                    <Text style={{marginLeft: '5%', fontSize: 24, color: 'black', fontWeight: 'bold'}}>Scan</Text>
                    <Text style={{marginLeft: '5%', fontSize: 16, color: '#b7b7b7', fontWeight: 'regular'}}>Scanez un article de sport</Text>
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
                          <Image source={require('../assets/img/product/Kappa.jpeg')} style={styles.imageItem}/>
                          <Image source={require('../assets/img/icons/coeur-noir.png')} style={styles.imageCoeur}/>

                          <Text style={[styles.promoItem]}>52%</Text>
                        </View>

                        <View style={{marginLeft: 12}}>
                          <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>Nike Air Zoom 13</Text>
                          <Text style={{fontSize: 13, color: '#E30612', fontWeight: 'bold'}}>dès 76.86€</Text>


                          <TouchableOpacity style={{marginTop: 24}} onPress={this.goSingle}>
                            <Text style={{color:'#14448d', fontSize: 13, fontWeight: 'bold'}}>Voir le produit</Text>
                          </TouchableOpacity>
                        </View>

                    </View>

                    <View style={styles.itemSlider}>

                      <View style={{width: 140}}>
                        <Image source={require('../assets/img/product/Kappa.jpeg')} style={styles.imageItem}/>
                        <Image source={require('../assets/img/icons/coeur-noir.png')} style={styles.imageCoeur}/>

                        <Text style={[styles.promoItem]}>52%</Text>
                      </View>

                      <View style={{marginLeft: 12}}>
                        <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>Nike Air Zoom 13</Text>
                        <Text style={{fontSize: 13, color: '#E30612', fontWeight: 'bold'}}>dès 76.86€</Text>


                        <TouchableOpacity style={{marginTop: 24}} onPress={this.goSingle}>
                          <Text style={{color:'#14448d', fontSize: 13, fontWeight: 'bold'}}>Voir le produit</Text>
                        </TouchableOpacity>
                      </View>

                    </View>

                    <View style={styles.itemSlider}>

                      <View style={{width: 140}}>
                        <Image source={require('../assets/img/product/Kappa.jpeg')} style={styles.imageItem}/>
                        <Image source={require('../assets/img/icons/coeur-noir.png')} style={styles.imageCoeur}/>

                        <Text style={[styles.promoItem]}>52%</Text>
                      </View>

                      <View style={{marginLeft: 12}}>
                        <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>Nike Air Zoom 13</Text>
                        <Text style={{fontSize: 13, color: '#E30612', fontWeight: 'bold'}}>dès 76.86€</Text>


                        <TouchableOpacity style={{marginTop: 24}} onPress={this.goSingle}>
                          <Text style={{color:'#14448d', fontSize: 13, fontWeight: 'bold'}}>Voir le produit</Text>
                        </TouchableOpacity>
                      </View>

                    </View>

                    <View style={styles.itemSlider}>

                      <View style={{width: 140}}>
                        <Image source={require('../assets/img/product/Kappa.jpeg')} style={styles.imageItem}/>
                        <Image source={require('../assets/img/icons/coeur-noir.png')} style={styles.imageCoeur}/>

                        <Text style={[styles.promoItem]}>52%</Text>
                      </View>

                      <View style={{marginLeft: 12}}>
                        <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>Nike Air Zoom 13</Text>
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
                          <Image source={require('../assets/img/product/Kappa.jpeg')} style={styles.imageItem}/>
                          <Image source={require('../assets/img/icons/coeur-noir.png')} style={styles.imageCoeur}/>

                          <Text style={[styles.promoItem]}>52%</Text>
                        </View>

                        <View style={{marginLeft: 12}}>
                          <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>Nike Air Zoom 13</Text>
                          <Text style={{fontSize: 13, color: '#E30612', fontWeight: 'bold'}}>dès 76.86€</Text>


                          <TouchableOpacity style={{marginTop: 24}} onPress={this.goSingle}>
                            <Text style={{color:'#14448d', fontSize: 13, fontWeight: 'bold'}}>Voir le produit</Text>
                          </TouchableOpacity>
                        </View>

                    </View>

                    <View style={styles.itemSlider}>

                      <View style={{width: 140}}>
                        <Image source={require('../assets/img/product/Kappa.jpeg')} style={styles.imageItem}/>
                        <Image source={require('../assets/img/icons/coeur-noir.png')} style={styles.imageCoeur}/>

                        <Text style={[styles.promoItem]}>52%</Text>
                      </View>

                      <View style={{marginLeft: 12}}>
                        <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>Nike Air Zoom 13</Text>
                        <Text style={{fontSize: 13, color: '#E30612', fontWeight: 'bold'}}>dès 76.86€</Text>


                        <TouchableOpacity style={{marginTop: 24}} onPress={this.goSingle}>
                          <Text style={{color:'#14448d', fontSize: 13, fontWeight: 'bold'}}>Voir le produit</Text>
                        </TouchableOpacity>
                      </View>

                    </View>

                    <View style={styles.itemSlider}>

                      <View style={{width: 140}}>
                        <Image source={require('../assets/img/product/Kappa.jpeg')} style={styles.imageItem}/>
                        <Image source={require('../assets/img/icons/coeur-noir.png')} style={styles.imageCoeur}/>

                        <Text style={[styles.promoItem]}>52%</Text>
                      </View>

                      <View style={{marginLeft: 12}}>
                        <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>Nike Air Zoom 13</Text>
                        <Text style={{fontSize: 13, color: '#E30612', fontWeight: 'bold'}}>dès 76.86€</Text>


                        <TouchableOpacity style={{marginTop: 24}} onPress={this.goSingle}>
                          <Text style={{color:'#14448d', fontSize: 13, fontWeight: 'bold'}}>Voir le produit</Text>
                        </TouchableOpacity>
                      </View>

                    </View>

                    <View style={styles.itemSlider}>

                      <View style={{width: 140}}>
                        <Image source={require('../assets/img/product/Kappa.jpeg')} style={styles.imageItem}/>
                        <Image source={require('../assets/img/icons/coeur-noir.png')} style={styles.imageCoeur}/>

                        <Text style={[styles.promoItem]}>52%</Text>
                      </View>

                      <View style={{marginLeft: 12}}>
                        <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold'}}>Nike Air Zoom 13</Text>
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

              <View style={styles.containerAfter}>
              <ScrollView>
              
                <View style={{zIndex: 2, width: '100%'}}>
              
                    <View style={styles.ctnImageAfter}>
              
                      <Image style={styles.imageTopAfter} source={backgroundProduct} />
                      
                      <TouchableOpacity style={styles.imageTopCloseComponent} onPress={this.closeSingleResult}>
                        <Image style={{resizeMode: 'contain', width: 17, height: 17, marginLeft: 12}} source={require('../assets/img/cancel.png')} />
                      </TouchableOpacity>
              
                    </View>
              
                    <Text style={styles.titleImageAfter}>Nike Air Force One - 2019</Text>
                    <Text style={styles.descriptionImageAfter}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </Text>
              
                    <Text style={styles.titleMatche}>63 magasins ont ce produit !</Text>
              
                    <View style={styles.resultCtnMatches}>
                      <FlatList
                        data={[{},{}, {}, {}]}
                        renderItem={({item}) => 
                          <View style={styles.card}>
              
                              <Image style={styles.imageListShop} source={backgroundImageShop} />
                            
                            <View style={{marginRight: 12,}}>
                              <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>Intersport de Mérignac</Text>
                              <Text>Ouvert jusqu'à 19 heures 30</Text>
                              <Text>à 27 kilomètres de votre position.</Text>
                            </View>
                          </View>
                        }
                      />
                    </View>
                    
                  </View>
              </ScrollView>
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
          console.log(data.uri);
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
});
