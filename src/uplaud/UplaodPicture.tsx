import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { red } from 'ansi-colors';


const options = {
  title: 'Select Avatar',
  quality: 0.3,
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const backgroundImage = require('../assets/img/background_empty.jpg');

export interface State {
  avatarSource?: string,
}

type Props = {};
export default class UploadPicture extends Component<Props, State> {
  state: State;

  constructor(props: any) {
    super(props);
    this.state = {
      avatarSource: '',
    };
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
          avatarSource: source,
        });
      }
    });
  }

  render() {

    let icon = this.state.avatarSource ? this.state.avatarSource : backgroundImage;
 
    return (
      <>
        {
          this.state.avatarSource ? (
            <View style={styles.containerAfter}>

                <View style={{zIndex: 2, width: '100%'}}>
                  <View style={styles.ctnImageAfter}>
                     <Image style={styles.imageTopAfter} source={icon} />
                  </View>
                  <Text style={styles.titleImageAfter}>Nike Air Force One - 2019</Text>
                  <Text style={styles.descriptionImageAfter}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </Text>
                </View>

            </View>
          ) : (
            <View style={styles.container}>
              <Image style={styles.avatarImage} source={icon} />

              <View style={styles.centerMiddle}>
                <Text style={styles.colorBlack}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Text>
                <TouchableOpacity onPress={this.uplaudPicture} style={styles.backgroundImageUplaud}>
                  <View>
                      <Text style={[styles.colorBlack, styles.buttonBlue]}>Ajouter une photo</Text>
                  </View>
                </TouchableOpacity> 
              </View>
            </View>
          )
        }
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  containerAfter: {
    flex: 1,
    backgroundColor: '#F5FCFF',
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
  imageTopAfter: {
    flex: 1,
    width: '100%',
    height: 240,
    resizeMode: 'cover',
    backgroundColor: 'blue'
  },
   ctnImageAfter: {
     width: '100%',
     height: 260,
     backgroundColor:'#F6F6F6', 
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
   }
});
