import React, { Component } from "react";
import { TouchableHighlight, TouchableOpacity, Image, View, Text, StyleSheet, Dimensions, Button } from "react-native";

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 6;
const CARD_WIDTH = width * 74 / 100;

const backgroundImage = require('../assets/img/shop.jpg');


export interface State {
    avatarSource?: string,
}

export interface ProjectItemProps {
    marker: any;
    index: number;
    scrollView: any;
    onProjectPress: ProjectCallback,
    imageProject?: string,
}

export default class ProjectItem extends Component<ProjectItemProps, State> {
    state: State;

    constructor(props: ProjectItemProps) {
        super(props);
        this.state = {
            imageProject: '',
        }
    }

    onPress() {
        const { marker, index, scrollView, onProjectPress } = this.props;
        //scrollView.scrollToIndex({index: index, animated: true});
        onProjectPress && onProjectPress(marker);
    }  

    render() {
        const { marker, index, scrollView } = this.props;

        const style = [styles.card];
        const styleRed = [styles.greenConnected];

        if(index == 0){
          style.push(styles.borderRed);
          styleRed.push(styles.redDisconnected);
        }

        let icon = this.state.imageProject ? this.state.imageProject : backgroundImage;

        return (
        <TouchableHighlight underlayColor="rgba(0,0,0,0)" onPress={() => this.onPress()}>
        <View style={[styles.card, style]} key={index}>

            <View style={styles.textContent}>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={icon} style={styles.imgProject}/>
                    <View>
                        <Text numberOfLines={1} style={styles.cardtitle}>{marker.title}</Text>
                        <Text numberOfLines={1} style={styles.cardDescription}>
                            {marker.localisation}
                        </Text>
                    </View>
                </View>
               
                <View style={styles.isConnected}>
                    <View style={[styles.greenConnected, styleRed]}></View>
                </View>
                

                <View style={styles.lineGrey}></View>

                <View style={{flex: 1, flexDirection: "column", marginBottom: 10, marginLeft: 10, marginRight: 10}}>
                
                    <View style={[styles.ctnInfosProjet, {alignItems: 'center'}]}>

                        <View style={styles.flexRow}>

                        <View style={[styles.flexRow, styles.spaceRight]}>
                            <Text style={[styles.marginRight]}>Fermeture à 21heures</Text>    
                        </View>
                
                        </View>

                    </View>
                </View>
            </View>
        </View>
    </TouchableHighlight>
    );
    }
} 


const styles = StyleSheet.create({
    card: {
        elevation: 2,
        backgroundColor: "#FFF",
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: { x: 2, y: -2 },
        height: CARD_HEIGHT,
        width: CARD_WIDTH,
        overflow: "hidden",
        borderTopWidth: 8,
        borderColor:'#004492',
        borderRadius: 8,
    },
    borderRed: {
      borderColor: '#F74327',
    },
    textContent: {
      flex: 1,
    },
    cardtitle: {
      fontSize: 15,
      marginTop: 5,
      fontWeight: "bold",
      color:"#000000",
      paddingLeft: 10,
      paddingTop: 10,
    },
    cardDescription: {
      fontSize: 12,
      color: "#9B9B9B",
      paddingLeft: 10,
      paddingBottom: 10,
    },
    imgProject: {
        width: 50,
        height:50,
        backgroundColor: 'orangered',
        marginLeft: 12,
        marginTop: 5,
        borderRadius: 4,
    },
    lineGrey: {
        width: '100%',
        height: 1,
        backgroundColor: "#EDEDED",
        marginTop: 10,
    },
    isConnected: {
        position:'absolute',
        top:16,
        right:10,
        flexDirection: 'row',
    },
    greenConnected: {
        width:10,
        height:10,
        borderRadius: 50,
        backgroundColor: '#7ED321',
        marginTop: 4,
        marginRight: 5
    },
    redDisconnected: {
        backgroundColor: '#F74327', 
    },
    textSmall: {
        fontSize: 12,
        fontWeight: 'bold',
        color:'#1B1B1B'
    },
    ctnInfosProjet: {
        flexDirection: 'row',
        marginTop: 12,
        width: "100%"
    },
    flexRow: {
        flexDirection: 'row',
        color:"black",
    },
    spaceRight: {
        marginRight: 16,
    },
    marginRight: {
        marginRight: 6,
        color:"black",
        fontSize: 11,
        fontWeight: 'bold',
    }
});