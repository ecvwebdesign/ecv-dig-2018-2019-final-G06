/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Alert, ScrollView, FlatList, Text, View, TouchableOpacity, Image} from 'react-native';
import { RNCamera } from 'react-native-camera';

const backgroundImageShop = require('../assets/img/airforce.jpg');
const backgroundImage = require('../assets/img/background_empty.jpg');

export interface State {
    haveData?: boolean;
}

type Props = {};
export default class BarCode extends Component<Props, State> {
  state: State;

  constructor(props: any) {
    super(props);
    this.state = {
        haveData: false,
    }

    // this.handleTourch = this.handleTourch.bind(this);
  }

    onBarCodeRead = (e) => {
        console.warn("Barcode value is" + e.data, "Barcode type is" + e.type);
    }

    closeSingleResult = () => {
        this.setState({
          haveData: false
        });
    }
    

    render() {
        

        return (
          <View style={styles.container}>

            {
                this.state.haveData ? (
                    <View style={styles.containerAfter}>
                    <ScrollView>
          
                      <View style={{zIndex: 2, width: '100%'}}>
          
                          <View style={styles.ctnImageAfter}>
          
                            <Image style={styles.imageTopAfter} source={backgroundImage} />
                            
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
                ) : (
                    <>
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
                        console.warn(barcodes);
                        this.setState({
                            haveData: true
                        });
                        }}
                    />
                    <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
                        <Text style={{ fontSize: 14 }}> SNAP </Text>
                        </TouchableOpacity>
                    </View>
                  </>
                )
            }

          </View>
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
      containerAfter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
});
